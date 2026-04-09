import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

const PREPARATY: { title: string; description: string }[] = [
  {
    title: "Kwas hialuronowy",
    description:
      "Głęboko nawilża, poprawia elastyczność i redukuje drobne zmarszczki.",
  },
  {
    title: "Stymulatory tkankowe",
    description:
      "Regenerują skórę, pobudzając produkcję kolagenu i elastyny.",
  },
  {
    title: "Hydroksyapatyt wapnia",
    description:
      "Działa jak biostymulator, poprawiając strukturę skóry i wypełniając drobne zmarszczki.",
  },
  {
    title: "Kwas polimlekowy",
    description:
      "Stymuluje odbudowę włókien kolagenowych, ujędrnia i poprawia gęstość skóry.",
  },
  {
    title: "Kolagen",
    description: "Działa regeneracyjnie i odbudowująco na włókna skóry.",
  },
  {
    title: "Mesoestetic (Mesoprof) i Pink Thera",
    description:
      "Innowacyjne koktajle o działaniu regenerującym, rozświetlającym i przeciwstarzeniowym.",
  },
];

const prepCardClass =
  "rounded-2xl border border-zinc-200/90 bg-zinc-50/80 px-5 py-5 ring-1 ring-zinc-900/[0.04] sm:px-6 sm:py-6";

export function MezoterapiaArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Mezoterapia</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Mezoterapia to technika podania specjalistycznych preparatów w głębsze warstwy
        skóry za pomocą mikroiniekcji. Dzięki temu składniki aktywne mogą działać
        bezpośrednio tam, gdzie są najbardziej potrzebne – w skórze właściwej.
        Procedura pozwala dostarczyć substancje nawilżające, odżywcze, regenerujące i
        stymulujące produkcję kolagenu oraz elastyny.
      </p>

      <h2 className={h2Class}>Dla kogo jest mezoterapia?</h2>
      <p>
        Mezoterapia jest odpowiednia dla osób, które chcą poprawić kondycję swojej
        skóry, zarówno na twarzy, szyi, dekolcie, jak i dłoniach czy skórze głowy.
        Zabieg zalecany jest w przypadku:
      </p>
      <ul className={listClass}>
        <li>odwodnionej, zmęczonej skóry,</li>
        <li>pierwszych oznak starzenia, takich jak drobne zmarszczki,</li>
        <li>utraty elastyczności i jędrności,</li>
        <li>nierównomiernego kolorytu,</li>
        <li>wypadania włosów,</li>
        <li>skóry wymagającej regeneracji po nadmiernej ekspozycji na słońce.</li>
      </ul>

      <h2 className={h2Class}>Najczęściej wykorzystywane preparaty</h2>
      <p>
        Podczas mezoterapii stosuje się różne preparaty, w zależności od potrzeb skóry.
        Do najpopularniejszych należą:
      </p>
      <ul className="mt-8 grid list-none grid-cols-1 gap-4 pl-0 sm:grid-cols-2 lg:gap-5">
        {PREPARATY.map((item) => (
          <li key={item.title} className={prepCardClass}>
            <p className="font-serif text-[0.9375rem] font-medium text-zinc-900">
              {item.title}
            </p>
            <p className="mt-2 text-[0.9375rem] font-light leading-relaxed text-zinc-600">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>
        Jak szybko widać efekty, optymalny czas do uzyskania efektów?
      </h2>
      <p>
        Pierwsze efekty, takie jak poprawa nawilżenia i napięcia skóry, widoczne są już
        po kilku dniach od zabiegu. Aby uzyskać optymalne rezultaty, zaleca się serię
        zabiegów, najczęściej 3–6 sesji w odstępach co 2–4 tygodnie. W przypadku
        biostymulatorów efekty narastają stopniowo w ciągu kilku tygodni i utrzymują się
        przez wiele miesięcy.
      </p>

      <h2 className={h2Class}>Jak często zaleca się powtarzać zabieg?</h2>
      <p>
        Rekomendowana częstotliwość mezoterapii zależy od rodzaju preparatu i
        indywidualnych potrzeb skóry. Najczęściej zaleca się wykonanie serii zabiegów w
        odstępach kilku tygodni, a następnie zabiegi przypominające co ok. 6 miesięcy,
        aby podtrzymać efekty.
      </p>

      <h2 className={h2Class}>Jak wygląda skóra po zabiegu?</h2>
      <p>
        Bezpośrednio po mezoterapii mogą być widoczne delikatne zaczerwienienia,
        obrzęki lub drobne ślady w miejscach wkłuć. W niektórych przypadkach mogą
        pojawić się drobne siniaczki. Objawy te ustępują zwykle w ciągu kilku godzin do
        2 dni, w zależności od wrażliwości skóry i rodzaju preparatu. Po zabiegu
        należy unikać sauny, intensywnego wysiłku fizycznego oraz ekspozycji na słońce
        przez kilka dni.
      </p>

      <h2 className={h2Class}>Czy efekty uzyskane są naturalne?</h2>
      <p>
        Tak, mezoterapia zapewnia naturalne efekty, poprawiając kondycję skóry bez
        zmiany jej rysów czy mimiki. Odpowiednio dobrane preparaty działają harmonijnie
        z procesami regeneracyjnymi organizmu, co daje subtelny, ale widoczny efekt
        odmłodzenia i odświeżenia skóry.
      </p>

      <h2 className={h2Class}>Jakich efektów mogę się spodziewać?</h2>
      <p>Efekty mezoterapii obejmują:</p>
      <ul className={listClass}>
        <li>głębokie nawilżenie i odżywienie skóry,</li>
        <li>poprawę elastyczności i jędrności,</li>
        <li>redukcję drobnych zmarszczek,</li>
        <li>rozświetlenie cery i wyrównanie kolorytu,</li>
        <li>regenerację skóry po ekspozycji na czynniki zewnętrzne,</li>
        <li>
          wzmocnienie i odżywienie włosów (w przypadku mezoterapii skóry głowy).
        </li>
      </ul>
    </div>
  );
}

const mezoterapiaCtaPrimaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-9 py-4 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-zinc-900 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] transition duration-300 hover:border-white/25 hover:bg-zinc-50 hover:shadow-[0_20px_50px_-16px_rgba(0,0,0,0.35)] active:scale-[0.99]";

export function MezoterapiaCtaBand() {
  return (
    <section
      className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20 lg:py-24"
      aria-labelledby="mezoterapia-cta-heading"
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
            id="mezoterapia-cta-heading"
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
            <Link href="/#kontakt" className={mezoterapiaCtaPrimaryButtonClass}>
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
