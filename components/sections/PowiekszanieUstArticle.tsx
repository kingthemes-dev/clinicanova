import Link from "next/link";

import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

const linkSubtle =
  "font-medium text-zinc-800 underline decoration-zinc-300/80 underline-offset-2 transition hover:text-zinc-950 hover:decoration-zinc-500";

export function PowiekszanieUstArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Powiększanie ust</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Modelowanie ust kwasem hialuronowym to jeden z najczęściej wybieranych
        zabiegów w ClinicaNova. Pozwala subtelnie podkreślić kształt warg, uzupełnić
        objętość lub skorygować asymetrię — przy zachowaniu naturalnego wyglądu.
      </p>

      <h2 className={h2Class}>Dla kogo?</h2>
      <p>Zabieg jest odpowiedni m.in. dla osób, które:</p>
      <ul className={listClass}>
        <li>chcą delikatnie zwiększyć objętość ust,</li>
        <li>pragną poprawić kontur lub symetrię,</li>
        <li>zauważają utratę pełni ust z wiekiem,</li>
        <li>szukają nawilżenia i „świeżego” wyglądu warg bez przerysowania.</li>
      </ul>

      <h2 className={h2Class}>Jak przebiega zabieg?</h2>
      <p>
        Po konsultacji i ustaleniu oczekiwań lekarz dobiera preparat (głównie kwas
        hialuronowy usieciowany) oraz technikę podania. Skóra jest oczyszczana, często
        stosowane jest znieczulenie miejscowe. Preparat podawany jest precyzyjnie —
        igłą lub kaniulą — zgodnie z planem objętości i kształtu. Całość trwa zwykle
        20–40 minut.
      </p>

      <h2 className={h2Class}>Po zabiegu</h2>
      <p>
        Możliwy jest krótkotrwały obrzęk, zaczerwienienie lub drobne siniaki w miejscach
        wkłuć — ustępują zazwyczaj w kilka dni. Zalecamy unikanie gorących kąpieli,
        sauny i intensywnego wysiłku przez kilka dni oraz stosowanie się do indywidualnych
        zaleceń lekarza.
      </p>

      <h2 className={h2Class}>Trwałość i bezpieczeństwo</h2>
      <p>
        Efekt utrzymuje się zwykle wiele miesięcy (indywidualnie, w zależności od
        preparatu i metabolizmu). W razie potrzeby korekty lub rozpuszczenia preparatu
        możliwe jest zastosowanie hialuronidazy po konsultacji medycznej.
      </p>
      <p>
        Więcej o właściwościach kwasu hialuronowego:{" "}
        <Link href="/medycyna-estetyczna/kwas-hialuronowy" className={linkSubtle}>
          Kwas hialuronowy
        </Link>
        .
      </p>
    </div>
  );
}
