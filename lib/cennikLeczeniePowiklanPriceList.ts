import type { KosmetologiaSection } from "@/lib/cennikKosmetologiaTypes";

/** Cennik — Leczenie powikłań. */
export const CENNIK_LECZENIE_POWIKLAN_SECTIONS: readonly KosmetologiaSection[] =
  [
    {
      variant: "twoCol",
      id: "leczenie-powiklan",
      heading: "Leczenie powikłań",
      rows: [
        {
          type: "row",
          label: "Rozpuszczanie kwasu hialuronowego",
          price: "od 1000 zł",
        },
      ],
    },
  ];
