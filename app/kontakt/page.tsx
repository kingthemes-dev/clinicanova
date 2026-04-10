import type { Metadata } from "next";
import Image from "next/image";

import { ContactDetails } from "@/components/contact/ContactDetails";
import { GoogleMapEmbed } from "@/components/contact/GoogleMapEmbed";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  subpageBreadcrumbsMarginClass,
  subpageHeroContainerClass,
  subpageHeroImageOverlayClass,
  subpageHeroMediaShellClass,
} from "@/components/ui/subpageLayout";
import { bodyProseClass } from "@/components/ui/pageTypography";

const BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Kontakt" },
] as const;

export const metadata: Metadata = {
  title: "Kontakt — ClinicaNova Gdańsk",
  description:
    "Adres, godziny otwarcia, telefon i formularz kontaktowy — ClinicaNova Medycyna Estetyczna i Kosmetologia, Gdańsk.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="kontakt-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/trojmiejska-klinika-estetycznej-metamorfozy.jpg"
              alt="ClinicaNova — klinika w Gdańsku"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container className={subpageHeroContainerClass}>
              <h1
                id="kontakt-hero-heading"
                className="max-w-[min(100%,42rem)] text-balance font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:max-w-[52rem]"
              >
                Kontakt
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection aria-labelledby="kontakt-intro-heading">
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>

          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2
              id="kontakt-intro-heading"
              className="font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-normal leading-snug tracking-tight text-zinc-900"
            >
              Jesteśmy w Gdańsku
            </h2>
            <p className={`mx-auto mt-4 max-w-2xl lg:mx-0 ${bodyProseClass}`}>
              Zapraszamy do kliniki — umów wizytę telefonicznie, mailowo lub
              napisz przez formularz. Poniżej mapa dojazdu, dane jak w stopce
              serwisu oraz wiadomość bezpośrednio do nas.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <GoogleMapEmbed />
          </div>

          <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-20">
            <ContactForm />
            <div className="lg:sticky lg:top-28">
              <h3 className="sr-only">Dane kontaktowe</h3>
              <ContactDetails />
            </div>
          </div>
        </SubpageMainSection>
      </main>
      <Footer />
    </>
  );
}
