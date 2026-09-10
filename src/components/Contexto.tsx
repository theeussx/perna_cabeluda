import { ChapterHeader, Tag, Paragraphs, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { contexto } from "../content";

export default function Contexto() {
  return (
    <section id="contexto" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="09"
          kicker="o que existia por trás da lenda"
          title={renderTitle(contexto.heading)}
        />
        <Reveal>
          <Paragraphs text={contexto.lead} className="max-w-3xl text-xl leading-relaxed text-bone/90" />
        </Reveal>

        <div className="mt-12 grid gap-px bg-bone/10 md:grid-cols-3">
          {contexto.docs.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <article className="h-full bg-ink p-7">
                <Tag className="text-bloodsoft">leitura · {d.kind}</Tag>
                <h3 className="mt-4 font-serif text-2xl text-paper sm:text-3xl">{d.title}</h3>
                <p className="mt-3 text-[1.08rem] leading-relaxed text-[#c6bda2]">{d.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 border-l-2 border-bone/40 bg-bone/[0.04] p-6 sm:p-8">
            <p className="font-serif text-xl italic leading-relaxed text-paper sm:text-2xl">
              {contexto.caution}
            </p>
            <p className="mt-4 max-w-3xl text-[1.1rem] leading-relaxed text-[#c6bda2]">{contexto.caution2}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {contexto.registers.map((r, i) => (
            <Reveal key={r.k} delay={i * 0.05}>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-bone/25 font-mono text-[0.78rem] uppercase tracking-widest text-bone">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 font-serif text-xl uppercase tracking-wide text-paper">{r.k}</p>
                <p className="mx-auto mt-2 max-w-xs text-[1rem] text-stone">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
