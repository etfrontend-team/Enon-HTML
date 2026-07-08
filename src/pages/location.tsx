import MediaOverlayContent from "@/sections/MediaOverlayContent";
import ExploreCards from "@/sections/ExploreCards";
import FaqSection from "@/sections/FaqSection";
import HeroBanner from "@/sections/HeroBanner";
import LocationMap from "@/sections/LocationMap";
import MediaCtaCards from "@/sections/MediaCtaCards";
import SuiteShowcase from "@/sections/SuiteShowcase";


export default function Location() {
  return (
    <>
      <HeroBanner />
      <LocationMap />
      <FaqSection />
      <MediaCtaCards />
      <ExploreCards />
    </>
  );
}