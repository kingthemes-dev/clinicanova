import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { HialuronidazaArticle } from "@/components/sections/HialuronidazaArticle";
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
  { label: "Medycyna estetyczna", href: "/medycyna-estetyczna" },
  { label: "Hialuronidaza" },
] as const;

export const metadata: Metadata = {
  title: "Hialuronidaza — ClinicaNova Gdańsk",
  description:
    "Hialuronidaza w ClinicaNova: korekta nadmiaru kwasu hialuronowego, asymetrii i powikłań po wypełniaczach. Konsultacja i zabiegi w Gdańsku.",
};

export default function HialuronidazaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="hialuronidaza-hero-heading"
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
                id="hialuronidaza-hero-heading"
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
          <HialuronidazaArticle />
        </SubpageMainSection>

        <MedycynaEstetycznaSubpageCta headingId="hialuronidaza-cta-heading" />
      </main>
      <Footer />
    </>
  );
}
