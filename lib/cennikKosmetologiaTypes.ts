/** Wiersz cennika kosmetologii: dane lub nagłówek w obrębie tabeli (colspan). */
export type KosmetologiaRow =
  | { type: "row"; label: string; price: string }
  | { type: "banner"; text: string };

export type KosmetologiaSectionTwoCol = {
  variant: "twoCol";
  id: string;
  heading: string;
  /** Akapit pod nagłówkiem (np. opis zabiegu). */
  subheading?: string;
  rows: KosmetologiaRow[];
  /** Tekst pod tabelą (np. informacja o rabacie). */
  afterTable?: string;
};

export type KosmetologiaSectionMulti = {
  variant: "multiCol";
  id: string;
  heading: string;
  intro?: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
};

export type KosmetologiaSection =
  | KosmetologiaSectionTwoCol
  | KosmetologiaSectionMulti;
