import HeroBanner from "@/sections/HeroBanner";
import FeatureCards from "@/sections/FeatureCards";
import MoreOffers from "@/sections/MoreOffers";
import ProprietorQuote from "@/sections/ProprietorQuote";
import OfferSuiteSlider from "@/sections/OfferSuiteSlider";

export default function OfferSingle() {
  return (
    <>
      <HeroBanner />
      <OfferSuiteSlider />
      <FeatureCards />
      <ProprietorQuote />
      <MoreOffers />
    </>
  );
}
