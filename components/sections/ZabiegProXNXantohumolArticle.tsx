import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function ZabiegProXNXantohumolArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Zabieg PRO XN Xantohumol PRO XN</h2>
      <p>
        Xantohumol PRO XN to nowoczesna terapia kosmetologiczna oparta na wykorzystaniu
        jednego z najsilniejszych flawonoidów – ksantohumolu. Zabieg łączy działanie
        antyoksydacyjne, przeciwzapalne i regenerujące, co czyni go skutecznym rozwiązaniem
        dla osób poszukujących intensywnej ochrony i odnowy skóry. Dzięki dwuetapowemu
        procesowi Xantohumol PRO XN dostarcza skórze niezbędnych składników, które
        poprawiają jej wygląd i funkcjonowanie na poziomie komórkowym.
      </p>

      <h2 className={h2Class}>Xantohumol – najsilniejszy flawonoid, moc antyoksydacji</h2>
      <p>
        Ksantohumol to naturalny flawonoid pochodzący z chmielu, znany ze swoich
        wyjątkowo silnych właściwości antyoksydacyjnych. Jest on kilkukrotnie
        skuteczniejszy w neutralizacji wolnych rodników niż witamina C czy E. W zabiegu
        PRO XN działa jako ochrona skóry przed stresem oksydacyjnym, zapobiega
        przedwczesnemu starzeniu się komórek, wspiera ich regenerację i łagodzi stany
        zapalne.
      </p>

      <h2 className={h2Class}>Dla kogo jest zabieg? Wskazania do zabiegu</h2>
      <p>Zabieg Xantohumol PRO XN jest polecany dla osób:</p>
      <ul className={listClass}>
        <li>
          z oznakami starzenia, takimi jak zmarszczki, utrata elastyczności i jędrności,
        </li>
        <li>z poszarzałą, zmęczoną skórą narażoną na działanie zanieczyszczeń,</li>
        <li>z problemami skórnymi wywołanymi stresem oksydacyjnym,</li>
        <li>z nierównomiernym kolorytem i przebarwieniami,</li>
        <li>po nadmiernej ekspozycji na słońce, jako regeneracja skóry,</li>
        <li>z wrażliwą i podrażnioną cerą wymagającą wyciszenia i ochrony.</li>
      </ul>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>Zabieg składa się z dwóch etapów:</p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Oczyszczenie i przygotowanie skóry</strong> – skóra
          jest dokładnie oczyszczana i przygotowywana do intensywnego działania substancji
          aktywnych.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Aplikacja ksantohumolu i substancji aktywnych</strong> –{" "}
          specjalistyczne preparaty zawierające ksantohumol oraz dodatkowe składniki
          odżywcze są aplikowane na skórę, aby dotrzeć do jej głębszych warstw. Zabieg
          kończy się nałożeniem warstwy ochronnej, która wspiera regenerację i zwiększa
          skuteczność terapii.
        </li>
      </ul>

      <h2 className={h2Class}>Efekty zabiegu</h2>
      <p>Xantohumol PRO XN przynosi szerokie korzyści dla skóry, w tym:</p>
      <ul className={listClass}>
        <li>poprawę jędrności i elastyczności skóry,</li>
        <li>redukcję zmarszczek i oznak starzenia,</li>
        <li>wyrównanie kolorytu i redukcję przebarwień,</li>
        <li>intensywne nawilżenie i regenerację,</li>
        <li>ochronę przed stresem oksydacyjnym i czynnikami zewnętrznymi,</li>
        <li>wyciszenie podrażnień i stanów zapalnych.</li>
      </ul>
      <p>
        Pierwsze efekty są widoczne od razu, jednak pełny rezultat rozwija się w ciągu
        kilku dni po zabiegu. Dla uzyskania trwałych efektów zaleca się wykonanie serii.
        Zabiegi przypominające można wykonywać co 2–3 miesiące, aby podtrzymać efekty i
        wspierać zdrowie skóry.
      </p>
    </div>
  );
}
