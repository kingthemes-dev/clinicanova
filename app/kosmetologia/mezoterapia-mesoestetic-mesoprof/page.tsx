import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { MezoterapiaMesoesteticMesoprofArticle } from "@/components/sections/MezoterapiaMesoesteticMesoprofArticle";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
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
  { label: "Usługi", href: "/uslugi" },
  { label: "Kosmetologia", href: "/kosmetologia" },
  { label: "Mezoterapia Mesoestetic / Mesoprof" },
] as const;

export const metadata: Metadata = {
  title: "Mezoterapia Mesoestetic / Mesoprof — ClinicaNova Gdańsk",
  description:
    "Mezoterapia Mesoestetic i Mesoprof w ClinicaNova: mikroiniekcje, witaminy, kwasy i peptydy. Nawilżenie i regeneracja. Gdańsk.",
};

export default function MezoterapiaMesoesteticMesoprofPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="meso-kosm-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/kosmetologia1.jpg"
              alt="Kosmetologia — ClinicaNova Gdańsk"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container className={subpageHeroContainerClass}>
              <h1
                id="meso-kosm-hero-heading"
                className="max-w-[20ch] font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white sm:max-w-none"
              >
                Kosmetologia
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection>
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <MezoterapiaMesoesteticMesoprofArticle />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="meso-kosm-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
