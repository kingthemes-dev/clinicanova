import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function OsoczeBogatoplytkoweArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Osocze bogatopłytkowe</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Osocze bogatopłytkowe (PRP) to naturalna metoda regeneracji skóry,
        wykorzystująca zasoby organizmu do poprawy jej kondycji. Procedura polega na
        wykorzystaniu osocza pacjenta, które zawiera wysokie stężenie płytek krwi i
        czynników wzrostu.
      </p>
      <p>
        Te składniki stymulują procesy naprawcze w skórze, pobudzają produkcję
        kolagenu oraz elastyny i przyspieszają regenerację tkanek. Zaletą terapii
        osoczem bogatopłytkowym jest jego pełna biokompatybilność – ponieważ
        pochodzi z krwi pacjenta, nie ma ryzyka reakcji alergicznych ani odrzutu. Jest
        to idealne rozwiązanie dla osób szukających naturalnych metod odmładzania i
        poprawy jakości skóry.
      </p>

      <h2 className={h2Class}>Jak uzyskujemy osocze?</h2>
      <p>
        Proces rozpoczyna się od pobrania niewielkiej ilości krwi od pacjenta. Krew
        jest następnie umieszczana w specjalnej wirówce, która oddziela osocze
        bogatopłytkowe od pozostałych składników. Uzyskane osocze jest następnie
        przygotowywane do podania w formie mikroiniekcji w wybrane partie skóry.
      </p>

      <h2 className={h2Class}>
        Na jakie partie twarzy stosujemy osocze? Kiedy osocze jest lepsze od kwasu
        hialuronowego?
      </h2>
      <p>Osocze bogatopłytkowe można stosować na wiele obszarów twarzy, w tym:</p>
      <ul className={listClass}>
        <li>okolice oczu (redukcja cieni, zmarszczek i poprawa elastyczności),</li>
        <li>policzki (ujędrnienie i regeneracja),</li>
        <li>linie marionetki oraz zmarszczki wokół ust,</li>
        <li>czoło (poprawa napięcia skóry),</li>
        <li>szyję i dekolt,</li>
        <li>dłonie (regeneracja i odmłodzenie).</li>
      </ul>
      <p>
        Osocze sprawdza się szczególnie u osób, które chcą poprawić jakość skóry w
        naturalny sposób. W porównaniu z kwasem hialuronowym, osocze nie dodaje
        objętości, lecz działa regenerująco, stymulując procesy odnowy biologicznej.
        Jest to idealny wybór dla pacjentów z cienką, wiotką skórą oraz tych, którzy
        obawiają się zaburzenia naturalnego wyglądu twarzy.
      </p>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Zabieg rozpoczyna się od pobrania krwi i jej odwirowania w celu uzyskania
        osocza bogatopłytkowego. Następnie lekarz oczyszcza skórę i aplikuje
        znieczulenie miejscowe. Osocze jest podawane w wybrane partie skóry za pomocą
        mikroiniekcji. Cały proces trwa około 30–60 minut.
      </p>

      <h2 className={h2Class}>
        Jak szybko widać efekty? Optymalny czas do uzyskania efektów
      </h2>
      <p>
        Pierwsze efekty, takie jak poprawa nawilżenia, napięcia i rozświetlenia skóry,
        można zauważyć po 7–14 dniach od zabiegu. Proces regeneracji skóry jest jednak
        stopniowy, a pełne rezultaty widoczne są po kilku tygodniach. W celu
        osiągnięcia najlepszych efektów zaleca się wykonanie serii zabiegów, o
        ilości których decyduje specjalista.
      </p>

      <h2 className={h2Class}>Jak wygląda skóra po zabiegu?</h2>
      <p>
        Bezpośrednio po zabiegu skóra może być lekko zaczerwieniona i obrzęknięta, a w
        miejscach wkłuć mogą wystąpić drobne ślady. Objawy te ustępują zazwyczaj w
        ciągu kilku godzin do 2 dni. Po zabiegu należy unikać ekspozycji na słońce oraz
        intensywnego wysiłku fizycznego przez kilka dni.
      </p>

      <h2 className={h2Class}>Czy efekty uzyskane są naturalne?</h2>
      <p>
        Tak, osocze bogatopłytkowe działa w harmonii z procesami regeneracyjnymi
        organizmu. Efekty są subtelne, ale widoczne – skóra staje się bardziej jędrna,
        nawilżona i promienna, zachowując swój naturalny wygląd. Zabieg nie zmienia
        rysów twarzy ani nie dodaje sztucznej objętości.
      </p>

      <p>
        <strong className="font-medium text-zinc-800">
          Osocze bogatopłytkowe zapewnia:
        </strong>
      </p>
      <ul className={listClass}>
        <li>poprawę elastyczności i napięcia skóry,</li>
        <li>wygładzenie drobnych zmarszczek,</li>
        <li>redukcję oznak zmęczenia, takich jak cienie pod oczami,</li>
        <li>intensywne nawilżenie i regenerację,</li>
        <li>wyrównanie kolorytu skóry i poprawę jej ogólnej jakości.</li>
      </ul>
    </div>
  );
}
