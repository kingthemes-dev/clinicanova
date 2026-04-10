"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import {
  bodyProseClass,
  sectionEyebrowClass,
} from "@/components/ui/pageTypography";

const AMOUNTS = [100, 200, 500, 1000, 2000] as const;

const inputClass =
  "w-full rounded-xl border border-zinc-200/90 bg-white px-4 py-3 text-[0.9375rem] font-light text-zinc-900 shadow-sm outline-none ring-zinc-900/[0.04] transition placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-2 focus:ring-zinc-900/10";

const labelClass =
  "mb-2 block text-[0.75rem] font-medium uppercase tracking-[0.12em] text-zinc-500";

export function VoucherContactForm() {
  const [amount, setAmount] = useState<(typeof AMOUNTS)[number] | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (amount === null) {
      setError("Wybierz kwotę vouchera.");
      return;
    }
    if (!consent) {
      setError("Zaznacz zgodę na przetwarzanie danych, aby wysłać wiadomość.");
      return;
    }
    const lines = [
      `Zapytanie o voucher — kwota: ${amount} zł`,
      "",
      `Imię: ${firstName.trim()}`,
      `Nazwisko: ${lastName.trim()}`,
      `Telefon: ${phone.trim()}`,
      `E-mail: ${email.trim()}`,
    ];
    const subject = encodeURIComponent(
      `Voucher ${amount} zł — ${firstName.trim()} ${lastName.trim()}`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:clinicanova.pl@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-[1.5rem] border border-zinc-200/95 bg-white/90 p-6 shadow-sm ring-1 ring-zinc-900/[0.05] sm:p-8 md:p-10">
        <p className={sectionEyebrowClass}>Voucher</p>
        <h2
          id="vouchery-form-heading"
          className="mt-2 font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] font-normal leading-snug tracking-tight text-zinc-900"
        >
          Wybierz kwotę i uzupełnij dane
        </h2>
        <p className={`mt-4 ${bodyProseClass}`}>
          Zaznacz preferowaną kwotę vouchera, a następnie podaj dane kontaktowe
          — otworzymy wiadomość e-mail w Twojej aplikacji pocztowej z wypełnioną
          treścią.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-10 sm:mt-10"
          noValidate
        >
          <fieldset>
            <legend className={`${labelClass} mb-4`}>Kwota vouchera</legend>
            <p className="mb-3 text-[0.8125rem] font-light text-zinc-500">
              Kliknij kwotę — wybrana opcja jest podświetlona.
            </p>
            <div
              className="rounded-[1.35rem] border border-zinc-200/90 bg-gradient-to-b from-zinc-100/90 to-zinc-200/80 p-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] ring-1 ring-zinc-900/[0.04] sm:p-2"
              role="group"
              aria-label="Kwota vouchera"
            >
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2 lg:grid-cols-5">
                {AMOUNTS.map((zł) => {
                  const selected = amount === zł;
                  return (
                    <button
                      key={zł}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setAmount(zł)}
                      className={`relative rounded-xl px-3 py-3.5 text-center text-[0.9375rem] transition-all duration-200 ease-out sm:px-4 sm:py-4 ${
                        selected
                          ? "z-[1] bg-white font-medium tracking-tight text-zinc-900 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.28),0_2px_0_0_rgba(0,0,0,0.04)] ring-1 ring-zinc-900/[0.08]"
                          : "border border-transparent bg-zinc-900/[0.11] font-light text-zinc-700 hover:bg-white/55 hover:text-zinc-900"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/25 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100`}
                    >
                      <span className="tabular-nums">{zł} zł</span>
                      {selected ? (
                        <span
                          className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-amber-500/90 shadow-[0_0_0_3px_rgba(245,158,11,0.2)]"
                          aria-hidden
                        />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </fieldset>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="voucher-imie" className={labelClass}>
                  Imię
                </label>
                <input
                  id="voucher-imie"
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
                <label htmlFor="voucher-nazwisko" className={labelClass}>
                  Nazwisko
                </label>
                <input
                  id="voucher-nazwisko"
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
              <label htmlFor="voucher-telefon" className={labelClass}>
                Telefon kontaktowy
              </label>
              <input
                id="voucher-telefon"
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
              <label htmlFor="voucher-email" className={labelClass}>
                E-mail
              </label>
              <input
                id="voucher-email"
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
            Wyślij zapytanie
          </button>
        </form>
      </div>
    </div>
  );
}
