import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Ścieżka nawigacji"
      className="text-[0.8125rem] font-light tracking-[0.02em] text-zinc-500"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 ? (
              <span className="text-zinc-300" aria-hidden>
                /
              </span>
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="text-zinc-600 transition-colors duration-200 hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-zinc-900" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
