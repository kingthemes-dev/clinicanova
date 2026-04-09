import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { KonsultacjaMedycynyEstetycznejArticle } from "@/components/sections/KonsultacjaMedycynyEstetycznejArticle";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  subpageBreadcrumbsMarginClass,
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";

const KONSULTACJA_BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Usługi", href: "/uslugi" },
  { label: "Medycyna estetyczna", href: "/medycyna-estetyczna" },
  { label: "Konsultacja do medycyny estetycznej" },
] as const;

export const metadata: Metadata = {
  title: "Konsultacja do medycyny estetycznej — ClinicaNova Gdańsk",
  description:
    "Pierwsza konsultacja medycyny estetycznej w ClinicaNova: diagnostyka skóry, cele terapeutyczne i harmonogram wizyt. Indywidualne podejście w Gdańsku.",
};

export default function KonsultacjaMedycynyEstetycznejPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="konsultacja-hero-heading"
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
                id="konsultacja-hero-heading"
                className="max-w-[20ch] font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white sm:max-w-none"
              >
                Medycyna estetyczna
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection>
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...KONSULTACJA_BREADCRUMBS]} />
          </div>
          <KonsultacjaMedycynyEstetycznejArticle />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="konsultacja-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
