import { ChapterHeader, Tag } from "./ui";
import { Reveal } from "../lib/motion";

const VERSES = [
  { t: "i", lines: ["No Recife de setenta,", "quando a noite ia começar,", "apareceu uma perna", "sem ninguém pra assombrar?", "Caminhava pelas ruas,", "era só pra rastejar."] },
  { t: "ii", lines: ["Não tinha corpo nem rosto,", "nem dono pra reclamar,", "pelos pretos, pé no chão,", "ninguém pode acreditar:", "medo que sai pela boca,", "lenda que fica no ar."] },
  { t: "iii", lines: ["E o povo foi dizendo", "que a história era invenção,", "mas o medo é teimoso", "e mora no coração:", "meio século depois,", "ela ainda vem de montão."] },
];

export default function Cordel() {
  return (
    <section id="cordel" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="08"
          kicker="cordel"
          title="A lenda que virou verso"
        />
        <Reveal>
          <p className="max-w-2xl text-lg text-bone/85">
            Antes da televisão e da internet, a literatura de cordel imprimia as histórias do povo
            em folhetos pendurados em cordões. Dizem que a Perna entrou entre os temas mais
            populares dos versos pernambucanos. Abaixo, uma composição original, inspirada nesse
            estilo — não uma obra existente.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          {/* print */}
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
                  xilogravura digital inspirada na estética do cordel · composição original
                </figcaption>
              </div>
              <div
                className="pointer-events-none absolute inset-0 -m-1"
                style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)" }}
                aria-hidden="true"
              />
            </figure>
          </Reveal>

          {/* verses */}
          <div className="space-y-6">
            {VERSES.map((v) => (
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
              <p className="text-sm text-stone">
                Composição original deste projeto. Não é reprodução de folheto existente — e
                respeito à memória viva do cordel pernambucano, sem copiar qualquer obra protegida.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
