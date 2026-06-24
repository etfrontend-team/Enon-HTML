export default function FullImageWithText() {
  return (
    <section className="fiwt">

      {/* Left: full-bleed image */}
      <div className="fiwt__img-col">
        <div className="fiwt__img-wrap">
          <img
            className="fiwt__img"
            src="/assets/dining.jpg"
            alt="Fresh herbs from the kitchen garden"
          />
        </div>
      </div>

      {/* Right: sage content panel */}
      <div className="fiwt__content-col">
        <div className="fiwt__body">

          <div className="fiwt__text-group">
            <p className="pre-heading"><span>Dining</span></p>
            <h2 className="fiwt__title">
              Where the Harvest<br />Becomes the Experience
            </h2>
          </div>

          <div className="fiwt__desc-wrap">
            <p className="fiwt__desc">
              Every dish begins a few steps from your table. Our kitchen garden
              and working farm supply what the season offers, nothing more,
              nothing less
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
