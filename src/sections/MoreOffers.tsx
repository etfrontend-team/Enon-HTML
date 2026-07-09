import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    title: "Midweek Escape",
    description:
      "Monday – Thursday stays from R 3 800 / night. Includes a complimentary bottle of wine on arrival.",
    valid: "Valid:Oct – Apr 2026",
    image: "/images/more-offers-midweek.jpg",
    alt: "Pool terrace overlooking the ocean at Enon Heights",
    imageClass: "more-offer-card__image--midweek",
  },
  {
    title: "Exclusive Use Enquiry Rate",
    description:
      "Book all five rooms for your group. Rates from R 22 000 per night, bespoke packages available.",
    valid: "Valid: Year Round",
    image: "/images/more-offers-exclusive-use.jpg",
    alt: "Warm bedroom suite with golden curtains at Enon Heights",
    imageClass: "more-offer-card__image--exclusive",
  },
];

export default function MoreOffers() {
  return (
    <section className="more-offers" aria-labelledby="more-offers-title">
      <div className="container-fluid-lg">
        <div className="more-offers__inner">
          <p className="more-offers__eyebrow" id="more-offers-title">
            More Offers
          </p>

          <div className="more-offers__grid">
            {offers.map((offer, index) => (
              <article className="more-offer-card" key={offer.title}>
                <div className="more-offer-card__media">
                  <div className="more-offer-card__image-wrap">
                    <Image
                      fill
                      sizes="(max-width: 767px) 340px, (max-width: 1199px) 44vw, 563px"
                      src={offer.image}
                      alt={offer.alt}
                      className={`more-offer-card__image ${offer.imageClass}`}
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="more-offer-card__body">
                  <div className="title title-dark-olive more-offer-card__title">
                    <h3>{offer.title}</h3>
                  </div>

                  <div className="more-offer-card__details">
                    <div className="more-offer-card__copy">
                      <p className="more-offer-card__description">
                        {offer.description}
                      </p>
                      <p className="more-offer-card__valid">{offer.valid}</p>
                    </div>

                    <Link
                      href="#enquire"
                      aria-label={`Enquire about ${offer.title}`}
                      className="cta-link"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
