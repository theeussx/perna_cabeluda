import { ChapterHeader, Tag } from "./ui";
import { Reveal } from "../lib/motion";

const DOCS = [
  {
    kind: "interp.",
    title: "Uma cidade sob vigilância",
    body: "Pesquisadores lembram que Recife dos anos 1970 vivia sob a ditadura militar: a cidade era sede do Quarto Exército, epicentro de repressão no Nordeste, com censura presente nas redações. Matérias podiam ser cortadas horas antes do fechamento do jornal.",
  },
  {
    kind: "interp.",
    title: "Notícia que precisava existir",
    body: "Há quem leia a Perna como um reflexo desse vazio: com espaços censurados e crimes difíceis de noticiar, o absurdo ocupava as páginas. O próprio Raimundo Carrero já disse que sua história nasceu como uma brincadeira para preencher espaço — e que a violência contra mulheres, por exemplo, era difícil de publicar diretamente.",
  },
  {
    kind: "interp.",
    title: "Medo sem rosto",
    body: "Para estudiosos, uma perna sem corpo — que invade, ataca e some — era uma imagem pronta para condensar o medo do que rondava à noite sem se deixar identificar. Interpretação, não prova. A lenda falaria tanto do sobrenatural quanto das tensões de quem a contava.",
  },
];

const REG = ["REGISTRO", "INTERPRETAÇÃO", "LENDÁRIO"];

export default function Contexto() {
  return (
    <section id="contexto" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="09"
          kicker="o que existia por trás da lenda"
          title={
            <>
              Nem só do <span className="text-bloodsoft">sobrenatural</span> vivia o medo
            </>
          }
        />
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-bone/85">
            Aqui a experiência vira, em parte, um documentário. Para entender por que uma perna sem
            corpo assombrou tanta gente, é preciso lembrar o Recife onde ela nasceu.
          </p>
        </Reveal>

        {/* dossier cards */}
        <div className="mt-12 grid gap-px bg-bone/10 md:grid-cols-3">
          {DOCS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <article className="h-full bg-ink p-7">
                <Tag className="text-bloodsoft">leitura · {d.kind}</Tag>
                <h3 className="mt-4 font-serif text-xl text-paper sm:text-2xl">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c6bda2]">{d.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* caution callout */}
        <Reveal>
          <div className="mt-12 border-l-2 border-bone/40 bg-bone/[0.04] p-6 sm:p-8">
            <p className="font-serif text-lg italic leading-relaxed text-paper sm:text-xl">
              Importante: não dizemos que a Perna Cabeluda “foi criada pela ditadura”. Isso seria
              simplista — e desrespeitaria a criatividade e a brincadeira reais de jornalistas e do
              povo.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#c6bda2]">
              O que os pesquisadores apontam é uma{" "}
              <span className="text-paper">relação</span>: a lenda circulou num ambiente de medo,
              censura e violência, e pode ter funcionado como imagem desse medo. Uma coisa é o
              registro, outra é a interpretação, outra é a lenda que permanece.
            </p>
          </div>
        </Reveal>

        {/* three registers */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {REG.map((r, i) => (
            <Reveal key={r} delay={i * 0.05}>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-bone/25 font-mono text-[0.6rem] uppercase tracking-widest text-bone">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 font-serif text-lg uppercase tracking-wide text-paper">{r}</p>
                <p className="mx-auto mt-2 max-w-xs text-sm text-stone">
                  {i === 0
                    ? "o que se documenta, com fonte."
                    : i === 1
                      ? "as leituras possíveis, assumidas como hipóteses."
                      : "a história que o povo guardou e segue contando."}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
