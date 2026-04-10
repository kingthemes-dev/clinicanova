import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { SzkoleniaPageContent } from "@/components/sections/SzkoleniaPageContent";
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
  { label: "Szkolenia" },
] as const;

export const metadata: Metadata = {
  title: "Szkolenia — ClinicaNova Academy — ClinicaNova Gdańsk",
  description:
    "Masterclass: niechirurgiczna korekta nosa kwasem hialuronowym — autorskie szkolenie dla lekarzy w ClinicaNova Academy. Rezerwacja: Gdańsk.",
};

export default function SzkoleniaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="szkolenia-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/medycyna-estetyczna%20(1).jpg"
              alt="ClinicaNova Academy — masterclass medycyny estetycznej"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container className={subpageHeroContainerClass}>
              <p className="mb-5 max-w-4xl font-serif text-[0.65rem] font-medium uppercase tracking-[0.26em] text-white/80">
                ClinicaNova Academy
              </p>
              <h1
                id="szkolenia-hero-heading"
                className="max-w-[min(100%,48rem)] text-balance font-serif text-[clamp(1.25rem,3.2vw,2.15rem)] font-normal leading-[1.22] tracking-tight text-white sm:max-w-[52rem] lg:text-[clamp(1.35rem,3.4vw,2.35rem)]"
              >
                Masterclass: Niechirurgiczna korekta nosa kwasem hialuronowym
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection aria-labelledby="szkolenia-masterclass-heading">
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <SzkoleniaPageContent />
        </SubpageMainSection>
      </main>
      <Footer />
    </>
  );
}
