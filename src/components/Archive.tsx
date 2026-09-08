import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../lib/motion";
import { ChapterHeader, Tag, renderTitle, Paragraphs } from "./ui";
import Legend from "./Legend";
import { archive, legend } from "../content";

export default function Archive() {
  const [active, setActive] = useState(archive.cards[0].id);
  const card = archive.cards.find((c) => c.id === active) ?? archive.cards[0];

  return (
    <section id="arquivo" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="04"
          kicker="arquivo"
          title={renderTitle(archive.heading)}
        />
        <Reveal>
          <Paragraphs
            text={archive.lead}
            className="max-w-2xl text-lg text-bone/85"
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* record sheet */}
          <Reveal>
            <div className="relative paper-surface overflow-hidden p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="font-serif text-sm tracking-wide text-[#5a4527]">
                  DIÁRIO DE PERNAMBUCO · RECIFE
                </p>
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[#6f5a33]">
                  dezembro · 1975
                </p>
              </div>
              <div className="mt-4 h-px w-full bg-[#2b2110]/40" />
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-[#4a3a1e]"
                  >
                    ▍{t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[auto_1fr]">
                <div className="flex gap-2 md:flex-col">
                  {archive.cards.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActive(c.id)}
                      className={
                        "px-3 py-2 text-left font-mono text-[0.6rem] uppercase tracking-[0.12em] transition-colors " +
                        (active === c.id
                          ? "bg-[#221a10] text-[#e4d6ad]"
                          : "text-[#6f5a33] hover:text-[#3a2d16]")
                      }
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <div className="relative min-h-[240px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="font-serif text-2xl leading-tight text-[#241b0d] sm:text-3xl">
                        {card.heading}
                      </h3>
                      <p className="mt-4 text-[0.98rem] leading-relaxed text-[#46361b]">
                        {card.body}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#2b2110]/40 pt-4">
                <Tag className="border-[#2b2110]/50 text-[#4a3a1e]">reprodução · não é a página original</Tag>
                <Tag className="border-[#2b2110]/50 text-[#4a3a1e]">registro ≠ prova</Tag>
              </div>
            </div>
          </Reveal>

          {/* reading column */}
          <div className="space-y-4">
            <Reveal>
              <p className="lede text-[1.05rem] leading-relaxed">{archive.note}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="border-l-2 border-blood/60 bg-blood/[0.06] p-4 text-sm text-bone/90">
                <span className="mb-1 inline-block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-bloodsoft">
                  {archive.calloutTag}
                </span>
                {archive.callout}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[0.8rem] leading-relaxed text-stone">{archive.legendIntro}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-stone">
                {legend.heading}
              </p>
            </Reveal>
            <Legend />
          </div>
        </div>
      </div>
    </section>
  );
}
