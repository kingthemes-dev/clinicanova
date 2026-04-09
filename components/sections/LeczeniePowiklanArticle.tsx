import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function LeczeniePowiklanArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Leczenie powikłań po zabiegach estetycznych</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        W ClinicaNova w Gdańsku pomagamy pacjentom, którzy po zabiegach medycyny estetycznej
        lub kosmetologicznych doświadczają objawów wymagających konsultacji specjalistycznej —
        od przedłużającego się obrzęku czy zaczerwienienia, po nietypowe reakcje skórne czy
        obawy dotyczące efektu zabiegu.
      </p>
      <p>
        Każdy przypadek traktujemy indywidualnie: zbieramy wywiad, oceniamy stan skóry i —
        w razie potrzeby — proponujemy plan postępowania lub skierowanie do odpowiedniego
        lekarza. Celem jest bezpieczne wsparcie regeneracji i spokojne wyjaśnienie kolejnych
        kroków.
      </p>

      <h2 className={h2Class}>Umów wizytę</h2>
      <p>
        Szczegółowy zakres i metody leczenia ustalamy po konsultacji. Zapraszamy do kontaktu —
        chętnie odpowiemy na pytania i wskażemy najbliższy wolny termin.
      </p>
      <ul className={listClass}>
        <li>konsultacja i ocena sytuacji klinicznej,</li>
        <li>indywidualne zalecenia pielęgnacyjne i obserwacja,</li>
        <li>współpraca z lekarzem medycyny estetycznej w ramach kliniki.</li>
      </ul>
    </div>
  );
}
