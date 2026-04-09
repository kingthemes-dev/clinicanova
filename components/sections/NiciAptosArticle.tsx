import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

const cardClass =
  "rounded-2xl border border-zinc-200/90 bg-zinc-50/80 px-5 py-5 ring-1 ring-zinc-900/[0.04] sm:px-6 sm:py-6";

const PARTIE_TWARZY: { title: string; text: string }[] = [
  {
    title: "Podbródek",
    text: "Nici Aptos pozwalają na skuteczne modelowanie podbródka, redukując widoczność drugiego podbródka i nadmiaru wiotkiej skóry w tej okolicy. Zabieg ten pomaga zdefiniować kontur dolnej części twarzy, poprawiając jej proporcje i nadając bardziej smukły wygląd.",
  },
  {
    title: "Owal twarzy",
    text: "Z wiekiem owal twarzy traci wyrazistość, co jest wynikiem wiotczenia tkanek i opadania skóry. Nici Aptos działają jak „niewidzialne rusztowanie”, unosząc tkanki i przywracając młodzieńczy kontur twarzy. Poprawa owalu jest widoczna już po zabiegu, a efekt utrzymuje się przez wiele miesięcy.",
  },
  {
    title: "Policzki",
    text: "Utrata objętości w policzkach i ich opadanie to częsty problem, zwłaszcza po 40. roku życia. Dzięki niciom Aptos możliwe jest uniesienie policzków, co przywraca twarzy naturalną harmonię i młodzieńczą pełnię. To idealne rozwiązanie dla osób, które chcą poprawić kształt policzków bez konieczności stosowania wypełniaczy.",
  },
  {
    title: "Linia żuchwy („chomiki”)",
    text: "Opadające tkanki wzdłuż linii żuchwy to jedna z najbardziej widocznych oznak starzenia. Nici Aptos skutecznie ujędrniają skórę w tej okolicy, redukując tzw. „chomiki” i poprawiając zarys dolnej części twarzy. Efekt to bardziej wyrazista i smukła linia żuchwy.",
  },
  {
    title: "Szyja",
    text: "Choć często pomijana, szyja również wymaga szczególnej uwagi. Nici Aptos mogą poprawić napięcie skóry, zredukować widoczność zmarszczek i zapobiec wiotczeniu. Lifting szyi za pomocą nici Aptos daje subtelne, ale widoczne rezultaty, poprawiając ogólny wygląd twarzy.",
  },
  {
    title: "Okolice ust",
    text: "Delikatne opadanie kącików ust i utrata elastyczności skóry wokół warg mogą zostać skorygowane dzięki niciom Aptos, co nadaje twarzy bardziej pogodny i zrelaksowany wygląd.",
  },
  {
    title: "Skronie i brwi",
    text: "Nici Aptos są również skuteczne w podniesieniu opadających brwi oraz poprawie napięcia skóry w okolicach skroni. Efekt to otwarcie spojrzenia i zniwelowanie zmęczonego wyrazu twarzy.",
  },
];

