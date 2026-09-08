import { useState } from "react";
import { motion } from "framer-motion";
import { ChapterHeader, Paragraphs, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { newspaper } from "../content";

export default function Newspaper() {
  const [day, setDay] = useState(newspaper.days[0].id);
  const d = newspaper.days.find((x) => x.id === day) ?? newspaper.days[0];
  const { masthead } = newspaper;

  return (
    <section id="jornal" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader no="06" kicker="jornal" title={renderTitle(newspaper.heading)} />
        <Reveal>
          <Paragraphs text={newspaper.lead} className="max-w-2xl text-lg text-bone/85" />
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {newspaper.days.map((x) => (
              <button
                key={x.id}
                onClick={() => setDay(x.id)}
                className={
                  "px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.16em] transition-colors " +
                  (day === x.id
                    ? "bg-bone text-black"
                    : "border border-bone/15 text-bone/70 hover:border-bone/40")
                }
              >
                {x.date.split("·")[1].trim()}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="paper-surface mt-8 overflow-hidden shadow-2xl">
            <div className="px-6 py-7 sm:px-10 sm:py-10">
              <div className="text-center">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-[#6f5a33]">
                  {masthead.region}
                </p>
                <h3 className="mt-2 font-serif text-3xl tracking-[0.06em] text-[#241b0d] sm:text-5xl">
                  {masthead.name}
                </h3>
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[#6f5a33]">
                  {masthead.tagline}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between border-y-2 border-[#241b0d] py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[#4a3a1e]">
                <span>{masthead.issue}</span>
                <span>edição {d.date}</span>
                <span className="hidden sm:inline">{d.rubric}</span>
              </div>

              <h4 className="mt-6 font-serif text-[clamp(1.5rem,3.4vw,2.8rem)] leading-[1.05] text-[#1e1609]">
                {d.headline}
              </h4>
              <p className="mt-3 border-b border-[#3a2d16]/30 pb-4 font-serif italic text-[0.95rem] leading-relaxed text-[#46361b] sm:text-lg">
                {d.deck}
              </p>

              <div
                className="mt-5 gap-6 text-[0.9rem] leading-[1.65] text-[#33270f] sm:columns-2 lg:columns-3"
                style={{ columnWidth: "240px" }}
              >
                {d.cols.map((c, i) => (
                  <p key={i} className="mb-4 break-inside-avoid">
                    <span className="mr-1 float-left font-serif text-[2.2rem] leading-[0.8] text-[#241b0d]">
                      {c.charAt(0)}
                    </span>
                    {c.slice(1)}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#3a2d16]/30 pt-4 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-[#6f5a33]">
                <span>{newspaper.stamp}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 max-w-3xl text-[0.82rem] leading-relaxed text-stone">
            {newspaper.disclaimer}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
