import { motion } from "framer-motion";
import { Reveal } from "../lib/motion";

const CHAIN = ["relato", "jornal", "rádio", "boca a boca", "cordel", "cultura", "cinema", "internet"];

export default function YouAreNow() {
  return (
    <section id="voce" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-bloodsoft">16 · o último elo</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-paper sm:text-6xl">
            A história chegou <br className="hidden sm:block" />
            <span className="text-bone italic">até você.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-bone/70">
            {CHAIN.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                <span>{c}</span>
                {i < CHAIN.length - 1 && <span className="text-bone/25">→</span>}
              </span>
            ))}
            <span className="flex items-center gap-2">
              <span className="text-bone/25">→</span>
              <motion.span
                className="px-2 py-1 bg-bone text-black font-mono text-[0.7rem] uppercase tracking-[0.14em]"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                você
              </motion.span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-[#c6bda2]">
            Jornal, rádio, cordel, carnaval, cinema, internet. O que nunca muda é a pergunta que
            cada meio faz a quem escuta: <em className="text-paper">você acredita?</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
