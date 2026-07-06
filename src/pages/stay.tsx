import ExclusiveUseSection from "@/sections/ExclusiveUseSection";
import FaqSection from "@/sections/FaqSection";
import HeroBanner from "@/sections/HeroBanner";
import SuiteShowcase from "@/sections/SuiteShowcase";


export default function Home() {
  return (
    <>
      <HeroBanner />
      <SuiteShowcase />
      <ExclusiveUseSection/>
      <FaqSection />
    </>
  );
}
