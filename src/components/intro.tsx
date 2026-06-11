"use client";

import { useState } from "react";
import { site } from "@/lib/content";

export function Intro() {
  const [state, setState] = useState<"idle" | "opening" | "done">("idle");

  if (state === "done") return null;

  function open() {
    setState("opening");
    setTimeout(() => setState("done"), 700);
  }

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#eae5ec] text-black transition-[opacity,transform] duration-700 ease-in-out ${
        state === "opening" ? "pointer-events-none scale-105 opacity-0" : ""
      }`}
    >
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-6 text-sm font-bold tracking-wide sm:px-10">
        <span>{site.name}</span>
        <span className="text-black/50">Portofolio © {new Date().getFullYear()}</span>
      </div>
      <button
        onClick={open}
        className="group relative overflow-hidden rounded-full bg-black px-12 py-6 text-base font-medium uppercase tracking-[0.2em] text-[#eae5ec] shadow-[0_15px_15px_rgba(0,0,0,0.2)] transition hover:scale-[1.03] sm:px-16 sm:py-7 sm:text-lg"
      >
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a87cff] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
        />
        <span className="relative z-10 inline-flex items-center gap-3">
          Buka
          <span className="inline-block h-6 w-3.5 animate-pulse bg-[#eae5ec]" aria-hidden />
        </span>
      </button>
      <div className="absolute inset-x-0 bottom-8 text-center text-xs uppercase tracking-[0.3em] text-black/40">
        Klik untuk masuk
      </div>
    </div>
  );
}
