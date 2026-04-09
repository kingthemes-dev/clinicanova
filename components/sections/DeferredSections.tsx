import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ConsultationInviteSection } from "@/components/sections/ConsultationInviteSection";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { QuoteSplitSection } from "@/components/sections/QuoteSplitSection";

export function DeferredSections() {
  return (
    <>
      <QuoteSplitSection />
      <FeatureRows />
      <ConsultationInviteSection />
      <CategoryGrid />
    </>
  );
}
