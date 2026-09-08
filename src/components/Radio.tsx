import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterHeader, Tag } from "./ui";
import { Reveal } from "../lib/motion";
import { useAmbience } from "./AudioContext";

const FRAGMENTS = [
  "Moradores afirmam ter visto…",
  "…uma perna caminhar pelas paredes.",
  "O rapaz deixou a casa assombrada.",
  "O padre não quis se envolver.",
  "Aguardem novas informações.",
];

function DialWaves({ live }: { live: boolean }) {
  return (
    <svg viewBox="0 0 200 60" className="h-10 w-full" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={i}
          d={`M ${100 - 14 - i * 14} 30 q 14 -18 28 0 q 14 18 28 0`}
          fill="none"
          stroke="#d6c7a1"
          strokeWidth="1.4"
          opacity={0}
          animate={live ? { opacity: [0, 0.85, 0] } : { opacity: 0 }}
          transition={
            live
              ? { duration: 1.4, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }
              : { duration: 0 }
          }
        />
      ))}
    </svg>
  );
}

export default function Radio() {
  const [live, setLive] = useState(false);
  const [idx, setIdx] = useState(0);
  const ambience = useAmbience();

  const goLive = () => {
    setLive((v) => {
      const n = !v;
      if (n) {
        if (!ambience.enabled) ambience.toggle();
        setIdx(0);
      }
      return n;
    });
  };

  useEffect(() => {
    if (!live) return;
    const t = window.setInterval(() => setIdx((i) => (i + 1) % FRAGMENTS.length), 3400);
    return () => window.clearInterval(t);
  }, [live]);

  return (
    <section id="radio" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-6rem] top-1/3 h-72 w-72 rounded-full bg-blood/[0.05] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <ChapterHeader
          no="07"
          kicker="rádio · transmissão arquivada"
          title="A voz que ninguém gravou"
        />
        <Reveal>
          <p className="max-w-2xl text-lg text-bone/85">
            O rádio fez o rumor correr a cidade numa madrugada. Não sobreviveu nenhuma gravação
            daquele tempo — então aqui você sintoniza uma{" "}
            <em className="text-paper">recriação artística</em> do que teria sido ouvir.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* radio chassis */}
          <Reveal>
            <div className="relative mx-auto max-w-md">
              {/* body */}
              <div className="relative rounded-md border border-bone/25 bg-gradient-to-b from-[#1a1610] to-[#0d0b07] p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
                <div className="flex items-center justify-between font-mono text-[0.55rem] uppercase tracking-[0.2em] text-stone">
                  <span>RECIFE · RÁDIO</span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className={
                        "h-1.5 w-1.5 rounded-full transition-colors " +
                        (live ? "bg-bloodsoft animate-pulse" : "bg-stone/40")
                      }
                    />
                    on air
                  </span>
                </div>

                {/* dial screen */}
                <div className="mt-3 rounded-sm border border-bone/20 bg-[#0a0805] p-4">
                  <div className="flex justify-between text-[0.55rem] font-mono uppercase tracking-widest text-stone/70">
                    <span>530 AM</span>
                    <span className="text-bloodsoft">FM 92.7</span>
                    <span>1600</span>
                  </div>
                  <div className="relative mt-2 h-10">
                    <div className="absolute inset-0 flex items-center justify-between">
                      {Array.from({ length: 41 }).map((_, i) => (
                        <span
                          key={i}
                          className={i % 10 === 0 ? "h-4 w-px bg-bone/40" : "h-2 w-px bg-bone/15"}
                        />
                      ))}
                    </div>
                    {/* needle */}
                    <motion.div
                      className="absolute top-0 bottom-0 w-px bg-bloodsoft"
                      initial={false}
                      animate={{ left: live ? "64%" : "30%" }}
                      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ boxShadow: "0 0 8px rgba(166,58,43,0.8)" }}
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-bone/80">
                    <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-stone">
                      sintonia
                    </span>
                    <span className="font-mono text-[0.8rem]">{live ? "92.7" : "— . —"}</span>
                    <DialWaves live={live} />
                  </div>
                </div>

                {/* controls */}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={goLive}
                    aria-pressed={live}
                    className={
                      "flex-1 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.24em] transition-colors " +
                      (live
                        ? "bg-bloodsoft text-paper"
                        : "border border-bone/30 text-bone hover:border-bone/60")
                    }
                  >
                    {live ? "■ silenciar" : "▶ sintonizar"}
                  </button>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((k) => (
                      <div
                        key={k}
                        className="h-5 w-5 rounded-full border border-bone/30 bg-gradient-to-b from-[#201a12] to-[#0a0805]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* antenna shadow deco */}
              <div className="mt-4 text-center font-mono text-[0.52rem] uppercase tracking-[0.28em] text-stone/60">
                ondas que viajam mais rápido que o pé
              </div>
            </div>
          </Reveal>

          {/* transmission readout */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <div className="border-l-2 border-bone/25 pl-5">
                <Tag>transmissão arquivada · não há gravação real</Tag>
                <div className="mt-5 min-h-[150px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: live ? 1 : 0.35 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="font-serif text-2xl italic leading-snug text-bone sm:text-3xl"
                    >
                      {live ? FRAGMENTS[idx] : "Sintonize o aparelho para escutar a transmissão."}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
                  Em 1975 não havia gravação garantida dos programas da madrugada. O que ficou são
                  relatos de quem ouviu — como os atribuídos ao radialista Jota Ferreira — e o eco
                  que a voz deixou na memória da cidade.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
