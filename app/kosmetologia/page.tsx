import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { KosmetologiaTiles } from "@/components/sections/KosmetologiaTiles";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";

const KOSMETOLOGIA_BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Usługi", href: "/uslugi" },
  { label: "Kosmetologia" },
] as const;

export const metadata: Metadata = {
  title: "Kosmetologia — ClinicaNova",
  description:
    "Zabiegi kosmetologiczne w Gdańsku — konsultacja z analizą skóry, GENEO+, oczyszczanie wodorowe, Dermapen, peelingi i więcej w ClinicaNova.",
};

export default function KosmetologiaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="kosmetologia-hero-heading"
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
                id="kosmetologia-hero-heading"
                className="max-w-[20ch] font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white sm:max-w-none"
              >
                Kosmetologia
              </h1>
            </Container>
          </div>
        </section>
        <KosmetologiaTiles
          breadcrumbs={<Breadcrumbs items={[...KOSMETOLOGIA_BREADCRUMBS]} />}
        />

        <MedycynaEstetycznaSubpageCta headingId="kosmetologia-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
