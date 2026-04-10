"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CENNIK_HEADER_DROPDOWN } from "@/components/sections/CategoryGrid";
import { Container } from "@/components/ui/Container";

const NAV = [
  { label: "O nas", href: "/#o-nas" },
  {
    label: "Usługi",
    href: "/uslugi",
    children: [
      { label: "Medycyna estetyczna", href: "/medycyna-estetyczna" },
      { label: "Kosmetologia", href: "/kosmetologia" },
      { label: "Laseroterapia", href: "/laseroterapia" },
      { label: "Leczenie powikłań", href: "/leczenie-powiklan" },
    ],
  },
  { label: "Zespół", href: "/zespol" },
  { label: "Szkolenia", href: "/szkolenia" },
  {
    label: "Cennik",
    href: "/cennik",
    children: [...CENNIK_HEADER_DROPDOWN],
  },
  { label: "Certyfikaty", href: "/certyfikaty" },
  { label: "Vouchery", href: "/vouchery" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLink = scrolled
    ? "text-zinc-700 after:bg-zinc-400 hover:text-zinc-900"
    : "text-white/95 after:bg-white/70 hover:text-white";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-400 ease-out ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/92 shadow-beauty backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-[7.5rem] lg:transition-[height] lg:duration-300">
        <Link href="/" className="relative z-[60] shrink-0">
          <Image
            src="/logo.svg"
            alt="ClinicaNova"
            width={451}
            height={131}
            className={`h-10 w-auto object-contain transition-all duration-300 lg:h-12 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Główna nawigacja"
        >
          {NAV.map((item) =>
            "children" in item && item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`relative px-3 py-6 text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors after:absolute after:left-1/2 after:top-[calc(100%-1.25rem)] after:h-px after:w-0 after:-translate-x-1/2 after:transition-all after:duration-300 group-hover:after:w-full ${navLink}`}
                >
                  {item.label}
                </Link>
                <div className="pointer-events-none invisible absolute left-0 top-full z-50 min-w-[17.5rem] translate-y-2 opacity-0 shadow-beauty-lg transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="relative border border-zinc-100 bg-white pt-2">
                    <span
                      className="absolute -top-2 left-6 h-0 w-0 border-x-[10px] border-b-[10px] border-x-transparent border-b-white"
                      aria-hidden
                    />
                    <ul className="py-2">
                      {item.children.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block px-8 py-2.5 text-[0.95rem] font-light text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-6 text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors after:absolute after:left-1/2 after:top-[calc(100%-1.25rem)] after:h-px after:w-0 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full ${navLink}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className={`relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden ${
            scrolled ? "[&_span]:bg-zinc-800" : "[&_span]:bg-white"
          }`}
          aria-expanded={open ? "true" : "false"}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
          <span className="sr-only">Menu</span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-zinc-950/97 px-6 pt-24 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Menu mobilne">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-zinc-800/80 pb-4">
              <Link
                href={item.href}
                className="block py-2 text-lg font-light uppercase tracking-[0.15em] text-zinc-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <ul className="ml-1 mt-2 border-l border-zinc-700 pl-4">
                  {item.children.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        className="block py-1.5 text-sm font-light text-zinc-400 transition hover:text-zinc-200"
                        onClick={() => setOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
