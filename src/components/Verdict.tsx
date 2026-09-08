import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChapterHeader } from "./ui";
import { Reveal } from "../lib/motion";

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
        <ChapterHeader
          no="15"
          kicker="verdade ou lenda"
          title="VOCÊ ACREDITA?"
          align="center"
        />

        <AnimatePresence mode="wait">
          {step === "ask" && (
            <motion.div
              key="ask"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <button
                onClick={() => pick("É uma lenda")}
                className="w-full border border-bone/40 px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-bone transition-colors hover:bg-bone hover:text-black sm:w-auto"
              >
                É uma lenda
              </button>
              <button
                onClick={() => pick("Não tenho certeza")}
                className="w-full border border-bone/40 px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-bone transition-colors hover:bg-bone hover:text-black sm:w-auto"
              >
                Eu não tenho certeza
              </button>
            </motion.div>
          )}

          {step !== "ask" && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10"
            >
              <AnimatePresence>
                {step === 1 && (
                  <motion.p
                    key="l1"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="font-serif text-3xl leading-snug text-paper sm:text-4xl"
                  >
                    Talvez essa seja a pergunta errada.
                  </motion.p>
                )}
                {step === 2 && (
                  <motion.p
                    key="l2"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mx-auto max-w-2xl font-serif text-2xl leading-snug text-bone sm:text-3xl"
                  >
                    Uma lenda não precisa ser verdadeira para revelar algo sobre quem a conta.
                  </motion.p>
                )}
                {step === 3 && (
                  <motion.div
                    key="l3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    <p className="mx-auto max-w-xl text-base leading-relaxed text-[#c6bda2]">
                      Você disse: <span className="text-paper italic">“{chosen}”</span>. E é exatamente
                      aí que mora a história — não no pé que rasteja, mas no que essa rasteira diz
                      sobre a cidade que a inventou.
                    </p>
                    <button
                      onClick={() => {
                        setStep("ask");
                        setChosen(null);
                      }}
                      className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-stone underline-offset-4 hover:text-bone hover:underline"
                    >
                      ↺ responder de novo
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
