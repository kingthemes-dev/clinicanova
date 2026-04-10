"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { SITE_EMAIL } from "@/lib/siteContact";
import {
  bodyProseClass,
  sectionEyebrowClass,
} from "@/components/ui/pageTypography";

const inputClass =
  "w-full rounded-xl border border-zinc-200/90 bg-white px-4 py-3 text-[0.9375rem] font-light text-zinc-900 shadow-sm outline-none ring-zinc-900/[0.04] transition placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-2 focus:ring-zinc-900/10";

const labelClass =
  "mb-2 block text-[0.75rem] font-medium uppercase tracking-[0.12em] text-zinc-500";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!consent) {
      setError("Zaznacz zgodę na przetwarzanie danych, aby wysłać wiadomość.");
      return;
    }
    const lines = [
      "Wiadomość z formularza kontaktowego — ClinicaNova",
      "",
      `Imię: ${firstName.trim()}`,
      `Nazwisko: ${lastName.trim()}`,
      `Telefon: ${phone.trim()}`,
      `E-mail: ${email.trim()}`,
      "",
      "Treść:",
      message.trim() || "(brak treści)",
    ];
    const subject = encodeURIComponent(
      `Kontakt — ${firstName.trim()} ${lastName.trim()}`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="rounded-[1.5rem] border border-zinc-200/95 bg-white/90 p-6 shadow-sm ring-1 ring-zinc-900/[0.05] sm:p-8 md:p-10">
        <p className={sectionEyebrowClass}>Napisz do nas</p>
        <h2
          id="kontakt-form-heading"
          className="mt-2 font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-normal leading-snug tracking-tight text-zinc-900"
        >
          Formularz kontaktowy
        </h2>
        <p className={`mt-4 ${bodyProseClass}`}>
          Uzupełnij pola — po wysłaniu otworzymy Twoją aplikację pocztową z
          gotową wiadomością na adres kliniki.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-8 sm:mt-10"
          noValidate
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="contact-imie" className={labelClass}>
                Imię
              </label>
              <input
                id="contact-imie"
                name="imie"
                type="text"
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="contact-nazwisko" className={labelClass}>
                Nazwisko
              </label>
              <input
                id="contact-nazwisko"
                name="nazwisko"
                type="text"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputClass}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-telefon" className={labelClass}>
              Telefon kontaktowy
            </label>
            <input
              id="contact-telefon"
              name="telefon"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              E-mail
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label htmlFor="contact-wiadomosc" className={labelClass}>
              Wiadomość
            </label>
            <textarea
              id="contact-wiadomosc"
              name="wiadomosc"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} min-h-[8rem] resize-y`}
              placeholder="Opisz krótko, w czym możemy pomóc…"
            />
          </div>

          <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 px-5 py-5 ring-1 ring-zinc-900/[0.04] sm:px-6 sm:py-6">
            <label className="flex cursor-pointer gap-3 text-left">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900/20"
              />
              <span
                className={`text-[0.8125rem] font-light leading-relaxed text-zinc-600 sm:text-[0.875rem]`}
              >
                Wysyłając wiadomość za pomocą formularza kontaktowego, wyrażam
                zgodę na przetwarzanie moich danych osobowych przez firmę
                ClinicaNova Medycyna Estetyczna i Kosmetologia, ul. Obrońców
                wybrzeża 7/6, 80-398 Gdańsk, w celu obsługi zapytania zgodnie z{" "}
                <Link
                  href="/#polityka-prywatnosci"
                  className="text-zinc-800 underline decoration-zinc-300 underline-offset-2 transition hover:decoration-zinc-500"
                >
                  Polityką prywatności
                </Link>
                . Podanie danych jest dobrowolne, ale niezbędne do udzielenia
                odpowiedzi. Przysługuje Ci prawo dostępu do swoich danych, ich
                poprawiania oraz żądania usunięcia.
              </span>
            </label>
          </div>

          {error ? (
            <p
              className="text-[0.875rem] font-medium text-red-700"
              role="alert"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full border border-zinc-900/90 bg-zinc-900 px-8 py-3.5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-zinc-800 hover:shadow-md active:scale-[0.99] sm:w-auto"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </div>
  );
}
