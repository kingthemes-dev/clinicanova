import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
import { PielegnacjaOkolicyOkaArticle } from "@/components/sections/PielegnacjaOkolicyOkaArticle";
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
  { label: "Pielęgnacja okolicy oka – Global Eyecon i Beautifeye Fillmed" },
] as const;

export const metadata: Metadata = {
  title: "Pielęgnacja okolicy oka — Global Eyecon, Beautifeye Fillmed — ClinicaNova",
  description:
    "Zabiegi pod oczy w ClinicaNova: Global Eyecon, Beautifeye Fillmed — cienie, obrzęki, zmarszczki. Gdańsk.",
};

export default function PielegnacjaOkolicyOkaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="eyecon-hero-heading"
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
                id="eyecon-hero-heading"
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
          <PielegnacjaOkolicyOkaArticle />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="eyecon-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
