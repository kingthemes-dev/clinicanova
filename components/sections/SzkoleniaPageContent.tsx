import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  LayoutGrid,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Target,
  TrendingUp,
} from "lucide-react";

import {
  bodyProseClass,
  sectionEyebrowClass,
  sectionImageFrame,
} from "@/components/ui/pageTypography";

const h2Section =
  "font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-normal leading-snug tracking-tight text-zinc-900";

const cardSoft =
  "rounded-2xl border border-zinc-200/90 bg-white px-5 py-5 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.1)] ring-1 ring-zinc-900/[0.04] sm:px-6 sm:py-6";

const philosophyItems: readonly { text: string; Icon: LucideIcon }[] = [
  {
    text: "analizy proporcji i harmonii twarzy w ujęciu strategicznym",
    Icon: LayoutGrid,
  },
  {
    text: "świadomego planowania punktów podania preparatu",
    Icon: Target,
  },
  {
    text: "minimalizowania ryzyka poprzez precyzyjne techniki iniekcyjne",
    Icon: ShieldCheck,
  },
  {
    text: "zarządzania potencjalnymi powikłaniami zgodnie z aktualnymi standardami",
    Icon: Stethoscope,
  },
  {
    text: "budowania naturalnych, subtelnych efektów bez przerysowania",
    Icon: Sparkles,
  },
];

