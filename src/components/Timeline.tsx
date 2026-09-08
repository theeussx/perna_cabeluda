import { motion } from "framer-motion";
import { ChapterHeader, Tag } from "./ui";
import { Reveal } from "../lib/motion";

const ITEMS: Array<{ y: string; t: string; tag: string }> = [
  { y: "1970", t: "Recife vive sob a ditadura militar, com censura nas redações. É o ambiente onde a história vai circular.", tag: "contexto" },
  { y: "1975", t: "Em dezembro, o Diário de Pernambuco noticia a “perna fantasma” de Tiúma — o primeiro registro jornalístico conhecido da lenda.", tag: "registro" },
  { y: "1976", t: "O nome “Perna Cabeluda” se consolida na crônica e num texto ficcional de Raimundo Carrero (fev/1976). O folclore começa.", tag: "cultura" },
  { y: "anos seguintes", t: "Pelo relato oral, pelo rádio, pelo cordel e pelo carnaval, a perna atravessa a cidade e os estados vizinhos.", tag: "circulação" },
  { y: "1990", t: "A lenda é reapropriada pela cultura pernambucana contemporânea — da memória oral a projetos de documentário.", tag: "reapropriação" },
  { y: "2025", t: "A lenda volta ao debate público quando o filme O Agente Secreto, de Kleber Mendonça Filho, a recria numa trama sobre o Recife de 1977.", tag: "cinema" },
  { y: "2026", t: "Meio século depois, a história chega a esta experiência digital — e, se você contar o que leu, segue adiante.", tag: "você" },
];

export default function Timeline() {
  return (
    <section id="linha-do-tempo" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <ChapterHeader no="12" kicker="linha do tempo" title="Meio século de uma perna" />
        <div className="relative">
          {/* line */}
          <motion.div
            className="absolute left-[9px] top-0 h-full w-px bg-gradient-to-b from-transparent via-bone/30 to-transparent md:left-1/2"
            aria-hidden="true"
          />
          <div className="space-y-10">
            {ITEMS.map((it, i) => (
              <Reveal key={i}>
                <div
                  className={
                    "relative flex gap-6 md:w-[calc(50%-28px)] " +
                    (i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto")
                  }
                >
                  {/* node */}
                  <motion.span
                    className={
                      "absolute top-1.5 left-[9px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-bloodsoft md:left-auto " +
                      (i % 2 === 0 ? "md:right-[-40px] md:translate-x-0" : "md:left-[-40px] md:-translate-x-1/2")
                    }
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4 }}
                    aria-hidden="true"
                  />
                  <div className="flex-1 pl-10 md:pl-0">
                    <Tag className="text-bloodsoft">{it.tag}</Tag>
                    <p className="mt-2 font-serif text-3xl text-paper sm:text-4xl">{it.y}</p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[#c6bda2]">{it.t}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
