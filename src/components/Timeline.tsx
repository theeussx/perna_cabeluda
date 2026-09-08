import { motion } from "framer-motion";
import { ChapterHeader, Tag, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { timeline } from "../content";

export default function Timeline() {
  return (
    <section id="linha-do-tempo" className="relative px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <ChapterHeader no="12" kicker="linha do tempo" title={renderTitle(timeline.heading)} />
        <div className="relative">
          <motion.div
            className="absolute left-[9px] top-0 h-full w-px bg-gradient-to-b from-transparent via-bone/30 to-transparent md:left-1/2"
            aria-hidden="true"
          />
          <div className="space-y-10">
            {timeline.items.map((it, i) => (
              <Reveal key={i}>
                <div
                  className={
                    "relative flex gap-6 md:w-[calc(50%-28px)] " +
                    (i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto")
                  }
                >
                  <motion.span
                    className={
                      "absolute top-1.5 left-[9px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-bloodsoft md:left-auto " +
                      (i % 2 === 0 ? "md:right-[-40px] md:translate-x-0" : "md:left-[-40px] md:-translate-x-1/2")
                    }
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4 }}
                    aria-hidden="true"
                  />
                  <div className="flex-1 pl-10 md:pl-0">
                    <Tag className="text-bloodsoft">{it.tag}</Tag>
                    <p className="mt-2 font-serif text-3xl text-paper sm:text-4xl">{it.y}</p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[#c6bda2]">{it.t}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
