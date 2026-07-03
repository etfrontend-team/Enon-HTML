import HeroBanner from "@/sections/HeroBanner";
import FullImageWithText from "@/sections/FullImageWithText";
import ProprietorQuote from "@/sections/ProprietorQuote";
import AboutUs from "@/sections/AboutUs";
import SuitsSlider from "@/sections/SuitsSlider";
import InfiniteImageCarousel from "@/sections/InfiniteImageCarousel";
import EnquireForm from "@/sections/EnquireForm";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FullImageWithText />
      <ProprietorQuote />
      <SuitsSlider />
      <AboutUs />
      <InfiniteImageCarousel />
      <EnquireForm />
    </>
  );
}
