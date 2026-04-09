import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function KonsultacjaKosmetologicznaArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>
        Pierwsza konsultacja przed zabiegiem kosmetologicznym – krok, którego nie można
        pominąć
      </h2>
      <p>
        Każda skuteczna terapia kosmetologiczna zaczyna się od dokładnego zrozumienia
        potrzeb skóry. Pierwsza konsultacja to kluczowy etap, który pozwala na precyzyjne
        zaplanowanie działań, dostosowanych do indywidualnych wymagań pacjenta. W
        ClinicaNova wiemy, że sukces zabiegów zależy od odpowiedniej diagnozy i
        personalizacji terapii.
      </p>

      <h2 className={h2Class}>Jak przebiega konsultacja?</h2>
      <p>
        Podczas konsultacji kosmetologicznej skupiamy się na analizie stanu skóry oraz
        omówieniu oczekiwań i potrzeb pacjenta. Proces ten obejmuje:
      </p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Szczegółowy wywiad kosmetologiczny</strong>{" "}
          – pytania dotyczące pielęgnacji domowej, stylu życia, historii zabiegów i
          ewentualnych problemów skórnych.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Dokładną analizę skóry</strong> – z
          wykorzystaniem nowoczesnych urządzeń diagnostycznych, które pozwalają na
          obiektywną ocenę stanu skóry.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Omówienie wyników i zaleceń</strong> –{" "}
          kosmetolog wyjaśnia, jakie są główne potrzeby skóry i jak można je skutecznie
          zaadresować.
        </li>
      </ul>
      <p>
        Konsultacja trwa zazwyczaj 30–45 minut i pozwala na opracowanie kompleksowego
        planu działania.
      </p>

      <h2 className={h2Class}>Poznaj precyzyjnie swoją skórę – analiza skóry</h2>
      <p>
        Dokładna diagnostyka skóry to fundament każdej terapii. W ramach konsultacji
        wykonujemy pomiary kluczowych parametrów:
      </p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Poziom nawilżenia</strong> – aby
          określić, czy skóra wymaga intensywnej hydratacji.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Produkcja sebum</strong> – diagnostyka
          typu skóry (sucha, tłusta, mieszana).
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Napięcie i jędrność</strong> – ocena
          wiotkości oraz kondycji włókien kolagenowych i elastynowych.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Wiek skóry</strong> – porównanie wieku
          biologicznego skóry z wiekiem chronologicznym.
        </li>
      </ul>
      <p>
        Dzięki tym informacjom możemy trafnie dobrać zabiegi, które skutecznie
        odpowiedzą na potrzeby skóry.
      </p>

      <h2 className={h2Class}>Ustalenie celów terapeutycznych</h2>
      <p>Podczas konsultacji wspólnie z pacjentem określamy cele terapii. Mogą one obejmować:</p>
      <ul className={listClass}>
        <li>poprawę nawilżenia i elastyczności skóry,</li>
        <li>redukcję przebarwień i wyrównanie kolorytu,</li>
        <li>zmniejszenie widoczności zmarszczek,</li>
        <li>oczyszczenie skóry i redukcję niedoskonałości,</li>
        <li>przeciwdziałanie oznakom starzenia się skóry.</li>
      </ul>
      <p>Cele są zawsze dostosowane do indywidualnych potrzeb i możliwości pacjenta.</p>

      <h2 className={h2Class}>Dobór technologii, preparatów i cyklu wizyt</h2>
      <p>
        Na podstawie analizy skóry i ustalonych celów terapeutycznych kosmetolog
        przygotowuje spersonalizowany plan zabiegowy. Obejmuje on:
      </p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Dobór technologii</strong> – w
          zależności od potrzeb skóry, mogą to być zabiegi z wykorzystaniem urządzeń
          hi-tech, takich jak lasery, peelingi chemiczne, radiofrekwencja czy mezoterapia
          mikroigłowa.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Preparaty zabiegowe</strong> – wybieramy
          najwyższej jakości produkty kosmetologiczne, które skutecznie wspierają
          regenerację skóry.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Harmonogram wizyt</strong> – ustalamy
          optymalny cykl zabiegów, aby osiągnąć najlepsze rezultaty.
        </li>
      </ul>
      <p>Każdy plan jest elastyczny i dostosowany do indywidualnego rytmu życia pacjenta.</p>
    </div>
  );
}
