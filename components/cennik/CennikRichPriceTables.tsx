import type {
  KosmetologiaSection,
  KosmetologiaSectionMulti,
  KosmetologiaSectionTwoCol,
} from "@/lib/cennikKosmetologiaTypes";

type Props = {
  sections: readonly KosmetologiaSection[];
};

function TwoColSection({ section }: { section: KosmetologiaSectionTwoCol }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28"
      aria-labelledby={`${section.id}-heading`}
    >
      <h2
        id={`${section.id}-heading`}
        className="font-serif text-[clamp(1.05rem,2vw,1.25rem)] font-normal leading-snug tracking-tight text-zinc-900"
      >
        {section.heading}
      </h2>
      {section.subheading ? (
        <p className="mt-3 max-w-3xl text-[0.9375rem] font-light leading-relaxed text-zinc-600">
          {section.subheading}
        </p>
      ) : null}
      <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-900/[0.04] sm:mt-5">
        <table className="w-full min-w-[min(100%,20rem)] border-collapse text-left text-[0.9375rem]">
          <tbody>
            {section.rows.map((row, rowIndex) =>
              row.type === "banner" ? (
                <tr
                  key={`${section.id}-b${rowIndex}`}
                  className="border-b border-zinc-100 bg-zinc-50/90 last:border-b-0"
                >
                  <td
                    colSpan={2}
                    className="px-4 py-3 text-[0.9rem] font-medium leading-snug text-zinc-800 sm:px-6"
                  >
                    {row.text}
                  </td>
                </tr>
              ) : (
                <tr
                  key={`${section.id}-r${rowIndex}`}
                  className="border-b border-zinc-100 last:border-b-0"
                >
                  <th
                    scope="row"
                    className="max-w-[70ch] py-3.5 pl-4 pr-4 font-normal leading-relaxed text-zinc-800 sm:pl-6 sm:pr-6"
                  >
                    {row.label}
                  </th>
                  <td className="min-w-[5.5rem] whitespace-nowrap py-3.5 pl-2 pr-4 text-right font-medium tabular-nums tracking-tight text-zinc-950 sm:pl-4 sm:pr-6">
                    {row.price || "—"}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
      {section.afterTable ? (
        <p className="mt-4 max-w-3xl text-[0.9375rem] font-light leading-relaxed text-zinc-600">
          {section.afterTable}
        </p>
      ) : null}
    </section>
  );
}

function MultiColSection({ section }: { section: KosmetologiaSectionMulti }) {
  const colCount = section.columns.length;
  return (
    <section
      id={section.id}
      className="scroll-mt-28"
      aria-labelledby={`${section.id}-heading`}
    >
      <h2
        id={`${section.id}-heading`}
        className="font-serif text-[clamp(1.05rem,2vw,1.25rem)] font-normal leading-snug tracking-tight text-zinc-900"
      >
        {section.heading}
      </h2>
      {section.intro ? (
        <p className="mt-3 max-w-3xl text-[0.9375rem] font-light leading-relaxed text-zinc-600">
          {section.intro}
        </p>
      ) : null}
      <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-900/[0.04] sm:mt-5">
        <table className="w-full min-w-[44rem] border-collapse text-left text-[0.8125rem] sm:min-w-0 sm:text-[0.9375rem]">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/90">
              {section.columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-3 py-3 text-left text-[0.7rem] font-medium uppercase tracking-[0.06em] text-zinc-600 first:pl-4 last:pr-4 sm:px-4 sm:text-[0.75rem]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, ri) => (
              <tr
                key={`${section.id}-m${ri}`}
                className="border-b border-zinc-100 last:border-b-0"
              >
                <th
                  scope="row"
                  className="max-w-[28ch] py-3 pl-4 pr-2 text-left font-normal leading-relaxed text-zinc-800 sm:max-w-none sm:px-4"
                >
                  {row.label}
                </th>
                {row.values.slice(0, colCount - 1).map((v, vi) => (
                  <td
                    key={vi}
                    className="whitespace-nowrap py-3 px-2 text-right font-medium tabular-nums text-zinc-950 sm:px-3"
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function CennikRichPriceTables({ sections }: Props) {
  return (
    <div className="space-y-12 sm:space-y-14 lg:space-y-16">
      {sections.map((section) =>
        section.variant === "multiCol" ? (
          <MultiColSection key={section.id} section={section} />
        ) : (
          <TwoColSection key={section.id} section={section} />
        ),
      )}
    </div>
  );
}
