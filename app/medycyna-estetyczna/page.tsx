import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MedycynaEstetycznaTiles } from "@/components/sections/MedycynaEstetycznaTiles";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";

const MEDYCYNA_BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Usługi", href: "/uslugi" },
  { label: "Medycyna estetyczna" },
] as const;

export const metadata: Metadata = {
  title: "Medycyna estetyczna — ClinicaNova",
  description:
    "Zabiegi medycyny estetycznej w Gdańsku — konsultacje, mezoterapia, toksoyna botulinowa, kwas hialuronowy i więcej w ClinicaNova.",
};

export default function MedycynaEstetycznaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="medycyna-estetyczna-hero-heading"
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
                id="medycyna-estetyczna-hero-heading"
                className="max-w-[20ch] font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white sm:max-w-none"
              >
                Medycyna estetyczna
              </h1>
            </Container>
          </div>
        </section>
        <MedycynaEstetycznaTiles
          breadcrumbs={<Breadcrumbs items={[...MEDYCYNA_BREADCRUMBS]} />}
        />
      </main>
      <Footer />
    </>
  );
}
