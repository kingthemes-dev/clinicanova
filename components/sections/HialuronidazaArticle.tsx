import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

export function HialuronidazaArticle() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>Hialuronidaza</h2>
      <p className="text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]">
        Hialuronidaza to enzym stosowany w medycynie estetycznej w celu rozkładania
        nadmiaru kwasu hialuronowego w skórze. Zabieg z użyciem tej substancji
        pozwala na korektę niepożądanych efektów wcześniejszych zabiegów estetycznych,
        takich jak asymetria, przerysowanie czy migracja preparatu.
      </p>
      <p>
        Hialuronidaza to enzym, który naturalnie występuje w organizmie. W zabiegach
        estetycznych wykorzystuje się oczyszczoną formę tego enzymu, dostępną w
        postaci preparatów medycznych. Hialuronidaza działa selektywnie, rozkładając
        kwas hialuronowy bez wpływu na inne struktury skóry.
      </p>

      <h2 className={h2Class}>Hialuronidaza – kiedy wskazany jest zabieg?</h2>
      <ul className={listClass}>
        <li>
          Korekta niepożądanych efektów zabiegów z użyciem kwasu hialuronowego (np.
          nadmierna objętość, asymetria).
        </li>
        <li>
          Eliminacja powikłań, takich jak grudki, migracja preparatu czy nierówności.
        </li>
        <li>Reakcje alergiczne lub zapalne związane z wypełniaczem.</li>
        <li>
          Potrzeba całkowitego usunięcia kwasu hialuronowego przed kolejnym zabiegiem.
        </li>
      </ul>

      <h2 className={h2Class}>Czy na wszystkie partie twarzy i ciała można wykonać zabieg?</h2>
      <p>
        Hialuronidaza może być stosowana na różne obszary twarzy i ciała, gdzie
        wcześniej podano kwas hialuronowy. Najczęściej są to:
      </p>
      <ul className={listClass}>
        <li>usta,</li>
        <li>policzki,</li>
        <li>okolice oczu,</li>
        <li>linia żuchwy,</li>
        <li>broda.</li>
      </ul>
      <p>
        Zabieg można również przeprowadzić na ciele, jeśli kwas hialuronowy był
        podawany w tych miejscach. Kluczowe jest, aby decyzję o zastosowaniu
        hialuronidazy podjął doświadczony lekarz, który dokładnie oceni wskazania i
        ryzyko.
      </p>

      <h2 className={h2Class}>Czy są przeciwwskazania do hialuronidazy?</h2>
      <p>Jak każdy zabieg, hialuronidaza ma swoje przeciwwskazania. Należą do nich:</p>
      <ul className={listClass}>
        <li>ciąża i karmienie piersią,</li>
        <li>alergia na enzym hialuronidazy,</li>
        <li>aktywne infekcje skóry w miejscu zabiegu,</li>
        <li>choroby autoimmunologiczne,</li>
        <li>nieuregulowana cukrzyca.</li>
      </ul>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Zabieg rozpoczyna się od konsultacji i oceny obszaru, który wymaga korekty. Po
        oczyszczeniu skóry lekarz podaje hialuronidazę cienką igłą bezpośrednio w
        miejsce, gdzie znajduje się nadmiar kwasu hialuronowego. Ilość preparatu
        dobierana jest indywidualnie w zależności od zakresu korekty. Procedura jest
        krótka, trwa zazwyczaj od 15 do 30 minut. Stosowana jest w znieczuleniu
        miejscowym.
      </p>

      <h2 className={h2Class}>Jak szybko widać efekty i czy zabieg wymaga powtórzeń?</h2>
      <p>
        Efekty działania hialuronidazy są widoczne niemal natychmiast – kwas
        hialuronowy ulega rozkładowi w ciągu kilku minut do kilku godzin. W przypadku
        dużych depozytów lub skomplikowanych korekt, konieczne może być powtórzenie
        zabiegu po kilku dniach.
      </p>
      <p>
        Nie ma potrzeby szczególnej rekonwalescencji, choć zaleca się unikanie
        intensywnego wysiłku fizycznego, sauny i ekspozycji na słońce przez kilka dni.
      </p>
    </div>
  );
}
