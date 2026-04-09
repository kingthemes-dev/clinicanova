import dynamic from "next/dynamic";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroBand } from "@/components/sections/IntroBand";

const DeferredSections = dynamic(
  () =>
    import("@/components/sections/DeferredSections").then((m) => ({
      default: m.DeferredSections,
    })),
  {
    loading: () => (
      <div
        className="min-h-[45vh] animate-pulse bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100"
        aria-hidden
      />
    ),
  },
);

export default function MarketingHomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroBand />
        <DeferredSections />
      </main>
      <Footer />
    </>
  );
}
