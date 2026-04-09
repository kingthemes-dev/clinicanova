import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function OczyszczanieWodoroweArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Oczyszczanie wodorowe</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Oczyszczanie wodorowe łączy dokładne oczyszczanie skóry z jej regeneracją i
        ochroną przed starzeniem. Wykorzystuje aktywny wodór, najmniejszą cząsteczkę
        chemiczną, która przenika głęboko w struktury skóry, neutralizując wolne
        rodniki. Zabieg jest bezpieczny, bezbolesny i odpowiedni dla różnych typów skóry.
      </p>

      <h2 className={h2Class}>Technologia działania oczyszczania wodorowego</h2>
      <p>
        Zabieg polega na wprowadzeniu aktywnego wodoru do głębszych warstw skóry za
        pomocą specjalistycznego urządzenia. Wodór wiąże wolne rodniki, które są jedną z
        głównych przyczyn starzenia się skóry, tworząc nieszkodliwe cząsteczki wody,
        które zostają naturalnie usunięte z organizmu. Równocześnie urządzenie delikatnie
        złuszcza martwy naskórek, oczyszcza pory oraz poprawia mikrokrążenie,
        przygotowując skórę na przyjęcie substancji odżywczych.
      </p>

      <h2 className={h2Class}>Dla kogo jest zabieg? Wskazania do zabiegu</h2>
      <p>Polecane szczególnie w przypadku:</p>
      <ul className={listClass}>
        <li>skóry tłustej, mieszanej lub skłonnej do niedoskonałości,</li>
        <li>rozszerzonych porów,</li>
        <li>poszarzałej i zmęczonej cery,</li>
        <li>oznak starzenia, takich jak drobne zmarszczki i utrata elastyczności,</li>
        <li>skóry narażonej na działanie czynników zewnętrznych (zanieczyszczenia, smog),</li>
        <li>
          osób szukających skutecznego, a jednocześnie delikatnego oczyszczania i
          regeneracji.
        </li>
      </ul>

      <h2 className={h2Class}>Przebieg oczyszczania wodorowego</h2>
      <p>
        Urządzenie emitujące aktywny wodór jest przykładane do skóry, gdzie delikatnie
        oczyszcza, złuszcza i wprowadza wodór w głębsze warstwy naskórka. Proces trwa
        około ok. 30 minut, w zależności od potrzeb skóry i obszaru zabiegowego. Zabieg
        jest całkowicie bezbolesny, a pacjent odczuwa jedynie przyjemne chłodzenie i
        lekkie masowanie skóry.
      </p>

      <h2 className={h2Class}>Efekty oczyszczania wodorowego</h2>
      <p>Oczyszczanie wodorowe pozwala na osiągnięcie takich efektów jak:</p>
      <ul className={listClass}>
        <li>dogłębne oczyszczenie porów i usunięcie martwego naskórka,</li>
        <li>redukcja nadmiaru sebum,</li>
        <li>poprawa kolorytu skóry i jej rozświetlenie,</li>
        <li>zmniejszenie widoczności porów,</li>
        <li>wygładzenie drobnych zmarszczek,</li>
        <li>ochrona skóry przed starzeniem dzięki neutralizacji wolnych rodników.</li>
      </ul>

      <h2 className={h2Class}>Jak często zaleca się powtarzać zabieg?</h2>
      <p>
        W zależności od potrzeb skóry, oczyszczanie wodorowe można wykonywać jako
        pojedynczy zabieg bankietowy lub w serii ok. 4 zabiegów, powtarzanych co 2–3
        tygodnie. Dla podtrzymania efektów zaleca się powtarzać zabieg raz w miesiącu.
      </p>
    </div>
  );
}
