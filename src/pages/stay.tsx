import MediaOverlayContent from "@/sections/MediaOverlayContent";
import ExploreCards from "@/sections/ExploreCards";
import FaqSection from "@/sections/FaqSection";
import HeroBanner from "@/sections/HeroBanner";
import MediaCtaCards from "@/sections/MediaCtaCards";
import SuiteShowcase from "@/sections/SuiteShowcase";


export default function Stay() {
  return (
    <>
      <HeroBanner />
      <SuiteShowcase />
      <MediaOverlayContent />
      <FaqSection />
      <MediaCtaCards />
      <ExploreCards />
    </>
  );
}
