import { ArrowUpRight, Mail, Quote } from "lucide-react";
import { achievements, projects, services, site, testimonials } from "@/lib/content";
import { LeadForm } from "@/components/lead-form";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <a href="#" className="text-lg font-bold">
            {site.name}
          </a>
          <div className="flex items-center gap-5 text-sm">
            <a href="#layanan" className="hover:opacity-70">Layanan</a>
            <a href="#portfolio" className="hover:opacity-70">Portfolio</a>
            <a href="#kontak" className="font-medium text-[var(--primary)] hover:opacity-70">
              Hubungi
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="border-b">
          <div className="mx-auto max-w-5xl px-4 py-20">
            <p className="text-sm font-medium text-[var(--primary)]">{site.role}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-[var(--muted)]">{site.about}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#kontak"
                className="inline-flex h-12 items-center rounded-lg bg-[var(--primary)] px-6 font-medium text-white hover:opacity-90"
              >
                Minta Penawaran
              </a>
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-lg border px-5 font-medium hover:bg-black/[0.03]"
                >
                  <GithubIcon className="size-4" /> GitHub
                </a>
              )}
            </div>
          </div>
        </section>

        {achievements.length > 0 && (
          <section className="border-b bg-black/[0.02] py-12">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 sm:grid-cols-3">
              {achievements.map((a) => (
                <div key={a.label} className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
                    {a.metric}
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{a.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {services.length > 0 && (
          <section id="layanan" className="border-b py-16">
            <div className="mx-auto max-w-5xl px-4">
              <h2 className="mb-8 text-2xl font-bold">Layanan</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <div key={s.name} className="rounded-xl border bg-white p-5">
                    <h3 className="font-semibold">{s.name}</h3>
                    {s.description && (
                      <p className="mt-2 text-sm text-[var(--muted)]">{s.description}</p>
                    )}
                    {s.priceText && (
                      <p className="mt-3 text-sm font-medium text-[var(--primary)]">{s.priceText}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section id="portfolio" className="border-b py-16">
            <div className="mx-auto max-w-5xl px-4">
              <h2 className="mb-8 text-2xl font-bold">Portfolio</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => {
                  const Wrapper = p.link ? "a" : "div";
                  return (
                    <Wrapper
                      key={p.title}
                      href={p.link || undefined}
                      target={p.link ? "_blank" : undefined}
                      rel={p.link ? "noopener noreferrer" : undefined}
                      className="group flex flex-col overflow-hidden rounded-xl border bg-white"
                    >
                      {p.imageUrl && (
                        <div className="aspect-video overflow-hidden bg-black/5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={p.imageUrl} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-4">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-semibold">{p.title}</h3>
                          {p.link && <ArrowUpRight className="size-4 shrink-0 text-[var(--muted)]" />}
                        </div>
                        {p.description && (
                          <p className="mt-1 text-xs text-[var(--muted)]">{p.description}</p>
                        )}
                        {p.stack.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {p.stack.map((tag) => (
                              <span key={tag} className="rounded bg-black/[0.04] px-2 py-0.5 text-[11px] text-[var(--muted)]">
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

        {testimonials.length > 0 && (
          <section className="border-b bg-black/[0.02] py-16">
            <div className="mx-auto max-w-5xl px-4">
              <h2 className="mb-8 text-2xl font-bold">Apa Kata Klien</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                  <figure key={t.author} className="rounded-xl border bg-white p-5">
                    <Quote className="size-5 text-[var(--primary)]" />
                    <blockquote className="mt-3 text-sm">{t.quote}</blockquote>
                    <figcaption className="mt-4 text-sm font-medium">
                      {t.author}
                      {t.role && <span className="font-normal text-[var(--muted)]"> · {t.role}</span>}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="kontak" className="py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-2 text-center text-2xl font-bold">Tertarik Bekerja Sama?</h2>
            <p className="mb-8 text-center text-[var(--muted)]">
              Isi form di bawah, saya akan menghubungi Anda secepatnya.
            </p>
            <LeadForm />
            <div className="mt-6 flex items-center justify-center gap-5 text-sm text-[var(--muted)]">
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:opacity-70">
                <Mail className="size-4" /> {site.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </>
  );
}
