import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import {
  subpageMainSectionClass,
  subpageSectionTopRuleClass,
} from "@/components/ui/subpageLayout";

type SubpageMainSectionProps = {
  children: ReactNode;
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

export function SubpageMainSection({
  children,
  id,
  "aria-labelledby": ariaLabelledby,
  "aria-label": ariaLabel,
}: SubpageMainSectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-28 ${subpageMainSectionClass}`}
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabel}
    >
      <div className={subpageSectionTopRuleClass} aria-hidden />
      <Container>{children}</Container>
    </section>
  );
}
