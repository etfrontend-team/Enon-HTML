import FullTextImage from "@/sections/FullTextImage";
import HeroBanner from "@/sections/HeroBanner";
import ImageFigureSection from "@/sections/ImageFigureSection";
import GalleryCarousel from "@/sections/GalleryCarousel";
import ZigzagSection from "@/sections/zigzagSection";


export default function Dining() {
  return (
    <>
      <HeroBanner />
      <ZigzagSection/>
      <FullTextImage />
      <ImageFigureSection/>
      <GalleryCarousel />
    </>
  );
}
