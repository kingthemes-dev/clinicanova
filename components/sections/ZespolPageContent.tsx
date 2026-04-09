import Image from "next/image";

import { bodyProseClass, sectionImageFrame } from "@/components/ui/pageTypography";

const h2Section =
  "font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal leading-snug tracking-tight text-zinc-900";

const h3Lead =
  "mt-4 text-[1rem] font-light leading-relaxed text-zinc-600 sm:text-[1.0625rem]";

/** Zdjęcia z `public/folder bez nazwy/` — galeria pod zespołem. */
function folderAsset(filename: string): string {
  return `/folder%20bez%20nazwy/${encodeURIComponent(filename)}`;
}

const FOLDER_GALLERY_FILES: string[] = [
  "whatsapp-image-2026-02-17-at-122713-1.jpeg",
  "whatsapp-image-2026-02-17-at-122713.jpeg",
  "whatsapp-image-2026-02-17-at-122714-1.jpeg",
  "whatsapp-image-2026-02-17-at-122714-2.jpeg",
  "whatsapp-image-2026-02-17-at-122714.jpeg",
  "whatsapp-image-2026-02-17-at-122715 (1).jpeg",
];

const team: {
  prefix: string | null;
  first: string;
  last: string;
  role: string;
  imageSrc: string | null;
  imageAlt: string;
}[] = [
  {
    prefix: "Dr",
    first: "Joanna",
    last: "Gruber-Miazga",
    role: "Lekarz medycyny estetycznej",
    imageSrc: "/wieloletnie-doswiadczenie.jpg",
    imageAlt: "Dr Joanna Gruber-Miazga — lekarz medycyny estetycznej, Clinica Nova",
  },
  {
    prefix: "Dr",
    first: "Monika",
    last: "Kret",
    role: "Lekarz medycyny estetycznej",
    imageSrc: null,
    imageAlt: "",
  },
  {
    prefix: null,
    first: "Wiktoria",
    last: "Drosio-Kurek",
    role: "Kosmetolog",
    imageSrc: null,
    imageAlt: "",
  },
  {
    prefix: null,
    first: "Alicja",
    last: "Bernard",
    role: "Kosmetolog",
    imageSrc: null,
    imageAlt: "",
  },
  {
    prefix: null,
    first: "Karolina",
    last: "Rosinke",
    role: "Recepcjonistka",
    imageSrc: null,
    imageAlt: "",
  },
  {
    prefix: null,
    first: "Bartłomiej",
    last: "Miazga",
    role: "Manager",
    imageSrc: null,
    imageAlt: "",
  },
];

export function ZespolPageContent() {
  return (
    <div className="space-y-20 sm:space-y-24 lg:space-y-28">
      {/* Sekcja 1: Clinica Nova + zdjęcie */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div className="order-2 lg:order-1">
          <h2 className={h2Section}>Clinica Nova</h2>
          <p className={`${h3Lead} mt-3`}>
            W Clinica Nova Gdańsk znajdziesz specjalistów, dla których anti-aging jest
            prawdziwą pasją nie tylko zawodową, ale i osobistą.
          </p>
          <div className={`mt-8 space-y-6 ${bodyProseClass}`}>
            <p>
              Dogłębne zrozumienie potrzeb skóry oraz personalizowane plany terapeutyczne —
              na tym opiera się nasza codzienna praktyka.
            </p>
            <p>
              O pięknie zawsze myślimy holistycznie, dążąc do osiągnięcia harmonii z własnym
              ciałem, jaka z niego wynika.
            </p>
          </div>
        </div>
        <div
          className={`order-1 aspect-[4/5] sm:aspect-[5/6] lg:order-2 ${sectionImageFrame}`}
        >
          <Image
            src="/whatsapp-image-2026-02-17-at-122715.jpeg"
            alt="Clinica Nova — atmosfera kliniki"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Sekcja 2: zdjęcie + doświadczenie */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div className={`aspect-[4/5] sm:aspect-[5/6] ${sectionImageFrame}`}>
          <Image
            src="/wieloletnie-doswiadczenie.jpg"
            alt="Wieloletnie doświadczenie — Clinica Nova"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div>
          <h2 className={h2Section}>
            <span>Wieloletnie</span> <span>doświadczenie</span>
          </h2>
          <p className={`${h3Lead} mt-3`}>
            Chcemy być Twoimi przewodniczkami do Świata Naturalnego Piękna.
          </p>
          <div className={`mt-8 ${bodyProseClass}`}>
            <p>
              Wykorzystując wieloletnie praktyczne doświadczenie, najnowszą wiedzę z obszaru
              medycyny estetycznej zdobywaną na konferencjach, szkoleniach i kursach, a także
              korzystając z wysokiej klasy sprzętu HI-tech dostępnego w naszej Klinice —
              wykonujemy zabiegi zorientowane przede wszystkim na skuteczność i trwałość.
            </p>
          </div>
        </div>
      </div>

      {/* Cytat */}
      <figure className="mx-auto max-w-3xl border-y border-zinc-200/90 py-10 text-center sm:py-12">
        <blockquote className="font-serif text-[clamp(1.125rem,2.5vw,1.5rem)] font-normal leading-relaxed tracking-tight text-zinc-800">
          Chcemy być Twoimi przewodniczkami do Świata Naturalnego Piękna.
        </blockquote>
      </figure>

      {/* Zespół — zdjęcie tylko u dr Joanny Gruber-Miazga */}
      <div>
        <h2 className={`${h2Section} text-center`}>Zespół</h2>
        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 lg:mt-14 lg:grid-cols-3 lg:gap-10">
          {team.map((person) => (
            <li
              key={`${person.first}-${person.last}`}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_18px_50px_-20px_rgba(15,23,42,0.1)] ring-1 ring-zinc-900/[0.04]"
            >
              {person.imageSrc ? (
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl bg-zinc-100">
                  <Image
                    src={person.imageSrc}
                    alt={person.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div
                  className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl bg-gradient-to-b from-zinc-100 to-zinc-200/80"
                  aria-hidden
                />
              )}
              <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
                {person.prefix ? (
                  <p className="font-serif text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    {person.prefix}
                  </p>
                ) : (
                  <span className="block min-h-[1rem]" aria-hidden />
                )}
                <h3 className="mt-2 font-serif text-[1.5rem] font-normal leading-tight tracking-tight text-zinc-900 sm:text-[1.65rem]">
                  <span className="block">{person.first}</span>
                  <span className="block">{person.last}</span>
                </h3>
                <p className="mt-3 font-serif text-[0.9375rem] font-normal leading-snug text-zinc-600">
                  {person.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Galeria — zdjęcia z katalogu „folder bez nazwy” */}
      <div>
        <h2 className={`${h2Section} text-center`}>Klinika w obiektywie</h2>
        <p className={`mx-auto mt-4 max-w-2xl text-center ${bodyProseClass}`}>
          Migawki z pracy zespołu i wnętrza kliniki.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {FOLDER_GALLERY_FILES.map((file, index) => (
            <li key={file} className={`relative aspect-[4/5] ${sectionImageFrame}`}>
              <Image
                src={folderAsset(file)}
                alt={`Clinica Nova Gdańsk — galeria, zdjęcie ${index + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover object-center"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
