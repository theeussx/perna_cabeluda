import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterHeader, Tag } from "./ui";
import { Reveal } from "../lib/motion";

type Day = {
  id: string;
  date: string;
  rubric: string;
  headline: string;
  deck: string;
  cols: string[];
};

const DAYS: Day[] = [
  {
    id: "d1",
    date: "quarta · 10 dez 1975",
    rubric: "Segundo Caderno — Nordeste e Municípios",
    headline: "Perna fantasma surge em moradia de Tiúma",
    deck: "Uma sombra de perna teria passeado pelas paredes de uma casa em Tiúma, São Lourenço da Mata. O caso, sem autor assinado, correu a vizinhança.",
    cols: [
      "São Lourenço da Mata. A notícia que causava reboliço na região era a de que uma residência estaria recebendo, segundo moradores, imagens sem corpo. Um rapaz de nome relatado como Wanderley teria dito que vira uma perna passeando pelas paredes da casa onde vivia com o pai.",
      "Na versão impressa, o fenômeno teria começado a aparecer ainda em fins de novembro, manifestando-se pelos cômodos, pendurando-se no telhado e, segundo alguns, transformando-se em formas de animal. Descreviam-na como uma perna de cerca de um metro, ou mais, sem dono.",
      "Diante do susto, o rapaz teria deixado a casa. Dias depois, o pai — de nome relatado como José — contaria ter avistado a mesma figura. A vizinhança passou a acorrer ao local para ver de perto o que o jornal chamava, naquele dezembro, de “perna fantasma”.",
    ],
  },
  {
    id: "d2",
    date: "quinta · 11 dez 1975",
    rubric: "política · nota policial",
    headline: "“Perna fantasma” já é problema policial",
    deck: "Assombrados, moradores de São Lourenço da Mata cogitavam apelar às autoridades. O padre da localidade teria se recusado a se envolver.",
    cols: [
      "A reportagem do dia seguinte dava conta de que o caso deixava de ser só assunto de casa: assombrados com o membro peludo, moradores da região metropolitana do Recife pensavam em pedir socorro à polícia.",
      "No mesmo dia, uma doméstica de nome relatado como Adélia teria declarado ter visto, primeiro, um pé — e depois aquilo que descreveu como uma “perna cabeluda”. Relatos contavam ainda que alguém que tentou agarrar a entidade teria levado um tapa no rosto.",
      "O padre da cidade teria se negado a participar do caso, o que, segundo a nota, revoltou parte dos fiéis. Outros recorreram a médiuns. É aqui, nas páginas de dezembro de 1975, que o termo “cabeluda” aparece ligado ao fenômeno.",
    ],
  },
  {
    id: "d3",
    date: "sábado · 13 dez 1975",
    rubric: "nota final",
    headline: "“Perna fantasma” seria invenção do povo",
    deck: "Poucos dias depois, o próprio jornal arrefecia o caso, sugerindo tratar-se de construção coletiva. A comoção, porém, já tinha nome.",
    cols: [
      "Em poucos dias a novela parecia encerrada: o periódico dizia, numa manchete de alívio, que a perna fantasma teria sido uma invenção do povo — um eco do modo como uma notícia cresce e morre.",
      "Para o jornalismo, o caso era também um efeito da falta do que noticiar sob a censura da época: matérias cortadas, espaços vazios, redações que preenchiam páginas com o que tinham à mão.",
      "A história, porém, não se apagou com a manchete de negação. Repetida no rádio e nas ruas, ela já pertencia ao imaginário — e voltaria, semanas depois, como crônica e como lenda.",
    ],
  },
];

export default function Newspaper() {
  const [day, setDay] = useState("d1");
  const d = DAYS.find((x) => x.id === day)!;

  return (
    <section id="jornal" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="06"
          kicker="jornal"
          title={
            <>
              A página <span className="text-bloodsoft">que registrou</span>
            </>
          }
        />
        <Reveal>
          <p className="max-w-2xl text-lg text-bone/85">
            O jornal foi o primeiro grande espelho da lenda. Vire as datas de dezembro de 1975 e
            observe como uma notícia cresce, alimenta o medo e, depois, se desmente — sem apagar a
            história que já ficou na cabeça de todo mundo.
          </p>
        </Reveal>

        {/* day tabs */}
        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {DAYS.map((x) => (
              <button
                key={x.id}
                onClick={() => setDay(x.id)}
                className={
                  "px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.16em] transition-colors " +
                  (day === x.id
                    ? "bg-bone text-black"
                    : "border border-bone/15 text-bone/70 hover:border-bone/40")
                }
              >
                {x.date.split("·")[1].trim()}
              </button>
            ))}
          </div>
        </Reveal>

        {/* the sheet */}
        <Reveal>
          <div className="paper-surface mt-8 overflow-hidden shadow-2xl">
            <div className="px-6 py-7 sm:px-10 sm:py-10">
              {/* masthead */}
              <div className="text-center">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-[#6f5a33]">
                  Recife · Pernambuco · Brasil
                </p>
                <h3 className="mt-2 font-serif text-3xl tracking-[0.06em] text-[#241b0d] sm:text-5xl">
                  DIÁRIO
                </h3>
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[#6f5a33]">
                  fundado em 1825 · o jornal diário mais antigo em circulação na América Latina
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between border-y-2 border-[#241b0d] py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[#4a3a1e]">
                <span>ano 150</span>
                <span>edição {d.date}</span>
                <span className="hidden sm:inline">{d.rubric}</span>
              </div>

              {/* headline + deck */}
              <h4 className="mt-6 font-serif text-[clamp(1.5rem,3.4vw,2.8rem)] leading-[1.05] text-[#1e1609]">
                {d.headline}
              </h4>
              <p className="mt-3 border-b border-[#3a2d16]/30 pb-4 font-serif italic text-[0.95rem] leading-relaxed text-[#46361b] sm:text-lg">
                {d.deck}
              </p>

              {/* columns */}
              <div
                className="mt-5 gap-6 text-[0.9rem] leading-[1.65] text-[#33270f] sm:columns-2 lg:columns-3"
                style={{ columnWidth: "240px" }}
              >
                {d.cols.map((c, i) => (
                  <p key={i} className={i > 0 ? "mt-0 [&]:mt-4 break-inside-avoid mb-4" : "mb-4"}>
                    <span className="mr-1 float-left font-serif text-[2.2rem] leading-[0.8] text-[#241b0d]">
                      {c.charAt(0)}
                    </span>
                    {c.slice(1)}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#3a2d16]/30 pt-4 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-[#6f5a33]">
                <span>texto adaptado em paráfrase · sem fins de reprodução fiel</span>
                <span className="text-[#4a3a1e]">▍não constitui prova de ocorrência sobrenatural</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 max-w-3xl text-[0.82rem] leading-relaxed text-stone">
            As manchetes acima reproduzem, em paráfrase, registros atribuídos ao Diário de
            Pernambuco de dezembro de 1975, como citados por reportagens e estudos sobre a lenda.
            Não são transcrições literais das páginas originais.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
