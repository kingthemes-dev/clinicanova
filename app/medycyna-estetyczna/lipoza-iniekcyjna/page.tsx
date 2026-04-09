import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { LipozaIniekcyjnaArticle } from "@/components/sections/LipozaIniekcyjnaArticle";
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
  { label: "Medycyna estetyczna", href: "/medycyna-estetyczna" },
  { label: "Lipoza iniekcyjna" },
] as const;

export const metadata: Metadata = {
  title: "Lipoza iniekcyjna (lipoliza) — ClinicaNova Gdańsk",
  description:
    "Lipoliza iniekcyjna w ClinicaNova: redukcja tkanki tłuszczowej, fosfatydylocholina, modelowanie sylwetki. Wskazania, przebieg i pielęgnacja po zabiegu w Gdańsku.",
};

export default function LipozaIniekcyjnaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="lipoza-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/medycyna-estetyczna%20(1).jpg"
              alt="Medycyna estetyczna — ClinicaNova Gdańsk"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container className={subpageHeroContainerClass}>
              <h1
                id="lipoza-hero-heading"
                className="max-w-[20ch] font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white sm:max-w-none"
              >
                Medycyna estetyczna
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection>
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <LipozaIniekcyjnaArticle />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="lipoza-iniekcyjna-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
