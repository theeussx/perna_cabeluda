import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionTemplate,
  type MotionValue,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Frag = { s: number; e: number; text: string; big?: boolean };

const FRAGS: Frag[] = [
  { s: 0.05, e: 0.135, text: "Disseram que ela existia." },
  { s: 0.125, e: 0.21, text: "Uma perna." },
  { s: 0.2, e: 0.285, text: "Sem corpo." },
  { s: 0.275, e: 0.36, text: "Sem rosto." },
  { s: 0.35, e: 0.44, text: "Sem explicação." },
  { s: 0.43, e: 0.545, text: "Mas com uma coisa em comum…" },
  { s: 0.53, e: 0.64, text: "Ela sempre aparecia." },
  { s: 0.73, e: 0.88, text: "ELA NÃO TINHA CORPO.", big: true },
  { s: 0.86, e: 1.0, text: "Mas tinha uma história." },
];

function FragLine({
  p,
  frag,
  side,
}: {
  p: MotionValue<number>;
  frag: Frag;
  side: "left" | "center";
}) {
  const { s, e } = frag;
  const opacity = useTransform(p, [s, s + 0.04, e - 0.03, e], [0, 1, 1, 0]);
  const y = useTransform(p, [s, s + 0.05], [18, 0]);
  return (
    <motion.p
      style={{ opacity, y }}
      className={
        side === "center"
          ? "text-center"
          : "text-left"
      }
    >
      <span
        className={
          frag.big
            ? "block font-serif text-[clamp(1.9rem,6vw,4.6rem)] leading-[1.02] text-paper"
            : frag.s > 0.5
              ? "font-serif italic text-[clamp(1.35rem,3.6vw,2.5rem)] text-bone"
              : "font-mono text-[clamp(0.9rem,1.6vw,1.15rem)] tracking-[0.08em] text-bone/90"
        }
      >
        {frag.text}
      </span>
    </motion.p>
  );
}

/**
 * Chapters 02–03: the appearance and the revelation.
 * The section is very tall; a sticky full-screen stage stays pinned while the
 * user scrolls, and the leg is revealed bottom-up (foot first) in sync with
 * scroll progress.
 */
export default function PernaReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [complete, setComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // top inset of the reveal clip, from hidden (99%) to full (0%)
  const clipTop = useTransform(scrollYProgress, [0.03, 0.62], [99, 0]);
  const clipPath = useMotionTemplate`inset(${clipTop}% 0 0 0)`;

  const shadowOpacity = useTransform(scrollYProgress, [0.03, 0.2, 0.62], [0, 0.85, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.62, 0.75], [0, 0.55, 0]);

  useMotionValueEvent(clipTop, "change", (v) => {
    if (v <= 4) setComplete(true);
  });

  return (
    <div ref={ref} className="relative h-[540vh] bg-black" id="aparecimento">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000] via-[#050403] to-[#0a0603]" />
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 60% at 50% 108%, rgba(138,30,22,0.34), transparent 70%)",
            opacity: glowOpacity,
          }}
        />

        {/* corner metadata */}
        <div className="absolute inset-x-0 top-6 z-20 flex items-center justify-between px-5 text-stone font-mono text-[0.6rem] tracking-[0.3em] uppercase sm:px-10">
          <span>Recife — 1975</span>
          <span className="text-bloodsoft">II · A aparição</span>
          <span className="hidden sm:inline">30.12 · 1975</span>
        </div>

        {/* left gutter kicker */}
        <div className="pointer-events-none absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 text-stone/70 font-mono text-[0.58rem] tracking-[0.5em] uppercase lg:block">
          — dizem que a viram de noite —
        </div>

        {/* the leg stage */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute bottom-[2vh] left-1/2 -translate-x-1/2 origin-bottom md:left-auto md:right-[4vw] md:translate-x-0"
            style={{ height: "min(80vh, 92vh)" }}
          >
            {/* ground shadow */}
            <motion.div
              className="absolute -bottom-5 left-1/2 h-10 w-[150%] -translate-x-1/2 rounded-[100%] bg-black blur-xl"
              style={{ opacity: shadowOpacity }}
            />
            <motion.div
              className="relative h-full w-auto"
              animate={complete ? { scale: 1.006 } : { scale: 1 }}
              transition={complete ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
            >
              <motion.img
                src="/art/leg-hero.webp"
                alt=""
                aria-hidden="true"
                className="h-full w-auto object-contain"
                style={{
                  clipPath,
                  maskImage:
                    "radial-gradient(ellipse 72% 92% at 50% 55%, #000 58%, transparent 99%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 72% 92% at 50% 55%, #000 58%, transparent 99%)",
                  filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.7))",
                }}
              />
              {/* faint warm rim boost */}
              <motion.div
                className="absolute inset-0"
                style={{
                  clipPath,
                  mixBlendMode: "screen",
                  background:
                    "linear-gradient(180deg, rgba(214,199,161,0) 30%, rgba(214,199,161,0.05) 100%)",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* narrative fragments */}
        <div className="pointer-events-none absolute inset-x-0 z-10">
          <div className="absolute inset-0 flex h-[60vh] items-start justify-center md:items-center">
            <div className="relative mx-auto mt-[26vh] w-[86vw] max-w-2xl md:mt-0 md:mx-0 md:ml-[6vw] md:max-w-[40vw] lg:ml-[7vw]">
              {FRAGS.slice(0, 7).map((f) => (
                <div key={f.text} className="absolute top-0 left-0 w-full">
                  <FragLine p={scrollYProgress} frag={f} side="left" />
                </div>
              ))}
            </div>
          </div>
          {/* revelation lines (center) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto w-[86vw] max-w-5xl">
              {FRAGS.slice(7).map((f) => (
                <div key={f.text} className="absolute inset-x-0 top-[42vh] flex justify-center">
                  <FragLine p={scrollYProgress} frag={f} side="center" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scroll affordance on first part */}
        <motion.div
          className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.03, 0.08], [1, 0.6, 0]) }}
        >
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-stone uppercase">
            o rolar revela
          </span>
          <div className="mx-auto mt-2 h-10 w-px bg-gradient-to-b from-bone/60 to-transparent" />
        </motion.div>

        {/* end fade */}
        <motion.div
          className="absolute inset-0 z-30 bg-black"
          style={{ opacity: useTransform(scrollYProgress, [0.965, 0.995], [0, 1]) }}
        />
      </div>
    </div>
  );
}
