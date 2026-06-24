export default function FullImageWithText() {
  return (
    <section className="full-image-text">

      <div className="full-image-text__image-column">
        <div className="full-image-text__image-wrapper">
          <img
            className="full-image-text__image"
            src="/assets/dining.jpg"
            alt="Fresh herbs from the kitchen garden"
          />
        </div>
      </div>

      <div className="full-image-text__content-column">
        <div className="full-image-text__content">

          <div className="full-image-text__heading-group">
            <div className="pre-heading">
              <span>Dining</span>
            </div>
            <div className="title title-dark">
            <h2 className="full-image-text__title">
              Where the Harvest
              Becomes the Experience
            </h2>
            </div>
          </div>

          <div className="full-image-text__description-wrapper content content0-dark">
            <p className="full-image-text__description">
              Every dish begins a few steps from your table. Our kitchen garden
              and working farm supply what the season offers, nothing more,
              nothing less.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}