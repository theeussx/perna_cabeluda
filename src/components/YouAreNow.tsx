import { motion } from "framer-motion";
import { Reveal } from "../lib/motion";
import { youarenow } from "../content";

export default function YouAreNow() {
  return (
    <section id="voce" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-mono text-[0.85rem] uppercase tracking-[0.3em] text-bloodsoft">
            {youarenow.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-paper sm:text-6xl">
            {youarenow.titleA} <br className="hidden sm:block" />
            <span className="text-bone italic">{youarenow.titleB}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-lg text-bone/85">
            {youarenow.chain.map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                <span>{c}</span>
                {i < youarenow.chain.length - 1 && <span className="text-bone/25">→</span>}
              </span>
            ))}
            <span className="flex items-center gap-2">
              <span className="text-bone/25">→</span>
              <motion.span
                className="bg-bone px-2 py-1 font-mono text-[0.85rem] uppercase tracking-[0.14em] text-black"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {youarenow.last}
              </motion.span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mx-auto mt-10 max-w-2xl text-xl leading-relaxed text-[#c6bda2]">
            {youarenow.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
