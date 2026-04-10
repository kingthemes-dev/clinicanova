import type { KosmetologiaSection } from "@/lib/cennikKosmetologiaTypes";

/** Cennik — Laseroterapia (treść ze strony źródłowej). */
export const CENNIK_LASEROTERAPIA_SECTIONS: readonly KosmetologiaSection[] = [
  {
    variant: "twoCol",
    id: "laser-tulowy-lasemd-ultra",
    heading: "LASER TUŁOWY LASEMD ULTRA",
    rows: [
      { type: "row", label: "Twarz", price: "1200 zł" },
      { type: "row", label: "Twarz + szyja", price: "1600 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "2000 zł" },
      { type: "row", label: "Dłonie grzbiety", price: "500 zł" },
      { type: "row", label: "Rewitalizacja ust", price: "300 zł" },
      { type: "row", label: "Powieka góra + dół", price: "400 zł" },
      { type: "row", label: "Skóra głowy", price: "1200 zł" },
      { type: "row", label: "Brzuch", price: "1000 zł" },
      { type: "row", label: "Pośladki", price: "1200 zł" },
      {
        type: "row",
        label: "Rozstępy (wg oceny kosmetologa)",
        price: "od 800 zł",
      },
      {
        type: "row",
        label: "Blizny (wg oceny kosmetologa)",
        price: "od 500 zł",
      },
      { type: "row", label: "Egzosomy do zabiegu", price: "+300 zł" },
      { type: "row", label: "NAD+ do zabiegu", price: "+300 zł" },
    ],
  },
  {
    variant: "twoCol",
    id: "terapia-laczona-vivace-lasemd",
    heading: "Terapia łączona RF Vivace + LaseMD Ultra",
    subheading:
      "Nazwa (głęboka przebudowa i rewitalizacja skóry)",
    rows: [
      { type: "row", label: "Twarz", price: "1800 zł" },
      { type: "row", label: "Twarz + szyja", price: "2100 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "2500 zł" },
      { type: "row", label: "Pośladki", price: "1800 zł" },
      { type: "row", label: "Brzuch", price: "1600 zł" },
    ],
    afterTable:
      "Przy zakupie pakietu minimum 3 zabiegów rabat od -20%",
  },
  {
    variant: "multiCol",
    id: "epilacja-primelase",
    heading: "EPILACJA LASEROWA PRIMELASE",
    intro: "Laser aleksandrytowy 755 nm",
    columns: [
      "Nazwa",
      "1 zabieg",
      "4 zabiegi",
      "6 zabiegów",
      "8 zabiegów",
      "10 zabiegów",
    ],
    rows: [
      {
        label: "Wąsik",
        values: ["180 zł", "680 zł", "960 zł", "1200 zł", "1400 zł"],
      },
      {
        label: "Broda",
        values: ["180 zł", "680 zł", "960 zł", "1200 zł", "1400 zł"],
      },
      {
        label: "Policzki",
        values: ["250 zł", "960 zł", "1380 zł", "1760 zł", "2000 zł"],
      },
      {
        label: "Twarz",
        values: ["350 zł", "1360 zł", "1980 zł", "2560 zł", "3000 zł"],
      },
      {
        label: "Pachy",
        values: ["280 zł", "1080 zł", "1560 zł", "2000 zł", "2300 zł"],
      },
      {
        label: "Przedramiona (dłoń – łokieć)",
        values: ["350 zł", "1360 zł", "1980 zł", "2560 zł", "3000 zł"],
      },
      {
        label: "Ramiona (łokieć – ramię)",
        values: ["350 zł", "1360 zł", "1980 zł", "2560 zł", "3000 zł"],
      },
      {
        label: "Ręka cała",
        values: ["500 zł", "1920 zł", "2760 zł", "3520 zł", "4200 zł"],
      },
      {
        label: "Klatka piersiowa",
        values: ["500 zł", "1920 zł", "2760 zł", "3520 zł", "4200 zł"],
      },
      {
        label: "Plecy",
        values: ["500 zł", "1920 zł", "2760 zł", "3520 zł", "4200 zł"],
      },
      {
        label: "Pośladki",
        values: ["400 zł", "1520 zł", "2220 zł", "2800 zł", "3200 zł"],
      },
      {
        label: "Linia biała brzucha",
        values: ["250 zł", "960 zł", "1380 zł", "1760 zł", "2000 zł"],
      },
      {
        label: "Brzuch",
        values: ["400 zł", "1520 zł", "2200 zł", "2800 zł", "3200 zł"],
      },
      {
        label: "Pachwiny",
        values: ["250 zł", "960 zł", "1380 zł", "1760 zł", "2000 zł"],
      },
      {
        label: "Bikini",
        values: ["350 zł", "1360 zł", "1980 zł", "2560 zł", "3000 zł"],
      },
      {
        label: "Bikini + szpara pośladkowa (full)",
        values: ["400 zł", "1520 zł", "2220 zł", "2800 zł", "3200 zł"],
      },
      {
        label: "Uda",
        values: ["500 zł", "1920 zł", "2760 zł", "3520 zł", "4200 zł"],
      },
      {
        label: "Łydki",
        values: ["500 zł", "1920 zł", "2760 zł", "3520 zł", "4200 zł"],
      },
      {
        label: "Całe nogi",
        values: ["800 zł", "3120 zł", "4560 zł", "5900 zł", "7000 zł"],
      },
      {
        label: "PAKIET: Pachy + bikini całkowite",
        values: ["650 zł", "2520 zł", "3660 zł", "4640 zł", "5500 zł"],
      },
      {
        label: "PAKIET: Bikini full + nogi całe",
        values: ["1000 zł", "3600 zł", "4800 zł", "5600 zł", "6000 zł"],
      },
      {
        label: "PAKIET: Pachy + nogi całe + bikini full",
        values: ["1300 zł", "4800 zł", "6600 zł", "8000 zł", "9000 zł"],
      },
    ],
  },
  {
    variant: "twoCol",
    id: "swiatlo-szerokopasmowe-veloce",
    heading: "ŚWIATŁO SZEROKOPASMOWE VELOCE",
    rows: [
      { type: "banner", text: "Fotoodmładzanie" },
      { type: "row", label: "Twarz", price: "1100 zł" },
      { type: "row", label: "Twarz + szyja", price: "1400 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "1600 zł" },
      { type: "banner", text: "Timeless Longevity" },
      {
        type: "row",
        label: "Twarz (pełna procedura)",
        price: "1900 zł",
      },
      { type: "row", label: "Twarz + szyja", price: "2400 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "2900 zł" },
      { type: "banner", text: "Przebarwienia" },
      {
        type: "row",
        label: "Twarz / szyja / dekolt / dłonie",
        price: "1000 zł",
      },
      { type: "row", label: "Twarz + szyja", price: "1200 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "1500 zł" },
      { type: "banner", text: "Rumień" },
      { type: "row", label: "Cała twarz", price: "1100 zł" },
      { type: "row", label: "Policzki", price: "700 zł" },
      { type: "row", label: "Nos", price: "500 zł" },
      { type: "banner", text: "Leczenie trądziku" },
      { type: "row", label: "Twarz", price: "950 zł" },
      { type: "row", label: "Dekolt", price: "700 zł" },
      { type: "row", label: "Plecy", price: "950 zł" },
    ],
  },
];
