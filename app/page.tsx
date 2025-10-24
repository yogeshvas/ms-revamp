/** @format */

import Features from "@/components/features-4";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-8";
import TeamSection from "@/components/team";
import WallOfLoveSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      {/* <ContentSection /> */}
      <IntegrationsSection />
      <WallOfLoveSection />
      {/* <TeamSection /> */}
    </>
  );
}
