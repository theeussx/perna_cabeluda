import { ChapterHeader, Tag, Paragraphs, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { culture } from "../content";

export default function Culture() {
  return (
    <section id="cultura" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader no="13" kicker="cultura popular" title={renderTitle(culture.heading)} />
        <Reveal>
          <Paragraphs text={culture.lead} className="max-w-3xl text-lg text-bone/85" />
        </Reveal>

        <div className="mt-12 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {culture.shelf.map((c, i) => (
            <Reveal key={c.m} delay={(i % 3) * 0.05}>
              <article className="group h-full bg-ink p-6 transition-colors hover:bg-[#0e0d09]">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-bloodsoft" aria-hidden="true">
                    {c.g}
                  </span>
                  <span className="font-mono text-[0.52rem] uppercase tracking-[0.18em] text-stone">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <Tag className="mt-5 text-bone">{c.m}</Tag>
                <h3 className="mt-2 font-serif text-xl text-paper sm:text-2xl">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#c6bda2]">{c.d}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center border-t border-bone/20 bg-blood/[0.05] p-6">
              <p className="font-serif text-lg italic leading-snug text-paper">{culture.quote}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
