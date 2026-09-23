import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Mail,
  MessageCircle,
  Quote,
  Server,
  Smartphone,
  Code2,
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

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
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
        <section className="relative flex min-h-[calc(100dvh-4rem)] sm:min-h-svh items-center overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(194,164,255,0.12)_0%,transparent_50%),radial-gradient(circle_at_80%_40%,rgba(168,124,255,0.1)_0%,transparent_50%)]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pb-14 pt-24 sm:pb-20 sm:pt-32">
            <Reveal>
              <div className="flex items-center gap-3 sm:gap-4">
                {site.avatarUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={site.avatarUrl}
                    alt={site.name}
                    className="size-14 sm:size-20 rounded-full object-cover ring-2 ring-[#a87cff]/60"
                  />
                )}
                <div>
                  <p className="text-base sm:text-xl text-zinc-300">👋 Halo! Saya</p>
                  <p className="text-xs sm:hidden font-medium text-[#c2a4ff] mt-0.5">{site.role}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-3 sm:mt-2 text-5xl font-bold leading-[1.0] tracking-tight sm:text-8xl lg:text-9xl">
                {site.name.split(" ")[0]}
                <br />
                <GradientText>{site.name.split(" ").slice(1).join(" ")}</GradientText>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="hidden sm:block mt-8 text-xl font-medium text-zinc-200 sm:text-2xl">{site.role}</p>
              <p className="mt-4 sm:mt-3 max-w-xl text-pretty text-sm sm:text-base leading-relaxed text-zinc-400">
                {site.about}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#kontak"
                  className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a87cff] to-[#8b5cf6] px-8 py-3.5 font-medium text-white shadow-lg shadow-[#a87cff]/25 transition hover:shadow-[#a87cff]/45 hover:brightness-110 active:scale-[0.98]"
                >
                  Minta Penawaran
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-medium text-zinc-200 transition hover:border-[#c2a4ff]/50 hover:bg-white/5 active:scale-[0.98]"
                >
                  Lihat Portofolio
                </a>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4 text-zinc-500">
                <div className="flex items-center gap-2">
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
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Terbuka untuk project baru
                </div>
              </div>
            </Reveal>
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
                  Project pilihan yang pernah saya kembangkan
                </p>
              </Reveal>
              <div className="mt-8 sm:mt-14 grid gap-5 sm:grid-cols-2">
                {projects.map((p, i) => {
                  const Wrapper = p.link ? "a" : "div";
                  return (
                    <Reveal key={p.title} delay={i * 100}>
                      <Wrapper
                        href={p.link || undefined}
                        target={p.link ? "_blank" : undefined}
                        rel={p.link ? "noopener noreferrer" : undefined}
                        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#c2a4ff]/40"
                      >
                        <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-gradient-to-br from-[#1a1126] via-[#0d0a12] to-[#150f22]">
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
                        </div>
                        <div className="flex flex-1 flex-col p-5 sm:p-6">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-base sm:text-lg">{p.title}</h3>
                            {p.link && (
                              <ArrowUpRight className="size-4 shrink-0 text-zinc-500 transition group-hover:text-[#c2a4ff]" />
                            )}
                          </div>
                          {p.description && (
                            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">{p.description}</p>
                          )}
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
                          {p.link && (
                            <div className="mt-4 pt-3 border-t border-white/[0.04] sm:hidden">
                              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#c2a4ff]">
                                Lihat Project <ArrowUpRight className="size-3.5" />
                              </span>
                            </div>
                          )}
                        </div>
                      </Wrapper>
                    </Reveal>
                  );
                })}
              </div>
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
