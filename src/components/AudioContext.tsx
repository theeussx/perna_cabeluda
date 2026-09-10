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
  triggerPrelude: () => void;
  triggerScare: () => void;
}

const Ctx = createContext<AudioCtx>({ enabled: false, toggle: () => {}, triggerPrelude: () => {}, triggerScare: () => {} });

export function useAmbience() {
  return useContext(Ctx);
}

function makeNoiseBuffer(ctx: AudioContext, seconds = 2) {
  const buf = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}

function makeDistortionCurve(amount: number) {
  const k = typeof amount === "number" ? amount : 50;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<{
    ctx: AudioContext;
    master: GainNode;
    soundtrack: HTMLAudioElement;
    droneGain: GainNode;
  } | null>(null);
  const reduceRef = useRef(false);

  const ensure = useCallback(() => {
    if (audioRef.current) return audioRef.current;
    // Don't block scare if reduced-motion - only block ambient
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reduceRef.current = isReduced;

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

    audioRef.current = { ctx, master, soundtrack, droneGain: droneG };
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
    // ALWAYS try to play scare, even if audio was disabled - create context if needed
    let a = audioRef.current;
    if (!a) {
      a = ensure();
    }
    if (!a) return;
    // Don't block for reduced-motion users - just make it quieter
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    const ctx = a.ctx;
    void ctx.resume();
    const now = ctx.currentTime;

    // DUCK the ambient - sudden silence before boom makes it scarier
    try {
      a.soundtrack.volume = 0.04;
      a.droneGain.gain.cancelScheduledValues(now);
      a.droneGain.gain.setTargetAtTime(0.001, now, 0.05);
      // restore after
      window.setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.droneGain.gain.setTargetAtTime(0.035, ctx.currentTime, 0.6);
          audioRef.current.soundtrack.volume = enabled ? 0.32 : 0.04;
        }
      }, 1800);
    } catch {}

    // --- MASTER SCARE BUS with distortion ---
    const scareBus = ctx.createGain();
    scareBus.gain.value = 1.1;
    const shaper = ctx.createWaveShaper();
    shaper.curve = makeDistortionCurve(180);
    shaper.oversample = "4x";
    scareBus.connect(shaper);
    shaper.connect(a.master);

    // 1. MASSIVE SUB DROP - chest punch
    const sub = ctx.createOscillator();
    const subGain = ctx.createGain();
    sub.type = "sine";
    sub.frequency.setValueAtTime(140, now);
    sub.frequency.exponentialRampToValueAtTime(18, now + 1.2);
    subGain.gain.setValueAtTime(0, now);
    subGain.gain.linearRampToValueAtTime(1.4, now + 0.015);
    subGain.gain.exponentialRampToValueAtTime(0.01, now + 1.3);
    sub.connect(subGain);
    subGain.connect(scareBus);
    sub.start(now);
    sub.stop(now + 1.4);

    // 2. SECOND SUB - delayed, even deeper
    const sub2 = ctx.createOscillator();
    const sub2Gain = ctx.createGain();
    sub2.type = "sine";
    sub2.frequency.setValueAtTime(90, now + 0.08);
    sub2.frequency.exponentialRampToValueAtTime(16, now + 0.95);
    sub2Gain.gain.setValueAtTime(0, now + 0.08);
    sub2Gain.gain.linearRampToValueAtTime(1.1, now + 0.095);
    sub2Gain.gain.exponentialRampToValueAtTime(0.01, now + 1.0);
    sub2.connect(sub2Gain);
    sub2Gain.connect(scareBus);
    sub2.start(now + 0.08);
    sub2.stop(now + 1.1);

    // 3. MAIN SCREAM - sawtooth drop, distorted
    const scream = ctx.createOscillator();
    const screamGain = ctx.createGain();
    const screamFilter = ctx.createBiquadFilter();
    screamFilter.type = "bandpass";
    screamFilter.frequency.value = 1100;
    screamFilter.Q.value = 0.8;
    scream.type = "sawtooth";
    scream.frequency.setValueAtTime(880, now);
    scream.frequency.exponentialRampToValueAtTime(65, now + 0.65);
    screamGain.gain.setValueAtTime(0, now);
    screamGain.gain.linearRampToValueAtTime(1.0, now + 0.008);
    screamGain.gain.exponentialRampToValueAtTime(0.01, now + 0.75);
    scream.connect(screamFilter);
    screamFilter.connect(screamGain);
    screamGain.connect(scareBus);
    scream.start(now);
    scream.stop(now + 0.8);

    // 4. HIGH SHRIEK - piercing
    const shriek = ctx.createOscillator();
    const shriekGain = ctx.createGain();
    shriek.type = "square";
    shriek.frequency.setValueAtTime(2200, now);
    shriek.frequency.setValueAtTime(1800, now + 0.05);
    shriek.frequency.exponentialRampToValueAtTime(400, now + 0.35);
    shriekGain.gain.setValueAtTime(0, now);
    shriekGain.gain.linearRampToValueAtTime(0.55, now + 0.01);
    shriekGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    shriek.connect(shriekGain);
    shriekGain.connect(scareBus);
    shriek.start(now);
    shriek.stop(now + 0.45);

    // 5. TRIANGLE SCREECH - dissonant
    const tri = ctx.createOscillator();
    const triGain = ctx.createGain();
    tri.type = "triangle";
    tri.frequency.setValueAtTime(3200, now);
    tri.frequency.linearRampToValueAtTime(1200, now + 0.18);
    tri.frequency.exponentialRampToValueAtTime(200, now + 0.5);
    triGain.gain.setValueAtTime(0, now);
    triGain.gain.linearRampToValueAtTime(0.35, now + 0.012);
    triGain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    tri.connect(triGain);
    triGain.connect(scareBus);
    tri.start(now);
    tri.stop(now + 0.6);

    // 6. WHITE NOISE BURST - air rush
    const noise = ctx.createBufferSource();
    const noiseFilter = ctx.createBiquadFilter();
    const noiseFilter2 = ctx.createBiquadFilter();
    const noiseGain = ctx.createGain();
    noise.buffer = makeNoiseBuffer(ctx, 1.5);
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(2800, now);
    noiseFilter.frequency.exponentialRampToValueAtTime(900, now + 0.4);
    noiseFilter.Q.value = 1.2;
    noiseFilter2.type = "highpass";
    noiseFilter2.frequency.value = 800;
    noiseGain.gain.setValueAtTime(0, now);
    noiseGain.gain.linearRampToValueAtTime(0.85, now + 0.006);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseFilter2);
    noiseFilter2.connect(noiseGain);
    noiseGain.connect(scareBus);
    noise.start(now);
    noise.stop(now + 0.6);

    // 7. GRITTY TEXTURE - low saw for dread tail
    const grit = ctx.createOscillator();
    const gritGain = ctx.createGain();
    grit.type = "sawtooth";
    grit.frequency.setValueAtTime(45, now + 0.1);
    grit.frequency.linearRampToValueAtTime(32, now + 1.0);
    gritGain.gain.setValueAtTime(0, now + 0.1);
    gritGain.gain.linearRampToValueAtTime(0.25, now + 0.2);
    gritGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    grit.connect(gritGain);
    gritGain.connect(a.master);
    grit.start(now + 0.1);
    grit.stop(now + 1.3);

    // Haptics
    try {
      if ("vibrate" in navigator) {
        navigator.vibrate([80, 30, 120, 40, 250]);
      }
    } catch {}
  }, [enabled, ensure]);

  const triggerPrelude = useCallback(() => {
    const a = audioRef.current || ensure();
    if (!a) return;

    const ctx = a.ctx;
    void ctx.resume();
    const now = ctx.currentTime;
    const whisperAt = now + 3.65;

    // Keep the soundtrack present while the leg approaches, then make its
    // disappearance feel unnatural instead of simply toggling audio off.
    try {
      a.soundtrack.volume = 0.32;
      window.setTimeout(() => {
        if (audioRef.current) audioRef.current.soundtrack.volume = 0.012;
      }, 3600);
    } catch {}

    // A close, breathy whisper made from filtered noise and unstable tones.
    // It is intentionally lo-fi and slightly overdriven, like a damaged tape.
    const whisperBus = ctx.createGain();
    const whisperFilter = ctx.createBiquadFilter();
    const whisperDrive = ctx.createWaveShaper();
    whisperFilter.type = "bandpass";
    whisperFilter.frequency.value = 1450;
    whisperFilter.Q.value = 0.65;
    whisperDrive.curve = makeDistortionCurve(55);
    whisperDrive.oversample = "2x";
    whisperBus.gain.setValueAtTime(0, whisperAt);
    whisperBus.gain.linearRampToValueAtTime(0.11, whisperAt + 0.22);
    whisperBus.gain.linearRampToValueAtTime(0.065, whisperAt + 1.55);
    whisperBus.gain.exponentialRampToValueAtTime(0.001, whisperAt + 2.05);
    whisperBus.connect(whisperFilter);
    whisperFilter.connect(whisperDrive);
    whisperDrive.connect(a.master);

    const breath = ctx.createBufferSource();
    breath.buffer = makeNoiseBuffer(ctx, 2.4);
    breath.connect(whisperBus);
    breath.start(whisperAt);
    breath.stop(whisperAt + 2.2);

    [210, 192, 174].forEach((frequency, index) => {
      const voice = ctx.createOscillator();
      const voiceGain = ctx.createGain();
      const start = whisperAt + index * 0.58;
      voice.type = "sine";
      voice.frequency.setValueAtTime(frequency, start);
      voice.frequency.linearRampToValueAtTime(frequency - 55, start + 0.44);
      voiceGain.gain.setValueAtTime(0, start);
      voiceGain.gain.linearRampToValueAtTime(0.075, start + 0.06);
      voiceGain.gain.exponentialRampToValueAtTime(0.001, start + 0.48);
      voice.connect(voiceGain);
      voiceGain.connect(whisperBus);
      voice.start(start);
      voice.stop(start + 0.52);
    });

    // Hold the blackout as a genuinely uncomfortable silence before the boom.
    window.setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.soundtrack.volume = 0;
        audioRef.current.droneGain.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.025);
      }
    }, 5850);
  }, [ensure]);

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

  return <Ctx.Provider value={{ enabled, toggle, triggerPrelude, triggerScare }}>{children}</Ctx.Provider>;
}
