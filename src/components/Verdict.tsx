import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterHeader, renderTitle } from "./ui";
import { verdict } from "../content";

type Step = "ask" | 1 | 2 | 3;

export default function Verdict() {
  const [step, setStep] = useState<Step>("ask");
  const [chosen, setChosen] = useState<string | null>(null);

  const pick = (v: string) => {
    if (step !== "ask") return;
    setChosen(v);
    setStep(1);
  };

  useEffect(() => {
    if (step === 1) {
      const t = window.setTimeout(() => setStep(2), 3600);
      return () => window.clearTimeout(t);
    }
    if (step === 2) {
      const t = window.setTimeout(() => setStep(3), 4200);
      return () => window.clearTimeout(t);
    }
  }, [step]);

  return (
    <section id="veredito" className="relative flex min-h-screen items-center justify-center px-5 py-24">
      <div className="w-full max-w-3xl text-center">
        <ChapterHeader no="15" kicker="verdade ou lenda" title={renderTitle(verdict.heading)} align="center" />

        <AnimatePresence mode="wait">
          {step === "ask" && (
            <motion.div
              key="ask"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              {verdict.buttons.map((b) => (
                <button
                  key={b}
                  onClick={() => pick(b)}
                  className="w-full border border-bone/50 px-9 py-5 font-mono text-base uppercase tracking-[0.2em] text-bone sm:text-lg transition-colors hover:bg-bone hover:text-black sm:w-auto"
                >
                  {b}
                </button>
              ))}
            </motion.div>
          )}

          {step !== "ask" && (
            <motion.div key="reveal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10">
              <AnimatePresence>
                {step === 1 && (
                  <motion.p
                    key="l1"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="font-serif text-4xl leading-snug text-paper sm:text-5xl"
                  >
                    {verdict.afterA}
                  </motion.p>
                )}
                {step === 2 && (
                  <motion.p
                    key="l2"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mx-auto max-w-2xl font-serif text-3xl leading-snug text-bone sm:text-4xl"
                  >
                    {verdict.afterB}
                  </motion.p>
                )}
                {step === 3 && (
                  <motion.div
                    key="l3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[#c6bda2]">
                      {verdict.afterC_prefix}{" "}
                      <span className="italic text-paper">“{chosen}”</span>. {verdict.afterC}
                    </p>
                    <button
                      onClick={() => {
                        setStep("ask");
                        setChosen(null);
                      }}
                      className="mt-8 font-mono text-[0.8rem] uppercase tracking-[0.2em] text-stone underline-offset-4 hover:text-bone hover:underline"
                    >
                      {verdict.retry}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
