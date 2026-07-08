import Image from "next/image";

const intro =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula";

const copy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.";

const features = [
  {
    title: "Feature 1",
    image: "/images/feature-card-1.jpg",
    alt: "Fresh greens in a basket at Enon Heights",
    imageClass: "",
  },
  {
    title: "Feature 2",
    image: "/images/feature-card-2.jpg",
    alt: "Warm dining space at Enon Heights",
    imageClass: "",
  },
  {
    title: "Feature 3",
    image: "/images/feature-card-3.jpg",
    alt: "Breakfast table at Enon Heights",
    imageClass: "feature-card__image--crop-tall",
  },
  {
    title: "Feature 4",
    image: "/images/feature-card-4.jpg",
    alt: "Poolside drinks and board game at Enon Heights",
    imageClass: "feature-card__image--crop-extra-tall",
  },
];

export default function FeatureCards() {
  return (
    <section className="feature-cards general-padding">
      <div className="container-fluid-lg">
        <div className="feature-cards__inner">
          <div className="feature-cards__header">
            <div className="title title-dark-olive">
              <h2>Features</h2>
            </div>
            <div className="content content-dark-light">
              <p>{intro}</p>
            </div>
          </div>

          <div className="feature-cards__grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-card__media">
                  <div className="feature-card__image-wrap">
                    <Image
                      fill
                      sizes="(max-width: 767px) 340px, (max-width: 1199px) 44vw, 529px"
                      src={feature.image}
                      alt={feature.alt}
                      className={`feature-card__image ${feature.imageClass}`.trim()}
                      priority={index < 2}
                    />
                  </div>
                </div>

                <div className="feature-card__body">
                  <div className="title title-dark-olive">
                    <h3>{feature.title}</h3>
                  </div>
                  <div className="content content-dark-light">
                    <p>{copy}</p>
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
