import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import {
  bodyProseClass,
  ctaButtonClass,
  sectionEyebrowClass,
  sectionHeadingClass,
  sectionHeadingInk,
  sectionHeadingMuted,
  sectionImageFrame,
} from "@/components/ui/pageTypography";

export function ConsultationInviteSection() {
  return (
    <section
      id="pierwsza-konsultacja"
      className="relative scroll-mt-28 bg-zinc-50 py-20 sm:py-28 lg:py-32"
      aria-labelledby="consultation-invite-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"
        aria-hidden
      />
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          <div className="max-w-xl lg:max-w-none">
            <p className={sectionEyebrowClass}>Pierwszy krok</p>
            <h2 id="consultation-invite-heading" className={sectionHeadingClass}>
              <span className={sectionHeadingInk}>
                Umów się na pierwszą konsultację
              </span>
              <br />
              <span className={sectionHeadingMuted}>medycyny estetycznej</span>
            </h2>
            <div className={`mt-8 max-w-xl space-y-5 sm:mt-10 ${bodyProseClass}`}>
              <p>
                Pierwsza konsultacja to spotkanie, podczas którego przeprowadzamy
                dokładną analizę skóry i wspólnie określamy Twoje cele. Dzięki
                temu planujemy zabiegi tak, aby efekt był naturalny, harmonijny
                i bezpieczny.
              </p>
              <p>
                W ClinicaNova łączymy najnowsze technologie ze sprawdzonymi
                dermokosmetykami i doświadczeniem zespołu — każda ścieżka
                terapeutyczna jest dobierana indywidualnie, z myślą o Tobie.
              </p>
            </div>
            <div className="mt-12 sm:mt-14">
              <Link href="#kontakt" className={ctaButtonClass}>
                Skontaktuj się z nami
              </Link>
            </div>
          </div>

          <div className={`relative aspect-[4/3] w-full ${sectionImageFrame}`}>
            <Image
              src="/pierwsza-konsultacja-medycyny-estetycznej.png"
              alt="Pierwsza konsultacja medycyny estetycznej — analiza skóry, ClinicaNova"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
