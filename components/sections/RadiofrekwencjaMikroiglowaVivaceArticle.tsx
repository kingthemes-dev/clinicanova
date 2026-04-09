import Link from "next/link";

import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

const linkSubtle =
  "font-medium text-zinc-800 underline decoration-zinc-300/80 underline-offset-2 transition hover:text-zinc-950 hover:decoration-zinc-500";

export function RadiofrekwencjaMikroiglowaVivaceArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>
        Radiofrekwencja mikroigłowa Vivace – zaawansowana technologia regeneracji i liftingu
        skóry
      </h2>
      <p>
        Radiofrekwencja mikroigłowa Vivace to nowoczesna technologia, która łączy działanie
        mikroigieł i fal radiowych w celu głębokiej regeneracji skóry. Podczas zabiegu skóra
        jest poddawana precyzyjnym mikronakłuciom, przez które wprowadzana jest energia RF,
        stymulująca produkcję kolagenu i elastyny. Zabieg skutecznie poprawia jędrność
        skóry, spłyca blizny i rozstępy oraz działa odmładzająco.
      </p>

      <h2 className={h2Class}>Kiedy warto wykonać radiofrekwencję? Na jakie problemy skórne?</h2>
      <p>Radiofrekwencja mikroigłowa jest zalecana w przypadku:</p>
      <ul className={listClass}>
        <li>utraty jędrności i elastyczności skóry,</li>
        <li>widocznych zmarszczek i bruzd,</li>
        <li>rozszerzonych porów,</li>
        <li>blizn potrądzikowych, pourazowych i pooperacyjnych,</li>
        <li>rozstępów,</li>
        <li>nierównej tekstury skóry,</li>
        <li>wiotkiej skóry na twarzy i ciele.</li>
      </ul>

      <h2 className={h2Class}>Zabiegi na twarz</h2>
      <p>
        Radiofrekwencja mikroigłowa Vivace na twarz poprawia jakość skóry, redukuje
        zmarszczki, zmniejsza widoczność porów oraz poprawia napięcie i kontur twarzy.
        Zabieg jest szczególnie skuteczny w redukcji blizn potrądzikowych oraz w
        rewitalizacji cery zmęczonej i poszarzałej.
      </p>

      <h2 className={h2Class}>Zabieg liftingu</h2>
      <p>
        Radiofrekwencja mikroigłowa jest doskonałą metodą liftingu bez skalpela. Fale
        radiowe stymulują głębokie warstwy skóry, powodując skracanie włókien kolagenowych,
        co prowadzi do natychmiastowego napięcia skóry. Efekt liftingu pogłębia się w ciągu
        kilku tygodni dzięki wzmożonej produkcji kolagenu.
      </p>

      <h2 className={h2Class}>Zabiegi na ciało</h2>
      <p>Vivace może być stosowane na obszary ciała, takie jak:</p>
      <ul className={listClass}>
        <li>brzuch,</li>
        <li>uda,</li>
        <li>ramiona,</li>
        <li>pośladki.</li>
      </ul>
      <p>
        Radiofrekwencja mikroigłowa pomaga redukować wiotkość skóry, rozstępy oraz poprawia
        teksturę skóry w tych obszarach.
      </p>

      <h2 className={h2Class}>Radiofrekwencja mikroigłowa Vivace na blizny i rozstępy</h2>
      <p>
        Dzięki połączeniu mikronakłuć i fal radiowych Vivace skutecznie redukuje widoczność
        blizn potrądzikowych, pourazowych oraz rozstępów. Proces regeneracji skóry
        pobudzony podczas zabiegu sprzyja odbudowie tkanki i przywracaniu jej jednolitej
        struktury.
      </p>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Zabieg rozpoczyna się od oczyszczenia skóry i nałożenia znieczulenia miejscowego w
        postaci kremu. Urządzenie Vivace jest następnie przykładane do skóry, gdzie
        mikroigły wykonują precyzyjne nakłucia, a fale radiowe dostarczają energię do
        głębszych warstw skóry. Parametry są dostosowywane indywidualnie do potrzeb
        pacjenta. Całość trwa około 30–60 minut w zależności od obszaru.
      </p>

      <h2 className={h2Class}>Wygląd skóry po zabiegu</h2>
      <p>
        Bezpośrednio po zabiegu skóra może być zaczerwieniona i lekko obrzęknięta. Objawy
        te ustępują w ciągu 1–2 dni. W niektórych przypadkach może wystąpić delikatne
        złuszczanie naskórka, co jest naturalnym procesem regeneracyjnym.
      </p>

      <h2 className={h2Class}>Kiedy uzyskuje się optymalne efekty zabiegu? Rekomendowana ilość zabiegów</h2>
      <p>
        Pierwsze rezultaty, takie jak poprawa napięcia skóry, są widoczne po kilku dniach.
        Optymalne efekty, takie jak redukcja blizn i zmarszczek czy poprawa jędrności,
        pojawiają się w ciągu 4–6 tygodni po zabiegu. Rekomendowana seria to 3–5 zabiegów w
        odstępach 4–6 tygodni.
      </p>

      <h2 className={h2Class}>Z jakimi innymi zabiegami można łączyć radiofrekwencję mikroigłową?</h2>
      <p>
        Radiofrekwencja mikroigłowa może być łączona z innymi terapiami w celu uzyskania
        bardziej kompleksowych efektów, takimi jak:
      </p>
      <ul className={listClass}>
        <li>
          <Link href="/medycyna-estetyczna/osocze-bogatoplytkowe" className={linkSubtle}>
            Osocze bogatopłytkowe (PRP)
          </Link>{" "}
          – dla intensywniejszej regeneracji,
        </li>
        <li>
          <Link href="/kosmetologia/mezoterapia-mesoestetic-mesoprof" className={linkSubtle}>
            Mezoterapia igłowa
          </Link>{" "}
          – w celu głębokiego nawilżenia skóry,
        </li>
        <li>
          <Link href="/kosmetologia/peelingi-medyczne" className={linkSubtle}>
            Peelingi chemiczne
          </Link>{" "}
          – dla poprawy kolorytu i struktury skóry,
        </li>
        <li>
          <Link href="/medycyna-estetyczna/toksyna-botulinowa" className={linkSubtle}>
            Toksyna botulinowa
          </Link>{" "}
          i{" "}
          <Link href="/medycyna-estetyczna/kwas-hialuronowy" className={linkSubtle}>
            wypełniacze
          </Link>{" "}
          – w ramach kompleksowego odmładzania.
        </li>
      </ul>
    </div>
  );
}
