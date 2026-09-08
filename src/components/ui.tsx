import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Reveal } from "../lib/motion";
import { cn } from "../lib/cn";
import type { Em } from "../content";

/** Renders a heading title, coloring the optional `em` substring. */
export function renderTitle(t: string | Em): ReactNode {
  if (typeof t === "string") return t;
  const { text, em } = t;
  if (!em) return text;
  const i = text.indexOf(em);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="text-bloodsoft">{em}</span>
      {text.slice(i + em.length)}
    </>
  );
}

/** Renders an array of paragraph strings as separate <p> elements. */
export function Paragraphs({ text, className }: { text: string | string[]; className?: string }) {
  const items = Array.isArray(text) ? text : [text];
  return (
    <>
      {items.map((p, i) => (
        <p key={i} className={className}>
          {p}
        </p>
      ))}
    </>
  );
}

/** Inline loader helper for section component mount animation. */
export function useOnScreen<T extends HTMLElement>(rootMargin = "0px") {
  const ref = { current: null as T | null };
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, visible };
}

export function ChapterHeader({
  no,
  kicker,
  title,
  align = "left",
}: {
  no: string;
  kicker: string;
  title: ReactNode;
  align?: "left" | "center";
}) {  return (
    <header className={cn("mb-12 md:mb-16", align === "center" && "text-center")}>
      <Reveal>
        <p className="font-mono text-[0.68rem] tracking-[0.3em] text-stone uppercase flex items-center gap-3">
          <span className="text-bloodsoft font-medium">{no}</span>
          <span className="h-px w-8 bg-bone/25" aria-hidden="true" />
          <span>{kicker}</span>
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 max-w-4xl text-3xl leading-[1.08] sm:text-5xl md:text-[3.4rem] text-paper">
          {title}
        </h2>
      </Reveal>
    </header>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("label-tag", className)}>{children}</span>;
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-gradient-to-r from-bone/30 via-bone/10 to-transparent", className)} />;
}
