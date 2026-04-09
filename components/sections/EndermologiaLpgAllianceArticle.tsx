import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function EndermologiaLpgAllianceArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>ENDERMOLOGIA LPG ALLIANCE</h2>
      <p>
        Endermologia LPG Alliance to nowoczesna, mechaniczna metoda stymulacji skóry i tkanki
        podskórnej, oparta na opatentowanej technologii masażu podciśnieniowego. Procedura
        łączy działanie rolki i klapki motorycznej z podciśnieniem, co pozwala na intensywną
        stymulację fibroblastów oraz poprawę metabolizmu komórkowego.
      </p>

      <h2 className={h2Class}>Wskazania do endermologii</h2>
      <p>Endermologia LPG Alliance jest zalecana w przypadku:</p>
      <ul className={listClass}>
        <li>redukcji cellulitu,</li>
        <li>modelowania sylwetki i redukcji tkanki tłuszczowej,</li>
        <li>poprawy jędrności i elastyczności skóry,</li>
        <li>stymulacji drenażu limfatycznego,</li>
        <li>regeneracji skóry po ciąży lub intensywnej utracie wagi,</li>
        <li>likwidacji obrzęków i uczucia ciężkości nóg,</li>
        <li>redukcji drobnych zmarszczek i poprawy owalu twarzy.</li>
      </ul>

      <h2 className={h2Class}>Na jakie partie twarzy – Endermolift</h2>
      <p>
        Endermolift to wersja endermologii dedykowana twarzy, szyi i dekoltowi. Zabieg działa
        delikatnie, stymulując skórę i poprawiając mikrokrążenie w takich obszarach jak:
      </p>
      <ul className={listClass}>
        <li>policzki,</li>
        <li>linia żuchwy,</li>
        <li>okolice oczu,</li>
        <li>czoło,</li>
        <li>szyja i dekolt.</li>
      </ul>
      <p>
        Celem jest redukcja drobnych zmarszczek, poprawa jędrności i napięcia skóry oraz
        odświeżenie jej kolorytu.
      </p>

      <h2 className={h2Class}>Na jakie partie ciała – Lipomassage</h2>
      <p>
        Lipomassage to zabieg dedykowany modelowaniu sylwetki i redukcji tkanki tłuszczowej w
        obszarach takich jak:
      </p>
      <ul className={listClass}>
        <li>brzuch,</li>
        <li>uda,</li>
        <li>pośladki,</li>
        <li>biodra,</li>
        <li>ramiona,</li>
        <li>plecy.</li>
      </ul>
      <p>
        Zabieg jest skuteczny w redukcji cellulitu, poprawie elastyczności skóry oraz
        wymodelowaniu konturów ciała.
      </p>

      <h2 className={h2Class}>Przebieg zabiegu, czas trwania zabiegu</h2>
      <p>
        Na ciało zakłada się specjalny kombinezon, który ułatwia przesuwanie głowicy
        urządzenia po skórze i zapewnia komfort zabiegu. Głowica urządzenia wykonuje
        mechaniczny masaż z zastosowaniem podciśnienia, które intensywnie stymuluje skórę i
        tkankę podskórną. Ruchy głowicy są precyzyjne i dostosowane do danego obszaru ciała
        lub twarzy. Zabieg trwa od 30 do 60 minut w zależności od obszaru zabiegowego.
      </p>

      <h2 className={h2Class}>Ile należy wykonać zabiegów?</h2>
      <p>
        Aby uzyskać optymalne efekty, zaleca się wykonanie serii ok. 10 zabiegów w odstępach
        kilkudniowych zaleconych przez specjalistę. Efekty utrzymujące się długoterminowo
        można podtrzymać za pomocą sesji przypominających co kilka miesięcy.
      </p>

      <h2 className={h2Class}>Zalecenia po zabiegu</h2>
      <p>Po zabiegu zaleca się:</p>
      <ul className={listClass}>
        <li>
          picie dużej ilości wody (co najmniej 1,5–2 litrów dziennie) w celu wsparcia
          drenażu limfatycznego,
        </li>
        <li>unikanie intensywnego wysiłku fizycznego przez 24 godziny,</li>
        <li>stosowanie zdrowej diety, aby wspomóc proces modelowania sylwetki,</li>
        <li>regularne sesje przypominające, aby utrzymać uzyskane efekty.</li>
      </ul>
    </div>
  );
}
