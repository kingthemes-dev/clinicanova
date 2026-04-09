import Link from "next/link";

import { bodyProseClass } from "@/components/ui/pageTypography";

const h2Class =
  "mt-12 scroll-mt-28 font-serif text-[1.25rem] font-normal leading-snug tracking-tight text-zinc-900 first:mt-0 sm:text-[1.375rem]";

const listClass = "ml-1 list-disc space-y-2 pl-5 marker:text-zinc-400";

const linkSubtle =
  "font-medium text-zinc-800 underline decoration-zinc-300/80 underline-offset-2 transition hover:text-zinc-950 hover:decoration-zinc-500";

export function Dermapen4Article() {
  return (
    <div className={`space-y-5 ${bodyProseClass}`}>
      <h2 className={h2Class}>DERMAPEN 4</h2>
      <p>
        Dermapen 4 to zaawansowane urządzenie wykorzystujące technologię mikroigłową w celu
        poprawy jakości skóry poprzez jej regenerację, wygładzanie i stymulację odnowy
        komórkowej. Zabieg działa na wielu poziomach skóry, inicjując jej naturalne procesy
        naprawcze, co pozwala uzyskać efekty w sposób bezpieczny i skuteczny. Dermapen 4
        jest odpowiedni zarówno dla twarzy, jak i ciała, i może być stosowany do leczenia
        wielu problemów skórnych.
      </p>

      <h2 className={h2Class}>Kiedy warto wykonać zabieg Dermapen 4?</h2>
      <p>Dermapen 4 zalecany jest w przypadku:</p>
      <ul className={listClass}>
        <li>drobnych zmarszczek i utraty jędrności skóry,</li>
        <li>blizn potrądzikowych, pooperacyjnych lub pourazowych,</li>
        <li>rozstępów i wiotkości skóry na ciele,</li>
        <li>nierówności i rozszerzonych porów,</li>
        <li>przebarwień i nierównomiernego kolorytu skóry,</li>
        <li>skóry wymagającej intensywnej regeneracji i rewitalizacji.</li>
      </ul>

      <h2 className={h2Class}>Zabiegi Dermapen na ciało</h2>
      <p>Dermapen 4 doskonale sprawdza się w terapii problemów skórnych na ciele.</p>
      <p>Może być stosowany w celu:</p>
      <ul className={listClass}>
        <li>redukcji rozstępów na brzuchu, udach, pośladkach czy ramionach,</li>
        <li>poprawy jędrności skóry na ramionach lub brzuchu,</li>
        <li>regeneracji skóry po szybkiej utracie wagi lub ciąży,</li>
        <li>wygładzania blizn pourazowych i chirurgicznych.</li>
      </ul>

      <h2 className={h2Class}>Zabiegi Dermapen na twarz</h2>
      <p>Na twarzy Dermapen jest szczególnie skuteczny w:</p>
      <ul className={listClass}>
        <li>redukcji blizn potrądzikowych i rozszerzonych porów,</li>
        <li>poprawie jędrności i napięcia skóry,</li>
        <li>wygładzaniu drobnych zmarszczek,</li>
        <li>rozjaśnianiu przebarwień i wyrównaniu kolorytu skóry.</li>
      </ul>

      <h2 className={h2Class}>Dermapen a leczenie blizn, w tym blizn potrądzikowych</h2>
      <p>
        Dermapen 4 to jedna z najskuteczniejszych metod leczenia blizn, w tym blizn
        potrądzikowych. Mikroigły urządzenia tworzą kontrolowane mikrouszkodzenia w skórze,
        co stymuluje produkcję kolagenu i elastyny. Dzięki temu blizny ulegają spłyceniu, a
        skóra odzyskuje bardziej jednolitą strukturę. Terapia jest bezpieczna i skuteczna
        nawet w przypadku starszych blizn.
      </p>

      <h2 className={h2Class}>Dermapen na rozstępy</h2>
      <p>
        Rozstępy to jedno z najtrudniejszych wyzwań w medycynie estetycznej. Dzięki głębokiej
        stymulacji skóry mikroigłami, rozstępy stają się mniej widoczne, a skóra zyskuje na
        elastyczności i gładkości. Zabieg jest odpowiedni zarówno dla świeżych, jak i
        starszych zmian.
      </p>

      <h2 className={h2Class}>Bezpieczeństwo i naturalność efektów</h2>
      <p>
        Dermapen 4 jest urządzeniem medycznym o wysokim standardzie bezpieczeństwa.
        Precyzyjna regulacja głębokości nakłuć pozwala dostosować zabieg do indywidualnych
        potrzeb pacjenta. Efekty są naturalne, ponieważ skóra regeneruje się dzięki własnym
        procesom naprawczym.
      </p>

      <h2 className={h2Class}>Przebieg zabiegu</h2>
      <p>
        Zabieg rozpoczyna się od oczyszczenia skóry i nałożenia znieczulenia miejscowego,
        aby zapewnić pacjentowi komfort. Następnie Dermapen 4 wprowadzany jest w obszar
        zabiegowy, gdzie mikroigły tworzą drobne kanały w skórze. Na skórę mogą być
        aplikowane także substancje aktywne, takie jak kwas hialuronowy czy witaminy,
        które dzięki mikrokanalikom wnikają głęboko w jej warstwy. Zabieg trwa około 30–60
        minut.
      </p>

      <h2 className={h2Class}>Wygląd skóry po zabiegu</h2>
      <p>
        Po zabiegu skóra może być lekko zaczerwieniona, a w niektórych przypadkach występuje
        delikatny obrzęk. Objawy te znikają zwykle w ciągu 1–2 dni. Może wystąpić również
        drobne złuszczanie naskórka, co jest naturalnym elementem regeneracji skóry.
      </p>

      <h2 className={h2Class}>Kiedy uzyskuje się optymalne efekty zabiegu?</h2>
      <p>
        Pierwsze rezultaty, takie jak poprawa napięcia i wygładzenie skóry, widoczne są już
        po kilku dniach od zabiegu. Optymalne efekty, takie jak spłycenie blizn czy
        rozstępów, pojawiają się po kilku tygodniach i rozwijają się z każdą kolejną sesją.
        Zalecana seria to 3–6 zabiegów w odstępach ok. 4 tygodni.
      </p>

      <h2 className={h2Class}>Z jakimi innymi zabiegami można łączyć Dermapen?</h2>
      <p>Dermapen 4 może być łączony z innymi procedurami, takimi jak:</p>
      <ul className={listClass}>
        <li>
          <Link href="/kosmetologia/mezoterapia-mesoestetic-mesoprof" className={linkSubtle}>
            Mezoterapia igłowa
          </Link>{" "}
          – dla wzmocnienia regeneracji i nawilżenia,
        </li>
        <li>
          <Link href="/kosmetologia/peelingi-medyczne" className={linkSubtle}>
            Peelingi chemiczne
          </Link>{" "}
          – dla intensywnego oczyszczenia skóry,
        </li>
        <li>
          <Link href="/medycyna-estetyczna/toksyna-botulinowa" className={linkSubtle}>
            Toksyna botulinowa
          </Link>{" "}
          i{" "}
          <Link href="/medycyna-estetyczna/kwas-hialuronowy" className={linkSubtle}>
            wypełniacze
          </Link>{" "}
          – jako element kompleksowego odmładzania,
        </li>
        <li>
          <Link href="/medycyna-estetyczna/osocze-bogatoplytkowe" className={linkSubtle}>
            Osocze bogatopłytkowe (PRP)
          </Link>{" "}
          – w celu maksymalizacji efektów regeneracyjnych.
        </li>
      </ul>
    </div>
  );
}
