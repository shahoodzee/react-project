import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Speaker Single"} />
      <section className="speaker-single">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="speaker-single__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline section-title__tagline--two">
                      <span>//</span> Team Info
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    Our Sweet Member <span>Information</span>
                  </h2>
                </div>
                <div className="speaker-single__info-box">
                  <ul className="speaker-single__info-list list-unstyled">
                    <li>
                      <p>
                        Phone :<a href="tel:123444100">123 - 4441 -00</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Email :
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Gender :<span>Female</span>
                      </p>
                    </li>
                  </ul>
                  <ul className="speaker-single__info-list list-unstyled">
                    <li>
                      <p>
                        Address :<span>Raselina, New York</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Website :
                        <a href="mailto:Webexample.com">Webexample.com</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Nationality :<span>African</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="speaker-single__contact-us">
                  <a href="#" className="speaker-single__btn">
                    Contact Us
                  </a>
                  <a href="#" className="speaker-single__btn-arrow">
                    <span className="icon-right-up" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="speaker-single__right">
                <div className="speaker-single__img-box">
                  <div className="speaker-single__img">
                    <img
                      src="assets/images/team/speaker-single-img-1.jpg"
                      alt
                    />
                  </div>
                  <div className="speaker-single__img-shape" />
                  <div className="speaker-single__share-and-social">
                    <div className="speaker-single__share">
                      <a href="#">
                        <span className="fas fa-share-alt" />
                      </a>
                    </div>
                    <div className="speaker-single__social">
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <span className="fab fa-vimeo-v" />
                      </a>
                      <a href="#">
                        <span className="fas fa-wifi" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="speaker-single__content">
                  <h3>
                    <a href="#">Samira B. Tim</a>
                  </h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="speaker-single__bottom">
            <div className="speaker-bottom__img-and-content">
              <div className="speaker-bottom__img">
                <img
                  src="assets/images/team/speaker-single-bottom-img.jpg"
                  alt
                />
                <div className="speaker-bottom__social">
                  <a href="#">
                    <span className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <span className="fas fa-wifi" />
                  </a>
                </div>
              </div>
              <div className="speaker-bottom__content">
                <ul className="speaker-bottom__meta list-unstyled">
                  <li>
                    <p>
                      <span className="icon-time" />
                      08:00am - 05:00pm
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="icon-marker" />
                      New Hyde, 11040
                    </p>
                  </li>
                </ul>
                <h3 className="speaker-bottom__title">
                  Greetings and Opening Event
                </h3>
                <p className="speaker-bottom__text">
                  Undertake specific mandates to address global and
                  responsibilities the authority by delegated to the highest
                  methood...
                </p>
                <p className="speaker-bottom__client-name">
                  Host By : <span>Martin Lanmoua</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EnvensLayouts>
  );
};
export default page;
