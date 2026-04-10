import { IconClock, IconMapPin, IconPhone } from "@/components/icons/contact";
import {
  SITE_ADDRESS_LINE1,
  SITE_ADDRESS_LINE2,
  SITE_EMAIL,
  SITE_EMAIL_HREF,
  SITE_MAPS_SEARCH_URL,
  SITE_OPENING_DAYS,
  SITE_OPENING_HOURS,
  SITE_PHONE_HREF,
  SITE_PHONE_LABEL,
} from "@/lib/siteContact";

const iconWrap =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/90 bg-zinc-100 text-zinc-600 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)]";

const cardClass =
  "flex gap-4 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm ring-1 ring-zinc-900/[0.04] sm:p-6";

const labelClass =
  "font-serif text-[0.7rem] font-normal uppercase tracking-[0.22em] text-zinc-500";

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <div className={cardClass}>
        <div className={iconWrap}>
          <IconMapPin className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className={labelClass}>Adres</p>
          <a
            href={SITE_MAPS_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-[0.9375rem] font-light leading-relaxed text-zinc-800 transition-colors hover:text-zinc-950"
          >
            {SITE_ADDRESS_LINE1}
            <br />
            {SITE_ADDRESS_LINE2}
          </a>
        </div>
      </div>

      <div className={cardClass}>
        <div className={iconWrap}>
          <IconPhone className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className={labelClass}>Telefon i e-mail</p>
          <a
            href={SITE_PHONE_HREF}
            className="mt-3 block text-[0.9375rem] font-light text-zinc-900 transition-colors hover:text-zinc-950"
          >
            {SITE_PHONE_LABEL}
          </a>
          <a
            href={SITE_EMAIL_HREF}
            className="mt-2 block text-[0.9375rem] font-light text-zinc-600 transition-colors hover:text-zinc-900"
          >
            {SITE_EMAIL}
          </a>
        </div>
      </div>

      <div className={cardClass}>
        <div className={iconWrap}>
          <IconClock className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className={labelClass}>Godziny otwarcia</p>
          <p className="mt-3 text-[0.9375rem] font-light leading-relaxed text-zinc-800">
            {SITE_OPENING_DAYS}
            <br />
            {SITE_OPENING_HOURS}
          </p>
        </div>
      </div>
    </div>
  );
}
