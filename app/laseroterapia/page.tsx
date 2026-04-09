import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LaseroterapiaTiles } from "@/components/sections/LaseroterapiaTiles";
import { MedycynaEstetycznaSubpageCta } from "@/components/sections/MedycynaEstetycznaSubpageCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";

const LASEROTERAPIA_BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Usługi", href: "/uslugi" },
  { label: "Laseroterapia" },
] as const;

export const metadata: Metadata = {
  title: "Laseroterapia — ClinicaNova",
  description:
    "Laseroterapia w Gdańsku — laser, epilacja Primelase, endermologia LPG Alliance, fala akustyczna BTL. ClinicaNova.",
};

export default function LaseroterapiaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="laseroterapia-hero-heading"
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
                id="laseroterapia-hero-heading"
                className="max-w-[20ch] font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white sm:max-w-none"
              >
                Laseroterapia
              </h1>
            </Container>
          </div>
        </section>
        <LaseroterapiaTiles
          breadcrumbs={<Breadcrumbs items={[...LASEROTERAPIA_BREADCRUMBS]} />}
        />

        <MedycynaEstetycznaSubpageCta headingId="laseroterapia-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
