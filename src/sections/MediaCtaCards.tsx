import Image from "next/image";
import Link from "next/link";

const mediaCtaData = {
  heading: "Stay With Us",
  description:
    "Come and experience a truly remarkable stay.",
  bookHref: "/enquire",
  enquireHref: "/enquire",
  bgSrc: "/assets/stay-with-us-bg.webp",
};

export default function MediaCtaCards() {
  return (
    <section className="media-cta-cards general-padding">
      <div className="media-cta-cards-container">
        <div className="media-cta-cards-bg">
          <Image
            src={mediaCtaData.bgSrc}
            alt="Enon Heights landscape"
            fill
            sizes="100vw"
            className="media-cta-cards-bg-img"
            loading="eager"
          />
        </div>
        <div className="media-cta-cards-inner">
          <div className="media-cta-cards-content">
            <div className="media-cta-cards-frame" aria-hidden="true" />
            <div className="media-cta-cards-text">
              <div className="title title-dark-olive">
                <h2>Stay With Us</h2>
              </div>

              <div className="media-cta-cards-card align-center">
                <div className="btn-custom">
                  <Link
                    href={mediaCtaData.bookHref}
                    aria-label="Book your stay at Enon Heights"
                    className="btn"
                  >
                    <span className="label-up">Book Now</span>
                    <span className="label-up">Book Now</span>
                  </Link>
                </div>
                <Link
                  href={mediaCtaData.enquireHref}
                  aria-label="Enquire about staying at Enon Heights"
                  className="cta-link light"
                >
                  Enquire
                </Link>
              </div>

              <div className="content content-dark-light">
                <p>{mediaCtaData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
