import type { KosmetologiaSection } from "@/lib/cennikKosmetologiaTypes";

/** Cennik — Kosmetologia (treść ze strony źródłowej). */
export const CENNIK_KOSMETOLOGIA_SECTIONS: readonly KosmetologiaSection[] = [
  {
    variant: "twoCol",
    id: "perfect-derma-peel",
    heading: "THE PERFECT DERMA PEEL",
    rows: [
      { type: "banner", text: "Peeling medyczny THE PERFECT DERMA PEEL" },
      { type: "row", label: "Twarz", price: "1000 zł" },
      { type: "row", label: "+ Dermapen / + wzmacniacz", price: "1500 zł" },
      { type: "row", label: "Twarz / szyja / dekolt", price: "1000 zł" },
      {
        type: "row",
        label: "Plecy / klatka piersiowa / dłonie",
        price: "1000 zł",
      },
      {
        type: "row",
        label: "Ramiona (rogowacenie okołomieszkowe)",
        price: "1000 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "dermapen4",
    heading: "DERMAPEN4",
    rows: [
      { type: "banner", text: "Ampułki DP Dermaceuticals" },
      { type: "row", label: "Twarz", price: "800 zł" },
      { type: "row", label: "Twarz + szyja", price: "900 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "1000 zł" },
      { type: "row", label: "Brzuch", price: "1000 zł" },
      { type: "row", label: "Biust", price: "1000 zł" },
      { type: "row", label: "Dłonie grzbiety", price: "500 zł" },
      { type: "row", label: "Pośladki", price: "1000 zł" },
      { type: "row", label: "Ramiona / przedramiona", price: "1000 zł" },
      { type: "row", label: "Uda / łydki", price: "1000 zł" },
      { type: "row", label: "Skalp – skóra głowy", price: "1000 zł" },
      { type: "row", label: "+ Peeling PRX-T33 1 ml", price: "200 zł" },
      { type: "row", label: "+ Ampułka NAD+ 1 ml", price: "150 zł" },
      { type: "row", label: "+ Ampułka z PLLA Qube 1 ml", price: "150 zł" },
      {
        type: "row",
        label: "+ Ampułka z egzosomami ExoJuv 1 ml",
        price: "100 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "geneo-plus",
    heading: "GENEO+",
    rows: [
      {
        type: "row",
        label: "Revive – rewitalizacja i odmłodzenie",
        price: "350 zł / 400 zł",
      },
      {
        type: "row",
        label: "Illuminate – poprawa kolorytu i rozświetlenie",
        price: "350 zł / 400 zł",
      },
      {
        type: "row",
        label: "Hydrate – nawilżenie i blask",
        price: "350 zł / 400 zł",
      },
      {
        type: "row",
        label: "Balance – oczyszczenie i detoks",
        price: "350 zł / 400 zł",
      },
      {
        type: "row",
        label: "Detox – wzmocnienie bariery ochronnej skóry",
        price: "350 zł / 400 zł",
      },
      {
        type: "row",
        label: "Glam – naturalny efekt glow i anty-aging",
        price: "350 zł / 400 zł",
      },
      {
        type: "row",
        label: "Protect – dla skóry z zaburzoną barierą hydrolipidową",
        price: "350 zł / 400 zł",
      },
      {
        type: "row",
        label: "Retouch – odświeżenie i efekt blurr",
        price: "350 zł / 400 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "zabiegi-retix-c",
    heading: "ZABIEGI RETIX. C",
    rows: [
      { type: "row", label: "Revive TC 3 Peeling chemiczny", price: "400 zł" },
      { type: "row", label: "RetiBooster", price: "500 zł" },
      { type: "row", label: "RetiBooster + Dermapen4", price: "700 zł" },
      { type: "row", label: "Smart DNA", price: "350 zł" },
      { type: "row", label: "Smart DNA + Dermapen4", price: "600 zł" },
    ],
  },
  {
    variant: "twoCol",
    id: "aqua-pure-hydro",
    heading: "AQUA PURE HYDRO PEELING / OCZYSZCZANIE 4 ETAPOWE",
    rows: [
      { type: "row", label: "Twarz", price: "350 zł" },
      { type: "row", label: "Twarz + szyja", price: "400 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "450 zł" },
      { type: "row", label: "+ Oczyszczanie manualne", price: "+100 zł" },
      { type: "row", label: "+ Kwasy do zabiegu", price: "+100 zł" },
    ],
  },
  {
    variant: "twoCol",
    id: "prx-t33",
    heading: "PRX-T33 – peeling chemiczny",
    rows: [
      { type: "row", label: "Twarz / dłonie", price: "400 zł" },
      { type: "row", label: "+ Dermapen4", price: "700 zł" },
      { type: "row", label: "Twarz + szyja", price: "500 zł" },
      { type: "row", label: "+ Dermapen4", price: "900 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "600 zł" },
      { type: "row", label: "+ Dermapen4", price: "1100 zł" },
    ],
  },
  {
    variant: "twoCol",
    id: "proxn-xantohumol",
    heading: "PROXN XANTOHUMOL",
    rows: [
      { type: "banner", text: "Xantohumol Recovery Treatment" },
      { type: "row", label: "Zabieg I stopnia", price: "380 zł" },
      {
        type: "row",
        label: "Zabieg II stopnia (+ Novel Peel)",
        price: "450 zł",
      },
      {
        type: "row",
        label: "Zabieg III stopnia (+ Novel Peel + mezoterapia mikroigłowa)",
        price: "650 zł",
      },
      {
        type: "row",
        label: "Zabieg przeciwtrądzikowy Anti Acne",
        price: "450 zł",
      },
      {
        type: "banner",
        text: "Terapia przeciw przebarwieniom Bright Up Therapy",
      },
      {
        type: "row",
        label: "Zabieg I stopnia + ampułka do pielęgnacji w domu",
        price: "450 zł + 100 zł",
      },
      {
        type: "row",
        label: "Zabieg II stopnia + ampułka do pielęgnacji w domu",
        price: "550 zł + 100 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "beautifeye-fillmed",
    heading: "BEAUTIFEYE FILLMED – odmłodzenie okolicy oka",
    rows: [
      {
        type: "row",
        label:
          "1 zabieg – peeling chemiczny + mezoterapia igłowa ampułką 1,5 ml NCTF 135HA",
        price: "500 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "cosmelan",
    heading: "COSMELAN – głęboki peeling chemiczny Mesoestetic",
    rows: [
      {
        type: "row",
        label: "Zabieg Cosmelan + Homepack",
        price: "2000 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "exojuv-egzosomy",
    heading: "EXOJUV EGZOSOMY",
    rows: [
      {
        type: "banner",
        text: "Mezoterapia mikroigłowa Dermapen + ampułka ExoJuv",
      },
      { type: "row", label: "Twarz 1 ml", price: "1000 zł" },
      { type: "row", label: "Twarz, szyja 2 ml", price: "1300 zł" },
      { type: "row", label: "Twarz, szyja, dekolt 3 ml", price: "1600 zł" },
    ],
  },
  {
    variant: "twoCol",
    id: "mesoestetic-mesopeel-md",
    heading: "MESOESTETIC – peelingi medyczne Mesopeel MD",
    rows: [
      { type: "banner", text: "Mesopeel MD" },
      {
        type: "row",
        label: "Periocular – zabieg na okolicę oka",
        price: "250 zł",
      },
      {
        type: "row",
        label: "Retiflash – odmłodzenie, naturalne glow",
        price: "300 zł",
      },
      {
        type: "row",
        label: "Azelan RX – trądzik różowaty, trądzik",
        price: "300 zł",
      },
      {
        type: "row",
        label: "OxyAge – skóra dojrzała, anti-age",
        price: "300 zł",
      },
      {
        type: "row",
        label: "Melanostop Tranex – przebarwienia",
        price: "300 zł",
      },
      {
        type: "row",
        label: "Mandelic 30% – skóra tłusta, łojotok",
        price: "300 zł",
      },
      {
        type: "row",
        label: "Blemiskin – trądzik, zaskórniki",
        price: "300 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "mesoestetic-mesohyal",
    heading: "MEZOTERAPIA IGŁOWA MESOESTETIC MESOHYAL",
    rows: [
      { type: "banner", text: "MesoHyal 5 ml" },
      {
        type: "row",
        label: "NCTC109 + Biotin – stymulacja skóry głowy, mocne włosy 5 ml",
        price: "550 zł",
      },
      {
        type: "row",
        label: "NCTC109 + DMAE – biorewitalizujący lifting 5 ml",
        price: "550 zł",
      },
      {
        type: "row",
        label: "NCTC109 + Vitamin C – antyoksydacyjne rozświetlenie 5 ml",
        price: "550 zł",
      },
      {
        type: "row",
        label: "NCTC109 + Oligoelements – intensywne nawilżenie 5 ml",
        price: "550 zł",
      },
      {
        type: "row",
        label: "Mellilot – redukcja zasinień i obrzęków okolicy oka 2 ml",
        price: "300 zł",
      },
      {
        type: "row",
        label: "Hyaluronic – nawilżenie i wypełnienie zmarszczek 3 ml",
        price: "600 zł",
      },
      {
        type: "row",
        label:
          "Hyaluronic + dowolna ampułka MesoHyal (DMAE, NCTC109, Oligoelements, Vitamin C, Organic Silicon) 5 ml",
        price: "700 zł",
      },
      {
        type: "row",
        label: "X-DNA – polinukleotydy, stymulator tkankowy 3 ml",
        price: "700 zł",
      },
      {
        type: "row",
        label:
          "Argibenone – peptydowa redukcja dynamicznych zmarszczek mimicznych i fotouszkodzeń – stymulacja górnego piętra twarzy 3 ml",
        price: "1000 zł",
      },
      {
        type: "row",
        label:
          "Redenx – peptydowa redukcja zmarszczek oraz poprawa gęstości i jędrności skóry – stymulacja dolnego piętra twarzy 3 ml",
        price: "1000 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "mezoterapia-oka-mesohyal-2ml",
    heading: "MEZOTERAPIA IGŁOWA OKA MesoHyal 2 ml",
    rows: [
      {
        type: "row",
        label: "Mellilot 2 ml – cienie pod oczami, obrzęki",
        price: "300 zł",
      },
      {
        type: "row",
        label: "NCTC109 + Mellilot 2 ml – obrzęki, rewitalizacja",
        price: "400 zł",
      },
      {
        type: "row",
        label: "Hyaluronic + NCTC109 2 ml – intensywne nawilżenie",
        price: "500 zł",
      },
      {
        type: "row",
        label: "Argibenone 1,5 ml – zmarszczki mimiczne, napięcie",
        price: "600 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "laser-lasemd-ultra",
    heading: "LASER TUŁOWY LASEMD ULTRA",
    rows: [
      { type: "row", label: "Twarz", price: "1200 zł" },
      { type: "row", label: "Twarz + szyja", price: "1500 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "2000 zł" },
      { type: "row", label: "Dłonie grzbiety", price: "600 zł" },
      { type: "row", label: "Rewitalizacja ust", price: "400 zł" },
      { type: "row", label: "Okolica oka (nieruchoma)", price: "400 zł" },
      { type: "row", label: "Skóra głowy", price: "1000 zł" },
      { type: "row", label: "Brzuch", price: "1500 zł" },
      { type: "row", label: "Pośladki", price: "1500 zł" },
      { type: "row", label: "Uda wewnętrzne", price: "1500 zł" },
      { type: "row", label: "Biust", price: "1500 zł" },
      {
        type: "row",
        label: "Rozstępy (wg wielkości obszaru)",
        price: "od 1000 zł",
      },
      {
        type: "row",
        label: "Blizny (wg wielkości blizny)",
        price: "od 500 zł",
      },
      {
        type: "row",
        label: "Pojedyncze przebarwienie",
        price: "od 300 zł",
      },
    ],
  },
  {
    variant: "twoCol",
    id: "morpheus8",
    heading: "Morpheus8",
    rows: [
      { type: "row", label: "Twarz", price: "1300 zł" },
      { type: "row", label: "Twarz + szyja", price: "1600 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "2000 zł" },
      { type: "row", label: "Oko", price: "800 zł" },
      { type: "row", label: "Podbródek", price: "1000 zł" },
      { type: "row", label: "Ramiona wewnętrzne", price: "1500 zł" },
      { type: "row", label: "Uda wewnętrzne", price: "1500 zł" },
      { type: "row", label: "Brzuch", price: "1500 zł" },
      { type: "row", label: "Pośladki", price: "1500 zł" },
      { type: "row", label: "Biust", price: "1500 zł" },
      { type: "row", label: "Kolana", price: "1000 zł" },
    ],
  },
  {
    variant: "twoCol",
    id: "morpheus8-lasemd-combo",
    heading: "Terapia łączona Morpheus8 + LaseMD Ultra",
    rows: [
      { type: "row", label: "Twarz", price: "2200 zł" },
      { type: "row", label: "Twarz + szyja", price: "2600 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "3000 zł" },
      { type: "row", label: "Dłonie grzbiety", price: "1000 zł" },
      { type: "row", label: "Pośladki", price: "2500 zł" },
      { type: "row", label: "Uda wewnątrz", price: "2500 zł" },
      { type: "row", label: "Brzuch", price: "2500 zł" },
      { type: "row", label: "Ramiona pelikany", price: "2500 zł" },
    ],
  },
  {
    variant: "multiCol",
    id: "epilacja-primelase",
    heading: "EPILACJA LASEROWA PRIMELASE",
    intro: "Laser aleksandrytowy 755 nm",
    columns: [
      "Nazwa",
      "Jeden zabieg",
      "Pakiet 4 zabiegów",
      "Pakiet 6 zabiegów",
      "Pakiet 8 zabiegów",
      "Pakiet 10 zabiegów",
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
        values: ["300 zł", "1080 zł", "1560 zł", "2000 zł", "2300 zł"],
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
        values: ["500 zł", "1520 zł", "2220 zł", "2800 zł", "3200 zł"],
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
        values: ["300 zł", "960 zł", "1380 zł", "1760 zł", "2000 zł"],
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
    id: "lumecca-ipl",
    heading: "LUMECCA IPL INMODE",
    subheading:
      "Fotoodmładzanie, leczenie rumienia i naczyń, redukcja przebarwień",
    rows: [
      { type: "row", label: "Twarz", price: "1000 zł" },
      { type: "row", label: "Twarz + szyja", price: "1300 zł" },
      { type: "row", label: "Twarz + szyja + dekolt", price: "1600 zł" },
      { type: "row", label: "Dłonie grzbiety", price: "500 zł" },
      { type: "row", label: "Pojedyncze naczynko", price: "od 200 zł" },
      { type: "row", label: "Naczyniak / rubinek", price: "od 200 zł" },
      { type: "row", label: "Nos", price: "400 zł" },
      { type: "row", label: "Policzki", price: "600 zł" },
      { type: "row", label: "Czoło / broda", price: "500 zł" },
      {
        type: "row",
        label: "Morpheus8 + Lumecca – twarz w trakcie jednego zabiegu",
        price: "2000 zł",
      },
    ],
  },
];
