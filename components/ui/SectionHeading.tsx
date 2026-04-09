import { type ReactNode } from "react";

import {
  sectionEyebrowClass,
  sectionHeadingClass,
} from "@/components/ui/pageTypography";

type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: ReactNode;
  align?: "left" | "center";
  variant?: "display" | "accent";
};

export function SectionHeading({
  title,
  eyebrow,
  align = "left",
  variant = "display",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  if (variant === "accent") {
    return (
      <div className={alignClass}>
        {eyebrow ? (
          <p className="mb-6 text-display-md font-extralight text-zinc-700">
            {eyebrow}
          </p>
        ) : null}
        <h2 className={`${sectionHeadingClass} text-zinc-900`}>{title}</h2>
      </div>
    );
  }

  return (
    <div className={alignClass}>
      {eyebrow ? (
        <p className={sectionEyebrowClass}>{eyebrow}</p>
      ) : null}
      <h2 className={sectionHeadingClass}>{title}</h2>
    </div>
  );
}
