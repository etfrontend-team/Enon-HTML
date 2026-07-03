export default function FullImageWithText() {
  return (
    <section className="full-image-text image-right general-padding">
      <div className="container-fluid">
      <div className="full-image-text-inner image-right">
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
      <div className="full-image-text__content-bg-image">
          <img
            className="full-image-text__image"
            src="/assets/shadow-image-bg.png"
            alt="Fresh herbs from the kitchen garden"
          />
      </div>
        <div className="full-image-text__content align-center">
          <div className="full-image-text__heading-group">
            <div className="pre-heading">
              <span>Dining</span>
            </div>
            <div className="title title-dark-olive">
            <h2 className="full-image-text__title">
              Where the Harvest
              Becomes the Experience
            </h2>
            </div>
          </div>

          <div className="full-image-text__description-wrapper content content-dark-light">
            <p className="full-image-text__description">
              Every dish begins a few steps from your table. Our kitchen garden
              and working farm supply what the season offers, nothing more,
              nothing less.
            </p>
            <p className="full-image-text__description">
              <a href="">Email: info@enonheights.com</a> 
              <br></br>
              <a href="">Tel: 082 5312 413</a>
            </p>
          </div>
          </div>
        </div>
      </div>
      
        </div>

    </section>
  );
}