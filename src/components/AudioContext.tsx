import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface AudioCtx {
  enabled: boolean;
  toggle: () => void;
  triggerScare: () => void;
}

const Ctx = createContext<AudioCtx>({ enabled: false, toggle: () => {}, triggerScare: () => {} });

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
    soundtrack: HTMLAudioElement;
  } | null>(null);
  const reduceRef = useRef(false);

  const ensure = useCallback(() => {
    if (audioRef.current) return audioRef.current;
    if (reduceRef.current) return null;

    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;

    const ctx = new AC();
    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // Low synthetic bed that remains underneath the generated soundtrack.
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

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.06;
    const lfoG = ctx.createGain();
    lfoG.gain.value = 0.018;
    lfo.connect(lfoG);
    lfoG.connect(droneG.gain);
    lfo.start();

    const windSrc = ctx.createBufferSource();
    windSrc.buffer = makeNoiseBuffer(ctx);
    windSrc.loop = true;
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = "lowpass";
    windFilter.frequency.value = 300;
    const windG = ctx.createGain();
    windG.gain.value = 0.012;
    windFilter.connect(windG);
    windG.connect(master);
    windSrc.connect(windFilter);
    windSrc.start();

    const soundtrack = new Audio("/audio/suspense.mp3");
    soundtrack.loop = true;
    soundtrack.preload = "auto";
    soundtrack.volume = 0.32;

    audioRef.current = { ctx, master, soundtrack };
    return audioRef.current;
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      const a = ensure();
      if (!a) return next;

      if (next) {
        void a.ctx.resume();
        void a.soundtrack.play().catch(() => {});
        a.master.gain.cancelScheduledValues(a.ctx.currentTime);
        a.master.gain.setTargetAtTime(0.42, a.ctx.currentTime, 0.4);
      } else {
        a.master.gain.cancelScheduledValues(a.ctx.currentTime);
        a.master.gain.setTargetAtTime(0, a.ctx.currentTime, 0.2);
        a.soundtrack.pause();
      }
      return next;
    });
  }, [ensure]);

  const triggerScare = useCallback(() => {
    const a = audioRef.current;
    if (!a || !enabled || reduceRef.current) return;

    const now = a.ctx.currentTime;
    // Short sub boom: a fast transient followed by a deep cinematic drop.
    const boom = a.ctx.createOscillator();
    const boomGain = a.ctx.createGain();
    boom.type = "sine";
    boom.frequency.setValueAtTime(92, now);
    boom.frequency.exponentialRampToValueAtTime(24, now + 1.1);
    boomGain.gain.setValueAtTime(0.001, now);
    boomGain.gain.exponentialRampToValueAtTime(0.9, now + 0.018);
    boomGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    boom.connect(boomGain);
    boomGain.connect(a.master);
    boom.start(now);
    boom.stop(now + 1.25);

    const hit = a.ctx.createOscillator();
    const hitGain = a.ctx.createGain();
    hit.type = "sawtooth";
    hit.frequency.setValueAtTime(180, now);
    hit.frequency.exponentialRampToValueAtTime(42, now + 0.55);
    hitGain.gain.setValueAtTime(0.001, now);
    hitGain.gain.exponentialRampToValueAtTime(0.7, now + 0.012);
    hitGain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
    hit.connect(hitGain);
    hitGain.connect(a.master);
    hit.start(now);
    hit.stop(now + 0.7);

    const noise = a.ctx.createBufferSource();
    const noiseFilter = a.ctx.createBiquadFilter();
    const noiseGain = a.ctx.createGain();
    noise.buffer = makeNoiseBuffer(a.ctx, 1);
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = 1200;
    noiseFilter.Q.value = 0.7;
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.24, now + 0.01);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(a.master);
    noise.start(now);
    noise.stop(now + 0.5);
  }, [enabled]);

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    return () => {
      const a = audioRef.current;
      if (a) {
        a.soundtrack.pause();
        void a.ctx.close();
      }
    };
  }, []);

  return <Ctx.Provider value={{ enabled, toggle, triggerScare }}>{children}</Ctx.Provider>;
}
