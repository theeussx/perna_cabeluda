import { ChapterHeader, Tag } from "./ui";
import { Reveal, TextReveal } from "../lib/motion";

export default function Cinema() {
  return (
    <section id="cinema" className="relative overflow-hidden bg-[#040302] py-24 sm:px-10 md:py-36 px-5">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="14"
          kicker="cinema"
          title={<TextReveal text="Ela voltou para a tela." />}
        />
        <div className="mt-4 grid items-start gap-12 lg:grid-cols-2">
          {/* film still */}
          <Reveal>
            <figure className="relative">
              {/* letterbox */}
              <div className="relative overflow-hidden border border-bone/15 bg-black">
                <div className="h-6 w-full bg-black md:h-8" />
                <img
                  src="/art/leg-action.webp"
                  alt="Perna Cabeluda em movimento, em uma composição inspirada em um fotograma de cinema"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
                <div className="h-6 w-full bg-black md:h-8" />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-mono text-[0.55rem] tracking-[0.2em] text-paper/70">
                  ⎔ REC
                </span>
              </div>
              <figcaption className="mt-3 text-center font-mono text-[0.55rem] uppercase tracking-[0.18em] text-stone">
                composição inspirada em um fotograma — não é cena do filme
              </figcaption>
            </figure>
          </Reveal>

          {/* reading */}
          <div className="space-y-6">
            <Reveal>
              <p className="text-lg leading-relaxed text-bone/90">
                O cinema é só mais uma tecnologia por onde a história continua viva. Em 2025, o
                filme <span className="text-paper">O Agente Secreto</span>, de{" "}
                <span className="text-paper">Kleber Mendonça Filho</span>, recria a Perna Cabeluda
                num Recife do fim dos anos 1970 — o mesmo período em que a lenda nasceu.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-[0.98rem] leading-relaxed text-[#c6bda2]">
                Nas entrevistas que deram ao filme, jornalistas e pesquisadores voltaram a explicar
                a lenda — como código para falar de violência numa época de censura, e como prova da
                imaginação popular. A Perna voltou a ser notícia, mas agora para um público que não a
                conhecia.
              </p>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-2 gap-px bg-bone/10 text-sm">
                <div className="bg-[#070604] p-4">
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-stone">filme</p>
                  <p className="mt-1 font-serif text-lg text-paper">O Agente Secreto</p>
                </div>
                <div className="bg-[#070604] p-4">
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-stone">direção</p>
                  <p className="mt-1 font-serif text-lg text-paper">Kleber Mendonça Filho</p>
                </div>
                <div className="bg-[#070604] p-4">
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-stone">recorte</p>
                  <p className="mt-1 font-serif text-lg text-paper">Recife, fim dos anos 1970</p>
                </div>
                <div className="bg-[#070604] p-4">
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-stone">lançamento</p>
                  <p className="mt-1 font-serif text-lg text-paper">cinemas · 2025</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <p className="text-sm text-stone">
                Não é nosso objetivo falar do filme em si, e sim de como ele ilustra esta ideia: uma
                lenda que atravessa cinco décadas e encontra, em cada geração, um novo meio para
                continuar.
              </p>
            </Reveal>
            <Reveal>
              <div className="border-l-2 border-bone/40 bg-white/[0.02] p-4">
                <Tag className="text-bone">a tela é mais um veículo</Tag>
                <p className="mt-2 font-serif text-lg italic leading-snug text-paper">
                  A tecnologia muda. A história permanece.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
