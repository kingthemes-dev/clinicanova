import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
import { NiechirurgicznaKorekcjaNosaArticle } from "@/components/sections/NiechirurgicznaKorekcjaNosaArticle";
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
  { label: "Niechirurgiczna korekcja nosa" },
] as const;

export const metadata: Metadata = {
  title: "Niechirurgiczna korekcja nosa — ClinicaNova Gdańsk",
  description:
    "Korekta nosa kwasem hialuronowym w ClinicaNova: bez skalpela, naturalny profil. Konsultacja i zabiegi w Gdańsku.",
};

export default function NiechirurgicznaKorekcjaNosaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="niechirurgiczna-korekcja-nosa-hero-heading"
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
                id="niechirurgiczna-korekcja-nosa-hero-heading"
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
          <NiechirurgicznaKorekcjaNosaArticle />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="niechirurgiczna-korekcja-nosa-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
