import Link from "next/link";

import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

const linkSubtle =
  "font-medium text-zinc-800 underline decoration-zinc-300/80 underline-offset-2 transition hover:text-zinc-950 hover:decoration-zinc-500";

export function ToksynaBotulinowaArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Toksyna botulinowa</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Toksyna botulinowa, potocznie nazywana botoksem, jest jednym z najczęściej
        wykonywanych zabiegów w medycynie estetycznej. Jej głównym działaniem jest
        czasowe osłabienie przewodnictwa nerwowo-mięśniowego, co skutkuje
        wygładzeniem zmarszczek mimicznych oraz zapobieganiem ich pogłębianiu się. To
        skuteczna, bezpieczna i szybka metoda na poprawę wyglądu skóry i zachowanie
        młodzieńczego wyglądu.
      </p>

      <h2 className={h2Class}>
        Wskazania do zabiegu – na jakie partie twarzy stosujemy botoks i na jakie
        rodzaje zmarszczek
      </h2>
      <p>
        Toksyna botulinowa jest stosowana do wygładzania zmarszczek mimicznych, które
        powstają w wyniku ruchów mięśni twarzy. Najczęściej obejmuje:
      </p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Czoło</strong> – redukcja
          poziomych zmarszczek,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Okolica między brwiami</strong>{" "}
          (tzw. lwia zmarszczka) – wygładzenie pionowych bruzd,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Okolice oczu</strong> (kurze
          łapki) – redukcja drobnych zmarszczek,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">
            Linia marionetki i zmarszczki wokół ust
          </strong>{" "}
          – delikatna poprawa dolnej części twarzy.
        </li>
      </ul>
      <p>
        Oprócz zmarszczek, botoks może być stosowany w leczeniu problemów takich jak
        nadpotliwość, bruksizm czy migreny.
      </p>

      <h2 className={h2Class}>
        Przeciwdziałaj objawom, ale i spowalniaj objawy starzenia
      </h2>
      <p>
        Toksyna botulinowa nie tylko wygładza istniejące zmarszczki, ale również
        zapobiega ich pogłębianiu się. Regularne stosowanie botoksu pomaga ograniczyć
        aktywność mięśni odpowiedzialnych za mimikę, co spowalnia procesy starzenia i
        utrzymuje gładką, młodzieńczą skórę na dłużej.
      </p>

      <h2 className={h2Class}>
        Toksyna botulinowa w połączeniu z innymi zabiegami medycyny estetycznej
      </h2>
      <p>
        Dla uzyskania kompleksowych efektów, toksyna botulinowa może być łączona z
        innymi zabiegami, takimi jak:
      </p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Kwas hialuronowy</strong> – dla
          wypełnienia głębszych zmarszczek lub poprawy owalu twarzy,
        </li>
        <li>
          <Link
            href="/medycyna-estetyczna/stymulatory-tkankowe"
            className={linkSubtle}
          >
            Stymulatory tkankowe
          </Link>{" "}
          – dla poprawy gęstości i jędrności skóry,
        </li>
        <li>
          <Link
            href="/medycyna-estetyczna/osocze-bogatoplytkowe"
            className={linkSubtle}
          >
            Osocze bogatopłytkowe
          </Link>{" "}
          – regeneracja i odmłodzenie skóry.
        </li>
      </ul>

      <h2 className={h2Class}>
        Efekty toksyny botulinowej – czy widoczne są od razu?
      </h2>
      <p>
        Pierwsze efekty działania toksyny botulinowej zaczynają być widoczne po około
        2–5 dniach od zabiegu, natomiast pełen efekt rozwija się w ciągu 10–14 dni.
        Skóra staje się gładsza, a zmarszczki mniej widoczne, bez zmiany naturalnej
        mimiki twarzy.
      </p>

      <h2 className={h2Class}>Jak długo efekty się utrzymują?</h2>
      <p>
        Efekty zabiegu utrzymują się zwykle ok. 6 miesięcy, w zależności od
        indywidualnych cech pacjenta oraz miejsca podania toksyny. Regularne zabiegi
        mogą wydłużyć ten czas, ponieważ mięśnie stopniowo przyzwyczajają się do
        mniejszej aktywności.
      </p>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Zabieg trwa około 15–30 minut i jest poprzedzony konsultacją, podczas której
        lekarz ocenia potrzeby pacjenta i planuje miejsca aplikacji toksyny. Po
        oczyszczeniu skóry, toksyna botulinowa jest precyzyjnie podawana cienką igłą w
        określone mięśnie. Procedura może być poprzedzona znieczuleniem miejscowym.
      </p>

      <h2 className={h2Class}>Naturalność i bezpieczeństwo</h2>
      <p>
        Podanie toksyny botulinowej przez doświadczonego lekarza gwarantuje naturalny
        wygląd bez ryzyka „zamrożenia” mimiki. Toksyna botulinowa jest substancją
        bezpieczną, szeroko przebadaną i stosowaną od lat zarówno w medycynie
        estetycznej, jak i w leczeniu schorzeń neurologicznych.
      </p>
    </div>
  );
}
