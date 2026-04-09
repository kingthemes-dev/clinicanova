import Image from "next/image";

import { Container } from "@/components/ui/Container";
import {
  sectionEyebrowClass,
  sectionHeadingClass,
  sectionHeadingInk,
  sectionHeadingMuted,
  sectionImageFrame,
} from "@/components/ui/pageTypography";

export function QuoteSplitSection() {
  return (
    <section
      className="relative bg-zinc-50 py-20 sm:py-28 lg:py-32"
      aria-labelledby="brand-tagline-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200/80 to-transparent"
        aria-hidden
      />
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20">
          <div
            className={`relative aspect-[5/4] min-h-[17rem] w-full overflow-hidden sm:aspect-square lg:aspect-auto lg:min-h-[min(80vh,48rem)] ${sectionImageFrame}`}
          >
            <Image
              src="/clinicanova-nowoczesne-technologie-spowalniajace-uplyw-czasu.jpg"
              alt="Wnętrze kliniki ClinicaNova — recepcja, marmur i logo na ścianie"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={false}
            />
          </div>

          <div className="flex max-w-xl flex-col justify-center lg:max-w-none">
            <p className={`${sectionEyebrowClass} lg:max-w-xl`}>Filozofia marki</p>
            <p
              className="mb-2 font-serif text-[clamp(3rem,8vw,4.75rem)] font-extralight leading-none text-zinc-200"
              aria-hidden
            >
              “
            </p>
            <h2
              id="brand-tagline-heading"
              className={`${sectionHeadingClass} max-w-xl`}
            >
              <span className={sectionHeadingInk}>ClinicaNova</span>
              <span className={sectionHeadingMuted}>.</span>
            </h2>
            <div className="mt-8 max-w-xl border-l border-zinc-200 pl-6 sm:mt-10 sm:pl-8">
              <p className="text-display-md font-extralight leading-[1.1] tracking-[-0.02em]">
                <span className={sectionHeadingInk}>Nowoczesne technologie</span>
                <br />
                <span className={sectionHeadingMuted}>
                  spowalniające upływ czasu
                </span>
              </p>
            </div>
            <div
              className="mt-10 h-px max-w-[5rem] bg-gradient-to-r from-zinc-400/70 to-transparent sm:mt-12"
              aria-hidden
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
