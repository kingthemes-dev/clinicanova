import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

const PREPARATY: { name: string; description: string }[] = [
  {
    name: "Profhilo",
    description:
      "bazuje na wysokim stężeniu kwasu hialuronowego, zapewniając intensywne nawilżenie i poprawę gęstości skóry.",
  },
  {
    name: "Nucleofill",
    description:
      "preparat zawierający polinukleotydy, które działają regenerująco i przeciwzapalnie.",
  },
  {
    name: "Ejal 40",
    description: "idealny do redukcji wiotkości i poprawy napięcia skóry.",
  },
  {
    name: "Sculptra",
    description: "kwas polimlekowy stymulujący długotrwałą produkcję kolagenu.",
  },
  {
    name: "Linerase",
    description:
      "stymulator z kolagenem, dedykowany regeneracji skóry i poprawie jej jakości.",
  },
];

export function StymulatoryTkankoweArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Stymulatory tkankowe</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Stymulatory tkankowe stosowane są w celu odbudowy i regeneracji skóry.
        Wprowadzane są w głębsze warstwy skóry za pomocą mikroiniekcji, gdzie
        aktywują procesy biologiczne odpowiedzialne za produkcję kolagenu i
        elastyny, poprawiając strukturę i jakość skóry. W przeciwieństwie do
        wypełniaczy, ich głównym celem jest poprawa kondycji skóry, a nie jej
        objętości.
      </p>

      <h2 className={h2Class}>Dla kogo są stymulatory tkankowe?</h2>
      <p>Stymulatory tkankowe są odpowiednie dla osób, które chcą:</p>
      <ul className={listClass}>
        <li>poprawić jędrność i elastyczność skóry,</li>
        <li>zredukować drobne zmarszczki,</li>
        <li>
          poprawić gęstość skóry, zwłaszcza w obszarach, które utraciły napięcie,
          takich jak twarz, szyja, dekolt czy dłonie,
        </li>
        <li>
          zregenerować skórę zmęczoną, odwodnioną lub narażoną na działanie
          czynników zewnętrznych, takich jak promieniowanie UV,
        </li>
        <li>
          zapobiegać starzeniu się skóry w sposób subtelny i naturalny.
        </li>
      </ul>

      <h2 className={h2Class}>Najczęściej wykorzystywane preparaty</h2>
      <p>
        W ClinicaNova wykorzystujemy najwyższej jakości stymulatory tkankowe,
        które są dostosowane do różnych potrzeb pacjentów. Wśród najczęściej
        stosowanych preparatów znajdują się:
      </p>
      <ul className={`${listClass} space-y-3`}>
        {PREPARATY.map((item) => (
          <li key={item.name}>
            <strong className="font-medium text-zinc-800">{item.name}</strong>
            {" – "}
            {item.description}
          </li>
        ))}
      </ul>

      <h2 className={h2Class}>
        Jak szybko widać efekty, optymalny czas do uzyskania efektów?
      </h2>
      <p>
        Pierwsze efekty stymulatorów tkankowych, takie jak lepsze napięcie i
        nawilżenie skóry, mogą być widoczne już po 7–14 dniach od zabiegu.
        Optymalny efekt regeneracji i poprawy struktury skóry rozwija się
        stopniowo, zwykle w ciągu kilku tygodni. W przypadku preparatów
        biostymulujących, takich jak kwas polimlekowy, pełen efekt może być
        widoczny po 2–3 miesiącach i utrzymywać się przez ponad rok.
      </p>

      <h2 className={h2Class}>Jak często zaleca się powtarzać zabieg?</h2>
      <p>
        W zależności od rodzaju stymulatora oraz indywidualnych potrzeb skóry,
        zaleca się wykonanie serii 2–4 zabiegów w odstępach 3–4 tygodni. Aby
        podtrzymać efekty, zabiegi przypominające można wykonywać co 6–12
        miesięcy.
      </p>

      <h2 className={h2Class}>Jak wygląda skóra po zabiegu?</h2>
      <p>
        Bezpośrednio po zabiegu skóra może być lekko zaczerwieniona, a w miejscach
        wkłuć mogą wystąpić drobne grudki lub delikatne obrzęki. Objawy te
        znikają zwykle w ciągu kilku godzin do maksymalnie 2–3 dni. Skóra
        stopniowo staje się bardziej napięta, wygładzona i nawilżona.
      </p>

      <h2 className={h2Class}>Czy efekty uzyskane są naturalne?</h2>
      <p>
        Tak, efekty stymulatorów tkankowych są wyjątkowo naturalne. Preparaty
        działają w harmonii z naturalnymi procesami regeneracyjnymi organizmu,
        poprawiając jakość skóry bez zmiany jej rysów. Dzięki temu skóra wygląda
        młodziej i zdrowiej, zachowując swój naturalny charakter.
      </p>

      <h2 className={h2Class}>Jakich efektów mogę się spodziewać?</h2>
      <p>
        <strong className="font-medium text-zinc-800">
          Stymulatory tkankowe pozwalają na:
        </strong>
      </p>
      <ul className={listClass}>
        <li>wygładzenie drobnych zmarszczek,</li>
        <li>poprawę jędrności i napięcia skóry,</li>
        <li>nawilżenie głębszych warstw skóry,</li>
        <li>redukcję wiotkości i poprawę konturów twarzy,</li>
        <li>ogólną regenerację i odmłodzenie skóry.</li>
      </ul>
    </div>
  );
}
