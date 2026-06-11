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
import { achievements, projects, services, site, testimonials } from "@/lib/content";
import { LeadForm } from "@/components/lead-form";

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
    <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function Tagline() {
  const idx = site.tagline.indexOf(site.taglineAccent);
  if (idx === -1) return <>{site.tagline}</>;
  return (
    <>
      {site.tagline.slice(0, idx)}
      <GradientText>{site.taglineAccent}</GradientText>
      {site.tagline.slice(idx + site.taglineAccent.length)}
    </>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">{label}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/[0.06] bg-[#09090f]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2.5 text-[15px] font-bold">
            <span className="inline-block size-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-500" />
            {site.name}
          </a>
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <a href="#layanan" className="hidden rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white sm:block">
              Layanan
            </a>
            <a href="#portfolio" className="hidden rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white sm:block">
              Portfolio
            </a>
            <a
              href="#kontak"
              className="ml-2 rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-zinc-200"
            >
              Hubungi
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[140px]"
          />
          <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-40 sm:pb-32 sm:pt-48">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-zinc-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Terbuka untuk proyek baru
            </div>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
              <Tagline />
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400">
              {site.about}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#kontak"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-7 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40 hover:brightness-110"
              >
                Minta Penawaran
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-6 font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
                >
                  <GithubIcon className="size-4" /> GitHub
                </a>
              )}
            </div>
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

        {/* Services */}
        {services.length > 0 && (
          <section id="layanan" className="scroll-mt-16 py-24">
            <div className="mx-auto max-w-6xl px-5">
              <SectionHeading label="Layanan" title="Apa yang bisa saya kerjakan" />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => {
                  const Icon = serviceIcons[i % serviceIcons.length];
                  return (
                    <div
                      key={s.name}
                      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 transition hover:border-indigo-400/40 hover:bg-white/[0.05]"
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -top-16 right-0 size-40 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition group-hover:opacity-100"
                      />
                      <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
                      {s.description && (
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
                      )}
                      {s.priceText && (
                        <p className="mt-4 text-sm font-medium text-indigo-300">{s.priceText}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Portfolio */}
        {projects.length > 0 && (
          <section id="portfolio" className="scroll-mt-16 border-t border-white/[0.06] py-24">
            <div className="mx-auto max-w-6xl px-5">
              <SectionHeading label="Portfolio" title="Project yang pernah saya bangun" />
              <div className="grid gap-5 sm:grid-cols-2">
                {projects.map((p) => {
                  const Wrapper = p.link ? "a" : "div";
                  return (
                    <Wrapper
                      key={p.title}
                      href={p.link || undefined}
                      target={p.link ? "_blank" : undefined}
                      rel={p.link ? "noopener noreferrer" : undefined}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition hover:-translate-y-1 hover:border-indigo-400/40"
                    >
                      <div className="relative aspect-[2/1] overflow-hidden bg-gradient-to-br from-indigo-950 via-[#0d0d18] to-violet-950">
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
                              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-4xl font-bold tracking-tight text-white/15 transition group-hover:text-white/25">
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
                            <ArrowUpRight className="size-4 shrink-0 text-zinc-500 transition group-hover:text-indigo-300" />
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
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="border-t border-white/[0.06] py-24">
            <div className="mx-auto max-w-6xl px-5">
              <SectionHeading label="Testimoni" title="Apa kata klien" />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                  <figure
                    key={t.author}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7"
                  >
                    <Quote className="size-5 text-indigo-400" />
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
        <section id="kontak" className="relative scroll-mt-16 overflow-hidden border-t border-white/[0.06] py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]"
          />
          <div className="relative mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Kontak</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Punya project? <GradientText>Ngobrol dulu aja.</GradientText>
              </h2>
              <p className="mt-4 text-zinc-400">
                Ceritakan kebutuhan Anda — saya balas secepatnya, konsultasi awal gratis.
              </p>
            </div>
            <div className="mt-12">
              <LeadForm />
            </div>
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
          <span>© {new Date().getFullYear()} {site.name}</span>
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
