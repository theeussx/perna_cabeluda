import { ChapterHeader, Paragraphs, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { cordel } from "../content";

export default function Cordel() {
  return (
    <section id="cordel" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader no="08" kicker="cordel" title={renderTitle(cordel.heading)} />
        <Reveal>
          <Paragraphs text={cordel.lead} className="max-w-2xl text-lg text-bone/85" />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <figure className="relative">
              <div className="paper-surface overflow-hidden p-4 sm:p-6">
                <div className="border border-[#2b2110]/40 p-2">
                  <img
                    src="/art/cordel-print.webp"
                    alt="Xilogravura estilizada da Perna Cabeluda saltando sobre casas de uma vila sob a lua"
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#6f5a33]">
                  {cordel.figureCaption}
                </figcaption>
              </div>
              <div
                className="pointer-events-none absolute inset-0 -m-1"
                style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)" }}
                aria-hidden="true"
              />
            </figure>
          </Reveal>

          <div className="space-y-6">
            {cordel.verses.map((v) => (
              <Reveal key={v.t}>
                <div className="border-b border-bone/10 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-bloodsoft">
                      estrofe {v.t}
                    </span>
                    <span className="h-px flex-1 bg-bone/10" />
                  </div>
                  <div className="mt-3 space-y-1 font-serif text-[1.15rem] italic leading-relaxed text-bone/90 sm:text-[1.3rem]">
                    {v.lines.map((l, i) => (
                      <p key={i} className="indent-2">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <Paragraphs text={cordel.disclaimer} className="text-sm text-stone" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
