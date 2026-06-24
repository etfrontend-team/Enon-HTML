export default function DiningFullImageText() {
  return (
    <section className="dfiwt">

      {/* Left: sage-mist panel with leaves + text */}
      <div className="dfiwt__left-col">

        {/* Decorative leaf shadow — mirrored, 20% opacity */}
        <div className="dfiwt__leaves-wrap" aria-hidden="true">
          <div className="dfiwt__leaves-img-wrap">
            <img
              className="dfiwt__leaves-img"
              src="https://www.figma.com/api/mcp/asset/9758c255-6df3-4fc0-9a68-b4229907fbb4"
              alt=""
            />
          </div>
        </div>

        {/* Content */}
        <div className="dfiwt__content">

          <div className="dfiwt__info-group">
            <div className="dfiwt__text-group">
              <p className="pre-heading"><span>Location</span></p>
              <h2 className="dfiwt__title">
                Where the<br />Garden Route Breathes
              </h2>
            </div>
            <p className="dfiwt__desc">
              Enon Heights sits above the Knysna Lagoon, deep in the Garden
              Route, one of South Africa&apos;s most celebrated natural landscapes.
            </p>
          </div>

          <div className="dfiwt__contact-group">
            <div className="dfiwt__contact-details">
              <p className="dfiwt__contact-text">
                Email: info@enonheights.com<br /><br />Tel: 082 5312 413
              </p>
            </div>
            <p className="dfiwt__address">
              Enon Heights Luxury Guest Farm<br />
              Welbedacht Lane, Eastford, Knysna, South Africa
            </p>
          </div>

        </div>
      </div>

      {/* Right: full-bleed image */}
      <div className="dfiwt__right-col">
        <img
          className="dfiwt__img"
          src="/assets/location.jpg"
          alt="Knysna Lagoon view from Enon Heights"
        />
        <div className="dfiwt__img-overlay" aria-hidden="true" />
      </div>

    </section>
  );
}
