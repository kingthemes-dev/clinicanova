import type { CennikPriceSection } from "@/lib/cennikMedycynaEstetycznaPriceList";

type CennikPriceTablesProps = {
  sections: readonly CennikPriceSection[];
};

export function CennikPriceTables({ sections }: CennikPriceTablesProps) {
  return (
    <div className="space-y-12 sm:space-y-14 lg:space-y-16">
      {sections.map((section) => (
        <section
          key={section.id}
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
          <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-900/[0.04] sm:mt-5">
            <table className="w-full min-w-[min(100%,20rem)] border-collapse text-left text-[0.9375rem]">
              <tbody>
                {section.rows.map((row, rowIndex) => (
                  <tr
                    key={`${section.id}-r${rowIndex}`}
                    className="border-b border-zinc-100 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="max-w-[65ch] py-3.5 pl-4 pr-4 font-normal leading-relaxed text-zinc-800 sm:pl-6 sm:pr-6"
                    >
                      {row.label}
                    </th>
                    <td className="whitespace-nowrap py-3.5 pl-2 pr-4 text-right font-medium tabular-nums tracking-tight text-zinc-950 sm:pl-4 sm:pr-6">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}
