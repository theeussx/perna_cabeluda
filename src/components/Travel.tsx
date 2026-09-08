import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChapterHeader, Tag } from "./ui";
import { Reveal } from "../lib/motion";

type Stage = {
  id: string;
  label: string;
  era: "1970" | "hoje";
  title: string;
  body: string;
  glyph: string;
};

const STAGES: Stage[] = [
  {
    id: "relato",
    label: "Relato",
    era: "1970",
    title: "Uma voz numa noite",
    body: "Alguém diz que viu. Outro escuta, duvida, repete. Antes de qualquer jornal ou tela, a história já existe — na boca, no medo, no desejo de contar.",
    glyph: "⟦",
  },
  {
    id: "jornal",
    label: "Jornal",
    era: "1970",
    title: "A página que registra",
    body: "Em dezembro de 1975 o Diário de Pernambuco noticia a “perna fantasma” de Tiúma. O papel transforma um rumor local num caso conhecido — ainda que “conhecido” signifique discutido, não provado.",
    glyph: "§",
  },
  {
    id: "radio",
    label: "Rádio",
    era: "1970",
    title: "A voz que alcança milhares",
    body: "Noticiários da madrugada e relatos ao vivo (o rádio, como no caso atribuído a Jota Ferreira) fazem a história atravessar bairros inteiros numa única noite. A voz viaja mais rápido que o pé.",
    glyph: "≈",
  },
  {
    id: "boca",
    label: "Boca a boca",
    era: "1970",
    title: "Cada pessoa, uma versão",
    body: "Recontada de casa em casa, a perna ganha detalhes: tamanho, unhas, pelos, quem ela pegou. O boca a boca não copia a história — a inventa de novo a cada vez.",
    glyph: "◠",
  },
  {
    id: "cordel",
    label: "Cordel",
    era: "1970",
    title: "O verso que vira impresso",
    body: "A lenda entra em folhetos e versos populares — dizem que entre os temas mais comuns do cordel de então. Impressa em cordel, a história já não depende de quem a conta; depende de quem a lê.",
    glyph: "❧",
  },
  {
    id: "cultura",
    label: "Cultura popular",
    era: "1970",
    title: "Do medo à folia",
    body: "O pavor vira “grea” — brincadeira. A perna entra em marchinhas, blocos e fantasias de carnaval. Assustar já não é a única função; divertir também.",
    glyph: "♪",
  },
  {
    id: "cinema",
    label: "Cinema",
    era: "hoje",
    title: "A lenda volta à tela",
    body: "Em 2025, o filme O Agente Secreto, de Kleber Mendonça Filho, recria a Perna Cabeluda num Recife dos anos 1970. Meio século depois, o cinema é mais uma tecnologia que mantém a história viva.",
    glyph: "▣",
  },
  {
    id: "internet",
    label: "Internet",
    era: "hoje",
    title: "O rumor, agora em rede",
    body: "O boca a boca virou feed. A lenda circula em vídeos, memes e comentários — o boato de ontem reage com a velocidade de hoje. Continua difícil de verificar. Continua fácil de repetir.",
    glyph: "◎",
  },
  {
    id: "voce",
    label: "Você",
    era: "hoje",
    title: "E agora, você",
    body: "Aqui, neste navegador, a história encontra mais um meio. Se você contar o que leu — a alguém, num post — o ciclo recomeça.",
    glyph: "☽",
  },
];

export default function Travel() {
  const [activeId, setActiveId] = useState("relato");
  const active = STAGES.find((s) => s.id === activeId)!;

  return (
    <section id="viagem" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="05"
          kicker="como a história se espalha"
          title="COMO UMA HISTÓRIA VIAJA?"
        />
        <Reveal>
          <p className="max-w-2xl text-lg text-bone/85">
            Toque em cada estação do caminho. É a jornada que a Perna percorreu — do quintal de
            Tiúma até esta tela — passando pelas tecnologias de cada época.
          </p>
        </Reveal>

        {/* era legend */}
        <Reveal>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-stone">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-bone/70" /> os meios dos anos 1970
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-paper" /> os meios de hoje
            </span>
          </div>
        </Reveal>

        {/* the river / chain */}
        <div className="mt-10 flex flex-wrap items-stretch gap-y-2">
          {STAGES.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <button
                onClick={() => setActiveId(s.id)}
                aria-pressed={activeId === s.id}
                className={
                  "relative px-4 py-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] transition-colors sm:text-[0.72rem] " +
                  (activeId === s.id
                    ? s.era === "1970"
                      ? "bg-bone text-black"
                      : "bg-paper text-black"
                    : "border border-bone/15 text-bone/70 hover:border-bone/40 hover:text-bone")
                }
              >
                {s.label}
                {activeId === s.id && <span className="sr-only">· selecionado</span>}
              </button>
              {i < STAGES.length - 1 && (
                <span aria-hidden className="px-1 text-bone/30">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* detail */}
        <div className="mt-10 border-t border-bone/10 pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start"
            >
              <div
                className={
                  "flex h-20 w-20 shrink-0 items-center justify-center border font-serif text-4xl " +
                  (active.era === "1970"
                    ? "border-bone/40 text-bone"
                    : "border-paper/40 text-paper")
                }
                aria-hidden="true"
              >
                <span className="flicker">{active.glyph}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Tag className={active.era === "1970" ? "text-bone" : "text-paper"}>
                    {active.era === "1970" ? "meio · anos 1970" : "meio · hoje"}
                  </Tag>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-stone">
                    {String(STAGES.indexOf(active) + 1).padStart(2, "0")} / {STAGES.length}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-2xl text-paper sm:text-3xl">{active.title}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-[#c6bda2]">{active.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="font-serif text-2xl italic text-bone sm:text-3xl">
              A tecnologia muda.
            </p>
            <p className="font-serif text-2xl italic text-bone sm:text-3xl">A história continua.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
