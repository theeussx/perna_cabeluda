import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChapterHeader, Tag, Paragraphs, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { travel } from "../content";

export default function Travel() {
  const [activeId, setActiveId] = useState(travel.stages[0].id);
  const active = travel.stages.find((s) => s.id === activeId) ?? travel.stages[0];

  return (
    <section id="viagem" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="04"
          kicker="os meios por onde ela passou"
          title={renderTitle(travel.heading)}
        />
        <Reveal>
          <Paragraphs text={travel.lead} className="max-w-2xl text-xl text-bone/90" />
        </Reveal>

        <Reveal>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-[0.78rem] uppercase tracking-[0.2em] text-stone">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-bone/70" /> {travel.legendOld}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-paper" /> {travel.legendToday}
            </span>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-stretch gap-y-2">
          {travel.stages.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <button
                onClick={() => setActiveId(s.id)}
                aria-pressed={activeId === s.id}
                className={
                  "relative px-4 py-3 font-mono text-[0.8rem] uppercase tracking-[0.16em] transition-colors sm:text-[0.88rem] " +
                  (activeId === s.id
                    ? s.era === "1970"
                      ? "bg-bone text-black"
                      : "bg-paper text-black"
                    : "border border-bone/15 text-bone/85 hover:border-bone/40 hover:text-bone")
                }
              >
                {s.label}
                {activeId === s.id && <span className="sr-only">· selecionado</span>}
              </button>
              {i < travel.stages.length - 1 && (
                <span aria-hidden className="px-1 text-bone/30">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-bone/10 pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start"
            >
              <div
                className={
                  "flex h-20 w-20 shrink-0 items-center justify-center border font-serif text-4xl " +
                  (active.era === "1970" ? "border-bone/40 text-bone" : "border-paper/40 text-paper")
                }
                aria-hidden="true"
              >
                <span className="flicker">{active.glyph}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Tag className={active.era === "1970" ? "text-bone" : "text-paper"}>
                    {active.era === "1970" ? "meio · anos 1970" : "meio · hoje"}
                  </Tag>
                  <span className="font-mono text-[0.78rem] uppercase tracking-[0.2em] text-stone">
                    {String(travel.stages.indexOf(active) + 1).padStart(2, "0")} / {travel.stages.length}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-3xl text-paper sm:text-4xl">{active.title}</h3>
                <p className="mt-3 max-w-2xl text-[1.15rem] leading-relaxed text-[#c6bda2]">{active.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            {travel.outro.map((o) => (
              <p key={o} className="font-serif text-3xl italic text-bone sm:text-4xl">
                {o}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