export function NiciAptosArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Nici Aptos — lifting twarzy bez skalpela</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Nici Aptos to metoda liftingu twarzy i ciała, która pozwala osiągnąć efekty
        porównywalne z chirurgicznym liftingiem, ale bez konieczności operacji.
        Procedura polega na wprowadzeniu nici, które mechanicznie unoszą tkanki, a
        jednocześnie stymulują regenerację skóry poprzez produkcję kolagenu. Efekty są
        naturalne, a rekonwalescencja minimalna.
      </p>

      <h2 className={h2Class}>Na jakie problemy stosujemy nici Aptos?</h2>
      <p>
        <strong className="font-medium text-zinc-800">Nici Aptos są stosowane w celu:</strong>
      </p>
      <ul className={listClass}>
        <li>poprawy owalu twarzy,</li>
        <li>uniesienia opadających policzków,</li>
        <li>redukcji „chomików” (opadających linii żuchwy),</li>
        <li>modelowania podbródka,</li>
        <li>liftingu szyi i dekoltu,</li>
        <li>wygładzenia drobnych zmarszczek,</li>
        <li>
          poprawy napięcia skóry w okolicach ciała, np. ramion czy kolan.
        </li>
      </ul>
      <p>
        Metoda sprawdza się u osób, które zauważają oznaki wiotkości skóry, ale nie są
        gotowe na inwazyjne procedury chirurgiczne.
      </p>

      <h2 className={h2Class}>Na jakie partie twarzy stosujemy nici Aptos?</h2>
      <p>
        Nici Aptos to wszechstronne narzędzie w medycynie estetycznej, które umożliwia
        precyzyjną korektę różnych obszarów twarzy, zapewniając naturalne efekty
        liftingu i odmłodzenia. Dzięki różnym rodzajom nici i technikom aplikacji,
        można je dostosować do specyficznych potrzeb każdej części twarzy:
      </p>
      <ul className="mt-8 grid list-none grid-cols-1 gap-4 pl-0 sm:grid-cols-2 lg:gap-5">
        {PARTIE_TWARZY.map((item) => (
          <li key={item.title} className={cardClass}>
            <p className="font-serif text-[0.9375rem] font-medium text-zinc-900">
              {item.title}
            </p>
            <p className="mt-2 text-[0.9375rem] font-light leading-relaxed text-zinc-600">
              {item.text}
            </p>
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>Z czego składają się nici Aptos?</h2>
      <p>
        Nici Aptos wykonane są z biokompatybilnych materiałów, które są bezpieczne dla
        organizmu i rozkładają się naturalnie w tkankach.
      </p>
      <p>
        <strong className="font-medium text-zinc-800">W skład nici mogą wchodzić:</strong>
      </p>
      <ul className={listClass}>
        <li>Polikaprolakton (PCL) – stymuluje produkcję kolagenu,</li>
        <li>Kwas polimlekowy (PLA) – działa biostymulująco, poprawiając jędrność skóry,</li>
        <li>
          Nici mogą być wzbogacone o hialuronian, co dodatkowo nawilża skórę.
        </li>
      </ul>
      <p>
        Ich unikalna budowa (np. specjalne wypustki lub haczyki) pozwala na skuteczne
        unoszenie tkanek.
      </p>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Kluczowym etapem na początku jest mapowanie twarzy – oznaczenie miejsc wkłucia
        i przebiegu nici. To krok, który pozwala na dokładne zaplanowanie liftingu i
        zapewnia symetrię oraz naturalny efekt końcowy. Po oczyszczeniu skóry podawane
        jest znieczulenie miejscowe, np. na bazie kremu z lidokainą. Następnie lekarz
        wprowadza nici pod skórę za pomocą kaniuli lub igieł, kierując je zgodnie z
        wcześniej oznaczonymi liniami. Struktura nici, wyposażona w haczyki lub
        wypustki, stabilnie podtrzymuje tkanki i pozwala na ich uniesienie. Po
        umieszczeniu nici lekarz napina je, uzyskując natychmiastowy efekt liftingu.
        Zabieg trwa zazwyczaj 30–60 minut, w zależności od obszaru i liczby nici.
      </p>

      <h2 className={h2Class}>Ile goi się twarz po zabiegu?</h2>
      <p>
        Po zabiegu nici Aptos twarz może być lekko obrzęknięta i zaczerwieniona. W
        miejscach wkłuć mogą wystąpić drobne siniaki. Objawy te zwykle ustępują w
        ciągu 3–7 dni. Powrót do pełnej aktywności jest możliwy praktycznie od razu,
        jednak zaleca się unikanie intensywnego wysiłku, masaży i ekspozycji na słońce
        przez około 2 tygodnie.
      </p>

      <h2 className={h2Class}>
        Efekty zabiegu – lifting, odmładzanie, nawilżenie; jak długo się utrzymuje?
      </h2>
      <p>
        <strong className="font-medium text-zinc-800">Efekty nici Aptos obejmują:</strong>
      </p>
      <ul className={listClass}>
        <li>natychmiastowy lifting i poprawę konturu twarzy,</li>
        <li>zwiększoną jędrność i elastyczność skóry,</li>
        <li>redukcję zmarszczek i opadających tkanek.</li>
      </ul>
      <p>
        Efekty są widoczne od razu po zabiegu, a pełny rezultat rozwija się w ciągu
        kilku tygodni.
      </p>
      <p>
        Utrzymują się od 1,5 do 2 lat, w zależności od rodzaju nici, kondycji skóry i
        stylu życia pacjenta.
      </p>

      <h2 className={h2Class}>Czy zabieg jest bezpieczny? Czy zabieg jest bolesny?</h2>
      <p>
        Zabieg nici Aptos jest bezpieczny, jeśli wykonuje go doświadczony lekarz.
        Materiały są biokompatybilne i certyfikowane medycznie. Dzięki znieczuleniu
        miejscowemu pacjent odczuwa minimalny dyskomfort. Po zabiegu można odczuwać
        lekkie napięcie skóry, które ustępuje w ciągu kilku dni.
      </p>

      <h2 className={h2Class}>Kto wykonuje zabieg?</h2>
      <p>
        Zabieg nici Aptos powinien być wykonywany wyłącznie przez doświadczonego
        lekarza medycyny estetycznej. Precyzyjne wprowadzenie nici wymaga zaawansowanej
        wiedzy anatomicznej i umiejętności praktycznych. W naszej klinice znajdziesz
        właśnie takich specjalistów. Umów się na konsultację.
      </p>
    </div>
  );
}
