import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function FalaAkustycznaBtlArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Fala akustyczna BTL</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Fala akustyczna BTL wykorzystuje skoncentrowane impulsy mechaniczne o wysokiej
        energii, które przenikają do głębokich warstw skóry i tkanki podskórnej. Zabieg
        stymuluje krążenie, poprawia metabolizm komórkowy oraz przyspiesza rozpad komórek
        tłuszczowych, wspierając naturalne procesy regeneracji i detoksykacji.
      </p>

      <h2 className={h2Class}>Wskazania do zabiegu z wykorzystaniem fali akustycznej</h2>
      <p>Fala akustyczna BTL jest zalecana w przypadku:</p>
      <ul className={listClass}>
        <li>redukcji cellulitu na różnych etapach zaawansowania,</li>
        <li>modelowania sylwetki,</li>
        <li>poprawy jędrności i elastyczności skóry,</li>
        <li>likwidacji lokalnych depozytów tkanki tłuszczowej,</li>
        <li>terapii obrzęków limfatycznych,</li>
        <li>regeneracji skóry po intensywnym odchudzaniu lub ciąży,</li>
        <li>wspomagania leczenia blizn i rozstępów.</li>
      </ul>

      <h2 className={h2Class}>Przebieg zabiegu, czas trwania zabiegu</h2>
      <p>
        Zabieg rozpoczyna się od konsultacji, podczas której określane są obszary
        problematyczne i dobierane odpowiednie parametry urządzenia. Na skórę aplikowany jest
        specjalny żel, który ułatwia przenikanie fal akustycznych. Głowica urządzenia emituje
        skoncentrowane impulsy mechaniczne, które wnikają w głąb tkanki. Zabieg jest
        bezbolesny, a pacjent odczuwa jedynie delikatne wibracje lub lekkie ciepło. Procedura
        trwa ok. 20–40 minut, w zależności od wielkości obszaru zabiegowego.
      </p>

      <h2 className={h2Class}>Ile należy wykonać zabiegów?</h2>
      <p>
        Rekomendowana seria to 6–10 zabiegów wykonywanych w odstępach kilkudniowych. Dla
        podtrzymania rezultatów zaleca się wykonywanie zabiegów przypominających co 1–3
        miesiące.
      </p>

      <h2 className={h2Class}>Zalecenia po zabiegu</h2>
      <p>
        <strong className="font-medium text-zinc-800">
          Po zabiegu z wykorzystaniem fali akustycznej zaleca się:
        </strong>
      </p>
      <ul className={listClass}>
        <li>
          picie dużej ilości wody (minimum 2 litry dziennie), aby wspomóc usuwanie produktów
          przemiany materii,
        </li>
        <li>unikanie intensywnego wysiłku fizycznego przez 24 godziny,</li>
        <li>stosowanie zdrowej diety wspierającej proces redukcji tkanki tłuszczowej,</li>
        <li>regularne wykonywanie zabiegów podtrzymujących dla utrzymania efektów.</li>
      </ul>
    </div>
  );
}
