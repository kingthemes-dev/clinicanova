import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SubpageMainSection } from "@/components/layout/SubpageMainSection";
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
  { label: "Blog" },
] as const;

export const metadata: Metadata = {
  title: "Blog — ClinicaNova Gdańsk",
  description:
    "Aktualności, porady i inspiracje z medycyny estetycznej i kosmetologii — ClinicaNova Gdańsk.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="blog-hero-heading"
        >
          <div className={subpageHeroMediaShellClass}>
            <Image
              src="/twoj-doskonaly-wyglad-to-nasza-najlepsza-wizytowka.jpg"
              alt="ClinicaNova — blog"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className={subpageHeroImageOverlayClass} aria-hidden />
            <Container className={subpageHeroContainerClass}>
              <h1
                id="blog-hero-heading"
                className="max-w-[min(100%,42rem)] text-balance font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-normal leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:max-w-[52rem]"
              >
                Blog
              </h1>
            </Container>
          </div>
        </section>

        <SubpageMainSection aria-labelledby="blog-intro-heading">
          <div className={subpageBreadcrumbsMarginClass}>
            <Breadcrumbs items={[...BREADCRUMBS]} />
          </div>
          <div className="mx-auto max-w-2xl">
            <h2
              id="blog-intro-heading"
              className="font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-normal leading-snug tracking-tight text-zinc-900"
            >
              Wkrótce więcej treści
            </h2>
            <p className={`mt-6 ${bodyProseClass}`}>
              Z myślą o pacjentach przygotowujemy artykuły o zabiegach,
              pielęgnacji skóry i nowościach w ofercie ClinicaNova. Zaglądaj tu
              regularnie — wkrótce pojawią się pierwsze wpisy.
            </p>
            <p className={`mt-4 ${bodyProseClass}`}>
              Masz pytanie już dziś?{" "}
              <Link
                href="/kontakt"
                className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-zinc-500"
              >
                Napisz do nas
              </Link>{" "}
              — chętnie pomożemy dobrać wizytę lub konsultację.
            </p>
          </div>
        </SubpageMainSection>
      </main>
      <Footer />
    </>
  );
}
