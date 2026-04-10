"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";

import { CERTIFICATE_GALLERY_IMAGES } from "@/lib/certificateGallery";

const cardShellClass =
  "relative w-full overflow-hidden rounded-[1.125rem] bg-white shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset,0_2px_8px_-2px_rgba(15,23,42,0.06),0_16px_48px_-12px_rgba(15,23,42,0.1)] ring-1 ring-zinc-900/[0.07] transition-[transform,box-shadow] duration-300 ease-out will-change-transform group-hover:-translate-y-1 group-hover:shadow-[0_2px_12px_-2px_rgba(15,23,42,0.08),0_24px_56px_-16px_rgba(15,23,42,0.14)]";

const matClass =
  "relative aspect-[4/5] w-full bg-gradient-to-b from-zinc-50/90 via-white to-zinc-50/50 p-4 sm:p-5 lg:p-6";

export function CertificatesGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const titleId = useId();

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxIndex, close]);

  return (
    <div className="mt-14 sm:mt-16 lg:mt-20">
      <div className="relative border-t border-zinc-200/80 pt-10 sm:pt-12">
        <div
          className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent"
          aria-hidden
        />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <p className="font-serif text-[0.65rem] font-medium uppercase tracking-[0.26em] text-zinc-500">
              Dowody kwalifikacji
            </p>
            <h3
              id={titleId}
              className="mt-2 font-serif text-[clamp(1.2rem,2.4vw,1.5rem)] font-normal tracking-tight text-zinc-900"
            >
              Galeria certyfikatów
            </h3>
          </div>
          <p className="max-w-sm text-[0.8125rem] font-light leading-relaxed text-zinc-500 sm:text-right">
            Kliknij wybrany dokument, aby obejrzeć go w powiększeniu.
          </p>
        </div>

        <ul
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-12 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4"
          aria-labelledby={titleId}
        >
          {CERTIFICATE_GALLERY_IMAGES.map((item, index) => (
            <li key={item.src} className="group">
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label={`Powiększ: ${item.alt}`}
              >
                <figure className={cardShellClass}>
                  <div className={matClass}>
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      className="object-contain object-center p-0.5"
                      sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                  <figcaption className="sr-only">
                    {`${item.alt} — ${index + 1} z ${CERTIFICATE_GALLERY_IMAGES.length}`}
                  </figcaption>
                </figure>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Powiększony certyfikat"
        >
          <button
            type="button"
            className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[2px] transition-opacity"
            aria-label="Zamknij podgląd"
            onClick={close}
          />
          <div className="relative z-[101] flex max-h-[min(92vh,56rem)] w-full max-w-[min(100vw-2rem,56rem)] flex-col items-center">
            <button
              type="button"
              onClick={close}
              className="absolute -right-1 -top-12 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-zinc-900/90 text-white shadow-lg transition hover:bg-zinc-800 sm:-right-2 sm:-top-14 sm:h-11 sm:w-11"
              aria-label="Zamknij"
            >
              <span className="text-lg leading-none" aria-hidden>
                ×
              </span>
            </button>
            <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_24px_80px_-20px_rgba(0,0,0,0.45)]">
              <div className="relative h-[min(78vh,44rem)] w-full bg-gradient-to-b from-zinc-50 to-zinc-100/80 sm:h-[min(82vh,48rem)]">
                <Image
                  src={CERTIFICATE_GALLERY_IMAGES[lightboxIndex].src}
                  alt={
                    CERTIFICATE_GALLERY_IMAGES[lightboxIndex].alt +
                    ` — ${lightboxIndex + 1} z ${CERTIFICATE_GALLERY_IMAGES.length}`
                  }
                  fill
                  className="object-contain object-center p-4 sm:p-8"
                  sizes="(min-width: 1024px) 56rem, 100vw"
                  priority
                />
              </div>
            </div>
            <p className="mt-4 text-center text-[0.75rem] font-light tracking-wide text-white/80">
              {lightboxIndex + 1} / {CERTIFICATE_GALLERY_IMAGES.length} · Esc
              lub klik w tło — zamknij
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
