import { motion } from "framer-motion";
import { entrance } from "../content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Entrance() {
  return (
    <section className="relative flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_55%_at_50%_115%,rgba(138,30,22,0.20),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(214,199,161,0.05),transparent_60%)]" />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.4 }}
          className="font-mono text-[0.6rem] uppercase text-stone"
        >
          {entrance.preKicker}
        </motion.p>

        <h1 className="mt-10 font-serif leading-none text-paper">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: EASE, delay: 1.1 }}
            className="block text-[clamp(3.4rem,15vw,11rem)] tracking-[0.06em]"
          >
            {entrance.city}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: EASE, delay: 2 }}
            className="mt-4 block font-mono text-[clamp(1.6rem,6vw,4rem)] tracking-[0.5em] text-bone"
          >
            {entrance.year}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 3.2 }}
          className="mx-auto mt-14 max-w-md font-serif text-xl italic text-bone/90 sm:text-2xl"
        >
          {entrance.question}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <p className="flicker font-mono text-[0.62rem] tracking-[0.4em] uppercase text-stone">
          {entrance.scrollHint}
        </p>
        <div className="mx-auto mt-3 h-12 w-px bg-gradient-to-b from-bone/70 to-transparent" />
      </motion.div>
    </section>
  );
}
