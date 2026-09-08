import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Optional ambient audio, built purely with Web Audio synthesis:
 * low drone, faint wind, sparse radio-static. It is NEVER started before the
 * user interacts (the toggle is the only gateway).
 */
interface AudioCtx {
  enabled: boolean;
  toggle: () => void;
}

const Ctx = createContext<AudioCtx>({ enabled: false, toggle: () => {} });

export function useAmbience() {
  return useContext(Ctx);
}

function makeNoiseBuffer(ctx: AudioContext, seconds = 2) {
  const buf = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<{
    ctx: AudioContext;
    master: GainNode;
    stops: Array<() => void>;
  } | null>(null);
  const reduceRef = useRef(false);

  const ensure = useCallback(() => {
    if (audioRef.current) return audioRef.current;
    if (reduceRef.current) {
      // still create a muted silent context is wasteful; bail, but keep "on" harmless
      return null;
    }
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    const ctx = new AC();
    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // --- low drone (Recife's distant night hum) ---
    const drone = ctx.createGain();
    drone.gain.value = 0.5;
    drone.connect(master);
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 55;
    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = 55.7;
    const droneG = ctx.createGain();
    droneG.gain.value = 0.035;
    osc.connect(droneG);
    osc2.connect(droneG);
    droneG.connect(drone);
    osc.start();
    osc2.start();
    // slow breathing on the drone
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.06;
    const lfoG = ctx.createGain();
    lfoG.gain.value = 0.018;
    lfo.connect(lfoG);
    lfoG.connect(droneG.gain);
    lfo.start();

    // --- wind ---
    const windSrc = ctx.createBufferSource();
    windSrc.buffer = makeNoiseBuffer(ctx);
    windSrc.loop = true;
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = "lowpass";
    windFilter.frequency.value = 300;
    const windG = ctx.createGain();
    windG.gain.value = 0.0;
    windFilter.connect(windG);
    windG.connect(master);
    windSrc.connect(windFilter);
    windSrc.start();
    // slow wind swells
    const wlfo = ctx.createOscillator();
    wlfo.frequency.value = 0.05;
    const wlfoG = ctx.createGain();
    wlfoG.gain.value = 0.012;
    wlfo.connect(wlfoG);
    wlfoG.connect(windG.gain);
    windG.gain.value = 0.012;
    wlfo.start();

    // --- radio static ---
    const staticSrc = ctx.createBufferSource();
    staticSrc.buffer = makeNoiseBuffer(ctx, 3);
    staticSrc.loop = true;
    const staticBP = ctx.createBiquadFilter();
    staticBP.type = "bandpass";
    staticBP.frequency.value = 2200;
    staticBP.Q.value = 0.6;
    const staticG = ctx.createGain();
    staticG.gain.value = 0.0;
    staticBP.connect(staticG);
    staticG.connect(master);
    staticSrc.connect(staticBP);
    staticSrc.start();
    const slfo = ctx.createOscillator();
    slfo.frequency.value = 0.9;
    const slfoG = ctx.createGain();
    slfoG.gain.value = 0.004;
    slfo.connect(slfoG);
    slfoG.connect(staticG.gain);
    staticG.gain.value = 0.004;
    slfo.start();

    audioRef.current = { ctx, master, stops: [] };
    return audioRef.current;
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (next) {
        const a = ensure();
        if (a) {
          void a.ctx.resume();
          a.master.gain.cancelScheduledValues(a.ctx.currentTime);
          a.master.gain.setTargetAtTime(0.5, a.ctx.currentTime, 0.4);
        }
      } else {
        const a = audioRef.current;
        if (a) {
          a.master.gain.cancelScheduledValues(a.ctx.currentTime);
          a.master.gain.setTargetAtTime(0, a.ctx.currentTime, 0.2);
          window.setTimeout(() => void a.ctx.suspend(), 700);
        }
      }
      return next;
    });
  }, [ensure]);

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    return () => {
      const a = audioRef.current;
      if (a) void a.ctx.close();
    };
  }, []);

  return <Ctx.Provider value={{ enabled, toggle }}>{children}</Ctx.Provider>;
}
