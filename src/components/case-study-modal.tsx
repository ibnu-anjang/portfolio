"use client";

import { useEffect } from "react";
import {
  X,
  ArrowUpRight,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import type { Project } from "@/lib/content";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

export function CaseStudyModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#120e18] shadow-2xl transition-all animate-in zoom-in-95 duration-200 my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/[0.08] p-5 sm:p-6 bg-white/[0.02]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-medium text-purple-300">
                {project.category || "Case Study"}
              </span>
              {project.isLive ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Demo
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                  <GithubIcon className="size-3" />
                  Source Code
                </span>
              )}
            </div>
            <h3 id="case-study-title" className="mt-2 text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400">
              Analisa arsitektur, tantangan teknis, dan solusi penyelesaian
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup modal"
            className="rounded-full p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 text-sm">
          {/* Masalah (Why) */}
          <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 font-semibold text-rose-300">
              <AlertCircle className="size-4 shrink-0" />
              <span>Masalah Nyata (The Problem)</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
              {caseStudy.problem}
            </p>
          </div>

          {/* Tantangan Teknis */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 font-semibold text-amber-300">
              <Cpu className="size-4 shrink-0" />
              <span>Tantangan Arsitektur & Logika</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solusi & Keputusan Teknis */}
          <div className="rounded-xl border border-[#a87cff]/20 bg-[#a87cff]/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 font-semibold text-[#c2a4ff]">
              <Layers className="size-4 shrink-0" />
              <span>Solusi & Pemilihan Stack</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
              {caseStudy.solution}
            </p>
          </div>

          {/* Hasil & Dampak */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 font-semibold text-emerald-300">
              <Sparkles className="size-4 shrink-0" />
              <span>Hasil & Dampak</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
              {caseStudy.impact}
            </p>
          </div>

          {/* Tech Stack List */}
          <div>
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Teknologi yang Digunakan
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-white/[0.08] p-4 sm:p-5 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-zinc-500">
            Dibuat oleh <span className="text-zinc-300 font-medium">Ibnu Anjang</span>
          </div>
          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <GithubIcon className="size-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-gradient-to-r from-[#a87cff] to-[#8b5cf6] px-4 py-1.5 text-xs font-semibold text-white shadow-md transition hover:brightness-110"
              >
                <span>{project.isLive ? "Buka Website Live" : "Buka Project"}</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
