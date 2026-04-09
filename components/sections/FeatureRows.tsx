import Image from "next/image";
import { type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  bodyProseClass,
  sectionHeadingInk,
  sectionHeadingMuted,
  sectionImageFrame,
} from "@/components/ui/pageTypography";

type FeatureRow = {
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
  text: ReactNode;
  image: string;
  imageAlt: string;
  reverse: boolean;
  /** Domyślnie lekki grayscale; zdjęcia własne często lepiej w pełnym kolorze. */
  imageClassName?: string;
};

const ROWS: FeatureRow[] = [
  {
    id: "zabieg",
    title: (
      <>
        <span className={sectionHeadingInk}>Młody wygląd</span>
        <br />
        <span className={sectionHeadingMuted}>nie zna wieku</span>
      </>
    ),
    subtitle: (
      <>
        Piękny wygląd to nie jest wyłącznie domena estetyki.
      </>
    ),
    text: (
      <>
        <p>
          Wyglądasz atrakcyjnie, masz w sobie ten magnetyzm i pewność siebie,
          którą możesz wykorzystać każdego dnia, aby Twoje osobiste oraz
          zawodowe życie było pełniejsze, bardziej satysfakcjonujące.
        </p>
        <p>
          ClinicaNova to lekarze medycyny estetycznej, anti-aging oraz
          kosmetolodzy specjalizujący się w spowalnianiu czasu dla swoich
          pacjentów. Wspólnie analizujemy stan skóry i indywidualnie dobieramy
          plan terapeutyczny, tak aby podkreślić to, co w Tobie jest
          naturalnie piękne.
        </p>
      </>
    ),
    image: "/mlody-wyglad-nie-zna-wieku.jpg",
    imageAlt:
      "Kobieta z promienną cerą — młody wygląd, medycyna estetyczna ClinicaNova",
    reverse: false,
    imageClassName: "object-cover object-center",
  },
  {
    id: "efekt",
    title: (
      <>
        <span className={sectionHeadingInk}>Twój doskonały wygląd</span>
        <br />
        <span className={sectionHeadingMuted}>to nasza najlepsza wizytówka</span>
      </>
    ),
    text: (
      <>
        <p>
          Skuteczna medycyna estetyczna nie ma Cię odmienić, ma podkreślić Twoje
          naturalne atuty w sposób najmniej inwazyjny. Najlepsze zabiegi
          medycyny estetycznej to te, których wykonania nie widać, a które
          jednocześnie dają widoczne oraz trwałe efekty.
        </p>
        <p>
          Medycyna estetyczna ClinicaNova bazuje na holistycznym doświadczeniu
          naszych specjalistów, którzy podążając za najnowszymi osiągnięciami
          technologicznymi i trendami w branży – oferują pacjentom dostęp do
          usług estetycznych premium.
        </p>
      </>
    ),
    image: "/twoj-doskonaly-wyglad-to-nasza-najlepsza-wizytowka.jpg",
    imageAlt:
      "Uśmiechnięta kobieta — Twój doskonały wygląd, medycyna estetyczna ClinicaNova",
    reverse: true,
    imageClassName: "object-cover object-center",
  },
];

export function FeatureRows() {
  return (
    <section id="zespol" className="scroll-mt-28 bg-white py-20 sm:py-28">
      <Container className="divide-y divide-zinc-100">
        {ROWS.map((row) => (
          <div
            key={row.id}
            className="grid gap-12 py-20 first:pt-0 last:pb-0 sm:gap-14 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16"
          >
            <div className={row.reverse ? "lg:order-2" : ""}>
              <SectionHeading title={row.title} />
              {row.subtitle ? (
                <p className="mt-6 max-w-xl text-[1.0625rem] font-light leading-relaxed tracking-wide text-zinc-500">
                  {row.subtitle}
                </p>
              ) : null}
              <div className={`mt-10 max-w-xl space-y-5 ${bodyProseClass}`}>
                {row.text}
              </div>
            </div>
            <div
              className={`relative aspect-[4/3] ${sectionImageFrame} ${
                row.reverse ? "lg:order-1" : ""
              }`}
            >
              <Image
                src={row.image}
                alt={row.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className={row.imageClassName ?? "object-cover grayscale-[0.08]"}
              />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
