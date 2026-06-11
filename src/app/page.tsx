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
import { Intro } from "@/components/intro";
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
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items].map((s, i) => (
          <span
            key={i}
            className="mx-2.5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-300 sm:text-base"
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
    <h2 className="text-center text-4xl font-medium uppercase tracking-tight sm:text-6xl lg:text-7xl">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <Intro />
      <CursorGlow />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/[0.06] bg-[#0b080c]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2.5 text-[15px] font-bold">
            <span className="inline-block size-2.5 rounded-full bg-gradient-to-br from-[#c2a4ff] to-[#a87cff]" />
            {site.name}
          </a>
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <a href="#layanan" className="hidden rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white sm:block">
              Layanan
            </a>
            <a href="#portfolio" className="hidden rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white sm:block">
              Portofolio
            </a>
            <a
              href="#kontak"
              className="ml-2 rounded-full bg-[#eae5ec] px-4 py-2 font-medium text-black transition hover:bg-[#c2a4ff]"
            >
              Hubungi
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-svh items-center overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(194,164,255,0.12)_0%,transparent_50%),radial-gradient(circle_at_80%_40%,rgba(168,124,255,0.1)_0%,transparent_50%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(234,229,236,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,229,236,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
            <Reveal>
              <div className="flex items-center gap-4">
                {site.avatarUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={site.avatarUrl}
                    alt={site.name}
                    className="size-16 rounded-full object-cover ring-2 ring-[#a87cff]/60 sm:size-20"
                  />
                )}
                <p className="text-lg text-zinc-300 sm:text-xl">👋 Halo! Saya</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-2 text-6xl font-bold leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl">
                {site.name.split(" ")[0]}
                <br />
                <GradientText>{site.name.split(" ").slice(1).join(" ")}</GradientText>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-xl font-medium text-zinc-200 sm:text-2xl">{site.role}</p>
              <p className="mt-3 max-w-xl text-pretty leading-relaxed text-zinc-400">
                {site.about}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#kontak"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#a87cff] to-[#8b5cf6] px-8 py-3.5 font-medium text-white shadow-lg shadow-[#a87cff]/25 transition hover:shadow-[#a87cff]/45 hover:brightness-110"
                >
                  Minta Penawaran
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-medium text-zinc-200 transition hover:border-[#c2a4ff]/50 hover:bg-white/5"
                >
                  Lihat Portofolio
                </a>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-12 flex items-center gap-5 text-zinc-500">
                {site.github && (
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="transition hover:text-[#c2a4ff]"
                  >
                    <GithubIcon className="size-5" />
                  </a>
                )}
                <a href={`mailto:${site.email}`} aria-label="Email" className="transition hover:text-[#c2a4ff]">
                  <Mail className="size-5" />
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="transition hover:text-[#c2a4ff]"
                >
                  <MessageCircle className="size-5" />
                </a>
                <span className="ml-1 inline-flex items-center gap-2 text-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  Terbuka untuk proyek baru
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Achievements */}
        {achievements.length > 0 && (
          <section className="border-y border-white/[0.06] bg-white/[0.02]">
            <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.06] px-5 sm:grid-cols-3">
              {achievements.map((a) => (
                <div key={a.label} className="px-4 py-10 text-center">
                  <div className="text-3xl font-bold sm:text-4xl">
                    <GradientText>{a.metric}</GradientText>
                  </div>
                  <div className="mt-2 text-sm text-zinc-500">{a.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="relative overflow-hidden py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(194,164,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(194,164,255,0.08)_0%,transparent_50%)]"
          />
          <div className="relative">
            <Reveal>
              <BigHeading>Tech Stack</BigHeading>
              <p className="mt-4 text-center text-zinc-500">Skillset & tools yang saya pakai sehari-hari</p>
            </Reveal>
            <div className="mt-14 space-y-5">
              <SkillMarquee />
              <SkillMarquee reverse />
            </div>
          </div>
        </section>

        {/* Services */}
        {services.length > 0 && (
          <section id="layanan" className="scroll-mt-16 border-t border-white/[0.06] py-28">
            <div className="mx-auto max-w-6xl px-5">
              <Reveal>
                <BigHeading>Layanan</BigHeading>
                <p className="mt-4 text-center text-zinc-500">Apa yang bisa saya kerjakan untuk Anda</p>
              </Reveal>
              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => {
                  const Icon = serviceIcons[i % serviceIcons.length];
                  return (
                    <Reveal key={s.name} delay={i * 100}>
                      <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 transition hover:border-[#c2a4ff]/40 hover:bg-white/[0.05]">
                        <div
                          aria-hidden
                          className="pointer-events-none absolute -top-16 right-0 size-40 rounded-full bg-[#a87cff]/10 blur-3xl opacity-0 transition group-hover:opacity-100"
                        />
                        <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c2a4ff]/20 to-[#a87cff]/20 text-[#c2a4ff] ring-1 ring-inset ring-[#c2a4ff]/20">
                          <Icon className="size-5" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
                        {s.description && (
                          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
                        )}
                        {s.priceText && (
                          <p className="mt-4 text-sm font-medium text-[#c2a4ff]">{s.priceText}</p>
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
          <section className="border-t border-white/[0.06] py-28">
            <div className="mx-auto max-w-6xl px-5">
              <Reveal>
                <BigHeading>Cara Kerja</BigHeading>
                <p className="mt-4 text-center text-zinc-500">
                  Dari ide sampai live — prosesnya transparan dari awal
                </p>
              </Reveal>
              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 100}>
                    <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7">
                      <div className="text-5xl font-bold text-[#c2a4ff]/25">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-4 font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
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
          <section id="portfolio" className="scroll-mt-16 border-t border-white/[0.06] py-28">
            <div className="mx-auto max-w-6xl px-5">
              <Reveal>
                <BigHeading>My Works</BigHeading>
                <p className="mt-4 text-center text-zinc-500">Project yang pernah saya bangun</p>
              </Reveal>
              <div className="mt-14 grid gap-5 sm:grid-cols-2">
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
                        <div className="relative aspect-[2/1] overflow-hidden bg-gradient-to-br from-[#1a1126] via-[#0d0a12] to-[#150f22]">
                          {p.imageUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={p.imageUrl}
                              alt={p.title}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <>
                              <div
                                aria-hidden
                                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(234,229,236,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,229,236,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-bold tracking-tight text-white/15 transition group-hover:text-[#c2a4ff]/30">
                                  {p.title}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold">{p.title}</h3>
                            {p.link && (
                              <ArrowUpRight className="size-4 shrink-0 text-zinc-500 transition group-hover:text-[#c2a4ff]" />
                            )}
                          </div>
                          {p.description && (
                            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                          )}
                          {p.stack.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {p.stack.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300"
                                >
                                  {tag}
                                </span>
                              ))}
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
                  <div className="mt-12 text-center">
                    <p className="text-zinc-500">Mau lihat lebih banyak?</p>
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-medium text-[#c2a4ff] transition hover:text-white"
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

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="border-t border-white/[0.06] py-28">
            <div className="mx-auto max-w-6xl px-5">
              <Reveal>
                <BigHeading>Testimoni</BigHeading>
                <p className="mt-4 text-center text-zinc-500">Apa kata klien</p>
              </Reveal>
              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                  <figure
                    key={t.author}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7"
                  >
                    <Quote className="size-5 text-[#c2a4ff]" />
                    <blockquote className="mt-4 text-sm leading-relaxed text-zinc-300">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-5 text-sm font-medium">
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
        <section id="kontak" className="relative scroll-mt-16 overflow-hidden border-t border-white/[0.06] py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-[#a87cff]/15 blur-[120px]"
          />
          <div className="relative mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="mx-auto max-w-xl text-center">
                <BigHeading>Kontak</BigHeading>
                <p className="mt-5 text-lg text-zinc-300">
                  Punya project? <GradientText>Ngobrol dulu aja.</GradientText>
                </p>
                <p className="mt-2 text-zinc-500">
                  Ceritakan kebutuhan Anda — saya balas secepatnya, konsultasi awal gratis.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-12">
                <LeadForm />
              </div>
            </Reveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
                <Mail className="size-4" /> {site.email}
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-zinc-500 sm:flex-row">
          <span>
            Designed & developed by {site.name} © {new Date().getFullYear()}
          </span>
          {site.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <GithubIcon className="size-4" /> {site.github.replace("https://github.com/", "@")}
            </a>
          )}
        </div>
      </footer>
    </>
  );
}
