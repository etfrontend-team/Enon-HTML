import HeroBanner from "@/sections/HeroBanner";
import ProprietorQuote from "@/sections/ProprietorQuote";
import AboutUsMosaic from "@/sections/AboutUsMosaic";
import SuitsSlider from "@/sections/SuitsSlider";
import InfiniteImageCarousel from "@/sections/InfiniteImageCarousel";
import JournalSection from "@/sections/JournalSection";
import FullTextImage from "@/sections/FullTextImage";
import MediaCtaCards from "@/sections/MediaCtaCards";
import ExploreCards from "@/sections/ExploreCards";
export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutUsMosaic />
      <ProprietorQuote />
      <SuitsSlider />
      <FullTextImage />
      <InfiniteImageCarousel />
      <JournalSection />
      <MediaCtaCards />
      <ExploreCards />
    </>
  );
}
