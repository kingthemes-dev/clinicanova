import type { Metadata } from "next";
import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

const USLUGI_BREADCRUMBS = [
  { label: "Strona główna", href: "/" },
  { label: "Usługi" },
] as const;

export const metadata: Metadata = {
  title: "Usługi — ClinicaNova",
  description:
    "Medycyna estetyczna, kosmetologia, laseroterapia i leczenie powikłań — oferta ClinicaNova w Gdańsku.",
};

export default function UslugiPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="relative w-full overflow-hidden bg-zinc-950"
          aria-labelledby="uslugi-hero-heading"
        >
          <div className="relative h-[calc(100vh*2/3)] min-h-[18rem] w-full">
            <Image
              src="/uslugi.jpg"
              alt="Usługi ClinicaNova — medycyna estetyczna i kosmetologia"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/35 to-zinc-950/60"
              aria-hidden
            />
            <Container className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-20 text-center sm:py-24 lg:py-28">
              <h1
                id="uslugi-hero-heading"
                className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.12] tracking-tight text-white"
              >
                Usługi
              </h1>
            </Container>
          </div>
        </section>
        <CategoryGrid
          showTopCta={false}
          breadcrumbs={<Breadcrumbs items={[...USLUGI_BREADCRUMBS]} />}
        />
      </main>
      <Footer />
    </>
  );
}
