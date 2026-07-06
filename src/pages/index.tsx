import HeroBanner from "@/sections/HeroBanner";
import FullImageWithText from "@/sections/FullImageWithText";
import ProprietorQuote from "@/sections/ProprietorQuote";
import AboutUs from "@/sections/AboutUs";
import AboutUsMosaic from "@/sections/AboutUsMosaic";
import SuitsSlider from "@/sections/SuitsSlider";
import InfiniteImageCarousel from "@/sections/InfiniteImageCarousel";
import EnquireForm from "@/sections/EnquireForm";
import JournalSection from "@/sections/JournalSection";
import FullTextImage from "@/sections/FullTextImage";
import StayFAQs from "@/sections/FaqSection";
import GallerySection from "@/sections/GallerySection";
export default function Home() {
  return (
    <>
      <HeroBanner />
      <GallerySection/>
      {/* <FullImageWithText /> */}
      <ProprietorQuote />
      <SuitsSlider />
      {/* <AboutUs /> */}
      <AboutUsMosaic />
      <InfiniteImageCarousel />
      <FullTextImage />
      <StayFAQs />
      <JournalSection />
      {/* <EnquireForm /> */}
    </>
  );
}
