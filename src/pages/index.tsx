import HeroBanner from "@/components/HeroBanner";
import FullImageWithText from "@/components/FullImageWithText";
import ProprietorQuote from "@/sections/ProprietorQuote";
import AboutUs from "@/sections/AboutUs";
import SuitsSlider from "@/components/SuitsSlider";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FullImageWithText />
      <ProprietorQuote />
      <SuitsSlider />
      <AboutUs />
    </>
  );
}
