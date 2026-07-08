"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const galleryImages = {
  left: { src: "/images/scroll-gallery-left.webp", alt: "Detail Left" },
  center: { src: "/images/scroll-gallery-center.webp", alt: "Center" },
  right: { src: "/images/scroll-gallery-right.webp", alt: "Detail Right" },
};

export default function ScrollRevealGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const [availW, setAvailW] = useState(0);

  useEffect(() => {
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(([entry]) => setAvailW(entry.contentRect.width));
    if (containerRef.current) ro.observe(containerRef.current);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const vw = viewport.w || 1920;
  const vh = viewport.h || 1080;
  const isMobile = vw < 992;
  const gap = isMobile ? 15 : 25;

  const targetCenterW = isMobile ? vw * 0.55 : 548;
  const targetSideW = isMobile ? vw * 0.22 : 315;
  const totalNeededW = targetCenterW + targetSideW * 2 + gap * 2;
  const scale = availW > 0 && totalNeededW > availW ? availW / totalNeededW : 1;

  const startW = targetCenterW * scale;
  const sideW = targetSideW * scale;
  const startH = (startW * 740) / 548;
  const sideH = (sideW * 401) / 315;

  const revealEnd = 0.4;
  const textEnd = 0.8;

  const initialLeft = (vw - startW) / 2;
  const initialTop = (vh - startH) / 2;
  const topInset = useTransform(scrollYProgress, [0, revealEnd], [initialTop, 0]);
  const rightInset = useTransform(scrollYProgress, [0, revealEnd], [initialLeft, 0]);
  const bottomInset = useTransform(scrollYProgress, [0, revealEnd], [initialTop, 0]);
  const leftInset = useTransform(scrollYProgress, [0, revealEnd], [initialLeft, 0]);
  const clipPath = useMotionTemplate`inset(${topInset}px ${rightInset}px ${bottomInset}px ${leftInset}px)`;

  const overlayOpacity = useTransform(
    scrollYProgress,
    (value) => {
      const progress = Math.min(value / revealEnd, 1);
      return progress;
    }
  );

  const moveDist = (vw - startW) / 2 + sideW + gap;
  const leftX = useTransform(scrollYProgress, [0, revealEnd], [0, -moveDist]);
  const rightX = useTransform(scrollYProgress, [0, revealEnd], [0, moveDist]);
  const innerX = useTransform(scrollYProgress, [0, revealEnd], ["-10%", "10%"]);

  const textY = useTransform(scrollYProgress, [revealEnd, textEnd], ["100vh", "0vh"]);

  return (
    <section className="scroll-reveal-gallery relative" style={{ overflow: "visible" }}>
      <div
        ref={trackRef}
        className="scroll-reveal-gallery-track relative w-full"
        style={{ height: "500vh" }}
      >
        <div className="scroll-reveal-gallery-sticky sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white">

          <motion.div className="absolute inset-0 z-10 pointer-events-none" style={{ clipPath }}>
            <div className="relative w-screen h-screen">
              <Image
                src={galleryImages.center.src}
                alt="Background"
                fill
                priority
                className="object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black/50 z-20"
                style={{ opacity: overlayOpacity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none container-fluid-lg"
            style={{ y: textY }}
          >
            <div className="max-w-608 mx-auto w-full text-center flex flex-col items-center">
              <div className="pre-heading title-white mb-16">
              <span>
                About the Rock
              </span>
              </div>
              <div className="title title-white mb-20">
              <h2>
                The Story Of The Enon <br /> Rock Formation
              </h2>
              </div>
              <div className="content content-white">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci. Lorem ipsum dolor sit amet consectetur. Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci. Lorem ipsum dolor sit amet consectetur. Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci.
                  <br></br>
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci. Lorem ipsum dolor sit amet consectetur.
                </p>
                <p>Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci. <br></br>
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci. Lorem ipsum dolor sit amet consectetur. Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci.
                  Lorem ipsum dolor sit amet consectetur. </p>
                  <p>Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci. Lorem ipsum dolor sit amet consectetur. Ullamcorper quam pellentesque porttitor nisi quis bibendum tristique consequat orci. </p>
              </div>
            </div>
          </motion.div>

          <div
            ref={containerRef}
            className="relative z-40 flex items-center justify-center w-full container-fluid-lg"
            style={{ gap }}
          >
            <motion.div
              className="shrink-0 overflow-hidden"
              style={{ width: sideW, height: sideH, x: leftX }}
            >
              <div className="relative w-full h-full">
                <motion.div className="absolute inset-0 w-[130%] h-full left-[-15%]" style={{ x: innerX }}>
                  <Image src={galleryImages.left.src} alt="Left" fill className="object-cover" />
                </motion.div>
              </div>
            </motion.div>

            <div style={{ width: startW, height: startH }} className="shrink-0 pointer-events-none" />

            <motion.div
              className="shrink-0 overflow-hidden"
              style={{ width: sideW, height: sideH, x: rightX }}
            >
              <div className="relative w-full h-full">
                <motion.div className="absolute inset-0 w-[130%] h-full left-[-15%]" style={{ x: innerX }}>
                  <Image src={galleryImages.right.src} alt="Right" fill className="object-cover" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}