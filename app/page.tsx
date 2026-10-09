import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Logo from "@/components/Logo";
import { site, stats, highlights, platforms, services, projects, processSteps, whyMe, faqs } from "@/data/site";

const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Umair, I saw your portfolio and want to discuss a website project."
)}`;

const container = "mx-auto w-full max-w-7xl px-5 md:px-8";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      jobTitle: site.role,
      url: site.url,
      email: `mailto:${site.email}`,
      telephone: site.phoneDisplay,
      sameAs: [site.linkedin, site.fiverr],
      knowsAbout: ["WordPress", "Elementor", "Divi", "WPBakery", "Shopify", "Webflow", "Squarespace", "GoHighLevel", "Make.com", "n8n", "SEO", "Website Speed Optimization"],
    },
    {
      "@type": "ProfessionalService",
      name: "Umair Khan Web Development",
      url: site.url,
      email: site.email,
      telephone: site.phoneDisplay,
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressCountry: "PK" },
      description: "Premium WordPress and web development, speed optimization, GHL funnels and automations.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
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

function ArrowCircle() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-accent transition-transform duration-300 group-hover:rotate-45">
      ↗
    </span>
  );
}

export default function Home() {
  const contactRows = [
    { label: "WhatsApp", value: site.phoneDisplay, href: wa },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Fiverr", value: "umairdeveloper4", href: site.fiverr },
    { label: "LinkedIn", value: "Umair Khan Niazi", href: site.linkedin },
  ];

  return (
    <main className="noise relative overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Cursor />
      <Navbar wa={wa} email={site.email} />

      {/* ================= HERO ================= */}
      <section id="top" className="relative flex min-h-[100svh] items-center pb-16 pt-32 lg:pt-28">
        <div className="grid-bg inset-0" />
        <div className="orb left-[-10%] top-[8%] h-[420px] w-[420px] bg-accent" />
        <div className="orb right-[-8%] top-[35%] h-[380px] w-[380px] bg-[#6d5dfc]" style={{ animationDelay: "-6s" }} />

        <div className={`${container} relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10`}>
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs text-muted backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for new projects
                </span>
                <a
                  href={site.fiverr}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs text-muted backdrop-blur transition hover:border-accent/50 hover:text-white"
                >
                  Hire me on Fiverr ↗
                </a>
              </div>
            </Reveal>

            <h1 className="mt-7 text-[2.7rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.6rem]">
              <span className="line"><span className="text-gradient">Premium websites</span></span>
              <span className="line">
                <span style={{ animationDelay: "120ms" }}>
                  that{" "}
                  <span className="rotator font-serif font-normal italic text-accent">
                    <span>
                      <span>sell.</span>
                      <span>convert.</span>
                      <span>rank.</span>
                      <span>sell.</span>
                    </span>
                  </span>
                </span>
              </span>
              <span className="line">
                <span style={{ animationDelay: "240ms" }} className="font-serif font-normal italic text-white/90">
                  built to perform.
                </span>
              </span>
            </h1>

            <Reveal delay={400}>
              <p className="mt-8 max-w-xl text-base text-muted sm:text-lg">
                I&apos;m {site.name}, a WordPress &amp; web developer with 3+ years of experience and 200+ websites
                delivered. Pixel-perfect design, lightning-fast speed and SEO-ready builds on Elementor, Divi,
                WPBakery, Shopify, Webflow and Squarespace, connected to GHL funnels and automations.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener"
                  className="btn-shine group inline-flex items-center gap-3 rounded-full bg-accent py-2 pl-6 pr-2 font-semibold text-black"
                >
                  Start your project
                  <ArrowCircle />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center rounded-full border border-line px-6 py-4 font-medium transition hover:border-white/40 hover:bg-white/5"
                >
                  View my work
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero visual: website mockup (fits inside its column) */}
          <Reveal delay={300} className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative px-3 py-10 sm:px-8">
              <div className="float-slow">
                <div className="spot overflow-hidden rounded-[24px] border border-line bg-surface shadow-2xl shadow-black/60">
                  <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    </div>
                    <div className="flex flex-1 items-center gap-2 rounded-full bg-bg px-3 py-1.5 text-[11px] text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      yourbrand.com
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="h-2.5 w-16 rounded-full bg-white/25" />
                      <div className="flex gap-2">
                        <span className="h-2 w-8 rounded-full bg-white/10" />
                        <span className="h-2 w-8 rounded-full bg-white/10" />
                        <span className="h-2 w-8 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-[1.2fr_1fr] gap-4">
                      <div className="space-y-2.5 pt-2">
                        <span className="block h-3 w-[90%] rounded-full bg-white/80" />
                        <span className="block h-3 w-[70%] rounded-full bg-white/80" />
                        <span className="block h-3 w-[50%] rounded-full bg-accent" />
                        <span className="!mt-4 block h-2 w-[85%] rounded-full bg-white/10" />
                        <span className="block h-2 w-[65%] rounded-full bg-white/10" />
                        <div className="flex gap-2 pt-3">
                          <span className="h-6 w-16 rounded-full bg-accent" />
                          <span className="h-6 w-14 rounded-full border border-line" />
                        </div>
                      </div>
                      <div className="mock-image shimmer aspect-square rounded-2xl" />
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="shimmer h-16 rounded-xl border border-line bg-bg/60" />
                      <div className="shimmer h-16 rounded-xl border border-line bg-bg/60" />
                      <div className="shimmer h-16 rounded-xl border border-line bg-bg/60" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="float-fast absolute bottom-0 left-0 flex items-center gap-3 rounded-2xl border border-line bg-surface/90 p-3 pr-5 shadow-xl backdrop-blur">
                <div className="score-ring"><span>98</span></div>
                <div>
                  <p className="text-xs text-muted">PageSpeed</p>
                  <p className="text-sm font-semibold">Optimized ⚡</p>
                </div>
              </div>

              <div
                className="float-fast absolute right-0 top-0 rounded-2xl bg-accent px-4 py-3 text-black shadow-xl"
                style={{ animationDelay: "-2.5s" }}
              >
                <p className="text-xs font-medium">Delivered</p>
                <p className="text-lg font-semibold leading-none">200+ websites</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className={`${container} pb-20`}>
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg p-6 md:p-10">
                <p className="font-serif text-5xl italic md:text-7xl">
                  {s.value.replace("+", "")}
                  <span className="text-accent">{s.value.includes("+") ? "+" : ""}</span>
                </p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= MARQUEE ================= */}
      <section aria-label="Services and platforms" className="border-y border-line py-12">
        <div className="marquee-mask flex overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-12 pr-12">
            {[...highlights, ...highlights].map((h, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap font-serif text-4xl italic text-white/90 md:text-6xl">
                {h}
                <span className="text-xl not-italic text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-mask mt-8 flex overflow-hidden">
          <div className="marquee-track reverse flex w-max items-center gap-14 pr-14">
            {[...platforms, ...platforms].map((p, i) => (
              <span key={i} className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.3em] text-muted">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-28 md:py-36">
        <div className={container}>
          <SectionHead
            eyebrow="Services"
            title={<>Websites that make your brand look <span className="font-serif font-normal italic text-accent">expensive.</span></>}
            intro="From brand-new builds to fixing and speeding up your existing site, on any builder or platform."
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
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black">Most popular</span>
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
            title={<>A few of my <span className="font-serif font-normal italic text-accent">200+</span> websites.</>}
            intro="Want to see more? Check my Fiverr profile or message me on WhatsApp."
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
          <Reveal className="mt-14 flex justify-center">
            <a
              href={site.fiverr}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-4 font-medium transition hover:border-accent/60 hover:text-accent"
            >
              See more work on Fiverr ↗
            </a>
          </Reveal>
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
                200+ websites. <span className="font-serif font-normal italic text-accent">Zero shortcuts.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-md text-muted">
                One developer for your website, speed, SEO, funnels and automations. Nothing gets lost between teams,
                and your project moves fast.
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

      {/* ================= FAQ ================= */}
      <section id="faq" className="py-28 md:py-36">
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.4fr]`}>
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Questions? <span className="font-serif font-normal italic text-accent">Answered.</span>
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group rounded-2xl border border-line bg-surface p-6 transition open:border-white/20">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-accent transition duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 md:py-36">
        <div className={container}>
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-line bg-surface">
              <div className="grid-bg inset-0" />
              <div className="orb left-[-100px] top-[-120px] h-[400px] w-[400px] bg-accent" />
              <div className="relative grid gap-12 p-8 md:p-14 lg:grid-cols-[1.1fr_1fr] lg:p-16">
                <div>
                  <Eyebrow>Let&apos;s work together</Eyebrow>
                  <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                    Ready for a website that <span className="font-serif font-normal italic text-accent">brings clients?</span>
                  </h2>
                  <p className="mt-6 max-w-md text-muted">
                    New website, redesign, speed fix or funnel. Tell me about your project and I&apos;ll get back to you quickly.
                  </p>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener"
                    className="btn-shine group mt-10 inline-flex items-center gap-3 rounded-full bg-accent py-2 pl-6 pr-2 font-semibold text-black"
                  >
                    Start on WhatsApp
                    <ArrowCircle />
                  </a>
                </div>
                <div className="flex flex-col divide-y divide-line self-end border-y border-line">
                  {contactRows.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener"
                      className="group flex items-center justify-between gap-4 py-5"
                    >
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted">{c.label}</p>
                        <p className="mt-1 break-all text-lg font-medium transition group-hover:text-accent md:text-xl">{c.value}</p>
                      </div>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-line">
        <div className={`${container} flex flex-col gap-10 py-14 md:flex-row md:justify-between`}>
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Premium WordPress &amp; web developer. Websites, funnels and automations that grow your business.
            </p>
          </div>
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-muted">Menu</p>
              <a href="#services" className="transition hover:text-accent">Services</a>
              <a href="#work" className="transition hover:text-accent">Work</a>
              <a href="#process" className="transition hover:text-accent">Process</a>
              <a href="#faq" className="transition hover:text-accent">FAQ</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-muted">Connect</p>
              <a href={wa} target="_blank" rel="noopener" className="transition hover:text-accent">WhatsApp</a>
              <a href={`mailto:${site.email}`} className="transition hover:text-accent">Email</a>
              <a href={site.fiverr} target="_blank" rel="noopener" className="transition hover:text-accent">Fiverr</a>
              <a href={site.linkedin} target="_blank" rel="noopener" className="transition hover:text-accent">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className={`${container} border-t border-line py-6 text-center text-xs text-muted md:text-left`}>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
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
