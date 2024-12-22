import Link from "next/link";

const Team = () => {
  return (
    <section className="team-two">
      <div
        className="team-two__bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/team-two-bg.jpg)",
        }}
      />
      <div className="container">
        <div className="team-two__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline section-title__tagline--two">
                <span>//</span> About The Event
              </p>
            </div>
            <h2 className="section-title__title">
              Our Creative Event <br />
              <span>Speakers</span>
            </h2>
          </div>
          <p className="team-two__text">
            Whether designing a cozy apartment for a young couple or
            <br />
            luxurious penthouse for a discerning client, the goal remains the
            <br />
            same: to craft environments that inspire
          </p>
        </div>
        <div className="row">
          {/*Team Two Single Start*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="team-two__single">
              <div className="team-two__img">
                <img src="assets/images/team/team-2-1.png" alt="" />
              </div>
              <div className="team-two__social">
                <a href="#">
                  <span className="fab fa-twitter" />
                </a>
                <a href="#" className="team-two__social-two">
                  <span className="fab fa-facebook-f" />
                </a>
                <a href="#" className="team-two__social-three">
                  <span className="fab fa-instagram" />
                </a>
                <a href="#">
                  <span className="fab fa-vimeo-v" />
                </a>
              </div>
              <div className="team-two__content">
                <p className="team-two__sub-title">Ceo Founder</p>
                <h3 className="team-two__title">
                  <Link href="/speaker-single">James Smith</Link>
                </h3>
                <p className="team-two__single-text">
                  This includes websites
                  <br /> digital platforms.
                </p>
              </div>
            </div>
          </div>
          {/*Team Two Single End*/}
          {/*Team Two Single Start*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="team-two__single">
              <div className="team-two__img">
                <img src="assets/images/team/team-2-2.png" alt="" />
              </div>
              <div className="team-two__social">
                <a href="#">
                  <span className="fab fa-twitter" />
                </a>
                <a href="#" className="team-two__social-two">
                  <span className="fab fa-facebook-f" />
                </a>
                <a href="#" className="team-two__social-three">
                  <span className="fab fa-instagram" />
                </a>
                <a href="#">
                  <span className="fab fa-vimeo-v" />
                </a>
              </div>
              <div className="team-two__content">
                <p className="team-two__sub-title">Ceo Founder</p>
                <h3 className="team-two__title">
                  <Link href="/speaker-single">Robert Smith</Link>
                </h3>
                <p className="team-two__single-text">
                  This includes websites
                  <br /> digital platforms.
                </p>
              </div>
            </div>
          </div>
          {/*Team Two Single End*/}
          {/*Team Two Single Start*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
            data-wow-delay="600ms"
          >
            <div className="team-two__single">
              <div className="team-two__img">
                <img src="assets/images/team/team-2-3.png" alt="" />
              </div>
              <div className="team-two__social">
                <a href="#">
                  <span className="fab fa-twitter" />
                </a>
                <a href="#" className="team-two__social-two">
                  <span className="fab fa-facebook-f" />
                </a>
                <a href="#" className="team-two__social-three">
                  <span className="fab fa-instagram" />
                </a>
                <a href="#">
                  <span className="fab fa-vimeo-v" />
                </a>
              </div>
              <div className="team-two__content">
                <p className="team-two__sub-title">Ceo Founder</p>
                <h3 className="team-two__title">
                  <Link href="/speaker-single">Michael Smith</Link>
                </h3>
                <p className="team-two__single-text">
                  This includes websites
                  <br /> digital platforms.
                </p>
              </div>
            </div>
          </div>
          {/*Team Two Single End*/}
          {/*Team Two Single Start*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
            data-wow-delay="900ms"
          >
            <div className="team-two__single">
              <div className="team-two__img">
                <img src="assets/images/team/team-2-4.png" alt="" />
              </div>
              <div className="team-two__social">
                <a href="#">
                  <span className="fab fa-twitter" />
                </a>
                <a href="#" className="team-two__social-two">
                  <span className="fab fa-facebook-f" />
                </a>
                <a href="#" className="team-two__social-three">
                  <span className="fab fa-instagram" />
                </a>
                <a href="#">
                  <span className="fab fa-vimeo-v" />
                </a>
              </div>
              <div className="team-two__content">
                <p className="team-two__sub-title">Ceo Founder</p>
                <h3 className="team-two__title">
                  <Link href="/speaker-single">William Smith</Link>
                </h3>
                <p className="team-two__single-text">
                  This includes websites
                  <br /> digital platforms.
                </p>
              </div>
            </div>
          </div>
          {/*Team Two Single End*/}
        </div>
      </div>
    </section>
  );
};
export default Team;
