import { ChapterHeader, Tag, renderTitle } from "./ui";
import { Reveal, TextReveal } from "../lib/motion";
import { cinema } from "../content";

export default function Cinema() {
  return (
    <section id="cinema" className="relative overflow-hidden bg-[#040302] px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader no="14" kicker="cinema" title={<TextReveal text={cinema.heading.text} />} />
        <div className="mt-4 grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <figure className="relative">
              <div className="relative overflow-hidden border border-bone/15 bg-black">
                <div className="h-6 w-full bg-black md:h-8" />
                <img
                  src={cinema.image.src}
                  alt={cinema.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
                <div className="h-6 w-full bg-black md:h-8" />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-mono text-[0.72rem] tracking-[0.2em] text-paper/70">
                  ⎔ REC
                </span>
              </div>
              <figcaption className="mt-3 text-center font-mono text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                {cinema.filmStillCaption}
              </figcaption>
            </figure>
          </Reveal>

          <div className="space-y-6">
            {cinema.paragraphs.map((p, i) => (
              <Reveal key={i}>
                <p
                  className={
                    i === 0
                      ? "text-xl leading-relaxed text-bone"
                      : "text-[1.1rem] leading-relaxed text-[#c6bda2]"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal>
              <div className="grid grid-cols-2 gap-px bg-bone/10">
                {cinema.specs.map((s) => (
                  <div key={s.k} className="bg-[#070604] p-4">
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-stone">
                      {s.k}
                    </p>
                    <p className="mt-1 font-serif text-xl text-paper">{s.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <p className="text-[1rem] text-stone">{cinema.note}</p>
            </Reveal>
            <Reveal>
              <div className="border-l-2 border-bone/40 bg-white/[0.02] p-4">
                <Tag className="text-bone">{cinema.pullTag}</Tag>
                <p className="mt-2 font-serif text-2xl italic leading-snug text-paper">
                  {cinema.pull}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
