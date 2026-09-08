import { ChapterHeader, Tag } from "./ui";
import { Reveal } from "../lib/motion";

const SHELF: Array<{ g: string; m: string; t: string; d: string }> = [
  { g: "❧", m: "cordel", t: "Verso de feira", d: "A perna salta para os folhetos, impressa em papel barato, lida em voz alta. A lenda que também vira literatura popular." },
  { g: "♪", m: "música", t: "Marchinha e frevo", d: "Dizem os registros que, já em 1976, a perna virou tema de música de carnaval do Recife — assustar, afinal, cansa." },
  { g: "◐", m: "carnaval", t: "Fantasia e bloco", d: "O medo vira fantasia. Blocos e brincantes vestem a perna — a assombração desfila na folia que ela mesma ajudou a aterrorizar." },
  { g: "§", m: "literatura", t: "Crônica e conto", d: "De coluna policial a conto assinado (Carrero, fev/1976), a Perna atravessa a prosa recifense com humor e mistério." },
  { g: "▣", m: "cinema", t: "A tela grande", d: "Em 2025, um filme a ressuscita para o público de todo o Brasil — a lenda que já era memória volta a ser imagem." },
  { g: "◠", m: "memória oral", t: "Quem ainda conta", d: "Na calçada, na sala, na escola: quem viveu os anos 1970 ainda narra a perna com detalhe e um sorriso de quem já se acostumou." },
  { g: "◎", m: "cultura urbana", t: "Do frevo ao feed", d: "Meio século depois, a perna pula dos blocos para vídeos, memes e comentários — mesma lenda, novo boca a boca." },
];

export default function Culture() {
  return (
    <section id="cultura" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="13"
          kicker="cultura popular"
          title="Quando o pavor vira cultura"
        />
        <Reveal>
          <p className="max-w-3xl text-lg text-bone/85">
            Toda boa lenda acaba virando outra coisa: o medo amolece, o susto vira riso e a
            história passa a pertencer a quem a conta. Veja as estantes de um arquivo cultural
            imaginário.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {SHELF.map((c, i) => (
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
              <p className="font-serif text-lg italic leading-snug text-paper">
                “O medo real durou uns dois anos — depois virou “grea”.”{" "}
                <span className="text-stone">— leitura atribuída a estudiosos da lenda</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
