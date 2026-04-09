"use client";

import Image from "next/image";

const VELOCE_WEBP = "/Kopia%20Veloce%20(3).webp";

export function HeroSection() {
  const scrollToContent = () => {
    const el = document.getElementById("o-nas");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100svh] min-h-[32rem] w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <div className="grid h-full min-h-[100svh] grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[42vh] bg-zinc-200 lg:min-h-0">
            <Image
              src={VELOCE_WEBP}
              alt="Morpheus8 i światłoszerokopasmowe Veloce — urządzenia HI-TECH w ClinicaNova"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-zinc-950/10 lg:bg-gradient-to-r lg:from-transparent lg:via-zinc-950/15 lg:to-zinc-950/85"
              aria-hidden
            />
          </div>
          <div className="relative flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 px-8 py-14 sm:px-12 lg:justify-start lg:px-14 lg:py-20 xl:px-20">
            <div className="relative w-full max-w-xl border-l border-white/10 pl-8 lg:pl-10">
              <p className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-zinc-500">
                Technologie HI-TECH
              </p>
              <h1 className="font-serif text-[clamp(1.5rem,4.2vw,2.65rem)] font-normal leading-[1.15] tracking-tight text-white">
                <span className="not-italic">Morpheus8 & </span>
                <span className="italic text-zinc-200">
                  światłoszerokopasmowe Veloce
                </span>
              </h1>
              <p className="mt-7 max-w-lg font-sans text-[0.9375rem] font-light leading-relaxed text-zinc-400 sm:text-base">
                Najnowocześniejsze technologie HI-TECH dostępne w ClinicaNova
              </p>
              <div
                className="mt-10 h-px max-w-[6rem] bg-gradient-to-r from-zinc-500/80 to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center">
        <button
          type="button"
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-zinc-200 transition hover:text-white"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.25em]">
            Przewiń
          </span>
          <Image
            src="/slide-arrow.svg"
            alt=""
            width={40}
            height={40}
            className="h-8 w-8 animate-bounce opacity-85"
          />
        </button>
      </div>
    </section>
  );
}
