import { motion, useScroll, useSpring } from "framer-motion";
import { useAmbience } from "./AudioContext";
import { scrollToId } from "../lib/lenis";
import { meta } from "../content";

export default function Chrome() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const ambience = useAmbience();

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-bloodsoft via-bone to-bloodsoft"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <div className="fixed bottom-5 right-5 z-[70] flex items-center gap-2">
        <button
          onClick={() => scrollToId("participantes")}
          aria-label="Ver os participantes do trabalho"
          title="Ver os participantes do trabalho"
          className="flex items-center gap-2 border border-bone/20 bg-black/30 px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-bone backdrop-blur-sm transition-colors hover:border-bone/60 hover:bg-black/50 hover:text-paper"
        >
          <span aria-hidden="true">☷</span>
          participantes
        </button>
        <button
          onClick={ambience.toggle}
          aria-pressed={ambience.enabled}
          aria-label={ambience.enabled ? "Desligar som ambiente" : "Ligar som ambiente"}
          title={ambience.enabled ? "Som ligado — clique para desligar" : "Ligar som ambiente"}
          className={
            "flex items-center gap-2 border px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] backdrop-blur-sm transition-colors " +
            (ambience.enabled
              ? "border-bone/60 bg-black/50 text-bone"
              : "border-bone/20 bg-black/30 text-stone hover:border-bone/50 hover:text-bone")
          }
        >
          <span
            className={
              "inline-block h-1.5 w-1.5 rounded-full " +
              (ambience.enabled ? "bg-bloodsoft animate-pulse" : "bg-stone/50")
            }
          />
          som: {ambience.enabled ? "on" : "off"}
        </button>
      </div>

      <div className="pointer-events-none fixed bottom-5 left-5 z-[70] hidden font-mono text-[0.55rem] uppercase tracking-[0.3em] text-stone/60 sm:block">
        {meta.cornerLabel}
      </div>
    </>
  );
}
