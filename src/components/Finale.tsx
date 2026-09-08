import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { finale } from "../content";

type Line = (typeof finale.lines)[number];

function LineCmp({ p, l }: { p: MotionValue<number>; l: Line }) {
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
  const [, setShadowDone] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

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

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative w-full max-w-4xl">
            {finale.lines.map((l) => (
              <div key={l.text} className="absolute inset-x-0 top-0 flex justify-center">
                <LineCmp p={scrollYProgress} l={l} />
              </div>
            ))}
          </div>
        </div>

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

        <motion.div className="absolute inset-0 bg-black" style={{ opacity: lastFade }} />
      </div>
    </div>
  );
}
