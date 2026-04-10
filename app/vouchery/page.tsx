import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { VoucherContactForm } from "@/components/sections/VoucherContactForm";
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
  { label: "Vouchery" },
] as const;

export const metadata: Metadata = {
  title: "Vouchery — ClinicaNova Gdańsk",
  description:
    "Vouchery podarunkowe na zabiegi w ClinicaNova — wybierz kwotę i zamów voucher w Gdańsku.",
};

export default function VoucheryPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="vouchery-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/vouchery.jpg"
              alt="Vouchery podarunkowe ClinicaNova — eleganckie opakowanie i karta prezentowa"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_40%]"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container
              className={`${subpageHeroContainerClass} items-start justify-end pb-16 text-left sm:pb-20 lg:pb-24`}
            >
              <div className="max-w-xl">
                <h1
                  id="vouchery-hero-heading"
                  className="font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
                >
                  Wybierz kwotę vouchera
                </h1>
              </div>
            </Container>
          </div>
        </section>

        <SubpageMainSection aria-labelledby="vouchery-form-heading">
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <VoucherContactForm />
        </SubpageMainSection>
      </main>
      <Footer />
    </>
  );
}
