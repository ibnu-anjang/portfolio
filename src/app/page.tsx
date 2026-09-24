import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Mail,
  MessageCircle,
  Quote,
  Server,
  Smartphone,
} from "lucide-react";
import {
  achievements,
  processSteps,
  projects,
  services,
  site,
  skills,
  testimonials,
} from "@/lib/content";
import { CursorGlow } from "@/components/cursor-glow";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { PortfolioSection } from "@/components/portfolio-section";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const serviceIcons = [Globe, Smartphone, Server];

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#c2a4ff] via-[#a87cff] to-[#8b5cf6] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function SkillMarquee({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...skills].reverse() : skills;
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items].map((s, i) => (
          <span
            key={i}
            className="mx-1.5 sm:mx-2.5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base font-medium text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function BigHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <CursorGlow />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/[0.06] bg-[#0b080c]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2.5 text-sm sm:text-[15px] font-bold tracking-tight">
            <span className="inline-block size-2.5 rounded-full bg-gradient-to-br from-[#c2a4ff] to-[#a87cff]" />
            {site.name}
          </a>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-zinc-400">
            <a
              href="#portfolio"
              className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
            >
              Portofolio
            </a>
            <a
              href="#layanan"
              className="hidden sm:block rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
            >
              Layanan
            </a>
            <a
              href="#kontak"
              className="ml-1 sm:ml-2 inline-flex min-h-[38px] sm:min-h-[40px] items-center rounded-full bg-[#eae5ec] px-3.5 sm:px-4 py-2 font-medium text-black transition hover:bg-[#c2a4ff]"
            >
              Hubungi
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-16 pb-8 sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(194,164,255,0.12)_0%,transparent_50%),radial-gradient(circle_at_85%_35%,rgba(168,124,255,0.1)_0%,transparent_50%)]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
              {/* Left Column: Hook & Value Proposition */}
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 pr-3.5 text-xs text-zinc-300 backdrop-blur">
                    {site.avatarUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={site.avatarUrl}
                        alt={site.name}
                        className="size-7 rounded-full object-cover ring-1 ring-[#c2a4ff]/50"
                      />
                    )}
                    <span className="font-semibold text-white">{site.name}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-400 font-medium">Junior Fullstack & Mobile</span>
                    <span className="text-zinc-600">·</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      Tersedia untuk project
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-[3.8rem] font-bold leading-[1.18] sm:leading-[1.08] tracking-tight text-white">
                    Bikin Website & Aplikasi Mobile yang{" "}
                    <GradientText>Rapi, Cepat & Siap Pakai.</GradientText>
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-base leading-relaxed text-zinc-400">
                    {site.about}
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href="#kontak"
                      className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a87cff] to-[#8b5cf6] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a87cff]/25 transition hover:shadow-[#a87cff]/45 hover:brightness-110 active:scale-[0.98]"
                    >
                      Minta Penawaran
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                      href="#portfolio"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-[#c2a4ff]/50 hover:bg-white/5 active:scale-[0.98]"
                    >
                      Lihat Portofolio
                    </a>
                    {site.cvUrl && (
                      <a
                        href={site.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-[#c2a4ff]/50 hover:bg-white/5 active:scale-[0.98]"
                      >
                        Download CV
                      </a>
                    )}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div className="mt-6 sm:mt-8 flex items-center gap-3 text-zinc-500">
                    {site.github && (
                      <a
                        href={site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-[#c2a4ff]/50 hover:text-white"
                      >
                        <GithubIcon className="size-5" />
                      </a>
                    )}
                    {site.linkedin && (
                      <a
                        href={site.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-[#c2a4ff]/50 hover:text-white"
                      >
                        <LinkedinIcon className="size-5" />
                      </a>
                    )}
                    <a
                      href={`mailto:${site.email}`}
                      aria-label="Email"
                      className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-[#c2a4ff]/50 hover:text-white"
                    >
                      <Mail className="size-5" />
                    </a>
                    <a
                      href={`https://wa.me/${site.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-[#c2a4ff]/50 hover:text-white"
                    >
                      <MessageCircle className="size-5" />
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Visual Hook Showcase Card (Desktop only, so mobile doesn't get clipped/bloated) */}
              <div className="hidden lg:block lg:col-span-5">
                <Reveal delay={150}>
                  <div className="relative">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#a87cff]/20 to-[#c2a4ff]/10 blur-xl opacity-75"
                    />
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#120e18]/90 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                      {/* Card Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-rose-500/80" />
                          <span className="size-2 rounded-full bg-amber-500/80" />
                          <span className="size-2 rounded-full bg-emerald-500/80" />
                          <span className="ml-1 text-[11px] sm:text-xs font-medium text-zinc-400">Featured Work</span>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-emerald-400">
                          <span className="size-1 rounded-full bg-emerald-400" />
                          Live Demo
                        </span>
                      </div>

                      {/* Main Showcase Image Preview (Trading Jurnal) */}
                      <div className="mt-3 overflow-hidden rounded-xl border border-white/[0.08] bg-black/40">
                        <div className="group relative aspect-[16/10] overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/projects/trading-jurnal.webp"
                            alt="Trading Jurnal"
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                            <div>
                              <p className="text-[10px] font-medium text-[#c2a4ff]">Web Analytics App</p>
                              <h4 className="text-xs sm:text-sm font-bold text-white">Trading Jurnal</h4>
                            </div>
                            <a
                              href="https://trading-jurnal-five.vercel.app"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur hover:bg-[#a87cff] transition"
                            >
                              Buka <ArrowUpRight className="size-3" />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Secondary Showcase Mini Cards (Hidden on small mobile to avoid huge scroll, visible on desktop/tablet) */}
                      <div className="mt-3 space-y-2">
                        <a
                          href="https://github.com/ibnu-anjang/Data-Management-Siswa"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 sm:p-3 transition hover:border-[#c2a4ff]/30 hover:bg-white/[0.05]"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="flex size-8 items-center justify-center rounded-lg bg-[#a87cff]/10 text-[#c2a4ff] ring-1 ring-white/10">
                              <Smartphone className="size-3.5" />
                            </div>
                            <div>
                              <h5 className="text-xs font-semibold text-zinc-200 group-hover:text-white transition">
                                SekolahKu (Data Siswa)
                              </h5>
                              <p className="text-[10px] text-zinc-500">Flutter Mobile · Firebase</p>
                            </div>
                          </div>
                          <ArrowUpRight className="size-3 text-zinc-500 transition group-hover:text-[#c2a4ff]" />
                        </a>

                        <a
                          href="https://games-hub-beryl-nine.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 sm:p-3 transition hover:border-[#c2a4ff]/30 hover:bg-white/[0.05]"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="flex size-8 items-center justify-center rounded-lg bg-[#a87cff]/10 text-[#c2a4ff] ring-1 ring-white/10">
                              <Globe className="size-3.5" />
                            </div>
                            <div>
                              <h5 className="text-xs font-semibold text-zinc-200 group-hover:text-white transition">
                                GAMES-HUB
                              </h5>
                              <p className="text-[10px] text-zinc-500">Next.js 16 · Tailwind v4 · Live</p>
                            </div>
                          </div>
                          <ArrowUpRight className="size-3 text-zinc-500 transition group-hover:text-[#c2a4ff]" />
                        </a>
                      </div>

                      {/* Card Footer */}
                      <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-400">
                        <span>Spesialisasi: Next.js, Flutter</span>
                        <a
                          href="#portfolio"
                          className="text-[#c2a4ff] hover:underline"
                        >
                          Lihat Semua Karya →
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Subtle scroll cue */}
          <div className="absolute bottom-3 sm:bottom-6 inset-x-0 flex justify-center pointer-events-none">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 tracking-wide">
              <span>Scroll untuk jelajahi</span>
              <span className="inline-block animate-bounce text-zinc-400">↓</span>
            </div>
          </div>
        </section>

        {/* Achievements (Hanya muncul jika ada data nyata) */}
        {achievements.length > 0 && (
          <section className="border-y border-white/[0.06] bg-white/[0.02]">
            <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.06] px-4 sm:px-6 sm:grid-cols-3">
              {achievements.map((a) => (
                <div key={a.label} className="px-4 py-8 sm:py-10 text-center">
                  <div className="text-2xl sm:text-4xl font-bold">
                    <GradientText>{a.metric}</GradientText>
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-zinc-500">{a.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="relative overflow-hidden py-16 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(194,164,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(194,164,255,0.08)_0%,transparent_50%)]"
          />
          <div className="relative">
            <Reveal>
              <BigHeading>Tech Stack</BigHeading>
              <p className="mt-3 sm:mt-4 text-center text-xs sm:text-base text-zinc-500">
                Teknologi yang saya gunakan untuk web & mobile
              </p>
            </Reveal>
            <div className="mt-8 sm:mt-14 space-y-3 sm:space-y-5">
              <SkillMarquee />
              <SkillMarquee reverse />
            </div>
          </div>
        </section>

        {/* Services */}
        {services.length > 0 && (
          <section id="layanan" className="scroll-mt-16 border-t border-white/[0.06] py-16 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <Reveal>
                <BigHeading>Layanan</BigHeading>
                <p className="mt-3 sm:mt-4 text-center text-xs sm:text-base text-zinc-500">
                  Solusi digital yang bisa saya bangun untuk kebutuhan Anda
                </p>
              </Reveal>
              <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => {
                  const Icon = serviceIcons[i % serviceIcons.length];
                  return (
                    <Reveal key={s.name} delay={i * 100}>
                      <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-7 transition hover:border-[#c2a4ff]/40 hover:bg-white/[0.05]">
                        <div className="inline-flex size-11 sm:size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c2a4ff]/20 to-[#a87cff]/20 text-[#c2a4ff] ring-1 ring-inset ring-[#c2a4ff]/20">
                          <Icon className="size-5" />
                        </div>
                        <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{s.name}</h3>
                        {s.description && (
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">{s.description}</p>
                        )}
                        {s.priceText && (
                          <p className="mt-4 text-xs sm:text-sm font-medium text-[#c2a4ff]">{s.priceText}</p>
                        )}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        {processSteps.length > 0 && (
          <section className="border-t border-white/[0.06] py-16 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <Reveal>
                <BigHeading>Cara Kerja</BigHeading>
                <p className="mt-3 sm:mt-4 text-center text-xs sm:text-base text-zinc-500">
                  Alur pengerjaan terstruktur dari konsultasi awal hingga rilis
                </p>
              </Reveal>
              <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 100}>
                    <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-7">
                      <div className="text-4xl sm:text-5xl font-bold text-[#c2a4ff]/25">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-3 sm:mt-4 text-base font-semibold">{step.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                        {step.description}
                      </p>
                      {i < processSteps.length - 1 && (
                        <ArrowRight
                          aria-hidden
                          className="absolute -right-4 top-1/2 hidden size-4 -translate-y-1/2 text-zinc-600 lg:block"
                        />
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Portfolio */}
        {projects.length > 0 && (
          <section id="portfolio" className="scroll-mt-16 border-t border-white/[0.06] py-16 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <Reveal>
                <BigHeading>Portofolio</BigHeading>
                <p className="mt-3 sm:mt-4 text-center text-xs sm:text-base text-zinc-500">
                  Project nyata yang pernah saya bangun beserta studi kasus arsitekturnya
                </p>
              </Reveal>
              <PortfolioSection projects={projects} />
              {site.github && (
                <Reveal>
                  <div className="mt-10 sm:mt-12 text-center">
                    <p className="text-xs sm:text-sm text-zinc-500">Mau lihat source code dan project lainnya?</p>
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs sm:text-sm font-medium text-[#c2a4ff] transition hover:border-[#c2a4ff]/50 hover:text-white"
                    >
                      <GithubIcon className="size-4" /> Kunjungi GitHub saya
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        )}

        {/* Testimonials (Hanya muncul jika ada review nyata) */}
        {testimonials.length > 0 && (
          <section className="border-t border-white/[0.06] py-16 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <Reveal>
                <BigHeading>Testimoni</BigHeading>
                <p className="mt-3 sm:mt-4 text-center text-xs sm:text-base text-zinc-500">Apa kata klien</p>
              </Reveal>
              <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                  <figure
                    key={t.author}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-7"
                  >
                    <Quote className="size-5 text-[#c2a4ff]" />
                    <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-5 text-xs sm:text-sm font-medium">
                      {t.author}
                      {t.role && <span className="font-normal text-zinc-500"> · {t.role}</span>}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact */}
        <section id="kontak" className="relative scroll-mt-16 overflow-hidden border-t border-white/[0.06] py-16 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] sm:h-[320px] w-[90vw] sm:w-[640px] -translate-x-1/2 rounded-full bg-[#a87cff]/15 blur-[100px] sm:blur-[120px]"
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="mx-auto max-w-xl text-center">
                <BigHeading>Kontak</BigHeading>
                <p className="mt-3 sm:mt-5 text-base sm:text-lg text-zinc-300">
                  Punya ide project? <GradientText>Mari diskusikan bersama.</GradientText>
                </p>
                <p className="mt-2 text-xs sm:text-sm text-zinc-500">
                  Ceritakan kebutuhan Anda, saya siap bantu mewujudkan aplikasi yang tepat guna.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-8 sm:mt-12">
                <LeadForm />
              </div>
            </Reveal>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-400">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 transition hover:border-[#c2a4ff]/50 hover:text-white"
              >
                <Mail className="size-4 text-[#c2a4ff]" /> {site.email}
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 transition hover:border-[#c2a4ff]/50 hover:text-white"
              >
                <MessageCircle className="size-4 text-[#c2a4ff]" /> WhatsApp Langsung
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-8 sm:py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 text-xs sm:text-sm text-zinc-500 sm:flex-row text-center sm:text-left">
          <span>
            Didesain & dikembangkan oleh {site.name} © {new Date().getFullYear()}
          </span>
          {site.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 transition hover:text-white"
            >
              <GithubIcon className="size-4" /> {site.github.replace("https://github.com/", "@")}
            </a>
          )}
        </div>
      </footer>
    </>
  );
}
