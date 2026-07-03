export default function HeroBanner() {
  return (
    <section className="hero-banner general-padding">
      <div className="hero-banner__inner">

        <div className="hero-banner__bg" aria-hidden="true">
          <img
            className="hero-banner__bg-img "
            src="/assets/hero-banner.png"
            alt=""
          />
          <div className="hero-banner__bg-overlay" />
        </div>
      
        <div className="hero-banner__card-group" aria-hidden="true">
          <div className="hero-banner__card">
            <img
              className="hero-banner__card-img"
              src="/assets/hero-banner-inner.jpg"
              alt="Knysna Lagoon suite view"
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
    </section>
  );
}
