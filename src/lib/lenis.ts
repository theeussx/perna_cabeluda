import type Lenis from "lenis";

let instance: Lenis | null = null;

/** Registers the active Lenis instance (called by App when smooth scroll starts). */
export function setLenis(lenis: Lenis | null): void {
  instance = lenis;
}

/** Smooth-scrolls to a section by its element id, falling back to native scroll. */
export function scrollToId(id: string): void {
  if (instance) {
    instance.scrollTo(`#${id}`, { duration: 1.6 });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
