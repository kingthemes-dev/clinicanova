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
