import Link from "next/link";
import type { ReactNode } from "react";

import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { subpageBreadcrumbsMarginClass } from "@/components/ui/subpageLayout";

const SERVICES: { label: string; href: string }[] = [
  {
    label: "Konsultacja do medycyny estetycznej",
    href: "/medycyna-estetyczna/konsultacja",
  },
  { label: "Mezoterapia", href: "/medycyna-estetyczna/mezoterapia" },
  { label: "Stymulatory tkankowe", href: "/#kontakt" },
  { label: "Osocze bogatopłytkowe", href: "/#kontakt" },
  { label: "Toksyna botulinowa", href: "/#kontakt" },
  { label: "Lipoza iniekcyjna", href: "/#kontakt" },
  { label: "Hialuronidaza", href: "/#kontakt" },
  { label: "Nici Aptos lifting twarzy bez skalpela", href: "/#kontakt" },
  { label: "Kwas hialuronowy", href: "/#kontakt" },
  { label: "Powiększanie ust", href: "/#kontakt" },
  { label: "Niechirurgiczna korekcja nosa", href: "/#kontakt" },
];

const tileClass =
  "flex min-h-[4.5rem] items-center justify-center rounded-2xl border border-zinc-200/90 bg-white px-4 py-4 text-center font-serif text-[0.9375rem] font-normal leading-snug tracking-[0.02em] text-zinc-800 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.12)] ring-1 ring-zinc-900/[0.04] transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:text-zinc-950 hover:shadow-[0_24px_56px_-18px_rgba(15,23,42,0.14)] sm:min-h-[5rem] sm:px-5";

type MedycynaEstetycznaTilesProps = {
  breadcrumbs?: ReactNode;
};

export function MedycynaEstetycznaTiles({
  breadcrumbs,
}: MedycynaEstetycznaTilesProps) {
  return (
    <SubpageMainSection aria-label="Lista zabiegów medycyny estetycznej">
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
