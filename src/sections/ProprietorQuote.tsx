"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";

export default function ProprietorQuote() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["15% end", "center center"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const rotateZDesktop = useTransform(scrollYProgress, [0, 1], [-7, 0]);
  const rotateZMobile  = useTransform(scrollYProgress, [0, 1], [-3, 0]);
  const rotateZ = isMobile ? rotateZMobile : rotateZDesktop;

  return (
    <section ref={sectionRef} className="proprietor-quote general-padding mx-15 bg-sage-mist">
      <div className="proprietor-quote-bg absolute inset-0">
        <Image
          fill
          sizes="100vw"
          className="hero-banner__bg-img img-fluid-cover"
          src="/assets/shadow-image-bg.png"
          alt=""
          role="presentation"
        />
      </div>
      <div className="proprietor-quote__card-inner">
        <motion.div
          className="proprietor-quote__card bg-off-white"
          style={{
            translateY,
            rotateZ,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="proprietor-quote__stamp" aria-hidden="true">
            <Image
              fill
              src="/assets/enon-heights-logo.png"
              alt=""
              role="presentation"
              sizes="(max-width: 1366px) 126px, 158px"
              className="proprietor-quote__stamp-arc"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="proprietor-quote__photo-col">
            <Image
              fill
              sizes="(max-width: 767px) 0px, (max-width: 1366px) 45vw, 399px"
              className="proprietor-quote__photo img-fluid-cover"
              src="/assets/hero-banner-inner.jpg"
              alt="Enon Heights suite"
              loading="eager"
            />
          </div>
          <div className="proprietor-quote__quote-col">
            <div className="title title-dark-olive">
              <h4 className="proprietor-quote__blockquote">
                &ldquo;Decades of luxury travel, curated into five exceptional Suites.&rdquo;
              </h4>
            </div>
            <p className="proprietor-quote__names">
              Hans &amp; Liaan | Proprietors
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}