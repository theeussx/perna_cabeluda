import { Reveal } from "../lib/motion";

const ITEMS = [
  {
    k: "FATO",
    d: "A existência de registros — matérias de jornal, crônicas, relatos, pesquisas e obras que documentam a lenda e sua época.",
    tone: "text-paper border-bone/40",
  },
  {
    k: "RELATO",
    d: "Histórias atribuídas a moradores e testemunhas — o que “dizem que aconteceu”, sem verificação possível.",
    tone: "text-bone border-bone/25",
  },
  {
    k: "LENDA",
    d: "A criatura em si: uma perna sem corpo que dava rasteiras. Não apresentada aqui como realidade, e sim como imaginário.",
    tone: "text-bloodsoft border-blood/40",
  },
  {
    k: "INTERPRETAÇÃO",
    d: "Leituras acadêmicas e culturais sobre o que a lenda pode ter significado no seu tempo — hipóteses, não provas.",
    tone: "text-bone border-bone/25",
  },
];

export default function Legend() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {ITEMS.map((it, i) => (
        <Reveal key={it.k} delay={i * 0.06}>
          <div className="h-full border-t border-bone/15 bg-white/[0.015] p-5">
            <p className={`font-mono text-[0.7rem] tracking-[0.28em] ${it.tone}`}>{it.k}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#c9bfa4]">{it.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
