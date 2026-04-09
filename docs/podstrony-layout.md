# Układ podstron (wzorzec roboczy)

Przy **każdej nowej podstronie** stosujemy ten sam układ co na stronach wzorcowych: **Usługi** (`/uslugi`) oraz **Medycyna estetyczna** (`/medycyna-estetyczna`).

## Struktura strony

1. **`Header`** — stały nagłówek nawigacji (jak na całej witrynie).
2. **`<main>`**
   - **Sekcja hero** — pełna szerokość, tło ze zdjęcia (`next/image`, `fill`, `object-cover`), wysokość ok. **⅔ wysokości viewportu** (`h-[calc(100vh*2/3)]`, z sensownym `min-h-*`), **gradient** dla czytelności menu i tytułu, **wyśrodkowany tytuł** (`<h1>`) danej podstrony.
   - **Treść pod hero** — zaczynamy od **`Breadcrumbs`** (ścieżka: Strona główna → … → bieżąca strona bez linku), potem właściwa treść (siatki, teksty itd.).
3. **`Footer`** — jak na stronie głównej.

## Szerokość treści (ważne)

- Sekcje pod hero opakowuj w **`Container`** z [`components/ui/Container.tsx`](../components/ui/Container.tsx) — ma **`max-w-content`** (w projekcie: **90rem**) oraz ujednolicone paddingi poziome.
- **Nie dodawaj** na tym samym `Container` dodatkowego zwężania w stylu `max-w-3xl`, `max-w-2xl`, `max-w-prose` itd. dla całej podstrony — wtedy układ różni się od np. Usług, siatki zabiegów czy innych podstron wzorcowych.
- Długie artykuły (np. [`/medycyna-estetyczna/konsultacja`](../app/medycyna-estetyczna/konsultacja/page.tsx)) też używają **tylko** `Container` bez drugiego limitu szerokości.

## Komponenty

- **Breadcrumbs:** [`components/ui/Breadcrumbs.tsx`](../components/ui/Breadcrumbs.tsx) — ostatni element bez `href`, z `aria-current="page"`.
- **Hero:** na razie definiowany w pliku `page.tsx` danej podstrony (spójne klasy z istniejącymi przykładami); przy wielu podstronach można wydzielić wspólny komponent hero.

## Przekazywanie breadcrumbs do sekcji

- Jeśli treść to siatka kategorii jak na `/uslugi`: użyj [`CategoryGrid`](../components/sections/CategoryGrid.tsx) z propem opcjonalnym `breadcrumbs={<Breadcrumbs items={...} />}`.
- Jeśli to dedykowany blok (np. lista zabiegów): osobna sekcja z propem `breadcrumbs`, jak [`MedycynaEstetycznaTiles`](../components/sections/MedycynaEstetycznaTiles.tsx).

## Metadane

- W każdym `page.tsx` ustawiaj `export const metadata` (tytuł, opis SEO) pod daną podstronę.

## Checklist nowej podstrony

- [ ] `app/<ścieżka>/page.tsx` z `Header`, hero, treścią, `Footer`
- [ ] `metadata` (title, description)
- [ ] Hero: zdjęcie z `public/`, alt po polsku
- [ ] `Breadcrumbs`: `Strona główna` → … → aktualna strona
- [ ] **Szerokość:** tylko `Container` (bez dodatkowego `max-w-*` zwężającego całą stronę — patrz sekcja wyżej)
- [ ] Spójne odstępy i typografia z istniejącymi sekcjami (`Container`, klasy jak na wzorcach)

**Referencje w kodzie:** [`app/uslugi/page.tsx`](../app/uslugi/page.tsx), [`app/medycyna-estetyczna/page.tsx`](../app/medycyna-estetyczna/page.tsx), [`app/medycyna-estetyczna/konsultacja/page.tsx`](../app/medycyna-estetyczna/konsultacja/page.tsx).
