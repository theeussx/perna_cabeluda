import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { meta } from "./content";
import { setLenis } from "./lib/lenis";
import Film from "./components/Film";
import Chrome from "./components/Chrome";
import { AudioProvider } from "./components/AudioContext";
import Entrance from "./components/Entrance";
import PernaReveal from "./components/PernaReveal";
import Archive from "./components/Archive";
import Travel from "./components/Travel";
import Contexto from "./components/Contexto";
import Cinema from "./components/Cinema";
import Verdict from "./components/Verdict";
import Participants from "./components/Participants";
import Finale from "./components/Finale";
import Jumpscare from "./components/Jumpscare";
import Ending from "./components/Ending";

function useLenis() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    setLenis(lenis);
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);
}

/** A faint figure that seems to drift past on the far edge while you read. */
function GhostStalker() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => v * 0.18);
  const opacity = useTransform(scrollY, [300, 1000, 3200, 4400], [0, 0.08, 0.07, 0]);
  return (
    <motion.div
      className="pointer-events-none fixed right-[-4vw] top-0 z-[2] flex h-screen w-auto items-end justify-end overflow-hidden"
      style={{ y }}
      aria-hidden="true"
    >
      <motion.img
        src="/art/leg-hero.webp"
        alt=""
        className="h-[86vh] w-auto object-contain"
        style={{ opacity, filter: "brightness(0.3) blur(1px)" }}
      />
    </motion.div>
  );
}

function Scroll() {
  return (
    <main>
      <Entrance />
      <PernaReveal />
      <Archive />
      <Travel />
      <Contexto />
      <Cinema />
      <Verdict />
      <Participants />
      <Finale />
      <Jumpscare />
      <Ending />
    </main>
  );
}

export default function App() {
  useLenis();
  useEffect(() => {
    document.title = meta.documentTitle;
  }, []);
  return (
    <AudioProvider>
      <Scroll />
      <GhostStalker />
      <Chrome />
      <Film />
    </AudioProvider>
  );
}
