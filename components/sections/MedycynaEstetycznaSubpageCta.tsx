import Link from "next/link";

import { Container } from "@/components/ui/Container";

const ctaPrimaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-9 py-4 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-zinc-900 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] transition duration-300 hover:border-white/25 hover:bg-zinc-50 hover:shadow-[0_20px_50px_-16px_rgba(0,0,0,0.35)] active:scale-[0.99]";

type MedycynaEstetycznaSubpageCtaProps = {
  /** Unikalne id nagłówka dla aria-labelledby (np. per podstrona). */
  headingId: string;
};

export function MedycynaEstetycznaSubpageCta({
  headingId,
}: MedycynaEstetycznaSubpageCtaProps) {
  return (
    <section
      className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20 lg:py-24"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-40%,rgba(255,255,255,0.09),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-zinc-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-zinc-400/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/[0.07] bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-8 py-12 text-center shadow-[0_32px_90px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.06] backdrop-blur-md sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <p className="font-serif text-[0.65rem] font-medium uppercase tracking-[0.26em] text-zinc-400">
            ClinicaNova · Gdańsk
          </p>
          <h2
            id={headingId}
            className="mt-4 font-serif text-[clamp(1.5rem,3.8vw,2.35rem)] font-normal leading-[1.18] tracking-tight text-white"
          >
            Umów się na zabieg
            <span className="block text-zinc-300 sm:mt-1">w ClinicaNova</span>
          </h2>
          <div
            className="mx-auto mt-7 h-px w-14 bg-gradient-to-r from-transparent via-white/35 to-transparent"
            aria-hidden
          />
          <p className="mx-auto mt-7 max-w-lg text-[0.9375rem] font-light leading-[1.75] text-zinc-400 sm:text-base">
            Skontaktuj się z nami, aby umówić wizytę i dobrać preparaty do potrzeb
            Twojej skóry — indywidualnie i bez pośpiechu.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12">
            <Link href="/#kontakt" className={ctaPrimaryButtonClass}>
              Umów konsultację
            </Link>
            <Link
              href="tel:+48507698507"
              className="text-[0.8125rem] font-light tracking-wide text-zinc-500 transition-colors hover:text-zinc-300"
            >
              +48 507 698 507
            </Link>
          </div>
        </div>
      </Container>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent"
        aria-hidden
      />
    </section>
  );
}
