import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function EpilacjaLaserowaPrimelaseArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Epilacja laserowa Primelase</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Laser Primelase wykorzystuje zaawansowaną technologię diodową o wysokiej mocy,
        działającą na melaninę w mieszkach włosowych. Energia lasera jest precyzyjnie
        kierowana na cebulkę włosa, co powoduje jej termiczne zniszczenie, bez uszkadzania
        otaczającej skóry. Procedura jest skuteczna, szybka i odpowiednia dla różnych typów
        skóry i włosów.
      </p>

      <h2 className={h2Class}>Na jakie partie twarzy?</h2>
      <p>
        <strong className="font-medium text-zinc-800">
          Epilacja laserowa Primelase może być stosowana na delikatne i wrażliwe obszary
          twarzy, w tym:
        </strong>
      </p>
      <ul className={listClass}>
        <li>górna warga,</li>
        <li>broda,</li>
        <li>policzki,</li>
        <li>linia żuchwy,</li>
        <li>uszy,</li>
        <li>okolice między brwiami.</li>
      </ul>

      <h2 className={h2Class}>Na jakie partie ciała?</h2>
      <p>
        <strong className="font-medium text-zinc-800">
          Laser Primelase jest skuteczny na większych i mniejszych obszarach ciała, takich
          jak:
        </strong>
      </p>
      <ul className={listClass}>
        <li>pachy,</li>
        <li>ramiona i przedramiona,</li>
        <li>klatka piersiowa,</li>
        <li>plecy,</li>
        <li>brzuch,</li>
        <li>bikini (w tym bikini głębokie),</li>
        <li>uda,</li>
        <li>łydki,</li>
        <li>dłonie i stopy.</li>
      </ul>

      <h2 className={h2Class}>Zabieg dla kobiet i mężczyzn</h2>
      <p>
        Primelase jest technologią uniwersalną, odpowiednią zarówno dla kobiet, jak i
        mężczyzn. Umożliwia efektywne usuwanie owłosienia na różnych obszarach ciała,
        uwzględniając indywidualne potrzeby obu płci. Dzięki regulacji parametrów zabiegu
        można dostosować go do różnorodnych typów skóry i grubości włosów.
      </p>

      <h2 className={h2Class}>Kiedy najlepiej wykonać zabieg?</h2>
      <p>
        Najlepszym okresem na rozpoczęcie serii epilacji laserowej jest sezon
        jesienno-zimowy, kiedy ekspozycja skóry na słońce jest ograniczona. Niższe
        narażenie na promieniowanie UV minimalizuje ryzyko przebarwień oraz wspiera
        regenerację skóry po zabiegu.
      </p>

      <h2 className={h2Class}>Ile należy wykonać zabiegów?</h2>
      <p>
        Aby uzyskać trwałe efekty, zaleca się wykonanie serii 4–6 zabiegów w odstępach co
        4–8 tygodni. Liczba sesji zależy od obszaru zabiegowego, koloru i gęstości włosów, a
        także od indywidualnych cech pacjenta, takich jak cykl wzrostu włosów.
      </p>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Skóra w obszarze zabiegowym jest oczyszczana i, jeśli wymaga tego pacjent,
        nakładane jest chłodzenie lub specjalny żel ochronny. Podczas zabiegu laser precyzyjnie
        emituje impulsy światła na mieszki włosowe. Wbudowany system chłodzenia w urządzeniu
        Primelase zapewnia komfort i minimalizuje odczucia ciepła. Zabieg trwa od kilku minut
        do kilkudziesięciu, w zależności od obszaru.
      </p>

      <h2 className={h2Class}>Zalecenia po zabiegu</h2>
      <p>
        Po zabiegu należy unikać ekspozycji na słońce przez minimum 2 tygodnie i stosować
        kremy z wysokim filtrem UV (SPF 50+). Zaleca się unikanie sauny, gorących kąpieli i
        intensywnego wysiłku fizycznego przez 24–48 godzin. Skórę należy pielęgnować
        delikatnymi preparatami nawilżającymi, aby wspierać regenerację.
      </p>
    </div>
  );
}
