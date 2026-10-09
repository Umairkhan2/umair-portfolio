"use client";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why me" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ wa, email }: { wa: string; email: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <nav
            className={`relative flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 md:px-5 ${
              scrolled || open
                ? "border-line bg-bg/75 shadow-2xl shadow-black/40 backdrop-blur-xl"
                : "border-transparent"
            }`}
          >
            <a href="#top" aria-label="Home" onClick={() => setOpen(false)}>
              <Logo />
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener"
                className="btn-shine hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black sm:inline-flex"
              >
                Let&apos;s talk ↗
              </a>
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="relative grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
              >
                <span className={`absolute h-[1.5px] w-5 bg-white transition duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
                <span className={`absolute h-[1.5px] w-5 bg-white transition duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
              </button>
            </div>

            <div
              ref={bar}
              className="absolute inset-x-5 -bottom-px h-px origin-left bg-accent"
              style={{ transform: "scaleX(0)" }}
            />
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`menu-panel fixed inset-0 z-40 bg-surface lg:hidden ${open ? "is-open" : ""}`}>
        <div className="grid-bg absolute inset-0" />
        <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.href} className="overflow-hidden">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="menu-item items-baseline gap-4 py-2 text-5xl font-semibold tracking-tight"
                  style={{ transitionDelay: open ? `${200 + i * 70}ms` : "0ms" }}
                >
                  <span className="text-sm text-accent">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <a
              href={wa}
              target="_blank"
              rel="noopener"
              className="flex w-full items-center justify-center rounded-full bg-accent py-4 font-semibold text-black"
            >
              WhatsApp me ↗
            </a>
            <a href={`mailto:${email}`} className="block break-all text-center text-sm text-muted">
              {email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
