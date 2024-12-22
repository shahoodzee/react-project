import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="about-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__left">
              <div
                className="about-two__img"
                style={{
                  backgroundImage:
                    "url(assets/images/resources/about-two-img-2.png)",
                }}
              />
            </div>
          </div>
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
            <div className="about-two__right">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <p className="section-title__tagline section-title__tagline--two">
                    <span>//</span> About Company
                  </p>
                </div>
                <h2 className="section-title__title">
                  International Business <span>Conferences</span>
                </h2>
              </div>
              <p className="about-two__text">
                There are many variations of passages of Lorem Ipsum availa
                <br />
                ble, but the majority have suffered alteration in some form, by
                injected
                <br /> humour, or randomised words.
              </p>
              <div className="about-two__solution-box">
                <div className="about-two__solution-single">
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p className="about-two__solition-text">
                    Solution for small &amp;
                    <br /> large businesses
                  </p>
                </div>
                <div className="about-two__solution-single">
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p className="about-two__solition-text">
                    Solution for small &amp;
                    <br /> large businesses
                  </p>
                </div>
              </div>
              <ul className="about-two__points list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p>It has survived not only five centuries</p>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-check-1" />
                  </div>
                  <p>Lorem Ipsum has been the ndustry standard dummy text</p>
                </li>
              </ul>
              <div className="about-two__btn-and-client-info">
                <div className="about-two__btn-box">
                  <Link href="/about" className="about-two__btn thm-btn-two">
                    <span className="fas fa-arrow-circle-right" />
                    Discover more
                  </Link>
                </div>
                <div className="about-two__client-info">
                  <div className="about-two__client-img">
                    <img
                      src="assets/images/resources/about-two-client-img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Mike Hardson</h4>
                    <p>CEO of Agrion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
