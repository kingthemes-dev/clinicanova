import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
import { PowiekszanieUstArticle } from "@/components/sections/PowiekszanieUstArticle";
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
  { label: "Powiększanie ust" },
] as const;

export const metadata: Metadata = {
  title: "Powiększanie ust — ClinicaNova Gdańsk",
  description:
    "Modelowanie i powiększanie ust kwasem hialuronowym w ClinicaNova: naturalny efekt, konsultacja i zabiegi w Gdańsku.",
};

export default function PowiekszanieUstPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="powiekszanie-ust-hero-heading"
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
                id="powiekszanie-ust-hero-heading"
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
          <PowiekszanieUstArticle />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="powiekszanie-ust-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
