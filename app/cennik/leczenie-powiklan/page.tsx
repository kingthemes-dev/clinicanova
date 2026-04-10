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
import { CENNIK_LECZENIE_POWIKLAN_SECTIONS } from "@/lib/cennikLeczeniePowiklanPriceList";
import {
  subpageBreadcrumbsMarginClass,
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";

const BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Cennik", href: "/cennik" },
  { label: "Leczenie powikłań" },
] as const;

export const metadata: Metadata = {
  title: "Cennik — leczenie powikłań — ClinicaNova Gdańsk",
  description:
    "Cennik leczenia powikłań po zabiegach estetycznych — ClinicaNova Gdańsk.",
};

export default function CennikLeczeniePowiklanPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="cennik-leczenie-powiklan-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/leczenie-powiklan1.jpg"
              alt="Leczenie powikłań — ClinicaNova Gdańsk"
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
                id="cennik-leczenie-powiklan-hero-heading"
                className="max-w-[min(100%,48rem)] text-balance font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
              >
                Leczenie powikłań
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection aria-labelledby="cennik-leczenie-powiklan-intro-heading">
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <div className="w-full">
            <h2
              id="cennik-leczenie-powiklan-intro-heading"
              className="font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-normal leading-snug tracking-tight text-zinc-900"
            >
              Cennik usług
            </h2>
            <p className={`mt-5 max-w-3xl ${bodyProseClass}`}>
              Poniżej orientacyjne ceny. Szczegóły ustalane są indywidualnie po
              konsultacji.{" "}
              <Link
                href="/leczenie-powiklan"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-zinc-500"
              >
                Opis usługi
              </Link>{" "}
              znajdziesz w zakładce Usługi.
            </p>
          </div>
          <div className="mt-12 sm:mt-14 lg:mt-16">
            <CennikRichPriceTables sections={CENNIK_LECZENIE_POWIKLAN_SECTIONS} />
          </div>
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="cennik-leczenie-powiklan-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
