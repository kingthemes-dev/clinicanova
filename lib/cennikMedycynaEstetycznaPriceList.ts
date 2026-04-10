export type CennikPriceRow = { label: string; price: string };

export type CennikPriceSection = {
  id: string;
  heading: string;
  rows: CennikPriceRow[];
};

/** Cennik — Medycyna estetyczna (treść zsynchronizowana ze stroną źródłową). */
export const CENNIK_MEDYCYNA_ESTETYCZNA_SECTIONS: readonly CennikPriceSection[] =
  [
    {
      id: "toksyna-botox-redukcja",
      heading: "Toksyna botulinowa – Botox – redukcja zmarszczek",
      rows: [
        { label: "Zmarszczki poziome na czole", price: "700 zł" },
        { label: "Zmarszczki pionowe między brwiami (lwia)", price: "700 zł" },
        { label: "Zmarszczki wokół oczu (kurze łapki)", price: "700 zł" },
        { label: "Botox 1 okolica", price: "700 zł" },
        { label: "Botox 2 okolice", price: "1050 zł" },
        { label: "Botox 3 okolice", price: "1350 zł" },
        { label: "Botox 4 okolice", price: "1650 zł" },
      ],
    },
    {
      id: "toksyna-botox-leczniczo",
      heading: "Toksyna botulinowa – Botox – leczniczo",
      rows: [
        { label: "Pachy", price: "1800 zł" },
        { label: "Dłonie", price: "1800 zł" },
        { label: "Stopy", price: "1800 zł" },
        { label: "Uśmiech dziąsłowy (gummy smile)", price: "650 zł" },
        { label: "Bruksizm", price: "1350 zł" },
        { label: "Migrena", price: "od 1350 zł" },
      ],
    },
    {
      id: "kwas-hialuronowy",
      heading: "Kwas hialuronowy",
      rows: [
        { label: "Bruzdy nosowo-wargowe 1 ml", price: "1400 zł" },
        {
          label: "Zmarszczki poniżej kącików ust – marionetki 1 ml",
          price: "1400 zł",
        },
        {
          label: "Zmarszczki palacza nad górną wargą 1 ml",
          price: "1400 zł",
        },
        { label: "Dolina łez 1 ml", price: "1400 zł" },
        { label: "Modelowanie kości jarzmowych 1 ml", price: "1400 zł" },
        { label: "Modelowanie linii żuchwy 1 ml", price: "1400 zł" },
        { label: "Wolumetria 1 ml", price: "1400 zł" },
        {
          label:
            "Powiększanie ust / modelowanie ust 1 ml – autorska technika ClipLips",
          price: "1400 zł",
        },
        {
          label:
            "Nawilżanie ust / modelowanie ust 1 ml – autorska technika ClipLips",
          price: "1400 zł",
        },
        { label: "Nieoperacyjna korekta nosa 1 ml", price: "1550 zł" },
        {
          label: "Filorga Hydra Booster / NCTF 135 HA + M-HA 18",
          price: "1050 zł",
        },
        {
          label: "Filorga Lift Booster / ART FILLER Fine Lines + NCTF 135 HA",
          price: "1350 zł",
        },
        {
          label: "Neauvia Explosion / Intense Rheology + Hydro Deluxe",
          price: "1400 zł",
        },
        {
          label: "Stylage Tensor Lift S / Stylage S + RRS HA Tensor Lift",
          price: "1500 zł",
        },
        { label: "RRS HA Long Lasting", price: "1450 zł" },
      ],
    },
    {
      id: "xela-rederm-twarz",
      heading: "Redermalizacja skóry – XELA REDERM",
      rows: [
        { label: "1 ml", price: "1000 zł" },
        { label: "2 ml", price: "1200 zł" },
      ],
    },
    {
      id: "xela-rederm-dlonie",
      heading: "Odmłodzenie dłoni – XELA REDERM",
      rows: [
        { label: "1 ml", price: "1000 zł" },
        { label: "2 ml", price: "1200 zł" },
      ],
    },
    {
      id: "lenisna",
      heading: "Lenisna – kwas polimlekowy",
      rows: [{ label: "Twarz", price: "3500 zł" }],
    },
    {
      id: "juvelook",
      heading: "Juvelook – kwas polimlekowy",
      rows: [{ label: "Okolice oczu", price: "2000 zł" }],
    },
    {
      id: "wampirzy-lifting",
      heading: "Wampirzy lifting – osocze bogatopłytkowe",
      rows: [
        { label: "Twarz", price: "1200 zł" },
        { label: "Twarz i szyja", price: "1500 zł" },
        { label: "Twarz, szyja i dekolt", price: "1800 zł" },
        { label: "Twarz + electri", price: "1500 zł" },
        { label: "Twarz i szyja + electri", price: "2000 zł" },
        { label: "Twarz, szyja i dekolt + electri", price: "2500 zł" },
      ],
    },
    {
      id: "wypadanie-wlosow",
      heading: "Leczenie nadmiernego wypadania włosów",
      rows: [
        { label: "Dr.Cyj", price: "1000 zł" },
        { label: "Dr.Cyj + RRS XL Hair", price: "1350 zł" },
      ],
    },
    {
      id: "mezoterapia-neauvia",
      heading: "Mezoterapia igłowa NEAUVIA HYDRO DELUXE",
      rows: [
        { label: "2,5 ml", price: "1000 zł" },
        { label: "5,0 ml", price: "1300 zł" },
      ],
    },
    {
      id: "lipoliza",
      heading: "Lipoliza iniekcyjna",
      rows: [
        { label: "Podbródek / chomiki", price: "900 zł" },
        {
          label:
            "Ramiona / brzuch / boczki / okolice nad kolanami / bryczesy / wewnętrzne strony ud",
          price: "1000 zł",
        },
      ],
    },
    {
      id: "mezoterapia-oczy",
      heading: "Mezoterapia okolicy oczu",
      rows: [
        { label: "Electri 1,5 ml", price: "1000 zł" },
        { label: "Electri 1,5 ml + RRS Eyes", price: "1200 zł" },
      ],
    },
    {
      id: "nici",
      heading: "Nici liftingujące",
      rows: [
        { label: "Nić PDO 1 szt.", price: "100 zł" },
        { label: "Nić Barb 4D haczykowa 1 szt.", price: "450 zł" },
      ],
    },
  ];
