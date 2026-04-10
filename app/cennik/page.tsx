import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  CategoryGrid,
  CATEGORY_TILES_CENNIK,
} from "@/components/sections/CategoryGrid";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";

const CENNIK_BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Cennik" },
] as const;

export const metadata: Metadata = {
  title: "Cennik — ClinicaNova",
  description:
    "Cennik zabiegów z medycyny estetycznej, kosmetologii, laseroterapii i leczenia powikłań — ClinicaNova Gdańsk.",
};

export default function CennikPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="cennik-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/cennik.jpg"
              alt="Cennik ClinicaNova — naturalna, świetlista atmosfera kliniki"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container className={subpageHeroContainerClass}>
              <h1
                id="cennik-hero-heading"
                className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.12] tracking-tight text-white"
              >
                Cennik
              </h1>
            </Container>
          </div>
        </section>
        <CategoryGrid
          showTopCta={false}
          breadcrumbs={<Breadcrumbs items={[...CENNIK_BREADCRUMBS]} />}
          heading="Cennik"
          tiles={CATEGORY_TILES_CENNIK}
          sectionId="cennik-kategorie"
          ariaHeadingId="cennik-kategorie-heading"
        />
        <MedycynaEstetycznaSubpageCta headingId="cennik-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
