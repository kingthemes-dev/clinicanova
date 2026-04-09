import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function PielegnacjaOkolicyOkaArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Pielęgnacja okolicy oka – Global Eyecon i Beautifeye Fillmed</h2>
      <p>
        Delikatna skóra wokół oczu wymaga szczególnej uwagi i kompleksowego podejścia.
        Zabiegi Global Eyecon oraz Beautifeye Fillmed to zaawansowane terapie stworzone z
        myślą o redukcji oznak zmęczenia, opuchlizny, cieni oraz drobnych zmarszczek wokół
        oczu.
      </p>

      <h2 className={h2Class}>Rodzaj substancji czynnych wykorzystywanych w terapii</h2>
      <p>
        Zabiegi wykorzystują starannie dobrane substancje aktywne, które działają
        regenerująco, rozjaśniająco i przeciwstarzeniowo:
      </p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Kwas hialuronowy</strong> – intensywnie
          nawilża i poprawia elastyczność skóry.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Peptydy biomimetyczne</strong> – stymulują
          odbudowę kolagenu i elastyny, wzmacniając skórę.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Witaminy (C i E)</strong> – działają
          antyoksydacyjnie, chroniąc przed stresem oksydacyjnym i rozjaśniając cienie.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Czynniki wzrostu</strong> – wspierają
          regenerację skóry na poziomie komórkowym.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Arnika i ruszczyk</strong> – zmniejszają
          obrzęki i cienie pod oczami, poprawiają mikrokrążenie.
        </li>
      </ul>

      <h2 className={h2Class}>Wskazania do wykonania zabiegu</h2>
      <p>Zabiegi Global Eyecon i Beautifeye Fillmed są polecane osobom, które chcą zredukować:</p>
      <ul className={listClass}>
        <li>cienie i worki pod oczami,</li>
        <li>drobne zmarszczki mimiczne,</li>
        <li>utratę elastyczności i jędrności skóry wokół oczu,</li>
        <li>oznaki zmęczenia i opuchliznę,</li>
        <li>nierówny koloryt skóry w okolicy oka.</li>
      </ul>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>Stosowane są dwie główne techniki w zależności od wybranej terapii:</p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Global Eyecon</strong> – peeling chemiczny
          dedykowany skórze okolic oczu, który złuszcza, rozjaśnia i przygotowuje skórę na
          dalsze etapy. Po peelingu stosowana jest mezoterapia mikroigłowa, która
          wprowadza substancje aktywne w głąb skóry.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Beautifeye Fillmed</strong> – precyzyjna
          aplikacja koktajli odżywczych przy użyciu mezoterapii igłowej lub kaniuli,
          pozwalająca na regenerację głębokich warstw skóry.
        </li>
      </ul>

      <h2 className={h2Class}>Jak szybko widać efekty? Optymalny czas do uzyskania efektów</h2>
      <p>
        Pierwsze efekty, takie jak rozjaśnienie i odświeżenie okolicy oczu, są widoczne już
        po pierwszym zabiegu. Optymalne rezultaty, w tym poprawa jędrności i redukcja
        zmarszczek, rozwijają się po serii zabiegów. Seria minimum 3 zabiegów to standard
        dla uzyskania najlepszych rezultatów. Dla podtrzymania efektów zaleca się
        powtarzanie zabiegów przypominających co 4–6 miesięcy.
      </p>

      <h2 className={h2Class}>Jak wygląda skóra po zabiegu?</h2>
      <p>
        Bezpośrednio po zabiegu skóra może być lekko zaczerwieniona, a w miejscach wkłuć
        mogą wystąpić delikatne ślady, które ustępują w ciągu 1–2 dni.
      </p>

      <h2 className={h2Class}>Jakich efektów mogę się spodziewać?</h2>
      <p>Efekty zabiegów obejmują:</p>
      <ul className={listClass}>
        <li>widoczne rozjaśnienie cieni i poprawę kolorytu,</li>
        <li>redukcję drobnych zmarszczek i wygładzenie skóry,</li>
        <li>zmniejszenie opuchlizny i obrzęków,</li>
        <li>poprawę jędrności i napięcia skóry wokół oczu,</li>
        <li>młodszy, bardziej wypoczęty wygląd.</li>
      </ul>
    </div>
  );
}
