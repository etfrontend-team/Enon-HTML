import HeroBanner from "@/sections/HeroBanner";
import ProprietorQuote from "@/sections/ProprietorQuote";
import MediaCtaCards from "@/sections/MediaCtaCards";
import ExploreCards from "@/sections/ExploreCards";
import ScrollRevealGallery from "@/sections/ScrollRevealGallery";

export default function OurStory() {
  return (
    <>
      <HeroBanner />
      <ProprietorQuote />
      <ScrollRevealGallery />
      <MediaCtaCards />
      <ExploreCards />
    </>
  );
}
