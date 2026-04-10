/** Wspólne dane kontaktowe — stopka, strona /kontakt */
export const SITE_ADDRESS_LINE1 = "ul. Obrońców wybrzeża 7/6";
export const SITE_ADDRESS_LINE2 = "80-398 Gdańsk";

export const SITE_MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("ul. Obrońców wybrzeża 7/6, 80-398 Gdańsk");

/** Embed bez klucza API — widok miejsca po adresie */
export const SITE_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  "ul. Obrońców wybrzeża 7/6, 80-398 Gdańsk, Polska",
)}&z=16&hl=pl&output=embed`;

export const SITE_PHONE_HREF = "tel:+48507698507";
export const SITE_PHONE_LABEL = "+48 507 698 507";

export const SITE_EMAIL = "clinicanova.pl@gmail.com";
export const SITE_EMAIL_HREF = `mailto:${SITE_EMAIL}`;

export const SITE_OPENING_DAYS = "Poniedziałek – Piątek";
export const SITE_OPENING_HOURS = "10.00 – 20.00";