const dlaKogoItems: readonly { text: string; Icon: LucideIcon }[] = [
  {
    text: "posiadają doświadczenie w pracy z wypełniaczami",
    Icon: Syringe,
  },
  {
    text: "chcą podnieść poziom swoich kompetencji zabiegowych",
    Icon: TrendingUp,
  },
  {
    text: "dążą do pracy na poziomie eksperckim",
    Icon: Award,
  },
  {
    text: "stawiają bezpieczeństwo i jakość ponad ilość wykonywanych zabiegów",
    Icon: Scale,
  },
];

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.35}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.35}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export function SzkoleniaPageContent() {
  return (
    <div className="space-y-20 sm:space-y-24 lg:space-y-28">
      {/* Wstęp */}
      <div>
        <h2
          id="szkolenia-masterclass-heading"
          className={`${h2Section} max-w-4xl text-balance text-left leading-[1.2]`}
        >
          Masterclass: Niechirurgiczna korekta nosa kwasem hialuronowym
        </h2>
        <div className={`mt-8 space-y-6 text-left sm:mt-10 ${bodyProseClass}`}>
        <p className="text-[1.0625rem] font-light leading-[1.85] text-zinc-600 sm:text-[1.125rem]">
          Niechirurgiczna korekta nosa to procedura wymagająca najwyższej precyzji,
          dogłębnej znajomości anatomii oraz dojrzałego zrozumienia estetyki twarzy. To
          zabieg, który nie wybacza błędów — dlatego wymaga świadomej, strategicznej pracy
          lekarza.
        </p>
        <p>
          ClinicaNova Academy to autorski program szkoleniowy stworzony dla lekarzy,
          którzy chcą doskonalić swoje umiejętności w zakresie zaawansowanego modelowania
          nosa i pracować według najwyższych standardów bezpieczeństwa oraz estetyki.
        </p>
        </div>
      </div>

      {/* Manifest */}
      <div
        className={`relative w-full overflow-hidden ${cardSoft} bg-gradient-to-br from-zinc-50 via-white to-zinc-50/80`}
      >
        <div
          className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-zinc-200/40 blur-3xl"
          aria-hidden
        />
        <p className="font-serif text-[1.0625rem] font-normal leading-relaxed text-zinc-900 sm:text-[1.125rem]">
          To nie jest szkolenie podstawowe.
        </p>
        <p className="mt-4 text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
          To masterclass skoncentrowany na jakości, przewidywalności efektów i klinicznej
          odpowiedzialności.
        </p>
      </div>

      {/* Filozofia */}
      <section id="filozofia-szkolenia" className="scroll-mt-28">
        <div className="text-left">
          <p className={sectionEyebrowClass}>Program</p>
          <h2 className={`${h2Section} mt-2`}>Filozofia szkolenia</h2>
          <p className="mt-5 max-w-2xl text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
            W ClinicaNova Academy uczymy:
          </p>
        </div>
        <ul className="mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {philosophyItems.map(({ text, Icon }) => (
            <li
              key={text}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200/80 bg-white/90 px-5 py-4 ring-1 ring-zinc-900/[0.03] sm:px-6 sm:py-5"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/90 bg-zinc-50 text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)]"
                aria-hidden
              >
                <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.35} />
              </span>
              <span className="min-w-0 text-[0.9375rem] font-light leading-relaxed text-zinc-700">
                {text}
              </span>
            </li>
          ))}
        </ul>
        <p
          className={`mt-12 max-w-2xl text-left text-[0.9375rem] font-light italic leading-relaxed text-zinc-500`}
        >
          Program łączy zaawansowaną teorię z intensywną praktyką pod bezpośrednim
          nadzorem prowadzącej.
        </p>
      </section>

      {/* Prowadząca */}
      <section
        id="prowadzaca-masterclass"
        className="scroll-mt-28 border-y border-zinc-100 bg-zinc-50/50 py-16 sm:py-20 lg:py-24"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div
            className={`relative aspect-[4/5] w-full max-w-md justify-self-center lg:col-span-5 lg:max-w-none lg:justify-self-start ${sectionImageFrame}`}
          >
            <Image
              src="/wieloletnie-doswiadczenie.jpg"
              alt="Dr Joanna Gruber-Miazga — prowadząca masterclass ClinicaNova Academy"
              fill
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="lg:col-span-7">
            <p className={sectionEyebrowClass}>Prowadząca Masterclass</p>
            <h2 className={`${h2Section} mt-2`}>dr Joanna Gruber-Miazga</h2>
            <p className="mt-6 text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
              Lekarz medycyny estetycznej specjalizująca się w niechirurgicznej korekcie
              nosa oraz modelowaniu struktur centralnej części twarzy. W swojej praktyce
              koncentruje się na bezpieczeństwie, przewidywalności rezultatów oraz estetyce
              opartej na harmonii, a nie nadkorekcie.
            </p>
            <p className={`mt-6 ${bodyProseClass}`}>
              Podczas szkoleń przekazuje autorskie protokoły pracy, kliniczne niuanse oraz
              doświadczenie zdobyte w pracy z wymagającymi przypadkami.
            </p>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section id="dla-kogo-masterclass" className="scroll-mt-28">
        <div className="text-left">
          <p className={sectionEyebrowClass}>Uczestnicy</p>
          <h2 className={`${h2Section} mt-2`}>Dla kogo?</h2>
          <p className="mt-5 max-w-2xl text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
            Masterclass dedykowany jest lekarzom, którzy:
          </p>
        </div>
        <ul className="mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-5">
          {dlaKogoItems.map(({ text, Icon }) => (
            <li
              key={text}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200/90 bg-white px-5 py-5 ring-1 ring-zinc-900/[0.04] sm:px-6"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/90 bg-zinc-50 text-zinc-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)]"
                aria-hidden
              >
                <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.35} />
              </span>
              <span className="min-w-0 text-[0.9375rem] font-light leading-relaxed text-zinc-700">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Aplikacja */}
      <section
        id="aplikacja-szkolenie"
        className="relative scroll-mt-28 overflow-hidden rounded-[2rem] border border-zinc-900/[0.15] bg-zinc-950 px-6 py-12 text-center shadow-[0_32px_90px_-36px_rgba(0,0,0,0.55)] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.07),transparent)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="font-serif text-[0.65rem] font-medium uppercase tracking-[0.26em] text-zinc-500">
            Rezerwacja
          </p>
          <h2 className="mt-4 font-serif text-[clamp(1.35rem,3vw,1.85rem)] font-normal leading-snug tracking-tight text-white">
            Aplikacja na szkolenie
          </h2>
          <div
            className="mx-auto mt-6 h-px w-14 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            aria-hidden
          />
          <p className="mx-auto mt-7 max-w-2xl text-[0.9375rem] font-light leading-relaxed text-zinc-400">
            Udział w ClinicaNova Academy wymaga wcześniejszej rezerwacji miejsca.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <Link
              href="mailto:clinicanova.pl@gmail.com"
              className="group flex w-full min-w-0 flex-1 items-center justify-center gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.07] sm:px-5"
            >
              <IconMail className="h-5 w-5 shrink-0 text-zinc-500 transition group-hover:text-zinc-300" />
              <span className="min-w-0 break-words text-center text-[0.8125rem] font-light leading-snug text-zinc-200 transition group-hover:text-white sm:text-[0.9375rem]">
                clinicanova.pl@gmail.com
              </span>
            </Link>
            <Link
              href="tel:+48507698507"
              className="group flex w-full flex-1 items-center justify-center gap-3 rounded-2xl border border-white/[0.1] bg-white/[0.04] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <IconPhone className="h-5 w-5 shrink-0 text-zinc-500 transition group-hover:text-zinc-300" />
              <span className="whitespace-nowrap text-[0.9375rem] font-light text-zinc-200 transition group-hover:text-white">
                +48 507 698 507
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
