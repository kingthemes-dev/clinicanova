import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
import { ZespolPageContent } from "@/components/sections/ZespolPageContent";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  subpageBreadcrumbsMarginClass,
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";

const BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Zespół" },
] as const;

export const metadata: Metadata = {
  title: "Zespół — Trójmiejska klinika estetycznej metamorfozy — ClinicaNova",
  description:
    "Poznaj zespół Clinica Nova w Gdańsku — lekarze medycyny estetycznej, kosmetolodzy i recepcja. Anti-aging z pasją.",
};

export default function ZespolPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="zespol-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/trojmiejska-klinika-estetycznej-metamorfozy.jpg"
              alt="Trójmiejska klinika estetycznej metamorfozy — Clinica Nova Gdańsk"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container className={subpageHeroContainerClass}>
              <h1
                id="zespol-hero-heading"
                className="max-w-[min(100%,42rem)] text-balance font-serif text-[clamp(1.35rem,3.8vw,2.35rem)] font-normal leading-[1.2] tracking-tight text-white sm:max-w-[52rem]"
              >
                Trójmiejska klinika estetycznej metamorfozy
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection aria-label="Zespół Clinica Nova">
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <ZespolPageContent />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="zespol-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
