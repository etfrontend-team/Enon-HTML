import ExploreCards from "@/sections/ExploreCards";
import FaqSection from "@/sections/FaqSection";
import FullTextImage from "@/sections/FullTextImage";
import HeroBanner from "@/sections/HeroBanner";
import MediaCtaCards from "@/sections/MediaCtaCards";
import PriceListSection from "@/sections/PriceListSection";


export default function Rates() {
  return (
    <>
      <HeroBanner />
      <PriceListSection/>
      <FullTextImage />
      <FaqSection />
      <MediaCtaCards />
      <ExploreCards />
    </>
  );
}
