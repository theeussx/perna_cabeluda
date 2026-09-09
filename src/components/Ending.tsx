import { useEffect, useRef, useState } from "react";
import { Reveal, TextReveal } from "../lib/motion";
import { Tag, Paragraphs } from "./ui";
import { ending, meta } from "../content";
import { useAmbience } from "./AudioContext";

export default function Ending() {
  const { triggerScare } = useAmbience();
  const scareRef = useRef<HTMLElement | null>(null);
  const [scareVisible, setScareVisible] = useState(false);
  const scareTriggered = useRef(false);

  useEffect(() => {
    const target = scareRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || scareTriggered.current) return;
        scareTriggered.current = true;
        setScareVisible(true);
        triggerScare();
        window.setTimeout(() => setScareVisible(false), 1100);
      },
      { threshold: 0.62 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [triggerScare]);

  return (
    <>
      <section ref={scareRef} aria-label="Último susto antes dos créditos" className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-black px-6 py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_70%_at_50%_50%,rgba(138,30,22,0.16),transparent_72%)]" />
        <p className="relative z-10 max-w-md text-center font-mono text-[0.62rem] uppercase tracking-[0.35em] text-stone">
          o último registro antes do arquivo
        </p>
        <div className={"jumpscare " + (scareVisible ? "is-visible" : "")} aria-hidden="true">
          <div className="jumpscare-noise" />
          <img src="/art/leg-hero.webp" alt="" className="jumpscare-image" />
          <span className="jumpscare-caption">você ainda está aí?</span>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center bg-black px-6 py-28 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_108%,rgba(138,30,22,0.22),transparent_70%)]" />
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-bloodsoft">
              {ending.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-[clamp(3rem,12vw,9rem)] leading-none text-paper">
              <TextReveal text={ending.title} />
            </h2>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mx-auto mt-8 max-w-xl font-serif text-xl italic leading-snug text-bone sm:text-2xl">
              {ending.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-col items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-stone">
              {ending.credits.map((c, i) => (
                <span key={i} className={i === ending.credits.length - 1 ? "text-bone/70" : ""}>
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

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
            <Paragraphs
              text={ending.sourcesIntro}
              className="mt-5 max-w-3xl text-base leading-relaxed text-[#c6bda2]"
            />
          </Reveal>

          <div className="mt-12 space-y-12">
            {ending.groups.map((g, gi) => (
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
              {meta.conceptLines.map((l) => (
                <p key={l} className="font-serif text-2xl italic leading-snug text-bone">
                  {l}
                </p>
              ))}
              <p className="mt-6 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-stone">
                {meta.footerLine}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
