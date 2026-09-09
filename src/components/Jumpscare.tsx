import { useEffect, useRef, useState, useCallback } from "react";
import { useAmbience } from "./AudioContext";

type Phase = "idle" | "tension" | "whisper" | "blackout" | "scare" | "after" | "done";

export default function Jumpscare() {
  const { triggerScare } = useAmbience();
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const hasTriggered = useRef(false);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const triggerSequence = useCallback(() => {
    if (hasTriggered.current) return;
    hasTriggered.current = true;

    // Lock scroll during the whole sequence for tension
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // subtle dragging sound during tension using Web Audio
    try {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      if (AC) {
        const ctx = new AC();
        const now = ctx.currentTime;
        // slow drag - filtered noise + low sine
        const bufSize = ctx.sampleRate * 3;
        const buffer = ctx.createBuffer(1, bufSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufSize, 2);
        }
        const src = ctx.createBufferSource();
        src.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 180;
        filter.Q.value = 0.7;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.8);
        gain.gain.linearRampToValueAtTime(0.08, now + 2.5);
        gain.gain.linearRampToValueAtTime(0, now + 3.6);
        src.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        src.start(now);
        src.stop(now + 3.7);
        // heartbeat
        const osc = ctx.createOscillator();
        const og = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 55;
        og.gain.setValueAtTime(0, now);
        // two thumps
        [0, 0.9, 1.8, 2.7].forEach((t) => {
          og.gain.setValueAtTime(0, now + t);
          og.gain.linearRampToValueAtTime(0.12, now + t + 0.05);
          og.gain.exponentialRampToValueAtTime(0.001, now + t + 0.4);
        });
        osc.connect(og);
        og.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 3.8);
      }
    } catch {}

    setPhase("tension");

    // tension -> whisper after 3.8s
    timers.current.push(
      window.setTimeout(() => {
        setPhase("whisper");
      }, 3800)
    );

    // whisper -> blackout after 2.2s
    timers.current.push(
      window.setTimeout(() => {
        setPhase("blackout");
      }, 3800 + 2200)
    );

    // blackout -> SCARE after 700ms of pure silence
    timers.current.push(
      window.setTimeout(() => {
        setPhase("scare");
        triggerScare();

        // title hack for extra fear
        const prevTitle = document.title;
        document.title = "ELA TE ACHOU";
        timers.current.push(
          window.setTimeout(() => {
            document.title = prevTitle;
          }, 1200)
        );

        // Haptics + visual shake on html
        try {
          document.documentElement.classList.add("scare-shaking");
          document.body.style.cursor = "none";
          if ("vibrate" in navigator) navigator.vibrate([100, 30, 200, 30, 300]);
        } catch {}

        // after scare -> afterglow
        timers.current.push(
          window.setTimeout(() => {
            setPhase("after");
            document.documentElement.classList.remove("scare-shaking");
            document.body.style.cursor = "";
            // restore scroll
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
          }, 950)
        );

        // after -> done (allow credits)
        timers.current.push(
          window.setTimeout(() => {
            setPhase("done");
          }, 950 + 3200)
        );
      }, 3800 + 2200 + 700)
    );
  }, [triggerScare]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      setPhase("done");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
          triggerSequence();
          obs.disconnect();
        }
      },
      { threshold: [0.35, 0.6, 0.85] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggerSequence]);

  return (
    <>
      <section
        ref={containerRef}
        aria-label="O arquivo termina aqui"
        className="relative bg-black"
        style={{ minHeight: "140vh" }}
      >
        {/* TENSION STAGE */}
        <div
          className={`sticky top-0 h-screen w-full overflow-hidden bg-black transition-opacity duration-700 ${
            phase === "idle" ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* subtle grain + vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_50%,rgba(20,20,20,1),rgba(0,0,0,1))]" />
          <div
            className={`absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_30%,black_78%)] transition-all duration-[3800ms] ${
              phase === "tension" || phase === "whisper" ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            style={{ transformOrigin: "center" }}
          />

          {/* faint breathing text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            {/* Phase: tension */}
            <div
              className={`flex flex-col items-center gap-8 transition-all duration-700 ${
                phase === "tension" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.4em] text-stone/60">
                o arquivo termina aqui
              </p>

              {/* distant leg approaching */}
              <div className="relative h-[36vh] w-full max-w-[320px] overflow-hidden">
                <img
                  src="/art/leg-hero.webp"
                  alt=""
                  aria-hidden="true"
                  className={`mx-auto h-full w-auto object-contain transition-all duration-[3800ms] ease-out ${
                    phase === "tension" ? "scale-[0.28] opacity-[0.18] blur-[0.5px]" : "scale-[0.15] opacity-0"
                  }`}
                  style={{
                    filter: "brightness(0.25) contrast(1.2) sepia(0.2)",
                    transformOrigin: "center bottom",
                  }}
                />
                {/* approaching shadow */}
                <div
                  className={`absolute inset-x-0 bottom-0 h-[2px] bg-bone/10 blur-[1px] transition-all duration-[3800ms] ${
                    phase === "tension" ? "scale-x-[0.3] opacity-40" : "scale-x-0 opacity-0"
                  }`}
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="font-serif italic text-bone/70 text-lg tracking-wide animate-pulse">
                  você ouviu isso?
                </p>
                <p className="font-mono text-[0.5rem] uppercase tracking-[0.3em] text-stone/40">
                  [ arraste · 1975 · corredor ]
                </p>
              </div>

              {/* glitching archive stamp */}
              <div className="mt-6 font-mono text-[0.55rem] uppercase tracking-[0.25em] text-bloodsoft/50">
                <span className="inline-block animate-[flicker_0.15s_steps(2)_infinite]">ARQUIVO ENCERRADO</span>
                <span className="mx-2 opacity-30">·</span>
                <span className="inline-block animate-[flicker_0.22s_steps(2)_infinite_0.1s]">SEM SAÍDA</span>
              </div>
            </div>

            {/* Phase: whisper */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-500 ${
                phase === "whisper" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.5em] text-paper/80 animate-[flicker_0.18s_steps(2)_infinite]">
                ela está atrás de você
              </p>
              <p className="mt-4 font-serif text-[0.75rem] italic text-stone/50">
                não olhe para trás
              </p>
              {/* faint footsteps dots */}
              <div className="mt-10 flex gap-2">
                <span className="h-1 w-1 rounded-full bg-bone/20 animate-[sonar_1.2s_ease-out_infinite]" />
                <span className="h-1 w-1 rounded-full bg-bone/20 animate-[sonar_1.2s_ease-out_infinite_0.4s]" />
                <span className="h-1 w-1 rounded-full bg-bone/20 animate-[sonar_1.2s_ease-out_infinite_0.8s]" />
              </div>
            </div>

            {/* Phase: blackout - pure black */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-200 ${
                phase === "blackout" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
          </div>

          {/* scanlines subtle */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 3px)",
            }}
          />
        </div>

        {/* AFTER PHASE - lingering dread before credits */}
        <div
          className={`relative z-10 flex min-h-[85vh] flex-col items-center justify-center bg-black px-6 py-24 text-center transition-all duration-[1200ms] ${
            phase === "after" || phase === "done" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_50%_40%,rgba(138,30,22,0.12),transparent_70%)]" />
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-bloodsoft/70">
            você sentiu?
          </p>
          <h3 className="mt-6 max-w-2xl font-serif text-[clamp(1.6rem,4vw,2.8rem)] leading-[1.1] text-paper">
            Ela sempre aparece <br />
            <span className="italic text-bone">quando você menos espera.</span>
          </h3>
          <p className="mt-6 max-w-md font-mono text-[0.58rem] leading-relaxed tracking-wide text-stone">
            Em 1975 disseram que era invenção do povo. <br />
            Mas o povo nunca parou de contar. <br />
            <span className="text-bone/60">Agora ela sabe que você leu até o fim.</span>
          </p>
          <p className="mt-10 font-mono text-[0.5rem] uppercase tracking-[0.35em] text-stone/40">
            role para os créditos · se tiver coragem
          </p>

          {/* faint leg ghost in corner watching */}
          <img
            src="/art/leg-hero.webp"
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-0 right-[-6vw] h-[42vh] w-auto object-contain opacity-[0.06] transition-all duration-[2000ms] ${
              phase === "done" ? "translate-x-0" : "translate-x-12"
            }`}
            style={{ filter: "brightness(0.4) blur(0.6px)" }}
          />
        </div>
      </section>

      {/* FULLSCREEN JUMPSCARE OVERLAY - fixed, z-max */}
      <div
        className={`jumpscare-v2 ${phase === "scare" ? "is-active" : ""}`}
        aria-hidden="true"
      >
        {/* white flash */}
        <div className="jumpscare-v2-flash" />

        {/* chromatic layers */}
        <div className="jumpscare-v2-chromatic">
          <img src="/art/leg-jumpscare.jpg" alt="" className="jumpscare-v2-leg leg-r" />
          <img src="/art/leg-jumpscare.jpg" alt="" className="jumpscare-v2-leg leg-g" />
          <img src="/art/leg-jumpscare.jpg" alt="" className="jumpscare-v2-leg leg-b" />
        </div>

        {/* main leg */}
        <img src="/art/leg-jumpscare.jpg" alt="" className="jumpscare-v2-main" />

        {/* fallback hero if new not loaded */}
        <img
          src="/art/leg-hero.webp"
          alt=""
          className="jumpscare-v2-fallback"
          onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
        />

        {/* noise + scan + vignette */}
        <div className="jumpscare-v2-noise" />
        <div className="jumpscare-v2-scan" />
        <div className="jumpscare-v2-vignette" />

        {/* text */}
        <div className="jumpscare-v2-text-wrap">
          <strong className="jumpscare-v2-title">RASTEIRA!</strong>
          <span className="jumpscare-v2-sub">ELA TE ACHOU</span>
          <span className="jumpscare-v2-meta">Tiúma · 1975 → agora</span>
        </div>

        {/* blood splatter gradient */}
        <div className="jumpscare-v2-blood" />
      </div>
    </>
  );
}
