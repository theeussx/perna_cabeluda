import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, TextReveal } from "../lib/motion";
import { ChapterHeader, Tag } from "./ui";
import Legend from "./Legend";

const CARDS = [
  {
    id: "ocorrencia",
    label: "O primeiro registro",
    heading: "Uma “perna fantasma” em Tiúma",
    body: "Entre 10 e 13 de dezembro de 1975, o Diário de Pernambuco publicou uma série de notas sobre uma suposta aparição numa casa de Tiúma, em São Lourenço da Mata, Região Metropolitana do Recife — bairro por vezes descrito como Usina Tiúma. As matérias saíram sem assinatura.",
    tags: ["FATO", "10–13 dez 1975", "Diário de Pernambuco"],
  },
  {
    id: "nome",
    label: "O nome",
    heading: "“Perna Fantasma” → “Perna Cabeluda”",
    body: "Naquele dezembro a imprensa chamou a aparição de “perna fantasma”. O nome “Perna Cabeluda” consolidou-se aos poucos, em 1976, na crônica de colunistas e, sobretudo, no texto ficcional de Raimundo Carrero publicado em 1º de fevereiro de 1976.",
    tags: ["FATO", "1976", "cultura impressa"],
  },
  {
    id: "circulacao",
    label: "A circulação",
    heading: "Jornal, rádio, cordel, carnaval",
    body: "A história saiu das páginas policiais, foi comentada em rádio (relatos atribuídos ao jornalista Jota Ferreira) e entrou na cultura popular — virando folheto de cordel, marchinha e tema de bloco de carnaval. Diferentes autores contam versões distintas sobre a origem.",
    tags: ["FATO + RELATO", "1975–1976+", "cultura popular"],
  },
];

export default function Archive() {
  const [active, setActive] = useState("ocorrencia");
  const card = CARDS.find((c) => c.id === active)!;

  return (
    <section id="arquivo" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="04"
          kicker="arquivo"
          title={<TextReveal text="ARQUIVO 1975" />}
        />
        <Reveal>
          <p className="max-w-2xl text-lg text-bone/85">
            Quando uma história impossível ganhou as páginas do Recife. Aqui começamos a
            separar o que foi <em className="text-paper not-italic font-medium">registrado</em> do que
            foi apenas <em className="text-paper not-italic font-medium">dito</em>.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* record sheet */}
          <Reveal>
            <div className="relative paper-surface overflow-hidden p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="font-serif text-sm tracking-wide text-[#5a4527]">
                  DIÁRIO DE PERNAMBUCO · RECIFE
                </p>
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[#6f5a33]">
                  dezembro · 1975
                </p>
              </div>
              <div className="mt-4 h-px w-full bg-[#2b2110]/40" />
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-[#4a3a1e]"
                  >
                    ▍{t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-[auto_1fr]">
                {/* tabs */}
                <div className="flex gap-2 md:flex-col">
                  {CARDS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setActive(c.id)}
                      className={
                        "px-3 py-2 text-left font-mono text-[0.6rem] uppercase tracking-[0.12em] transition-colors " +
                        (active === c.id
                          ? "bg-[#221a10] text-[#e4d6ad]"
                          : "text-[#6f5a33] hover:text-[#3a2d16]")
                      }
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                {/* content */}
                <div className="relative min-h-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="font-serif text-2xl leading-tight text-[#241b0d] sm:text-3xl">
                        {card.heading}
                      </h3>
                      <p className="mt-4 text-[0.98rem] leading-relaxed text-[#46361b]">
                        {card.body}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-[#2b2110]/40 pt-4">
                <Tag className="border-[#2b2110]/50 text-[#4a3a1e]">reprodução · não é a página original</Tag>
                <Tag className="border-[#2b2110]/50 text-[#4a3a1e]">registro ≠ prova</Tag>
              </div>
            </div>
          </Reveal>

          {/* reading column */}
          <div className="space-y-4">
            <Reveal>
              <p className="lede text-[1.05rem] leading-relaxed">
                A perna fantasma de Tiúma aparece na imprensa de dezembro de 1975 —{" "}
                <span className="text-paper">o primeiro registro jornalístico conhecido da lenda</span>.
                Não como prova de que a criatura existiu, e sim como prova de que a{" "}
                <em>história</em> já circulava.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="border-l-2 border-blood/60 bg-blood/[0.06] p-4 text-sm text-bone/90">
                Dizem que, naqueles dias, famílias de São Lourenço da Mata teriam passado noites
                sem dormir, chamado o padre e procurado médiuns. O padre teria se recusado a
                participar. Não há como confirmar — é relato.
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[0.8rem] leading-relaxed text-stone">
                Neste projeto usamos três chaves para ler tudo o que vem a seguir. Elas voltam
                várias vezes.
              </p>
            </Reveal>
            <Legend />
          </div>
        </div>
      </div>
    </section>
  );
}
