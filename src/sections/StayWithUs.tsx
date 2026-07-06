import Image from "next/image";
import Link from "next/link";

const stayData = {
  heading: "Stay With Us",
  description:
    "Excepteur efficient emerging, minim veniam anim aute carefully curated.",
  bookHref: "/enquire",
  enquireHref: "/enquire",
  bgSrc: "/assets/stay-with-us-bg.webp",
};

export default function StayWithUs() {
  return (
    <section className="stay-with-us general-padding">
      <div className="stay-with-us-container">
        <div className="stay-with-us-bg">
          <Image
            src={stayData.bgSrc}
            alt="Enon Heights landscape"
            fill
            sizes="100vw"
            className="stay-with-us-bg-img"
            loading="eager"
          />
        </div>
        <div className="stay-with-us-inner">
          <div className="stay-with-us-content">
            <div className="stay-with-us-frame" aria-hidden="true" />
            <div className="inner-container">
              <div className="title title-dark-olive">
                <h2>Stay With Us</h2>
              </div>

              <div className="stay-with-us-card align-center">
                <div className="btn-custom">
                  <Link
                    href={stayData.bookHref}
                    aria-label="Book your stay at Enon Heights"
                    className="btn"
                  >
                    <span className="label-up">Book Now</span>
                    <span className="label-up">Book Now</span>
                  </Link>
                </div>
                <Link
                  href={stayData.enquireHref}
                  aria-label="Enquire about staying at Enon Heights"
                  className="cta-link light"
                >
                  Enquire
                </Link>
              </div>

              <div className="content content-dark-light">
                <p>{stayData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
