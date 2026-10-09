import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Logo from "@/components/Logo";
import { site, stats, skills, services, projects, processSteps, whyMe } from "@/data/site";

const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Umair, I saw your portfolio and want to discuss a project."
)}`;

const container = "mx-auto w-full max-w-7xl px-5 md:px-8";

const flow = [
  { i: "WP", t: "Form submitted", d: "WordPress website" },
  { i: "n8n", t: "Workflow triggered", d: "Make.com / n8n" },
  { i: "GHL", t: "Lead added to CRM", d: "GoHighLevel pipeline" },
  { i: "AI", t: "Instant reply sent", d: "AI chatbot" },
];

function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-accent ${center ? "justify-center" : ""}`}>
      <span className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={100}>
          <p className="max-w-sm text-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

function ArrowCircle({ dark = true }: { dark?: boolean }) {
  return (
    <span
      className={`grid h-10 w-10 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${
        dark ? "bg-black text-accent" : "bg-accent text-black"
      }`}
    >
      ↗
    </span>
  );
}

export default function Home() {
  return (
    <main className="noise relative overflow-x-clip">
      <Cursor />
      <Navbar wa={wa} email={site.email} />

      {/* ================= HERO ================= */}
      <section id="top" className="relative flex min-h-[100svh] items-center pb-20 pt-32">
        <div className="grid-bg inset-0" />
        <div className="orb left-[-10%] top-[8%] h-[420px] w-[420px] bg-accent" />
        <div className="orb right-[-8%] top-[35%] h-[380px] w-[380px] bg-[#6d5dfc]" style={{ animationDelay: "-6s" }} />

        <div className={`${container} relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]`}>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for new projects
              </span>
            </Reveal>

            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="line"><span>I build websites</span></span>
              <span className="line">
                <span style={{ animationDelay: "120ms" }}>
                  that{" "}
                  <span className="rotator font-serif font-normal italic text-accent">
                    <span>
                      <span>sell.</span>
                      <span>convert.</span>
                      <span>scale.</span>
                      <span>sell.</span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="line"><span style={{ animationDelay: "240ms" }}>&amp; systems that</span></span>
              <span className="line">
                <span style={{ animationDelay: "360ms" }} className="font-serif font-normal italic text-white/90">
                  run themselves.
                </span>
              </span>
            </h1>

            <Reveal delay={450}>
              <p className="mt-8 max-w-xl text-base text-muted sm:text-lg">
                I&apos;m {site.name}, a WordPress developer with 3+ years of experience. I design and build premium
                websites, custom WordPress plugins, stores and GoHighLevel funnels, then automate the busywork with
                Make.com, n8n and AI chatbots.
              </p>
            </Reveal>

            <Reveal delay={550}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#work" className="btn-shine group inline-flex items-center gap-3 rounded-full bg-accent py-2 pl-6 pr-2 font-semibold text-black">
                  View my work
                  <ArrowCircle />
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center rounded-full border border-line px-6 py-4 font-medium transition hover:border-white/40 hover:bg-white/5"
                >
                  WhatsApp me
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero visual: automation workflow card */}
          <Reveal delay={300} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="float-slow">
              <div className="spot rounded-[28px] border border-line bg-surface/80 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                  </div>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                    Workflow active
                  </span>
                </div>
                <div className="relative mt-6">
                  <div className="absolute bottom-5 left-5 top-5 w-px bg-line">
                    <span className="flow-dot" />
                  </div>
                  <div className="space-y-3">
                    {flow.map((f) => (
                      <div key={f.t} className="flex items-center gap-4">
                        <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-[11px] font-semibold text-accent">
                          {f.i}
                        </span>
                        <div className="flex flex-1 items-center justify-between rounded-2xl border border-line bg-bg/60 px-4 py-3">
                          <div>
                            <p className="text-sm font-medium">{f.t}</p>
                            <p className="text-xs text-muted">{f.d}</p>
                          </div>
                          <span className="text-xs text-accent">✓</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="float-fast absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-surface px-4 py-3 shadow-xl sm:block">
              <p className="text-xs text-muted">New lead</p>
              <p className="text-sm font-semibold">Call booked ✓</p>
            </div>
            <div
              className="float-fast absolute -right-4 -top-6 hidden rounded-2xl bg-accent px-4 py-3 text-black shadow-xl sm:block"
              style={{ animationDelay: "-2.5s" }}
            >
              <p className="text-xs font-medium">Custom plugin</p>
              <p className="text-sm font-semibold">v2.0 shipped 🚀</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className={`${container} pb-20`}>
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg p-6 md:p-8">
                <p className="text-4xl font-semibold tracking-tight md:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= MARQUEE ================= */}
      <section aria-label="Tools I use" className="space-y-4 border-y border-line py-10">
        {[false, true].map((rev, r) => (
          <div key={r} className="marquee-mask flex overflow-hidden">
            <div className={`marquee-track flex w-max gap-10 pr-10 ${rev ? "reverse" : ""}`}>
              {[...skills, ...skills].map((s, i) => (
                <span
                  key={i}
                  className={`flex items-center gap-10 whitespace-nowrap text-3xl font-semibold tracking-tight md:text-5xl ${
                    (i + r) % 2 ? "text-outline" : "text-white/90"
                  }`}
                >
                  {s}
                  <span className="text-2xl text-accent">✦</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-28 md:py-36">
        <div className={container}>
          <SectionHead
            eyebrow="Services"
            title={<>Everything your business needs to <span className="font-serif font-normal italic text-accent">win online.</span></>}
            intro="From pixel-perfect websites to custom plugins and automations that save hours every week."
          />
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90} className={s.wide ? "lg:col-span-2" : ""}>
                <article
                  className={`spot group flex h-full flex-col overflow-hidden rounded-[28px] border bg-surface p-8 transition duration-500 hover:-translate-y-1 md:p-10 ${
                    s.featured ? "border-accent/40" : "border-line hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-5xl italic text-white/15 transition duration-500 group-hover:text-accent/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.featured && (
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black">Featured</span>
                    )}
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold tracking-tight md:text-3xl">{s.title}</h3>
                  <p className="mt-3 max-w-lg text-muted">{s.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORK ================= */}
      <section id="work" className="py-28 md:py-36">
        <div className={container}>
          <SectionHead
            eyebrow="Selected work"
            title={<>Projects I&apos;m <span className="font-serif font-normal italic text-accent">proud</span> of.</>}
            intro="A few recent builds. Message me on WhatsApp for more examples."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 120} className={i % 2 ? "md:mt-20" : ""}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  className="spot group block rounded-[28px] border border-line bg-surface p-3 transition duration-500 hover:border-white/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]" style={{ background: p.gradient }}>
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center font-serif text-5xl italic text-white/80 transition duration-700 group-hover:scale-105">
                        {p.title}
                      </div>
                    )}
                    <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs backdrop-blur">{p.category}</span>
                    <span className="absolute bottom-4 right-4 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-accent text-black opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>
                  <div className="px-3 pb-3 pt-5">
                    <h3 className="text-xl font-semibold md:text-2xl">{p.title}</h3>
                    <p className="mt-2 text-muted">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="py-28 md:py-36">
        <div className={container}>
          <SectionHead
            eyebrow="Process"
            title={<>Simple process, <span className="font-serif font-normal italic text-accent">premium results.</span></>}
          />
          <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div
              className="absolute inset-x-0 top-7 hidden h-px lg:block"
              style={{ background: "linear-gradient(90deg, transparent, #222225 10%, #222225 90%, transparent)" }}
            />
            {processSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-line bg-bg font-serif text-xl italic text-accent">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ME ================= */}
      <section id="why" className="py-28 md:py-36">
        <div className={`${container} grid gap-16 lg:grid-cols-[1fr_1.2fr]`}>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>Why me</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                3+ years of building websites that{" "}
                <span className="font-serif font-normal italic text-accent">actually work.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-md text-muted">
                You get one person who handles the website, the plugin, the funnel and the automation, so nothing gets
                lost between teams and your project moves fast.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyMe.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 100}>
                <div className="spot h-full rounded-[28px] border border-line bg-surface p-8 transition duration-500 hover:border-white/20">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">✦</span>
                  <h3 className="mt-6 text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-muted">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 md:py-36">
        <div className={container}>
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-line bg-surface px-6 py-20 text-center md:px-16 md:py-28">
              <div className="grid-bg inset-0" />
              <div className="orb left-[calc(50%-200px)] top-[-120px] h-[400px] w-[400px] bg-accent" />
              <div className="relative">
                <Eyebrow center>Let&apos;s work together</Eyebrow>
                <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  Have a project in mind? <span className="font-serif font-normal italic text-accent">Let&apos;s build it.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-muted">
                  Website, plugin, funnel, store or automation. Tell me what you need and I&apos;ll get back to you quickly.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener"
                    className="btn-shine group inline-flex items-center gap-3 rounded-full bg-accent py-2 pl-6 pr-2 font-semibold text-black"
                  >
                    WhatsApp: {site.phoneDisplay}
                    <ArrowCircle />
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all rounded-full border border-line px-6 py-4 text-sm font-medium transition hover:border-white/40 hover:bg-white/5 sm:text-base"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative overflow-hidden border-t border-line pt-16">
        <div className={`${container} flex flex-col gap-10 md:flex-row md:items-start md:justify-between`}>
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              WordPress developer, plugin builder and automation expert.
            </p>
          </div>
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-muted">Menu</p>
              <a href="#services" className="transition hover:text-accent">Services</a>
              <a href="#work" className="transition hover:text-accent">Work</a>
              <a href="#process" className="transition hover:text-accent">Process</a>
              <a href="#why" className="transition hover:text-accent">Why me</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-muted">Contact</p>
              <a href={wa} target="_blank" rel="noopener" className="transition hover:text-accent">WhatsApp</a>
              <a href={`mailto:${site.email}`} className="transition hover:text-accent">Email</a>
              <a href={site.linkedin} target="_blank" rel="noopener" className="transition hover:text-accent">LinkedIn</a>
            </div>
          </div>
        </div>
        <p
          aria-hidden="true"
          className="text-outline mt-16 select-none whitespace-nowrap text-center text-[14vw] font-semibold leading-[0.85] tracking-tighter"
        >
          UMAIR KHAN
        </p>
        <div className={`${container} flex flex-col items-center justify-between gap-2 border-t border-line py-6 text-xs text-muted md:flex-row`}>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed & built with Next.js</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={wa}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </main>
  );
}
