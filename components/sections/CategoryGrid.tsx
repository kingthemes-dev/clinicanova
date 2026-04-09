import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import {
  ctaButtonOutlineClass,
  sectionHeadingClass,
  sectionHeadingInk,
} from "@/components/ui/pageTypography";

const CATEGORIES = [
  {
    title: "Medycyna estetyczna",
    href: "/medycyna-estetyczna",
    image: "/medycyna-estetyczna.jpg",
    imageAlt: "Medycyna estetyczna — ClinicaNova",
  },
  {
    title: "Kosmetologia",
    href: "#kontakt",
    image: "/kosmetologia.jpg",
    imageAlt: "Kosmetologia — ClinicaNova",
  },
  {
    title: "Laseroterapia",
    href: "#kontakt",
    image: "/laseroterapia.jpg",
    imageAlt: "Laseroterapia — ClinicaNova",
  },
  {
    title: "Leczenie powikłań",
    href: "#kontakt",
    image: "/leczenie-powiklan.jpg",
    imageAlt: "Leczenie powikłań — ClinicaNova",
  },
] as const;

type CategoryGridProps = {
  /** Domyślnie widoczny; na dedykowanej stronie usług ukrywa duplikat CTA. */
  showTopCta?: boolean;
  breadcrumbs?: ReactNode;
};

export function CategoryGrid({ showTopCta = true, breadcrumbs }: CategoryGridProps) {
  return (
    <section
      id="oferta"
      className="relative scroll-mt-28 bg-white py-20 sm:py-28 lg:py-32"
      aria-labelledby="oferta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"
        aria-hidden
      />
      <Container>
        {breadcrumbs ? (
          <div className="mb-10 sm:mb-12">{breadcrumbs}</div>
        ) : null}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10 lg:gap-16">
          <div className="max-w-xl">
            <h2
              id="oferta-heading"
              className={`text-center sm:text-left ${sectionHeadingClass}`}
            >
              <span className={sectionHeadingInk}>Usługi</span>
            </h2>
          </div>
          {showTopCta ? (
            <Link
              href="/uslugi"
              className={`${ctaButtonOutlineClass} shrink-0 self-center sm:self-auto`}
            >
              Poznaj wszystkie usługi
            </Link>
          ) : null}
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {CATEGORIES.map((cat) => (
            <li key={cat.title}>
              <Link
                href={cat.href}
                className="group block overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_18px_50px_-20px_rgba(15,23,42,0.12)] ring-1 ring-zinc-900/[0.04] transition duration-400 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-[0_24px_56px_-18px_rgba(15,23,42,0.14)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/25 via-transparent to-transparent opacity-80 transition group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <div className="flex items-center justify-center border-t border-zinc-100/90 px-4 py-5 sm:py-6">
                  <span className="text-center font-serif text-[0.9375rem] font-normal tracking-[0.02em] text-zinc-800 transition group-hover:text-zinc-950">
                    {cat.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
