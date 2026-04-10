import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CennikRichPriceTables } from "@/components/cennik/CennikRichPriceTables";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { bodyProseClass } from "@/components/ui/pageTypography";
import { CENNIK_LASEROTERAPIA_SECTIONS } from "@/lib/cennikLaseroterapiaPriceList";
import {
  subpageBreadcrumbsMarginClass,
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";

const BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Cennik", href: "/cennik" },
  { label: "Laseroterapia" },
] as const;

export const metadata: Metadata = {
  title: "Cennik — laseroterapia — ClinicaNova Gdańsk",
  description:
    "Ceny zabiegów laseroterapii: LaseMD Ultra, Vivace + LaseMD, epilacja Primelase, światło szerokopasmowe Veloce — ClinicaNova Gdańsk.",
};

export default function CennikLaseroterapiaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="cennik-laseroterapia-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/laseroterapia1.png"
              alt="Laseroterapia — ClinicaNova Gdańsk"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container className={subpageHeroContainerClass}>
              <p className="mb-4 font-serif text-[0.65rem] font-medium uppercase tracking-[0.26em] text-white/75">
                Cennik
              </p>
              <h1
                id="cennik-laseroterapia-hero-heading"
                className="max-w-[min(100%,48rem)] text-balance font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
              >
                Laseroterapia
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection aria-labelledby="cennik-laseroterapia-intro-heading">
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <div className="w-full">
            <h2
              id="cennik-laseroterapia-intro-heading"
              className="font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-normal leading-snug tracking-tight text-zinc-900"
            >
              Cennik usług
            </h2>
            <p className={`mt-5 max-w-3xl ${bodyProseClass}`}>
              Poniżej orientacyjne ceny zabiegów laseroterapii. Ostateczny koszt
              ustalany jest indywidualnie po konsultacji. Szczegółowe opisy:{" "}
              <Link
                href="/laseroterapia/laser-tulowy-gdansk"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-zinc-500"
              >
                laser tulowy LaseMD Ultra
              </Link>
              ,{" "}
              <Link
                href="/kosmetologia/radiofrekwencja-mikroiglowa-vivace"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-zinc-500"
              >
                radiofrekwencja mikroigłowa Vivace
              </Link>{" "}
              (w tym terapia łączona z LaseMD),{" "}
              <Link
                href="/laseroterapia/epilacja-laserowa-primelase"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-zinc-500"
              >
                epilacja laserowa Primelase
              </Link>
              . Szerszy opis oferty, w tym zabiegów światłem szerokopasmowym Veloce — w zakładce{" "}
              <Link
                href="/laseroterapia"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-zinc-500"
              >
                Laseroterapia
              </Link>
              .
            </p>
          </div>
          <div className="mt-12 sm:mt-14 lg:mt-16">
            <CennikRichPriceTables sections={CENNIK_LASEROTERAPIA_SECTIONS} />
          </div>
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="cennik-laseroterapia-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
