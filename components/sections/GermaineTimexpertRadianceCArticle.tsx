import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function GermaineTimexpertRadianceCArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Germaine de Capuccini Timexpert Radiance C</h2>
      <p>
        Zabieg Germaine de Capuccini Timexpert Radiance C to terapia oparta na witaminie C
        o wysokim stężeniu, połączonej z zaawansowanymi składnikami aktywnymi, które
        regenerują, rozświetlają i odmładzają skórę. Dzięki nowoczesnej technologii i
        unikalnym formułom zabieg jest idealnym rozwiązaniem dla skóry zmęczonej,
        poszarzałej i pozbawionej energii.
      </p>

      <h2 className={h2Class}>Technologia działania</h2>
      <p>
        Podstawą zabiegu jest stabilizowana witamina C, która skutecznie niweluje oznaki
        zmęczenia, wyrównuje koloryt i chroni skórę przed stresem oksydacyjnym.
      </p>
      <p>Zabieg wykorzystuje:</p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Pure C10</strong> – koncentrat witaminy C o
          wysokim stężeniu, który aktywnie działa w głębszych warstwach skóry.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Glikozydy hesperydyny</strong> – poprawiają
          mikrokrążenie i wzmacniają naczynia krwionośne.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Wyciąg z granatu i witamina E</strong> – działają
          przeciwutleniająco i regeneracyjnie, wzmacniając barierę ochronną skóry.
        </li>
      </ul>

      <h2 className={h2Class}>Dla kogo jest zabieg? Wskazania do zabiegu</h2>
      <p>Wskazania obejmują:</p>
      <ul className={listClass}>
        <li>poszarzałą, zmęczoną skórę,</li>
        <li>utratę jędrności i elastyczności,</li>
        <li>nierównomierny koloryt, przebarwienia,</li>
        <li>pierwsze oznaki starzenia, takie jak drobne zmarszczki,</li>
        <li>
          skórę narażoną na stres i działanie czynników zewnętrznych, takich jak smog czy
          promieniowanie UV.
        </li>
      </ul>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Zabieg rozpoczyna się od dokładnego oczyszczenia skóry oraz przygotowania jej na
        działanie składników aktywnych. Następnie aplikowany jest serum Pure C10, które
        dostarcza skórze skoncentrowaną dawkę witaminy C, wspieraną masażem poprawiającym
        mikrokrążenie. Kolejnym krokiem jest nałożenie maski rozświetlającej, bogatej w
        antyoksydanty i składniki nawilżające. Zabieg kończy aplikacja kremu ochronnego,
        który zamyka terapię i wzmacnia efekty. Całość trwa około 60 minut.
      </p>

      <h2 className={h2Class}>Efekty zabiegu</h2>
      <p>Zabieg Timexpert Radiance C zapewnia:</p>
      <ul className={listClass}>
        <li>natychmiastowe rozświetlenie skóry,</li>
        <li>wyrównanie kolorytu i redukcję przebarwień,</li>
        <li>poprawę jędrności i elastyczności,</li>
        <li>wygładzenie drobnych zmarszczek,</li>
        <li>nawilżenie i regenerację skóry.</li>
      </ul>
      <p>
        Efekty widoczne są już po pierwszym zabiegu, a regularna terapia wzmacnia i
        utrwala rezultaty. Zabieg można także wykonywać jednorazowo jako tzw. zabieg
        bankietowy, aby odświeżyć skórę przed ważnym wydarzeniem.
      </p>
    </div>
  );
}
