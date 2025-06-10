/** @format */

import ContentSection from "@/components/content-2";
import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import WallOfLoveSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      {/* <ContentSection /> */}
      <WallOfLoveSection />
      <FooterSection />
    </>
  );
}
