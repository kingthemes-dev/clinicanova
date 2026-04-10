import { SITE_MAP_EMBED_URL } from "@/lib/siteContact";

export function GoogleMapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-zinc-100 shadow-sm ring-1 ring-zinc-900/[0.04]">
      <div className="relative aspect-[4/3] w-full sm:aspect-[21/9] lg:aspect-[2.4/1]">
        <iframe
          title="Mapa Google — ClinicaNova, Gdańsk"
          src={SITE_MAP_EMBED_URL}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
