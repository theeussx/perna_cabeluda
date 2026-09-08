import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterHeader, Tag, Paragraphs, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { mapSection } from "../content";

export default function MapSection() {
  const [sel, setSel] = useState(mapSection.points[0]);
  const { points } = mapSection;
  return (
    <section id="mapa" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader no="11" kicker="mapa do Recife" title={renderTitle(mapSection.heading)} />
        <Reveal>
          <Paragraphs text={mapSection.lead} className="max-w-3xl text-lg text-bone/85" />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-bone/20 bg-[#0b0a07]">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(214,199,161,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(214,199,161,0.6) 1px,transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
              />
              <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                <path
                  d="M30 62 L78 60 L84 66 L96 62 L98 72 L70 74 L34 74 Z"
                  fill="rgba(92,92,80,0.10)"
                  stroke="rgba(214,199,161,0.25)"
                  strokeWidth="0.3"
                />
                <path
                  d="M2 4 L20 2 L26 12 L22 22 L30 26 L34 40 L26 50 L10 58 L2 50 Z"
                  fill="rgba(21,20,15,0.6)"
                  stroke="rgba(214,199,161,0.35)"
                  strokeWidth="0.35"
                />
                <path
                  d="M38 12 L52 10 L60 22 L64 34 L58 44 L48 40 L40 30 L36 18 Z"
                  fill="rgba(21,20,15,0.8)"
                  stroke="rgba(214,199,161,0.45)"
                  strokeWidth="0.35"
                />
                <path
                  d="M30 4 C36 10 40 16 44 22 C48 30 50 38 52 50"
                  fill="none"
                  stroke="rgba(92,92,80,0.6)"
                  strokeWidth="0.7"
                  strokeDasharray="1.2 1"
                />
                <path
                  d="M46 2 C48 8 50 16 52 22"
                  fill="none"
                  stroke="rgba(92,92,80,0.5)"
                  strokeWidth="0.5"
                  strokeDasharray="1 1"
                />
              </svg>

              <div className="absolute right-3 top-3 font-serif text-bone/60">
                <div className="flex flex-col items-center">
                  <span className="text-[0.7rem] leading-none">{mapSection.compass.n}</span>
                  <span className="text-[0.55rem] leading-none">{mapSection.compass.arrow}</span>
                </div>
              </div>

              {points.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSel(p)}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  className={"group absolute -translate-x-1/2 -translate-y-1/2 px-2 py-1 text-center " + (sel.id === p.id ? "z-10" : "")}
                >
                  <span
                    className={
                      "mx-auto block h-3 w-3 rounded-full transition-colors " +
                      (sel.id === p.id
                        ? "bg-bloodsoft ring-2 ring-bloodsoft/40"
                        : "bg-bone/70 group-hover:bg-bloodsoft")
                    }
                  />
                  <span
                    className={
                      "mt-1 block whitespace-nowrap font-mono text-[0.52rem] uppercase tracking-[0.12em] " +
                      (sel.id === p.id ? "text-paper" : "text-stone group-hover:text-bone")
                    }
                  >
                    {p.name.split("·")[0].trim()}
                  </span>
                </button>
              ))}

              <div className="absolute bottom-2 left-2 font-mono text-[0.5rem] uppercase tracking-[0.2em] text-stone/60">
                {mapSection.mapNote}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex h-full flex-col justify-center border-l border-bone/15 pl-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sel.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center gap-3">
                    <Tag className="text-bloodsoft">{sel.tag}</Tag>
                    <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-stone">
                      ponto
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-paper">{sel.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#c6bda2]">{sel.frag}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
