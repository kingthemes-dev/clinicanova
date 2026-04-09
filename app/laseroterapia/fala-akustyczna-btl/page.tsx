import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { FalaAkustycznaBtlArticle } from "@/components/sections/FalaAkustycznaBtlArticle";
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
  { label: "Laseroterapia", href: "/laseroterapia" },
  { label: "Fala akustyczna BTL" },
] as const;

export const metadata: Metadata = {
  title: "Fala akustyczna BTL — ClinicaNova Gdańsk",
  description:
    "Fala akustyczna BTL w ClinicaNova: cellulit, modelowanie sylwetki, obrzęki limfatyczne. Seria zabiegów. Gdańsk.",
};

export default function FalaAkustycznaBtlPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="btl-fala-hero-heading"
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
              <h1
                id="btl-fala-hero-heading"
                className="max-w-[20ch] font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white sm:max-w-none"
              >
                Laseroterapia
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection>
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <FalaAkustycznaBtlArticle />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="btl-fala-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
