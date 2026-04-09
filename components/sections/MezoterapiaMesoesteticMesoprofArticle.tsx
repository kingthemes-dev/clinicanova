import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function MezoterapiaMesoesteticMesoprofArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Mezoterapia Mesoestetic / Mesoprof</h2>
      <p>
        Mezoterapia z wykorzystaniem preparatów Mesoestetic i Mesoprof to nowoczesny
        zabieg dostarczający skórze skoncentrowane substancje aktywne, które wspierają jej
        regenerację, nawilżenie i odmłodzenie. Zabieg jest wykonywany za pomocą
        mikroiniekcji, które wprowadzają składniki aktywne bezpośrednio do głębokich
        warstw skóry.
      </p>

      <h2 className={h2Class}>Rodzaj substancji czynnych dostarczanych w głąb skóry</h2>
      <p>
        Preparaty Mesoestetic i Mesoprof zawierają starannie dobrane składniki aktywne,
        które odpowiadają na różnorodne potrzeby skóry. Wśród nich znajdują się:
      </p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Kwas hialuronowy</strong> – intensywnie
          nawilża i poprawia elastyczność skóry,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Witaminy (A, C, E, B5)</strong> – wspierają
          regenerację, redukują przebarwienia i działają antyoksydacyjnie,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Aminokwasy</strong> – stymulują odbudowę
          włókien kolagenowych i elastynowych,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Peptydy biomimetyczne</strong> – wspomagają
          regenerację komórkową i ujędrnianie skóry,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Antyoksydanty</strong> – neutralizują działanie
          wolnych rodników, chroniąc przed starzeniem,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Czynniki wzrostu i nukleotydy</strong> – wspierają
          regenerację skóry na poziomie komórkowym.
        </li>
      </ul>

      <h2 className={h2Class}>Wskazania do wykonania zabiegu</h2>
      <p>Mezoterapia jest polecana w przypadku:</p>
      <ul className={listClass}>
        <li>odwodnionej, zmęczonej skóry,</li>
        <li>utraty elastyczności i jędrności,</li>
        <li>zmarszczek i drobnych linii,</li>
        <li>nierównomiernego kolorytu i przebarwień,</li>
        <li>cery poszarzałej, narażonej na działanie czynników zewnętrznych,</li>
        <li>redukcji blizn potrądzikowych,</li>
        <li>regeneracji skóry po nadmiernej ekspozycji na słońce.</li>
      </ul>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Zabieg rozpoczyna się od oczyszczenia skóry oraz nałożenia znieczulenia miejscowego
        w postaci kremu. Następnie lekarz wykonuje mikroiniekcje, wprowadzając preparat w
        wybrane obszary twarzy, szyi, dekoltu lub dłoni. Cała procedura trwa około 20–40
        minut. Po zabiegu na skórę nakładany jest preparat łagodzący.
      </p>

      <h2 className={h2Class}>Jak szybko widać efekty? Optymalny czas do uzyskania efektów</h2>
      <p>
        Pierwsze efekty, takie jak lepsze nawilżenie i napięcie skóry, są widoczne po
        kilku dniach od zabiegu. Jednak optymalne rezultaty rozwijają się po wykonaniu
        pełnej serii zabiegów. Proces odbudowy skóry trwa kilka tygodni, a efekty stają się
        coraz bardziej widoczne z każdym kolejnym zabiegiem.
      </p>

      <h2 className={h2Class}>Jak często zaleca się powtarzać zabieg?</h2>
      <p>
        Rekomendowana jest seria zabiegów wykonywanych w odstępach ok. 4 tygodni. W celu
        utrzymania efektów zaleca się powtarzanie mezoterapii co ok. 6 miesięcy w ramach
        terapii przypominającej.
      </p>

      <h2 className={h2Class}>Jak wygląda skóra po zabiegu?</h2>
      <p>
        Po zabiegu mogą wystąpić lekkie zaczerwienienie, delikatny obrzęk lub drobne ślady
        po mikroiniekcjach, które zazwyczaj znikają w ciągu 1–2 dni. Skóra staje się
        odświeżona, bardziej napięta i nawilżona, a jej wygląd ulega widocznej poprawie.
      </p>

      <h2 className={h2Class}>Jakich efektów mogę się spodziewać?</h2>
      <p>Efekty Mesoestetic obejmują:</p>
      <ul className={listClass}>
        <li>głębokie nawilżenie i odżywienie skóry,</li>
        <li>poprawę jędrności i elastyczności,</li>
        <li>redukcję drobnych zmarszczek,</li>
        <li>wyrównanie kolorytu i rozjaśnienie cery,</li>
        <li>odnowę i regenerację skóry na poziomie komórkowym.</li>
      </ul>
    </div>
  );
}
