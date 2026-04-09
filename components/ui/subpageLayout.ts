/**
 * Wspólny rytm odstępów dla podstron (hero → treść).
 * Używaj tych samych stałych na wszystkich stronach wzorcowych (Usługi, Medycyna estetyczna, podstrony artykułów).
 */

/** Sekcja hero: kontener na wyśrodkowany tytuł (odstępy pod fixed header + padding poziomy). */
export const subpageHeroContainerClass =
  "relative z-10 flex h-full flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28";

/** Blok ze zdjęciem pod hero (⅔ viewportu). */
export const subpageHeroMediaShellClass =
  "relative h-[calc(100vh*2/3)] min-h-[18rem] w-full";

/** Nakładka na zdjęcie hero (czytelność menu i tytułu). */
export const subpageHeroImageOverlayClass =
  "pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/35 to-zinc-950/60";

/** Biała sekcja pod hero: breadcrumbs + treść (jeden rytem pionowy). Łącz z `relative` w komponencie. */
export const subpageMainSectionClass = "bg-white py-20 sm:py-28 lg:py-32";

/** Cienka linia między hero a treścią. */
export const subpageSectionTopRuleClass =
  "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent";

/** Odstęp między breadcrumbs a główną treścią (siatka / artykuł). */
export const subpageBreadcrumbsMarginClass = "mb-10 sm:mb-12";
