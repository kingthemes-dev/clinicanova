import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { CertificatesGallery } from "@/components/sections/CertificatesGallery";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { bodyProseClass } from "@/components/ui/pageTypography";
import {
  subpageBreadcrumbsMarginClass,
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";

const BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Certyfikaty" },
] as const;

export const metadata: Metadata = {
  title: "Certyfikaty — ClinicaNova Gdańsk",
  description:
    "Szkolenia, certyfikaty i kwalifikacje zespołu ClinicaNova — medycyna estetyczna i kosmetologia w Gdańsku.",
};

export default function CertyfikatyPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="certyfikaty-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/certyfikaty.jpg"
              alt="ClinicaNova — certyfikaty, profesjonalizm i troska o skórę"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container className={subpageHeroContainerClass}>
              <h1
                id="certyfikaty-hero-heading"
                className="max-w-[min(100%,42rem)] text-balance font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:max-w-[52rem]"
              >
                Certyfikaty
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection aria-labelledby="certyfikaty-intro-heading">
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <div className="w-full">
            <h2
              id="certyfikaty-intro-heading"
              className="font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-normal leading-snug tracking-tight text-zinc-900"
            >
              Kwalifikacje i rozwój zawodowy
            </h2>
            <p className={`mt-6 ${bodyProseClass}`}>
              W ClinicaNova stawiamy na bezpieczeństwo i jakość zabiegów — nasz
              zespół regularnie uczestniczy w szkoleniach i konferencjach,
              poszerzając wiedzę z medycyny estetycznej, kosmetologii i
              laseroterapii. Poniżej znajdziesz galerię certyfikatów i
              zaświadczeń.
            </p>
            <p className={`mt-4 ${bodyProseClass}`}>
              Poznaj lekarzy i specjalistów:{" "}
              <Link
                href="/zespol"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-zinc-500"
              >
                Zespół
              </Link>
              . O autorskich szkoleniach dla lekarzy:{" "}
              <Link
                href="/szkolenia"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-zinc-500"
              >
                ClinicaNova Academy
              </Link>
              .
            </p>
          </div>
          <CertificatesGallery />
        </SubpageMainSection>
      </main>
      <Footer />
    </>
  );
}
