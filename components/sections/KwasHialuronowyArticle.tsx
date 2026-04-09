import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function KwasHialuronowyArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Kwas hialuronowy</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Kwas hialuronowy – wszechstronny preparat i fundament medycyny estetycznej.
      </p>
      <p>
        Kwas hialuronowy to jeden z najczęściej wykorzystywanych preparatów w medycynie
        estetycznej, ceniony za swoje wszechstronne działanie oraz bezpieczeństwo.
        Dzięki swoim właściwościom można nie tylko poprawić nawilżenie skóry, ale
        również korygować kształt twarzy, modelować usta czy redukować oznaki starzenia.
      </p>

      <h2 className={h2Class}>Rola kwasu hialuronowego w organizmie</h2>
      <p>
        Naturalnie występujący w ludzkim ciele kwas hialuronowy jest kluczowym
        składnikiem skóry, odpowiadającym za jej nawilżenie, jędrność i elastyczność.
        Wiąże cząsteczki wody, zapewniając skórze zdrowy wygląd i ochronę przed
        szkodliwym działaniem czynników zewnętrznych. Wraz z wiekiem jego poziom
        maleje, co prowadzi do utraty objętości, jędrności oraz pojawienia się
        zmarszczek. Preparaty na bazie kwasu hialuronowego są biokompatybilne i ulegają
        całkowitemu wchłonięciu, co czyni je bezpiecznym rozwiązaniem dla pacjentów.
        Odpowiednio podane przez doświadczonego lekarza zapewniają naturalne efekty,
        bez ryzyka przerysowanego wyglądu.
      </p>

      <h2 className={h2Class}>
        Kwas hialuronowy usieciowany i nieusieciowany – różnica i zastosowanie
      </h2>
      <p>
        <strong className="font-medium text-zinc-800">Usieciowany kwas hialuronowy</strong> –
        gęstszy i bardziej stabilny, wykorzystywany w zabiegach takich jak wolumetria,
        modelowanie ust czy korekta nosa. Dzięki swojej strukturze zapewnia dłuższe
        utrzymanie efektów.{" "}
        <strong className="font-medium text-zinc-800">Nieusieciowany kwas hialuronowy</strong> –
        rzadszy, stosowany głównie do głębokiego nawilżenia skóry, np. w mezoterapii,
        gdzie kluczowe jest intensywne odżywienie i regeneracja. Dobór odpowiedniego
        rodzaju preparatu zależy od potrzeb pacjenta oraz obszaru poddawanego
        zabiegowi. Skonsultuj to ze specjalistą.
      </p>

      <h2 className={h2Class}>Wolumetria – jakie partie twarzy można korygować?</h2>
      <p>
        Kwas hialuronowy usieciowany stosuje się do poprawy konturów twarzy, odbudowy
        utraconej objętości oraz uniesienia tkanek. Wolumetrię wykonuje się na takich
        obszarach jak:
      </p>
      <ul className={listClass}>
        <li>
          <strong className="font-medium text-zinc-800">Policzki</strong> – przywracanie
          objętości i podkreślanie kości policzkowych,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Owal twarzy</strong> – korekta
          linii żuchwy i „chomików”,
        </li>
        <li>
          <strong className="font-medium text-zinc-800">Broda</strong> – poprawa
          proporcji twarzy i uzupełnienie objętości.
        </li>
      </ul>

      <h2 className={h2Class}>Modelowanie ust</h2>
      <p>Kwas hialuronowy jest idealnym narzędziem do subtelnego modelowania ust. Można nim:</p>
      <ul className={listClass}>
        <li>zwiększyć objętość,</li>
        <li>wyrównać asymetrię,</li>
        <li>poprawić kontur,</li>
        <li>nawilżyć usta i nadać im zdrowy, pełny wygląd.</li>
      </ul>

      <h2 className={h2Class}>Korekta kształtu nosa</h2>
      <p>Niechirurgiczna korekta nosa z użyciem kwasu hialuronowego pozwala na:</p>
      <ul className={listClass}>
        <li>wyrównanie garbka,</li>
        <li>podniesienie czubka nosa,</li>
        <li>poprawę proporcji i symetrii.</li>
      </ul>
      <p>Zabieg jest szybki, mało inwazyjny i daje natychmiastowe efekty.</p>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Po oczyszczeniu skóry i nałożeniu miejscowego znieczulenia, preparat jest
        podawany za pomocą cienkiej igły lub kaniuli w precyzyjnie wybrane obszary.
        Procedura trwa około 20–40 minut i nie wymaga długiej rekonwalescencji. Po
        zabiegu skóra może być lekko zaczerwieniona, obrzęknięta, a w miejscach wkłuć
        mogą wystąpić drobne siniaki. Objawy te ustępują w ciągu kilku dni.
        Bezpośrednio po zabiegu można wrócić do codziennych aktywności, unikając
        głównie przegrzania, intensywnego wysiłku fizycznego czy sauny przez kilka
        dni.
      </p>

      <h2 className={h2Class}>Jak szybko widać efekty oraz ile się utrzymują?</h2>
      <p>
        Efekty zabiegu są widoczne natychmiast po podaniu preparatu – widać efekt
        wypełnienia i napięcia. Pełen rezultat można ocenić po kilku dniach, gdy
        znikną ewentualne obrzęki. Utrzymują się one od 6 do 18 miesięcy, w zależności
        od rodzaju kwasu hialuronowego, obszaru zabiegowego oraz indywidualnych cech
        pacjenta.
      </p>
    </div>
  );
}
