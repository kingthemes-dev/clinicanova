import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { KonsultacjaMedycynyEstetycznejArticle } from "@/components/sections/KonsultacjaMedycynyEstetycznejArticle";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

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
          <div className="relative h-[calc(100vh*2/3)] min-h-[18rem] w-full">
            <Image
              src="/medycyna-estetyczna%20(1).jpg"
              alt="Konsultacja medycyny estetycznej — ClinicaNova Gdańsk"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/35 to-zinc-950/60"
              aria-hidden
            />
            <Container className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
              <h1
                id="konsultacja-hero-heading"
                className="max-w-[22ch] font-serif text-[clamp(1.5rem,4vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-white sm:max-w-[36ch] lg:max-w-none"
              >
                Konsultacja do medycyny estetycznej
              </h1>
            </Container>
          </div>
        </section>

        <section className="bg-white">
          <Container className="pb-2 pt-10 sm:pb-3 sm:pt-12">
            <Breadcrumbs items={[...KONSULTACJA_BREADCRUMBS]} />
          </Container>
        </section>

        <KonsultacjaMedycynyEstetycznejArticle />
      </main>
      <Footer />
    </>
  );
}
