import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterHeader } from "./ui";
import { Reveal } from "../lib/motion";

const WORDS: Array<{ w: string; d: string }> = [
  { w: "MEDO", d: "O que a perna despertava em quem a via de noite. O medo urbano muitas vezes precisa de um rosto — ou, aqui, de um pé." },
  { w: "VIOLÊNCIA", d: "Numa cidade onde certas violências não podiam ser nomeadas, uma agressão sem autor identificável podia virar lenda." },
  { w: "RUMOR", d: "O que nasce sem dono e cresce na boca do povo — difícil de verificar, fácil de repetir. O motor da Perna desde o início." },
  { w: "HUMOR", d: "O medo que vira “grea”, piada, bloco de carnaval e fantasia. Assustar era só o primeiro ato da história." },
  { w: "CENSURA", d: "O que não se podia dizer abria espaço para o que se inventava. A lenda circula também nas frestas deixadas pelo silêncio." },
  { w: "MEMÓRIA", d: "Meio século depois, ainda se conta. É a memória que mantém a Perna viva — e é por ela que este site existe." },
  { w: "RECIFE", d: "A cidade que deu o cenário, o medo e a língua. A Perna é, acima de tudo, uma história recifense." },
  { w: "IMAGINAÇÃO", d: "O único corpo completo que a Perna tem. É no imaginário coletivo que uma perna sem corpo ganha tamanho, pelos e nome." },
];

export default function Symbol() {
  const [active, setActive] = useState<number>(0);
  const cur = WORDS[active];

  return (
    <section id="simbolo" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader
          no="10"
          kicker="a perna como símbolo"
          title="Mais que uma rasteira"
        />
        <Reveal>
          <p className="max-w-3xl text-lg text-bone/85">
            Com o tempo, a Perna deixou de ser só uma assombração que dava rasteiras. Ela passou a
            carregar significados. Toque numa palavra.
          </p>
        </Reveal>

        <div className="mt-10">
          {/* mobile words */}
          <div className="mb-6 flex flex-wrap gap-2 md:hidden">
            {WORDS.map((x, i) => (
              <button
                key={x.w}
                onClick={() => setActive(i)}
                className={
                  "px-3 py-2 font-mono text-[0.62rem] tracking-[0.14em] " +
                  (active === i ? "bg-bone text-black" : "border border-bone/20 text-bone/80")
                }
              >
                {x.w}
              </button>
            ))}
          </div>

          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            {/* constellation */}
            <div className="relative mx-auto hidden h-[520px] w-full max-w-xl select-none md:block">
              {/* orbit hints */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[60%] w-[60%] rounded-full border border-bone/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[88%] w-[88%] rounded-full border border-bone/5" />
              </div>
              {/* central leg */}
              <div className="absolute inset-0 flex items-end justify-center pb-2">
                <img
                  src="/art/leg-action.webp"
                  alt=""
                  aria-hidden="true"
                  className="h-[92%] w-auto object-contain opacity-80"
                  style={{
                    maskImage: "radial-gradient(ellipse 60% 90% at 50% 55%, #000 55%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 60% 90% at 50% 55%, #000 55%, transparent 100%)",
                  }}
                />
              </div>
              {/* words */}
              {WORDS.map((x, i) => {
                const ang = (i / WORDS.length) * Math.PI * 2 - Math.PI / 2;
                const cx = 50 + Math.cos(ang) * 42;
                const cy = 50 + Math.sin(ang) * 41;
                return (
                  <button
                    key={x.w}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    style={{ left: `${cx}%`, top: `${cy}%` }}
                    className={
                      "absolute -translate-x-1/2 -translate-y-1/2 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] transition-all " +
                      (active === i
                        ? "scale-125 bg-bloodsoft px-3 text-paper"
                        : "text-bone/75 hover:text-paper")
                    }
                  >
                    {x.w}
                  </button>
                );
              })}
            </div>

            {/* readout */}
            <div className="relative min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-stone">
                    a perna como — <span className="text-bloodsoft">{cur.w}</span>
                  </p>
                  <p className="mt-4 max-w-md font-serif text-xl leading-relaxed text-paper sm:text-2xl">
                    {cur.d}
                  </p>
                  <div className="mt-6 hidden gap-2 md:flex">
                    {WORDS.map((w, i) => (
                      <span
                        key={w.w}
                        className={
                          "h-1.5 transition-colors " + (i === active ? "w-8 bg-bloodsoft" : "w-3 bg-bone/20")
                        }
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
