import { BentoGridSection } from "@/components/bento-grid";
import { FeaturesSectionDemo } from "@/components/features";
import { SiteHero } from "@/components/hero";
// import LocationsMap from "@/components/map";
import MaxWidth from "@/components/max-width";
import { ReadyCard } from "@/components/ready";
import ServicesSection from "@/components/services";
import { SiteTestimonials } from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SiteHero />
      <MaxWidth>
        <BentoGridSection />
        <FeaturesSectionDemo />
        <ReadyCard />
      </MaxWidth>
    </main>
  );
}
