import Link from "next/link";
import Image from "next/image";

const sectionData = {
  preHeading: "Dining",
  heading: "Where The Harvest Becomes The Experience",
  body: "Every dish begins a few steps from your table. Our kitchen garden and working farm supply what the season offers, nothing more, nothing less.",
  cta: { label: "Discover Dining", href: "#dining" },
  images: {
    top: { src: "/assets/dining.jpg", alt: "Fresh harvest meal prepared at Enon Heights" },
    bottomLeft: { src: "/assets/hero-banner-inner.jpg", alt: "Seasonal ingredients from the Enon farm" },
    bottomRight: { src: "/assets/about-mosaic-1.jpg", alt: "Chef gathering herbs from the kitchen garden" },
  },
};

export default function FullTextImage() {
  const { preHeading, heading, body, cta, images } = sectionData;

  return (
    <section className="full-text-image general-padding">
      <div className="container-fluid">
        <div className="full-text-image-inner">

          <div className="full-text-image-content bg-sage">
            <div className="full-text-image__shadow" aria-hidden="true">
              <img src="/assets/shadow-image-bg.png" alt="" />
            </div>
            <div className="pre-heading">
              <span>{preHeading}</span>
            </div>
            <div className="title title-dark-olive">
              <h2>{heading}</h2>
            </div>
            <div className="full-text-image-desc content content-body content-dark-light">
              <p>{body}</p>
            </div>
            <Link href={cta.href} aria-label={cta.label} className="cta-link mt-12">
              {cta.label}
            </Link>
          </div>

          <div className="full-text-image-grid">
            <div className="full-text-image-top">
              <Image
                src={images.top.src}
                alt={images.top.alt}
                width={800}
                height={500}
                className="full-text-image-img"
              />
            </div>
            <div className="full-text-image-bottom">
              <div className="full-text-image-col">
                <Image
                  src={images.bottomLeft.src}
                  alt={images.bottomLeft.alt}
                  width={400}
                  height={400}
                  className="full-text-image-img"
                />
              </div>
              <div className="full-text-image-col">
                <Image
                  src={images.bottomRight.src}
                  alt={images.bottomRight.alt}
                  width={400}
                  height={400}
                  className="full-text-image-img"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
