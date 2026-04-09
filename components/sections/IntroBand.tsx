import Image from "next/image";

import { Container } from "@/components/ui/Container";
import {
  bodyProseClass,
  sectionEyebrowClass,
  sectionHeadingClass,
  sectionHeadingInk,
  sectionHeadingMuted,
  sectionImageFrame,
} from "@/components/ui/pageTypography";

export function IntroBand() {
  return (
    <section
      id="o-nas"
      className="relative scroll-mt-28 bg-white py-20 sm:py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"
        aria-hidden
      />
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          <div className="min-w-0 max-w-2xl lg:max-w-none">
            <p className={`${sectionEyebrowClass} text-center lg:text-left`}>
              O nas
            </p>
            <h2
              className={`${sectionHeadingClass} mb-8 text-center sm:mb-10 lg:mb-10 lg:text-left`}
            >
              <span className={sectionHeadingInk}>Dlaczego</span>
              <br />
              <span className={sectionHeadingMuted}>my?</span>
            </h2>
            <div
              className={`space-y-6 border-l border-zinc-200/90 pl-6 sm:pl-8 ${bodyProseClass}`}
            >
              <p className="font-normal text-zinc-800">
                W Gdańsku, ale i całym Trójmieście, klinik oferujących zabiegi
                medycyny estetycznej oraz kosmetologii jest naprawdę wiele.
              </p>
              <p>
                Nic dziwnego, wszyscy chcemy jak najdłużej wyglądać młodo i
                atrakcyjnie. Dlaczego więc wybrać ClinicaNova?
              </p>
              <p>
                Wytyczamy Twoją osobistą ścieżkę metamorfozy, która zrealizuje
                Twoje marzenia o idealnym wyglądzie. Przyświeca nam zasada:
                małe zmiany – duże efekty. ClinicaNova to sztuka naturalnej
                przemiany, która ma podkreślić to co w Tobie najpiękniejsze.
              </p>
            </div>
            <div className="mt-12 border-t border-zinc-100 pt-10 sm:mt-14">
              <Image
                src="/homeOneSignature.png"
                alt="Podpis J. Gruber-Miazga"
                width={278}
                height={41}
                className="h-auto w-full max-w-[17.5rem] object-contain object-left opacity-[0.92] sm:max-w-xs"
                sizes="(max-width: 640px) 100vw, 20rem"
              />
            </div>
          </div>

          <div className="min-w-0">
            <div
              className={`relative mx-auto aspect-[3/4] w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none ${sectionImageFrame}`}
            >
              <Image
                src="/dlaczego-my.jpg"
                alt="J. Gruber-Miazga — lekarz medycyny estetycznej, ClinicaNova"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 28rem, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
