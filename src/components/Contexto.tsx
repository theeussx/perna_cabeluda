import { ChapterHeader, Tag, Paragraphs, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { contexto } from "../content";

export default function Contexto() {
  return (
    <section id="contexto" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="05"
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
      </div>
    </section>
  );
}
