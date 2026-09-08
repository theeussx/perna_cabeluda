import { Reveal } from "../lib/motion";
import { legend } from "../content";

export default function Legend() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {legend.items.map((it, i) => (
        <Reveal key={it.k} delay={i * 0.06}>
          <div className="h-full border-t border-bone/15 bg-white/[0.015] p-5">
            <p className="font-mono text-[0.7rem] tracking-[0.28em] text-bone">{it.k}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#c9bfa4]">{it.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
