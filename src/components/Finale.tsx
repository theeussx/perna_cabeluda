import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { useState } from "react";

type L = { s: number; e: number; text: string; big?: boolean; mono?: boolean };

const LINES: L[] = [
  { s: 0.02, e: 0.09, text: "1975 → 2026", mono: true },
  { s: 0.1, e: 0.19, text: "Meio século passou.", big: true },
  { s: 0.21, e: 0.3, text: "Os meios mudaram." },
  { s: 0.31, e: 0.4, text: "Os jornais viraram telas." },
  { s: 0.41, e: 0.5, text: "O rádio virou streaming." },
  { s: 0.51, e: 0.6, text: "O boca a boca virou rede social." },
  { s: 0.62, e: 0.72, text: "Mas algumas histórias continuam circulando." },
  { s: 0.76, e: 0.85, text: "Você chegou ao fim.", big: true },
  { s: 0.86, e: 0.95, text: "Ou talvez não.", big: true },
];

function Line({ p, l }: { p: MotionValue<number>; l: L }) {
  const { s, e } = l;
  const opacity = useTransform(p, [s, s + 0.02, e - 0.015, e], [0, 1, 1, 0]);
  const y = useTransform(p, [s, s + 0.03], [16, 0]);
  return (
    <motion.p style={{ opacity, y }} className="text-center">
      <span
        className={
          l.mono
            ? "font-mono text-sm tracking-[0.3em] uppercase text-bone"
            : l.big
              ? "block font-serif text-[clamp(2rem,7vw,5rem)] leading-[1.04] text-paper"
              : "block font-serif italic text-[clamp(1.3rem,3.5vw,2.6rem)] text-bone"
        }
      >
        {l.text}
      </span>
    </motion.p>
  );
}

export default function Finale() {
  const ref = useRef<HTMLDivElement>(null);
  const [shadowDone, setShadowDone] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // The faint silhouette that is present at the start fades out as the page empties.
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.05, 0.22], [0.5, 0.5, 0]);
  const vignette = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 0.9]);
  const sweepX = useTransform(scrollYProgress, [0.9, 0.975], ["120%", "-120%"]);
  const sweepO = useTransform(scrollYProgress, [0.885, 0.9, 0.975, 0.99], [0, 1, 1, 0]);
  const lastFade = useTransform(scrollYProgress, [0.99, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.93) setShadowDone(true);
  });

  return (
    <div ref={ref} className="relative h-[560vh] bg-black" id="final">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: vignette }} />

        {/* far ghost silhouette (empties out) */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-end justify-center"
          style={{ opacity: ghostOpacity }}
        >
          <img
            src="/art/leg-hero.webp"
            alt=""
            aria-hidden="true"
            className="h-[72vh] w-auto object-contain"
            style={{ filter: "brightness(0.35)" }}
          />
        </motion.div>

        {/* monologue lines */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative w-full max-w-4xl">
            {LINES.map((l) => (
              <div key={l.text} className="absolute inset-x-0 top-0 flex justify-center">
                <Line p={scrollYProgress} l={l} />
              </div>
            ))}
          </div>
        </div>

        {/* the passing shadow */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 flex items-center justify-center"
          style={{ x: sweepX, opacity: sweepO }}
          aria-hidden="true"
        >
          <img
            src="/art/leg-action.webp"
            alt=""
            className="h-[90vh] w-auto object-contain"
            style={{ filter: "brightness(0.2) blur(1px)" }}
          />
        </motion.div>

        {/* footer stamp on last beat */}
        <motion.p
          className="absolute inset-x-0 bottom-24 text-center font-mono text-[0.6rem] uppercase tracking-[0.3em] text-stone"
          style={{ opacity: useTransform(scrollYProgress, [0.5, 0.6], [0, 1]) }}
        >
          {shadowDone ? "" : "…"}
        </motion.p>

        {/* fade to black at very end */}
        <motion.div className="absolute inset-0 bg-black" style={{ opacity: lastFade }} />
      </div>
    </div>
  );
}
