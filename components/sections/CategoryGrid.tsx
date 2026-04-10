import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { subpageBreadcrumbsMarginClass } from "@/components/ui/subpageLayout";
import {
  ctaButtonOutlineClass,
  sectionHeadingClass,
  sectionHeadingInk,
} from "@/components/ui/pageTypography";

export type CategoryTile = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  /** Kotwica na stronie cennika (np. scroll z menu). */
  scrollAnchorId?: string;
};

export const CATEGORY_TILES_USLUGI: readonly CategoryTile[] = [
  {
    title: "Medycyna estetyczna",
    href: "/medycyna-estetyczna",
    image: "/medycyna-estetyczna.jpg",
    imageAlt: "Medycyna estetyczna — ClinicaNova",
  },
  {
    title: "Kosmetologia",
    href: "/kosmetologia",
    image: "/kosmetologia1.jpg",
    imageAlt: "Kosmetologia — ClinicaNova",
  },
  {
    title: "Laseroterapia",
    href: "/laseroterapia",
    image: "/laseroterapia1.png",
    imageAlt: "Laseroterapia — ClinicaNova",
  },
  {
    title: "Leczenie powikłań",
    href: "/leczenie-powiklan",
    image: "/leczenie-powiklan1.jpg",
    imageAlt: "Leczenie powikłań — ClinicaNova",
  },
] as const;

function categoryPathKey(href: string) {
  return href.replace(/^\//, "").replace(/\//g, "-") || "strona";
}

/** Podstrony cennika (`/cennik/...`) — uzupełniane przy dodawaniu cenników kategorii. */
const CENNIK_DETAIL_HREF: Partial<Record<string, string>> = {
  "/medycyna-estetyczna": "/cennik/medycyna-estetyczna",
  "/kosmetologia": "/cennik/kosmetologia",
  "/laseroterapia": "/cennik/laseroterapia",
  "/leczenie-powiklan": "/cennik/leczenie-powiklan",
};

/** Kafelki cennika — te same kategorie co usługi, z kotwicami pod menu. */
export const CATEGORY_TILES_CENNIK: readonly CategoryTile[] =
  CATEGORY_TILES_USLUGI.map((t) => ({
    ...t,
    href: CENNIK_DETAIL_HREF[t.href] ?? t.href,
    scrollAnchorId: `cennik-${categoryPathKey(t.href)}`,
  }));

/** Linki w rozwijanym menu „Cennik” — dedykowana strona lub kotwica na `/cennik`. */
export const CENNIK_HEADER_DROPDOWN: { label: string; href: string }[] =
  CATEGORY_TILES_USLUGI.map((t) => ({
    label: t.title,
    href:
      CENNIK_DETAIL_HREF[t.href] ?? `/cennik#cennik-${categoryPathKey(t.href)}`,
  }));

type CategoryGridProps = {
  /** Domyślnie widoczny; na dedykowanej stronie usług ukrywa duplikat CTA. */
  showTopCta?: boolean;
  breadcrumbs?: ReactNode;
  /** Nagłówek sekcji (np. „Usługi” lub „Cennik”). */
  heading?: string;
  /** Kafelki — domyślnie linki do kategorii usług. */
  tiles?: readonly CategoryTile[];
  sectionId?: string;
  ariaHeadingId?: string;
};

export function CategoryGrid({
  showTopCta = true,
  breadcrumbs,
  heading = "Usługi",
  tiles = CATEGORY_TILES_USLUGI,
  sectionId = "oferta",
  ariaHeadingId = "oferta-heading",
}: CategoryGridProps) {
  return (
    <SubpageMainSection id={sectionId} aria-labelledby={ariaHeadingId}>
      {breadcrumbs ? (
        <div className={subpageBreadcrumbsMarginClass}>{breadcrumbs}</div>
      ) : null}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10 lg:gap-16">
        <div className="max-w-xl">
          <h2
            id={ariaHeadingId}
            className={`text-center sm:text-left ${sectionHeadingClass}`}
          >
            <span className={sectionHeadingInk}>{heading}</span>
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
        {tiles.map((cat) => (
          <li key={cat.title}>
            <Link
              href={cat.href}
              id={cat.scrollAnchorId}
              className={`group block overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-[0_18px_50px_-20px_rgba(15,23,42,0.12)] ring-1 ring-zinc-900/[0.04] transition duration-400 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-[0_24px_56px_-18px_rgba(15,23,42,0.14)] ${
                cat.scrollAnchorId ? "scroll-mt-28" : ""
              }`}
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
    </SubpageMainSection>
  );
}
