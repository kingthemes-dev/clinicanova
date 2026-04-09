import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function LipozaIniekcyjnaArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Lipoza iniekcyjna</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Lipoliza iniekcyjna to mało inwazyjna metoda redukcji tkanki tłuszczowej,
        polegająca na wstrzykiwaniu preparatu rozpuszczającego komórki tłuszczowe.
        Zabieg pozwala na skuteczne wymodelowanie sylwetki, szczególnie w miejscach,
        gdzie tkanka tłuszczowa jest oporna na dietę i ćwiczenia.
      </p>

      <h2 className={h2Class}>Co to jest lipoliza i kiedy jest wykorzystywana?</h2>
      <p>
        Lipoliza to proces chemicznego usuwania nadmiaru tkanki tłuszczowej poprzez
        wstrzykiwanie preparatu bezpośrednio w problematyczne obszary ciała. Zabieg
        ten stosuje się w celu zredukowania tkanki tłuszczowej w miejscach takich jak:
      </p>
      <ul className={listClass}>
        <li>podbródek,</li>
        <li>bryczesy,</li>
        <li>boczki,</li>
        <li>wewnętrzna strona ud i kolan,</li>
        <li>okolice brzucha,</li>
        <li>ramiona.</li>
      </ul>
      <p>
        Lipoliza nie jest metodą odchudzania, lecz modelowania sylwetki – skierowana
        jest do osób o prawidłowej masie ciała, które chcą pozbyć się miejscowych
        depozytów tłuszczowych.
      </p>

      <h2 className={h2Class}>Jaki preparat wykorzystujemy do lipolizy?</h2>
      <p>
        W ClinicaNova stosujemy preparaty na bazie fosfatydylocholiny oraz
        deoksycholatu sodu. Są to substancje naturalnie występujące w organizmie,
        które rozbijają komórki tłuszczowe, czyniąc je łatwiejszymi do usunięcia przez
        układ limfatyczny. Preparaty te są bezpieczne i precyzyjnie działają na
        wybrane partie ciała.
      </p>

      <h2 className={h2Class}>Usuwanie komórek tłuszczowych – metoda działania preparatu</h2>
      <p>
        Wstrzyknięty preparat powoduje rozpad komórek tłuszczowych (lipolizę), które
        następnie są metabolizowane i usuwane z organizmu w naturalnych procesach.
        Działanie preparatu jest lokalne – nie wpływa na inne tkanki, co czyni
        zabieg bardzo bezpiecznym. Efekty pojawiają się stopniowo w ciągu kilku
        tygodni, kiedy organizm usuwa rozbite komórki tłuszczowe.
      </p>

      <h2 className={h2Class}>Czy zabieg jest dla każdego? Wskazania do zabiegu</h2>
      <p>
        Lipoliza iniekcyjna jest zalecana dla osób z miejscowym nadmiarem tkanki
        tłuszczowej. Zabieg nie jest odpowiedni dla osób o znaczącej nadwadze ani dla
        kobiet w ciąży i karmiących piersią. Przeciwwskazaniem są także choroby
        autoimmunologiczne, niewydolność wątroby czy alergie na składniki preparatu.
      </p>

      <h2 className={h2Class}>Skuteczność zabiegu i utrzymywanie efektów</h2>
      <p>
        Efekty lipolizy iniekcyjnej są widoczne już po 2–4 tygodniach od zabiegu i
        pogłębiają się wraz z upływem czasu. Usunięte komórki tłuszczowe nie
        regenerują się, co oznacza, że efekty są trwałe, pod warunkiem utrzymania
        stabilnej wagi i zdrowego stylu życia.
      </p>

      <h2 className={h2Class}>Przebieg zabiegu lipolizy</h2>
      <p>
        Po oczyszczeniu skóry i ewentualnym znieczuleniu miejscowym, preparat jest
        podawany cienką igłą w wybrane obszary ciała. Zabieg trwa około 20–40 minut,
        w zależności od wielkości obszaru. Bezpośrednio po zabiegu może wystąpić lekki
        obrzęk, zaczerwienienie lub delikatne zasinienie ustępujące w ciągu kilku
        dni.
      </p>

      <h2 className={h2Class}>
        Zalecenia po zabiegu, wsparcie rekonwalescencji i podtrzymania efektów
      </h2>
      <p>
        Po zabiegu zaleca się unikanie intensywnego wysiłku fizycznego, sauny oraz
        opalania przez kilka dni. Dobrze jest pić dużo wody, aby wspierać naturalne
        procesy metabolizmu i usuwania tłuszczu. W celu zmniejszenia obrzęków można
        stosować chłodne okłady. Masaż limfatyczny może wspomóc procesy regeneracyjne
        i przyspieszyć efekty.
      </p>

      <h2 className={h2Class}>Czy zabieg wymaga powtórzeń?</h2>
      <p>
        W większości przypadków do osiągnięcia pełnego efektu konieczne jest wykonanie
        serii 2–4 zabiegów w odstępach co ok. 4 tygodnie. Liczba sesji zależy od
        ilości tkanki tłuszczowej oraz obszaru poddawanego terapii.
      </p>
    </div>
  );
}
