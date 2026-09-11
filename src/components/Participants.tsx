import { ChapterHeader, Tag, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { participants } from "../content";

/** Iniciais do nome (primeira letra do primeiro e do último nome). */
function initials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

export default function Participants() {
  return (
    <section id="participantes" className="relative px-5 py-24 sm:px-10 md:py-36">
      {/* soft blood glow, echoing the rest of the experience */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(138,30,22,0.10),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        <ChapterHeader
          no={participants.chapterNo}
          kicker={participants.kicker}
          title={renderTitle(participants.heading)}
          align="center"
        />

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xl leading-relaxed text-bone/90">
            {participants.lead[0]}
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-fr gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {participants.people.map((p, i) => (
            <Reveal key={p.name + i} delay={(i % 4) * 0.06}>
              <article className="group relative flex h-full min-h-[15rem] flex-col bg-ink p-7 transition-colors hover:bg-[#0e0d09]">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center border border-bone/20 bg-coal font-serif text-2xl text-bloodsoft transition-colors group-hover:border-bloodsoft/50">
                    {initials(p.name)}
                  </div>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-stone">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-3xl leading-tight text-paper">{p.name}</h3>
                <Tag className="mt-4 text-bone">{p.role}</Tag>

                {p.name === "Mateus Henrique" && (
                  <a
                    href="https://theeussx.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 border border-bloodsoft/70 bg-bloodsoft/15 px-3 py-2 pt-2.5 font-mono text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-paper transition-colors hover:border-bone hover:bg-bloodsoft/35"
                  >
                    ver portfólio
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-bloodsoft transition-all duration-500 group-hover:w-full"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-16 max-w-xl text-center font-serif text-2xl italic leading-relaxed text-bone">
            {participants.outro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
