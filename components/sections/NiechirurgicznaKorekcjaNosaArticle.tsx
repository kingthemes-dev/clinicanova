import Link from "next/link";

import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

const linkSubtle =
  "font-medium text-zinc-800 underline decoration-zinc-300/80 underline-offset-2 transition hover:text-zinc-950 hover:decoration-zinc-500";

export function NiechirurgicznaKorekcjaNosaArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Niechirurgiczna korekcja nosa</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Korekta nosa kwasem hialuronowym to alternatywa dla operacji plastycznej dla
        wybranych wskazań: pozwala wyrównać garb, podnieść czubek czy poprawić
        proporcje — bez skalpela, w znieczuleniu miejscowym i z krótką rekonwalescencją.
      </p>

      <h2 className={h2Class}>Co można poprawić?</h2>
      <p>W ramach konsultacji lekarz ocenia, czy zabieg jest odpowiedni. Często wykonuje się:</p>
      <ul className={listClass}>
        <li>wyrównanie lub optyczne zmniejszenie garbu nosa,</li>
        <li>podniesienie i modelowanie czubka,</li>
        <li>korektę lekkiej asymetrii,</li>
        <li>poprawę linii profilu przy zachowaniu naturalnej harmonii twarzy.</li>
      </ul>
      <p>
        Zabieg nie zastępuje pełnej rhinoplastyki — przy znacznej dysproporcji chrząstki
        i kości lub problemach oddychowych konieczna może być konsultacja
        chirurgiczna.
      </p>

      <h2 className={h2Class}>Przebieg</h2>
      <p>
        Po oczyszczeniu skóry i znieczuleniu preparat (kwas hialuronowy usieciowany)
        podawany jest precyzyjnie w wybrane punkty. Czas zabiegu to zwykle ok. 20–40
        minut. Efekt widać od razu; obrzęk lub delikatne siniaki mogą ustępować kilka
        dni.
      </p>

      <h2 className={h2Class}>Trwałość i korekty</h2>
      <p>
        Efekt utrzymuje się zwykle miesiącami; dokładny czas zależy od preparatu i
        indywidualnych cech. W razie potrzeby możliwa jest korekta lub rozpuszczenie
        preparatu za pomocą hialuronidazy — wyłącznie pod opieką lekarza.
      </p>

      <h2 className={h2Class}>Powiązane informacje</h2>
      <p>
        Szczegóły dotyczące kwasu hialuronowego:{" "}
        <Link href="/medycyna-estetyczna/kwas-hialuronowy" className={linkSubtle}>
          Kwas hialuronowy
        </Link>
        .
      </p>
    </div>
  );
}
