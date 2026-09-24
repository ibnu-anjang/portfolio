"use client";

import { useState } from "react";
import { ArrowUpRight, Code2, BookOpen } from "lucide-react";
import type { Project } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { CaseStudyModal } from "@/components/case-study-modal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

export function PortfolioSection({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="mt-8 sm:mt-14 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#c2a4ff]/40">
              {/* Image / Header Preview */}
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-gradient-to-br from-[#1a1126] via-[#0d0a12] to-[#150f22]"
                  aria-label={`Buka ${p.title}`}
                >
                  {p.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col justify-between p-5 bg-[#120e18]/80 border-b border-white/[0.06]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-white/20" />
                          <span className="size-2 rounded-full bg-white/20" />
                          <span className="size-2 rounded-full bg-white/20" />
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                          <Code2 className="size-3 text-[#c2a4ff]" />
                          {p.stack[0]}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white/90 group-hover:text-[#c2a4ff] transition">
                          {p.title}
                        </h4>
                        <p className="mt-1 text-xs text-zinc-400 line-clamp-1">
                          {p.stack.join(" · ")}
                        </p>
                      </div>
                    </div>
                  )}
                </a>
              ) : (
                <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-gradient-to-br from-[#1a1126] via-[#0d0a12] to-[#150f22]">
                  {p.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col justify-between p-5 bg-[#120e18]/80 border-b border-white/[0.06]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-white/20" />
                          <span className="size-2 rounded-full bg-white/20" />
                          <span className="size-2 rounded-full bg-white/20" />
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                          <Code2 className="size-3 text-[#c2a4ff]" />
                          {p.stack[0]}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white/90">
                          {p.title}
                        </h4>
                        <p className="mt-1 text-xs text-zinc-400 line-clamp-1">
                          {p.stack.join(" · ")}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Category & Status */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  {p.category && (
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-purple-300">
                      {p.category}
                    </span>
                  )}
                  {p.isLive ? (
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

                {/* Title */}
                <div className="flex items-start justify-between gap-2">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-base sm:text-lg text-white hover:text-[#c2a4ff] transition"
                    >
                      {p.title}
                    </a>
                  ) : (
                    <h3 className="font-semibold text-base sm:text-lg text-white">{p.title}</h3>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buka ${p.title}`}
                      className="text-zinc-500 hover:text-[#c2a4ff] transition p-1"
                    >
                      <ArrowUpRight className="size-4 shrink-0" />
                    </a>
                  )}
                </div>

                {/* Problem Statement & Description */}
                {p.description && (
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {p.description}
                  </p>
                )}

                {/* Tech Tags */}
                {p.stack.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {p.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] sm:text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom Actions */}
                <div className="mt-auto pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-medium">
                  {/* Case Study Trigger */}
                  {p.caseStudy ? (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(p)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-zinc-300 hover:border-[#c2a4ff]/50 hover:bg-white/[0.06] hover:text-white transition"
                    >
                      <BookOpen className="size-3.5 text-[#c2a4ff]" />
                      <span>Detail Arsitektur</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {/* External Destination */}
                  <div className="flex items-center gap-3">
                    {p.isLive ? (
                      <>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition"
                        >
                          <span>Buka Live</span> <ArrowUpRight className="size-3.5" />
                        </a>
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repo ${p.title}`}
                            className="inline-flex items-center text-zinc-400 hover:text-white transition"
                          >
                            <GithubIcon className="size-3.5" />
                          </a>
                        )}
                      </>
                    ) : (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#c2a4ff] hover:text-white transition font-medium"
                      >
                        <GithubIcon className="size-3.5" />
                        <span>Lihat di GitHub</span> <ArrowUpRight className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
