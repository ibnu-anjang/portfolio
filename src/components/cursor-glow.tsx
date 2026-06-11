"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function move(e: PointerEvent) {
      if (e.pointerType !== "mouse" || !ref.current) return;
      ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      ref.current.style.opacity = "1";
    }
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden size-[420px] rounded-full bg-[#a87cff]/[0.07] opacity-0 blur-[90px] transition-opacity duration-500 md:block"
    />
  );
}
