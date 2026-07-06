import Image from "next/image";
import Link from "next/link";

const stayData = {
  heading: "Stay With Us",
  description:
    "Excepteur efficient emerging, minim veniam anim aute carefully curated.",
  bookHref: "/enquire",
  enquireHref: "/enquire",
  bgSrc: "/images/stay-with-us-bg.webp",
};

export default function StayWithUs() {
  return (
    <section className="stay-with-us general-padding">
      <div className="stay-with-us-bg">
        <Image
          src={stayData.bgSrc}
          alt="Enon Heights landscape"
          fill
          sizes="100vw"
          className="stay-with-us-bg-img"
        />
      </div>

      {/* Off-white frame overlay — creates the matted border effect */}
      <div className="stay-with-us-frame" aria-hidden="true" />

      <div className="stay-with-us-inner">
        <div className="stay-with-us-content">
          <div className="title title-dark-olive">
            <h2>Stay With Us</h2>
          </div>

          <div className="stay-with-us-card align-center">
            <Link
              href={stayData.bookHref}
              aria-label="Book your stay at Enon Heights"
              className="btn"
            >
              Book Now
            </Link>
            <Link
              href={stayData.enquireHref}
              aria-label="Enquire about staying at Enon Heights"
              className="cta-link light"
            >
              Enquire
            </Link>
          </div>

          <div className="content content-dark max-w-560">
            <p>{stayData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
