import Link from "next/link";
import type { ReactNode } from "react";

import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { subpageBreadcrumbsMarginClass } from "@/components/ui/subpageLayout";

const SERVICES: { label: string; href: string }[] = [
  {
    label: "Konsultacja kosmetologiczna z analizą skóry",
    href: "/kosmetologia/konsultacja-kosmetologiczna",
  },
  { label: "Technologia GENEO+", href: "/kosmetologia/technologia-geneo-plus" },
  { label: "Oczyszczanie wodorowe", href: "/kosmetologia/oczyszczanie-wodorowe" },
  {
    label: "Zabieg PRO XN Xantohumol PRO XN",
    href: "/kosmetologia/zabieg-pro-xn-xantohumol",
  },
  {
    label: "Germaine de Capuccini Timexpert Radiance C",
    href: "/kosmetologia/germaine-de-capuccini-timexpert-radiance-c",
  },
  { label: "Peelingi medyczne", href: "/kosmetologia/peelingi-medyczne" },
  {
    label: "Mezoterapia Mesoestetic / Mesoprof",
    href: "/kosmetologia/mezoterapia-mesoestetic-mesoprof",
  },
  {
    label: "Pielęgnacja okolicy oka – Global Eyecon i Beautifeye Fillmed",
    href: "/kosmetologia/pielegnacja-okolicy-oka-global-eyecon-beautifeye",
  },
  { label: "DERMAPEN 4", href: "/kosmetologia/dermapen-4" },
  {
    label:
      "Radiofrekwencja mikroigłowa Vivace – zaawansowana technologia regeneracji i liftingu skóry",
    href: "/kosmetologia/radiofrekwencja-mikroiglowa-vivace",
  },
];

const tileClass =
  "flex min-h-[4.5rem] items-center justify-center rounded-2xl border border-zinc-200/90 bg-white px-4 py-4 text-center font-serif text-[0.9375rem] font-normal leading-snug tracking-[0.02em] text-zinc-800 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.12)] ring-1 ring-zinc-900/[0.04] transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:text-zinc-950 hover:shadow-[0_24px_56px_-18px_rgba(15,23,42,0.14)] sm:min-h-[5rem] sm:px-5";

type KosmetologiaTilesProps = {
  breadcrumbs?: ReactNode;
};

export function KosmetologiaTiles({ breadcrumbs }: KosmetologiaTilesProps) {
  return (
    <SubpageMainSection aria-label="Lista zabiegów kosmetologicznych">
      {breadcrumbs ? (
        <div className={subpageBreadcrumbsMarginClass}>{breadcrumbs}</div>
      ) : null}
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {SERVICES.map((item) => (
          <li key={item.label} className="flex">
            <Link href={item.href} className={`${tileClass} w-full`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </SubpageMainSection>
  );
}
