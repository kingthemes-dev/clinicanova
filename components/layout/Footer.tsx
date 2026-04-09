import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

const FOOTER_NAV_MAIN = [
  { label: "Zespół", href: "#zespol" },
  { label: "Usługi", href: "#oferta" },
  { label: "Certyfikaty", href: "#certyfikaty" },
  { label: "Cennik", href: "#cennik" },
  { label: "Dobierz swój zabieg", href: "#pierwsza-konsultacja" },
  { label: "Szkolenia", href: "#szkolenia" },
  { label: "Vouchery", href: "#vouchery" },
  { label: "Blog", href: "#blog" },
] as const;

const FOOTER_NAV_META = [
  { label: "Polityka prywatności", href: "#polityka-prywatnosci" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

const MAPS_QUERY =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("ul. Obrońców wybrzeża 7/6, 80-398 Gdańsk");

const INSTAGRAM_URL = "https://www.instagram.com/";

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.35}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.35}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.35}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const contactIconWrap =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-zinc-900/80 text-zinc-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]";

const footerLink =
  "text-[0.8125rem] font-light text-zinc-400 transition-colors duration-220 hover:text-white";

export function Footer() {
  return (
    <footer
      id="kontakt"
      className="relative scroll-mt-28 text-zinc-300"
    >
      <div className="relative isolate overflow-hidden bg-zinc-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          aria-hidden
        />

        <Container className="relative z-10 pt-16 sm:pt-20 lg:pt-24">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            <div className="flex gap-4 rounded-2xl border border-white/[0.06] bg-zinc-900/40 p-5 sm:p-6 lg:flex-col lg:gap-5">
              <div className={contactIconWrap}>
                <IconMapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-[0.7rem] font-normal uppercase tracking-[0.22em] text-zinc-500">
                  Adres
                </p>
                <a
                  href={MAPS_QUERY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-[0.9375rem] font-light leading-relaxed text-zinc-200 transition-colors hover:text-white"
                >
                  ul. Obrońców wybrzeża 7/6
                  <br />
                  80-398 Gdańsk
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/[0.06] bg-zinc-900/40 p-5 sm:p-6 lg:flex-col lg:gap-5">
              <div className={contactIconWrap}>
                <IconPhone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-[0.7rem] font-normal uppercase tracking-[0.22em] text-zinc-500">
                  Telefon i e-mail
                </p>
                <a
                  href="tel:+48507698507"
                  className="mt-3 block text-[0.9375rem] font-light text-zinc-100 transition-colors hover:text-white"
                >
                  +48 507 698 507
                </a>
                <a
                  href="mailto:clinicanova.pl@gmail.com"
                  className="mt-2 block text-[0.9375rem] font-light text-zinc-400 transition-colors hover:text-zinc-200"
                >
                  clinicanova.pl@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/[0.06] bg-zinc-900/40 p-5 sm:p-6 lg:flex-col lg:gap-5">
              <div className={contactIconWrap}>
                <IconClock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-[0.7rem] font-normal uppercase tracking-[0.22em] text-zinc-500">
                  Godziny otwarcia
                </p>
                <p className="mt-3 text-[0.9375rem] font-light leading-relaxed text-zinc-200">
                  Poniedziałek – Piątek
                  <br />
                  10.00 – 20.00
                </p>
              </div>
            </div>
          </div>
        </Container>

        <div className="relative z-10 mt-14 border-t border-white/[0.06] sm:mt-16 lg:mt-20">
          <Container className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:gap-y-0">
              <div className="lg:col-span-4">
                <Link href="/" className="inline-block outline-none ring-offset-2 ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-white/30">
                  <Image
                    src="/logo.svg"
                    alt="ClinicaNova"
                    width={451}
                    height={131}
                    className="h-10 w-auto object-contain opacity-95 transition-opacity hover:opacity-100 sm:h-11"
                  />
                </Link>
                <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-zinc-500">
                  Medycyna estetyczna i kosmetologia w sercu Gdańska — spokojna
                  atmosfera i nowoczesne podejście do Twojej skóry.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/60 text-zinc-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition duration-300 hover:border-white/20 hover:bg-zinc-800 hover:text-white"
                  aria-label="ClinicaNova na Instagramie"
                >
                  <IconInstagram className="h-[1.125rem] w-[1.125rem] transition group-hover:scale-105" />
                </a>
              </div>

              <nav
                className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2 lg:gap-16 xl:gap-24"
                aria-label="Nawigacja w stopce"
              >
                <div>
                  <p className="font-serif text-[0.7rem] font-normal uppercase tracking-[0.22em] text-zinc-500">
                    Menu
                  </p>
                  <ul className="mt-6 space-y-3">
                    {FOOTER_NAV_MAIN.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className={`group inline-flex ${footerLink}`}>
                          <span className="border-b border-transparent pb-px transition-[border-color] duration-220 group-hover:border-white/35">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-serif text-[0.7rem] font-normal uppercase tracking-[0.22em] text-zinc-500">
                    Informacje
                  </p>
                  <ul className="mt-6 space-y-3">
                    {FOOTER_NAV_META.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className={`group inline-flex ${footerLink}`}>
                          <span className="border-b border-transparent pb-px transition-[border-color] duration-220 group-hover:border-white/35">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </Container>
        </div>

        <div
          id="cennik"
          className="relative z-10 scroll-mt-28 border-t border-white/[0.06] bg-black/35"
        >
          <Container className="grid gap-5 py-8 sm:gap-6 sm:py-9 lg:grid-cols-3 lg:items-center lg:gap-8">
            <p className="text-center text-[0.6875rem] font-light leading-relaxed tracking-[0.06em] text-zinc-500 lg:text-left">
              © {new Date().getFullYear()} ClinicaNova. Wszelkie prawa
              zastrzeżone.
            </p>
            <p className="text-center text-[0.6875rem] font-light leading-relaxed text-zinc-600">
              ul. Obrońców wybrzeża 7/6 · Gdańsk
            </p>
            <p className="text-center text-[0.6875rem] font-light leading-relaxed tracking-[0.04em] text-zinc-600 lg:text-right">
              <span className="text-zinc-500">Crafted by </span>
              <a
                href="https://kingbrand.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tracking-[0.06em] text-zinc-400 underline decoration-white/10 underline-offset-[5px] transition-colors duration-220 hover:text-zinc-200 hover:decoration-white/25"
              >
                KINGBRAND
              </a>
            </p>
          </Container>
        </div>
      </div>

      <Link
        href="#top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-zinc-900/95 text-zinc-200 shadow-beauty backdrop-blur-md transition duration-300 hover:border-white/25 hover:bg-zinc-800 hover:text-white"
        aria-label="Do góry"
      >
        <Image src="/arrow-up.svg" alt="" width={20} height={20} className="opacity-90" />
      </Link>
    </footer>
  );
}
