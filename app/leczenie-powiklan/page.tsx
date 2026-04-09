import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { LeczeniePowiklanArticle } from "@/components/sections/LeczeniePowiklanArticle";
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
  { label: "Leczenie powikłań" },
] as const;

export const metadata: Metadata = {
  title: "Leczenie powikłań — ClinicaNova Gdańsk",
  description:
    "Konsultacje i wsparcie po zabiegach estetycznych w ClinicaNova — indywidualna ocena, zalecenia, spokojna opieka w Gdańsku.",
};

export default function LeczeniePowiklanPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="leczenie-powiklan-hero-heading"
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
              <h1
                id="leczenie-powiklan-hero-heading"
                className="max-w-[22ch] font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white sm:max-w-none"
              >
                Leczenie powikłań
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection>
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <LeczeniePowiklanArticle />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="leczenie-powiklan-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
