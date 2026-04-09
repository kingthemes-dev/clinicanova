import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function TechnologiaGeneoPlusArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Technologia GENEO+</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Geneo+ to nowoczesne urządzenie, które łączy trzy zaawansowane technologie:
        Oxygeneo, Tripollar RF oraz Ultrasound. Dzięki temu pozwala na kompleksowe
        działanie: oczyszczenie, dotlenienie, regenerację i lifting skóry. Zabieg może
        być wykonywany jako terapia łączona lub z zastosowaniem wybranej technologii, w
        zależności od indywidualnych potrzeb pacjenta.
      </p>

      <h2 className={h2Class}>Zasady działania technologii Geneo+</h2>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Oxygeneo</strong> – unikalna
          technologia inspirowana naturalnym procesem dotlenienia skóry, który zachodzi
          w wyniku reakcji chemicznych między kapsułką aktywną a żelem zabiegowym. Skóra
          zostaje złuszczona, oczyszczona i intensywnie dotleniona od wewnątrz, co
          wspiera jej regenerację.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Tripollar RF</strong> –
          zaawansowana radiofrekwencja, która działa w głębokich warstwach skóry,
          stymulując produkcję kolagenu i elastyny. Efekt to ujędrnienie i wygładzenie
          skóry.
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Ultrasound</strong> –
          ultradźwięki pomagają wprowadzić składniki aktywne w głąb skóry, zwiększając
          ich wchłanialność i skuteczność.
        </li>
      </ul>
      <p>
        Technologie te mogą być stosowane osobno lub łączone w jednym zabiegu dla
        uzyskania kompleksowego efektu.
      </p>

      <h2 className={h2Class}>Na jakie partie twarzy stosujemy Geneo+?</h2>
      <p>
        Geneo+ jest dedykowane dla skóry twarzy, szyi i dekoltu, gdzie wykazuje najlepsze
        efekty regeneracyjne. Doskonale sprawdza się w obszarach wymagających
        ujędrnienia, dotlenienia i poprawy struktury skóry.
      </p>

      <h2 className={h2Class}>Wskazania do wykonania zabiegu</h2>
      <p>Geneo+ jest zalecane w przypadku:</p>
      <ul className={listClass}>
        <li>poszarzałej, zmęczonej skóry,</li>
        <li>utraty jędrności i elastyczności,</li>
        <li>pierwszych oznak starzenia, takich jak drobne zmarszczki,</li>
        <li>nierównomiernego kolorytu i przebarwień,</li>
        <li>rozszerzonych porów i nadmiernego wydzielania sebum,</li>
        <li>skóry wymagającej nawilżenia i odświeżenia.</li>
      </ul>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Zabieg Geneo+ rozpoczyna się od oczyszczenia skóry i aplikacji odpowiedniego
        żelu aktywnego. W przypadku technologii Oxygeneo na skórze używana jest
        kapsułka, która złuszcza martwe komórki naskórka, a jednocześnie stymuluje
        proces dotlenienia skóry. Następnie, jeśli zastosowana jest radiofrekwencja
        Tripollar RF, skóra poddawana jest działaniu fal radiowych, które podgrzewają
        tkanki i stymulują produkcję kolagenu. Na koniec wykorzystuje się ultradźwięki,
        aby wprowadzić substancje odżywcze w głębsze warstwy skóry. Cały zabieg trwa
        około 60 minut i jest bezbolesny.
      </p>

      <h2 className={h2Class}>Jak szybko widać efekty? Optymalny czas do uzyskania efektów</h2>
      <p>
        Pierwsze efekty zabiegu, takie jak rozświetlenie i wygładzenie skóry, są widoczne
        natychmiast po zakończeniu procedury. Długotrwałe rezultaty, takie jak poprawa
        jędrności i gęstości skóry, rozwijają się w ciągu kilku tygodni, zwłaszcza po
        serii zabiegów. Geneo+ może być wykonywane jednorazowo jako zabieg bankietowy lub
        w serii ok. 4 zabiegów co 3 tygodnie. Zabiegi przypominające można wykonywać co
        3 miesiące.
      </p>

      <h2 className={h2Class}>Jakich efektów mogę się spodziewać?</h2>
      <p>Geneo+ pozwala na uzyskanie takich efektów jak:</p>
      <ul className={listClass}>
        <li>promienna i jednolita cera,</li>
        <li>zmniejszenie widoczności porów,</li>
        <li>poprawa napięcia i jędrności skóry,</li>
        <li>redukcja drobnych zmarszczek,</li>
        <li>odżywienie i nawilżenie głębszych warstw skóry.</li>
      </ul>
    </div>
  );
}
