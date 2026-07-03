import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="hero-banner general-padding">
      <div className="hero-banner__inner">

        <div className="hero-banner__bg" aria-hidden="true">
          <Image
            fill
            sizes="100vw"
            className="hero-banner__bg-img"
            src="/assets/hero-banner.png"
            alt=""
            role="presentation"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero-banner__bg-overlay" />
        </div>

        <div className="hero-banner__card-group" aria-hidden="true">
          <div className="hero-banner__card">
            <Image
              fill
              sizes="(max-width: 425px) 230px, (max-width: 1366px) 300px, 310px"
              className="hero-banner__card-img"
              src="/assets/hero-banner-inner.jpg"
              alt="Knysna Lagoon suite view"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="hero-banner__content">
          <div className="hero-banner__title-wrap">
            <div className="title title-off-white">
              <h1 className="hero-banner__title">
                Stay in the Heart of the Garden Route.
              </h1>
            </div>
          </div>
          <div className="content content-off-white">
            <p className="hero-banner__desc">
              Each suite is a private retreat. Set above the Knysna Lagoon in the heart of the Garden Route.
            </p>
          </div>
        </div>

      </div>
      <div className="feature-grid">
        <div className="feature-grid__inner">
            <div className="item">
                <div className="title">
                    <h4>Key Features</h4>
                </div>
            </div>
            <div className="item">
                <div className="title">
                    <h4>Key Features</h4>
                </div>
            </div>
            <div className="item">
                <div className="title">
                    <h4>Key Features</h4>
                </div>
            </div>
            <div className="item">
                <div className="title">
                    <h4>Key Features</h4>
                </div>
            </div>
            <div className="item">
                <div className="title">
                    <h4>Key Features</h4>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}
