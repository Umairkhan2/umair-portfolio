import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { site, stats, skills, services, experience, projects } from "@/data/site";

const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi Umair, I saw your portfolio and want to discuss a project."
)}`;

function SectionHead({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  return (
    <Reveal>
      <p className="text-sm uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-line bg-bg/70 px-5 py-3 backdrop-blur-xl">
          <a href="#top" className="font-serif text-2xl leading-none">
            Umair<span className="text-accent">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a href={wa} target="_blank" rel="noopener" className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-black transition hover:opacity-90">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative px-6 pb-24 pt-40 md:pt-52">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for new projects
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              I build websites that <span className="font-serif font-normal italic text-accent">sell</span>
              <br className="hidden md:block" /> and systems that{" "}
              <span className="font-serif font-normal italic">run themselves.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg text-muted">
              I&apos;m {site.name}, a WordPress developer with 3+ years of experience. I craft high-end websites,
              stores and GoHighLevel funnels, then automate your business with Make.com, n8n and AI chatbots.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-accent">
                View my work
              </a>
              <a href={wa} target="_blank" rel="noopener" className="rounded-full border border-line px-6 py-3 font-medium transition hover:border-white">
                WhatsApp me →
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-bg p-6">
                  <p className="text-3xl font-semibold">{s.value}</p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <section aria-label="Tools I use" className="border-y border-line py-6">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee-track flex w-max gap-12 pr-12">
            {[...skills, ...skills].map((s, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap text-xl text-muted">
                {s} <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHead
            eyebrow="Services"
            title={<>Everything your business needs <span className="font-serif font-normal italic text-muted">online.</span></>}
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80} className={s.wide ? "md:col-span-2" : ""}>
                <div className="h-full rounded-3xl border border-line bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/40">
                  <p className="text-sm text-accent">0{i + 1}</p>
                  <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHead
            eyebrow="Selected work"
            title={<>Projects I&apos;m <span className="font-serif font-normal italic text-accent">proud</span> of.</>}
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 120}>
                <a href={p.link} target="_blank" rel="noopener" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line" style={{ background: p.gradient }}>
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
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                      <p className="mt-1 text-muted">{p.desc}</p>
                    </div>
                    <span className="text-2xl text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">↗</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHead eyebrow="Experience" title="Where I've been building." />
          <div className="mt-14 border-b border-line">
            {experience.map((e, i) => (
              <Reveal key={e.company + e.period} delay={i * 80}>
                <div className="grid gap-4 border-t border-line py-8 md:grid-cols-[220px_1fr]">
                  <p className="text-sm text-muted">{e.period}</p>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {e.role} <span className="font-normal text-muted">@ {e.company}</span>
                    </h3>
                    <p className="mt-2 text-muted">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28">
        <Reveal className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-surface px-8 py-20 text-center md:px-16">
            <div className="glow pointer-events-none absolute inset-0" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Contact</p>
              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Have a project in mind? <span className="font-serif font-normal italic">Let&apos;s build it.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-muted">
                Website, funnel, store or automation. Tell me what you need and I&apos;ll get back to you quickly.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href={wa} target="_blank" rel="noopener" className="rounded-full bg-accent px-6 py-3 font-medium text-black transition hover:opacity-90">
                  WhatsApp: {site.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="rounded-full border border-line px-6 py-3 font-medium transition hover:border-white">
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={site.linkedin} target="_blank" rel="noopener" className="transition hover:text-white">LinkedIn</a>
            <a href={`mailto:${site.email}`} className="transition hover:text-white">Email</a>
            <a href={wa} target="_blank" rel="noopener" className="transition hover:text-white">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={wa}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </main>
  );
}
