import { Reveal, TextReveal } from "../lib/motion";
import { Tag } from "./ui";

const GROUPS: Array<{ h: string; note: string; items: Array<{ t: string; d: string; u?: string }> }> = [
  {
    h: "Registro histórico (citado)",
    note: "Registros de 1975–1976, como reproduzidos e citados pela imprensa e por estudos posteriores.",
    items: [
      {
        t: "Diário de Pernambuco",
        d: "Cobertura de dezembro de 1975 sobre a “perna fantasma” de Tiúma/São Lourenço da Mata (ex.: “Perna fantasma surge em moradia de Tiúma”, 10/12/1975). Matérias sem assinatura.",
      },
      {
        t: "Raimundo Carrero",
        d: "Crônica ficcional “Perna Cabeluda chega em Olinda”, na coluna de romance policial do Diário de Pernambuco, 01/02/1976 (como relatado pelo próprio autor em entrevistas).",
      },
    ],
  },
  {
    h: "Cobertura jornalística contemporânea (2025–2026)",
    note: "Reportagens usadas para reconstituir fatos e relatos; artigos informativos, alguns detalhando as origens e a ditadura.",
    items: [
      { t: "Folha de S.Paulo — Ilustrada", d: "“Antes de ‘O Agente Secreto’, ‘perna cabeluda’ assombrou Recife e animou Carnaval” (nov/2025).", u: "https://www1.folha.uol.com.br/ilustrada/2025/11/antes-de-o-agente-secreto-perna-cabeluda-assombrou-recife-e-animou-carnaval.shtml" },
      { t: "O Estado de S. Paulo — Cultura", d: "“O que é a ‘Perna Cabeluda’, lenda urbana do Recife que aparece em ‘O Agente Secreto’?” (nov/2025).", u: "https://www.estadao.com.br/cultura/cinema/" },
      { t: "G1 — Pernambuco", d: "“O que a aparição da lenda da ‘Perna Cabeluda’ em ‘O Agente Secreto’ diz sobre a ditadura” (jan/2026).", u: "https://g1.globo.com/pe/pernambuco/" },
      { t: "Jornal do Commercio (PE)", d: "Matérias sobre lendas urbanas do Recife e a leitura da lenda sobre a ditadura (out–nov/2025).", u: "https://jc.uol.com.br/cultura/" },
      { t: "CNN Brasil", d: "“O Agente Secreto: entenda a lenda urbana da ‘perna cabeluda’” (nov/2025).", u: "https://www.cnnbrasil.com.br/pop/" },
      { t: "Agência Pública", d: "“Perna Cabeluda: como lenda que levou Recife ao Oscar ajudou a retratar a ditadura” (mar/2026).", u: "https://apublica.org/" },
    ],
  },
  {
    h: "Pesquisa e interpretação (como citado)",
    note: "Autores e pesquisadores citados na imprensa; as interpretações são apresentadas como hipóteses, não como provas.",
    items: [
      { t: "João Paulo Reis Braga", d: "Artigo “A Perna Cabeluda: Violência sobrenatural e factual na cidade do Recife” (doutor em Ciências da Religião)." },
      { t: "Manoel Moraes", d: "Pesquisador na Universidade Católica de Pernambuco (UNICAP), citado sobre o clima de repressão no Recife dos anos 1970." },
      { t: "Roberto Beltrão", d: "Jornalista e escritor, estudioso das assombrações do Recife, citado sobre o papel das lendas no imaginário popular." },
      { t: "Universidade Católica de Pernambuco (UNICAP)", d: "Instituição de pesquisa citada nos estudos sobre o período e sobre a lenda." },
    ],
  },
  {
    h: "Arte, cinema e cultura",
    note: "Obras citadas como exemplos culturais; as imagens deste site são composições originais deste projeto.",
    items: [
      { t: "O Agente Secreto (2025)", d: "Filme de Kleber Mendonça Filho que recria a lenda num Recife do fim dos anos 1970." },
      { t: "Cordel e xilogravura", d: "Referência estética. As ilustrações e versos deste site são originais e não reproduzem obras existentes." },
    ],
  },
];

export default function Ending() {
  return (
    <>
      {/* 19 · title card */}
      <section className="relative flex min-h-screen items-center justify-center bg-black px-6 py-28 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_108%,rgba(138,30,22,0.22),transparent_70%)]" />
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-bloodsoft">
              fim · ou continuação
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-[clamp(3rem,12vw,9rem)] leading-none text-paper">
              <TextReveal text="PERNA CABELUDA" />
            </h2>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mx-auto mt-8 max-w-xl font-serif text-xl italic leading-snug text-bone sm:text-2xl">
              Uma história que Recife nunca conseguiu esquecer.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-col items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-stone">
              <span>Projeto — Setembro Literário</span>
              <span>Tecnologia + Literatura + Cultura Pernambucana</span>
              <span className="mt-2 text-bone/70">Perna Cabeluda · experiência digital · 2026</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 20 · sources */}
      <section id="fontes" className="relative px-5 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-bloodsoft">
              20 · arquivo
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-4xl text-paper sm:text-5xl">FONTES / ARQUIVO</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#c6bda2]">
              Como ler estas fontes: este é um projeto escolar e educativo. Usamos cobertura
              jornalística e acadêmica secundária, cruzada entre veículos — e não a Wikipédia como
              fonte principal. Quando um texto foi adaptado ou parafraseado, avisamos na própria
              página. Nada aqui pretende provar a existência da criatura, e nenhum depoimento,
              citação ou data foi inventado.
            </p>
          </Reveal>

          <div className="mt-12 space-y-12">
            {GROUPS.map((g, gi) => (
              <div key={g.h}>
                <Reveal>
                  <div className="flex flex-wrap items-center gap-3">
                    <Tag className="text-bloodsoft">arquivo · {String(gi + 1).padStart(2, "0")}</Tag>
                    <h3 className="font-serif text-xl text-paper sm:text-2xl">{g.h}</h3>
                  </div>
                  <p className="mt-1 max-w-2xl text-xs italic text-stone">{g.note}</p>
                </Reveal>
                <div className="mt-4 space-y-px bg-bone/10">
                  {g.items.map((it) => (
                    <Reveal key={it.t}>
                      <div className="grid gap-1 bg-ink px-5 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                        <p className="font-serif text-base text-bone">{it.t}</p>
                        <div>
                          <p className="text-sm leading-relaxed text-[#c6bda2]">{it.d}</p>
                          {it.u && (
                            <a
                              href={it.u}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="mt-1 inline-block break-all font-mono text-[0.58rem] text-stone underline-offset-2 hover:text-bone hover:underline"
                            >
                              {it.u}
                            </a>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 border-t border-bone/15 pt-8 text-center">
              <p className="font-serif text-2xl italic leading-snug text-bone">
                As tecnologias mudam. <br /> As histórias permanecem.
              </p>
              <p className="mt-6 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-stone">
                recife · pernambuco · 1975 → 2026
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
