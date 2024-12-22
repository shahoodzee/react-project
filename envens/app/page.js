"use client";
import Counter from "@/components/Counter";
import { EventSchedule1 } from "@/components/EventSchedule";
import { HeroSlider1 } from "@/components/HeroSlider";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import dynamic from "next/dynamic";
import Link from "next/link";
const CountDown = dynamic(() => import("@/components/CountDown"), {
  ssr: false,
});

const page = () => {
  const pageStyles = {
    "--envens-base": "#e21e8c",
    "--envens-base-rgb": "226, 30, 140",
    "--envens-black": "#030215",
    "--envens-black-rgb": "3, 2, 21",
  };
  return (
    <EnvensLayouts rootElements={pageStyles} header={1} footer={1}>
      <HeroSlider1 />
      {/*Feature One Start*/}
      <section className="feature-one">
        <div className="feature-one__shape-1 zoominout">
          <img src="assets/images/shapes/feature-one-shape-1.png" alt="" />
        </div>
        <div className="feature-one__shape-2">
          <img src="assets/images/shapes/feature-one-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                <span>//</span> Our Features <span>//</span>
              </span>
            </div>
            <h2 className="section-title__title">
              Feature for your <span>Event</span>
            </h2>
          </div>
          <div className="row">
            {/*Feature One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="feature-one__single">
                <div
                  className="feature-one__single-shape-1"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/feature-one-single-shape-1.png)",
                  }}
                ></div>
                <div className="feature-one__img-box">
                  <div className="feature-one__img">
                    <img src="assets/images/resources/feature-1-1.jpg" alt="" />
                  </div>
                  <div className="feature-one__count" />
                  <div className="feature-one__content">
                    <div className="feature-one__icon">
                      <span className="icon-icon-15151715" />
                    </div>
                    <h3 className="feature-one__title">
                      <Link href="/speaker-single">Confirm Speakers</Link>
                    </h3>
                    <p className="feature-one__text">
                      This high-level structure software
                    </p>
                  </div>
                  <div className="feature-one__btn-box">
                    <Link href="/speaker-single">
                      <span className="fas fa-arrow-circle-right" />
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="feature-one__single">
                <div
                  className="feature-one__single-shape-1"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/feature-one-single-shape-1.png)",
                  }}
                ></div>
                <div className="feature-one__img-box">
                  <div className="feature-one__img">
                    <img src="assets/images/resources/feature-1-2.jpg" alt="" />
                  </div>
                  <div className="feature-one__count" />
                  <div className="feature-one__content">
                    <div className="feature-one__icon">
                      <span className="icon-brain" />
                    </div>
                    <h3 className="feature-one__title">
                      <Link href="/about">Best Digital Ideas</Link>
                    </h3>
                    <p className="feature-one__text">
                      This high-level structure software
                    </p>
                  </div>
                  <div className="feature-one__btn-box">
                    <Link href="/about">
                      <span className="fas fa-arrow-circle-right" />
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div
                  className="feature-one__single-shape-1"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/feature-one-single-shape-1.png)",
                  }}
                ></div>
                <div className="feature-one__img-box">
                  <div className="feature-one__img">
                    <img src="assets/images/resources/feature-1-3.jpg" alt="" />
                  </div>
                  <div className="feature-one__count" />
                  <div className="feature-one__content">
                    <div className="feature-one__icon">
                      <span className="icon-connection" />
                    </div>
                    <h3 className="feature-one__title">
                      <Link href="/contact">Networking People</Link>
                    </h3>
                    <p className="feature-one__text">
                      This high-level structure software
                    </p>
                  </div>
                  <div className="feature-one__btn-box">
                    <Link href="/contact">
                      <span className="fas fa-arrow-circle-right" />
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
          </div>
        </div>
      </section>
      {/*Feature One End*/}
      {/*About One Start*/}
      <section className="about-one">
        <div className="about-one__shape-2 zoominout">
          <img src="assets/images/shapes/about-one-shape-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="about-one__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline">
                      <span>//</span> About Company{" "}
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    International Business <span>Conferences</span>
                  </h2>
                </div>
                <p className="about-one__text">
                  There are many variations of passages of Lorem Ipsum availa
                  <br />
                  but the majority have suffered alteration in some form, by
                  injected
                  <br />
                  humour, or randomised words.
                </p>
                <ul className="about-one__points list-unstyled">
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
                <div className="about-one__timer-box">
                  <div className="timer-box">
                    <div className="countdown-timer">
                      <div className="default-countdown">
                        <div className="box">
                          <div className="countdown time-countdown">
                            <CountDown />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-one__right">
                <div className="about-one__img-box">
                  <div className="about-one__img">
                    <img
                      src="assets/images/resources/about-one-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-one__img-2">
                    <img
                      src="assets/images/resources/about-one-img-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-one__img-3">
                    <img
                      src="assets/images/resources/about-one-img-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-one__shape-1">
                    <img
                      src="assets/images/shapes/about-one-shape-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}
      {/*Team One Start*/}
      <section className="team-one">
        <div className="team-one__bg-shape" />
        <div className="team-one__bg-shape-2" />
        <div className="team-one__bg-box">
          <div
            className="team-one__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/team-one-bg.jpg)",
            }}
          ></div>
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">
                <span>//</span> Our team <span>//</span>{" "}
              </p>
            </div>
            <h2 className="section-title__title">
              Feature for your <span>Event</span>
            </h2>
          </div>
          <div className="row">
            {/*Team One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/team/team-1-1.jpg" alt="" />
                  </div>
                  <div className="team-one__single-shape-1">
                    <img
                      src="assets/images/shapes/team-one-single-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="team-one__single-hover-shape-1">
                    <img
                      src="assets/images/shapes/team-one-single-hover-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="team-one__share-and-social">
                    <div className="team-one__share">
                      <a href="#">
                        <span className="fas fa-share-alt" />
                      </a>
                    </div>
                    <div className="team-one__social">
                      <a href="">
                        <span className="fas fa-wifi" />
                      </a>
                      <a href="">
                        <span className="fab fa-facebook-f" />
                      </a>
                      <a href="">
                        <span className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-one__content">
                  <p className="team-one__sub-title">Expert Singer</p>
                  <h3 className="team-one__title">
                    <Link href="/speaker-single">Ramita Singhania</Link>
                  </h3>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/team/team-1-2.jpg" alt="" />
                  </div>
                  <div className="team-one__single-shape-1">
                    <img
                      src="assets/images/shapes/team-one-single-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="team-one__single-hover-shape-1">
                    <img
                      src="assets/images/shapes/team-one-single-hover-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="team-one__share-and-social">
                    <div className="team-one__share">
                      <a href="#">
                        <span className="fas fa-share-alt" />
                      </a>
                    </div>
                    <div className="team-one__social">
                      <a href="">
                        <span className="fas fa-wifi" />
                      </a>
                      <a href="">
                        <span className="fab fa-facebook-f" />
                      </a>
                      <a href="">
                        <span className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-one__content">
                  <p className="team-one__sub-title">Lead Speaker</p>
                  <h3 className="team-one__title">
                    <Link href="/speaker-single">Saira D. Smith</Link>
                  </h3>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/team/team-1-3.jpg" alt="" />
                  </div>
                  <div className="team-one__single-shape-1">
                    <img
                      src="assets/images/shapes/team-one-single-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="team-one__single-hover-shape-1">
                    <img
                      src="assets/images/shapes/team-one-single-hover-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="team-one__share-and-social">
                    <div className="team-one__share">
                      <a href="#">
                        <span className="fas fa-share-alt" />
                      </a>
                    </div>
                    <div className="team-one__social">
                      <a href="">
                        <span className="fas fa-wifi" />
                      </a>
                      <a href="">
                        <span className="fab fa-facebook-f" />
                      </a>
                      <a href="">
                        <span className="fab fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-one__content">
                  <p className="team-one__sub-title">Expert Musician</p>
                  <h3 className="team-one__title">
                    <Link href="/speaker-single">Makesdora White</Link>
                  </h3>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
          </div>
        </div>
      </section>
      {/*Team One End*/}
      {/*Counter One Start*/}
      <section className="counter-one">
        <div className="counter-one__wrap">
          <div className="container">
            <div className="counter-one__inner">
              <ul className="counter-one__count-list list-unstyled">
                <li className="wow fadeInLeft" data-wow-delay="100ms">
                  <div className="counter-one__single">
                    <div className="counter-one__shape-1">
                      <img
                        src="assets/images/shapes/counter-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="counter-one__count count-box">
                      <h3 className="count-text">
                        <Counter end={47} />
                      </h3>
                    </div>
                    <p className="counter-one__text">Attendees</p>
                  </div>
                </li>
                <li className="wow fadeInLeft" data-wow-delay="200ms">
                  <div className="counter-one__single counter-one__single-bg-black">
                    <div className="counter-one__shape-1">
                      <img
                        src="assets/images/shapes/counter-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="counter-one__count count-box">
                      <h3 className="count-text">
                        <Counter end={203} />
                      </h3>
                    </div>
                    <p className="counter-one__text">CEOs</p>
                  </div>
                </li>
                <li className="wow fadeInLeft" data-wow-delay="300ms">
                  <div className="counter-one__single">
                    <div className="counter-one__shape-1">
                      <img
                        src="assets/images/shapes/counter-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="counter-one__count count-box">
                      <h3 className="count-text">
                        <Counter end={5} />
                      </h3>
                    </div>
                    <p className="counter-one__text">Speakers</p>
                  </div>
                </li>
                <li className="wow fadeInLeft" data-wow-delay="400ms">
                  <div className="counter-one__single counter-one__single-bg-black">
                    <div className="counter-one__shape-1">
                      <img
                        src="assets/images/shapes/counter-one-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="counter-one__count count-box">
                      <h3 className="count-text">
                        <Counter end={311} />
                      </h3>
                    </div>
                    <p className="counter-one__text">Journalists</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Counter One End*/}
      {/*Event One Start*/}
      <EventSchedule1 />
      {/*Event One End*/}
      {/* Sliding Text One Start */}
      <section className="sliding-text-one">
        <div className="sliding-text-one__wrap">
          <ul className="sliding-text__list list-unstyled marquee_mode">
            <li>
              <h2
                data-hover="Treanding Music Event /"
                className="sliding-text__title"
              >
                Treanding Music Event
                <span>/</span>
              </h2>
            </li>
            <li>
              <h2
                data-hover="Treanding Music Event /"
                className="sliding-text__title"
              >
                Treanding Music Event
                <span>/</span>
              </h2>
            </li>
          </ul>
        </div>
      </section>
      {/* Sliding Text One End */}
      {/* Venue One Start */}
      <section className="venue-one">
        <div className="venue-one__shape" />
        <div className="venue-one__shape-2" />
        <div className="venue-one__shape-3 float-bob-y">
          <img src="assets/images/shapes/venue-one-shape-3.png" alt="" />
        </div>
        <div className="venue-one__bg-box">
          <div
            className="venue-one__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/venue-one-bg.jpg)",
            }}
          ></div>
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">
                <span>//</span> About Venue <span>//</span>
              </p>
            </div>
            <h2 className="section-title__title">
              Get in there to <span>Reach</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="venue-one__left">
                <ul className="list-unstyled venue-one__address">
                  <li>
                    <div className="icon">
                      <div
                        className="venue-one__address-shape-1"
                        style={{
                          backgroundImage:
                            "url(assets/images/shapes/venue-one-address-icon-shape-1.png)",
                        }}
                      ></div>
                      <span className="icon-laptop" />
                    </div>
                    <div className="content">
                      <h4>Venue</h4>
                      <p>Grand Conference Hall</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <div
                        className="venue-one__address-shape-1"
                        style={{
                          backgroundImage:
                            "url(assets/images/shapes/venue-one-address-icon-shape-2.png)",
                        }}
                      ></div>
                      <span className="icon-placeholder1" />
                    </div>
                    <div className="content">
                      <h4>Address</h4>
                      <p>
                        1Hd-50, 010 Avenue, NY 9001 <br />
                        United States
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="list-unstyled venue-one__address-two">
                  <li>
                    <h4>Tickets Info</h4>
                    <p>Samira Banwan</p>
                    <p>
                      <a href="tel:00021485503">000 - 214 - 85503</a>
                    </p>
                    <p>
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </p>
                  </li>
                  <li>
                    <h4>Programme Details</h4>
                    <p>Samira Banwan</p>
                    <p>
                      <a href="tel:00021485503">000 - 214 - 85503</a>
                    </p>
                    <p>
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="venue-one__right">
                <div className="venue-one__img img-bounce">
                  <img
                    src="assets/images/resources/venue-one-img-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Venue One End */}
      {/*Gallery One Start*/}
      <section className="gallery-one">
        <div className="gallery-one__shape-1 zoominout">
          <img src="assets/images/shapes/gallery-one-shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="gallery-one__top">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline">
                  <span>//</span> Latest Gallery{" "}
                </p>
              </div>
              <h2 className="section-title__title">
                Memories of Last <br />
                <span>Year</span>
              </h2>
            </div>
            <div className="gallery-one__btn-box">
              <Link href="/gallery" className="gallery-one__btn thm-btn">
                <span className="fas fa-arrow-circle-right" />
                See More Gallery
              </Link>
            </div>
          </div>
          <div className="row">
            {/*Gallery One Single Start*/}
            <div
              className="col-xl-6 col-lg-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="gallery-one__single">
                <div className="gallery-one__img-box">
                  <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-1-1.jpg" alt="" />
                  </div>
                </div>
                <div className="gallery-one__title-box">
                  <p>
                    <span className="icon-marker" />
                    lake Buena Vista
                  </p>
                  <h3>
                    <Link href="/gallery">Adrey Podshivakie</Link>
                  </h3>
                </div>
              </div>
            </div>
            {/*Gallery One Single End*/}
            {/*Gallery One Single Start*/}
            <div
              className="col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-delay="200ms"
            >
              <div className="gallery-one__single gallery-one__single-2">
                <div className="gallery-one__img-box">
                  <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-1-1.jpg" alt="" />
                  </div>
                </div>
                <div className="gallery-one__title-box">
                  <p>
                    <span className="icon-marker" />
                    lake Buena Vista
                  </p>
                  <h3>
                    <Link href="/gallery">Adrey Podshivakie</Link>
                  </h3>
                </div>
              </div>
            </div>
            {/*Gallery One Single End*/}
            {/*Gallery One Single Start*/}
            <div
              className="col-xl-6 col-lg-6 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="gallery-one__single gallery-one__single-3">
                <div className="gallery-one__img-box">
                  <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-1-3.jpg" alt="" />
                  </div>
                </div>
                <div className="gallery-one__title-box">
                  <p>
                    <span className="icon-marker" />
                    lake Buena Vista
                  </p>
                  <h3>
                    <Link href="/gallery">Adrey Podshivakie</Link>
                  </h3>
                </div>
              </div>
            </div>
            {/*Gallery One Single End*/}
            {/*Gallery One Single Start*/}
            <div
              className="col-xl-6 col-lg-6 wow fadeInRight"
              data-wow-delay="400ms"
            >
              <div className="gallery-one__single gallery-one__single-4">
                <div className="gallery-one__img-box">
                  <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-1-4.jpg" alt="" />
                  </div>
                </div>
                <div className="gallery-one__title-box">
                  <p>
                    <span className="icon-marker" />
                    lake Buena Vista
                  </p>
                  <h3>
                    <Link href="/gallery">Adrey Podshivakie</Link>
                  </h3>
                </div>
              </div>
            </div>
            {/*Gallery One Single End*/}
          </div>
        </div>
      </section>
      {/*Gallery One End*/}
      {/*Category One Start*/}
      <section className="category-one">
        <div className="category-one__bg-shape" />
        <div className="category-one__bg-shape-2" />
        <div className="category-one__bg-box">
          <div
            className="category-one__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/category-one-bg.jpg)",
            }}
          ></div>
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">
                <span>//</span> Everything in the Event <span>//</span>
              </p>
            </div>
            <h2 className="section-title__title">
              Music Event <span>Category</span>
            </h2>
          </div>
          <div className="row">
            {/*Category One Single Start*/}
            <div className="col-xl-4">
              <div className="category-one__single">
                <div className="category-one__count" />
                <div className="category-one__icon">
                  <span className="icon-guitar" />
                </div>
                <div className="category-one__text-box">
                  <p className="category-one__text">
                    There are many variation of passages
                    <br />
                    of Lorem Ipsum availa atst, but majority have
                    <br />
                    best suffered alteration in somany
                    <br />
                    sum variation atst but...
                  </p>
                  <h3 className="category-one__title">
                    <Link href="/about">Rock</Link>
                  </h3>
                </div>
              </div>
            </div>
            {/*Category One Single End*/}
            {/*Category One Single Start*/}
            <div className="col-xl-4">
              <div className="category-one__single-inner">
                <div className="category-one__shape-1">
                  <img
                    src="assets/images/shapes/category-one-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="category-one__shape-2">
                  <img
                    src="assets/images/shapes/category-one-shape-2.png"
                    alt=""
                  />
                </div>
                <div className="category-one__single">
                  <div className="category-one__count" />
                  <div className="category-one__icon">
                    <span className="icon-trumpet" />
                  </div>
                  <div className="category-one__text-box">
                    <p className="category-one__text">
                      There are many variation of passages
                      <br />
                      of Lorem Ipsum availa atst, but majority have
                      <br />
                      best suffered alteration in somany
                      <br />
                      sum variation atst but...
                    </p>
                    <h3 className="category-one__title">
                      <Link href="/about">Instrumental</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/*Category One Single End*/}
            {/*Category One Single Start*/}
            <div className="col-xl-4">
              <div className="category-one__single">
                <div className="category-one__count" />
                <div className="category-one__icon">
                  <span className="icon-sitar" />
                </div>
                <div className="category-one__text-box">
                  <p className="category-one__text">
                    There are many variation of passages
                    <br />
                    of Lorem Ipsum availa atst, but majority have
                    <br />
                    best suffered alteration in somany
                    <br />
                    sum variation atst but...
                  </p>
                  <h3 className="category-one__title">
                    <Link href="/about">Folk</Link>
                  </h3>
                </div>
              </div>
            </div>
            {/*Category One Single End*/}
          </div>
        </div>
      </section>
      {/*Category One End*/}
      {/*Contact One Start*/}
      <section className="contact-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">
                <span>//</span> Get Every Updates <span>//</span>
              </p>
            </div>
            <h2 className="section-title__title">
              Books your Ticket <span>Now</span>
            </h2>
          </div>
          <div
            className="contact-one__inner wow fadeInUp"
            data-wow-delay="300ms"
          >
            <form
              className="contact-form-validated contact-one__form"
              action="assets/inc/sendemail.php"
              method="post"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-xl-4">
                  <div className="contact-one__input-box">
                    <input
                      type="text"
                      name="username"
                      placeholder="Your Name"
                      required=""
                    />
                    <div className="contact-one__input-box-icon">
                      <span className="far fa-user" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="contact-one__input-box">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <div className="contact-one__input-box-icon">
                      <span className="far fa-envelope-open" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="contact-one__input-box">
                    <div className="select-box">
                      <select className="wide">
                        <option data-display="Select Subject">Subject</option>
                        <option value={1}>Select Your Price Tab</option>
                        <option value={2}>Select Subject 02</option>
                        <option value={3}>Select Subject 03</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact-one__btn-box">
                    <button type="submit" className="thm-btn contact-one__btn">
                      <span className="fas fa-arrow-circle-right" />
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="result" />
          </div>
        </div>
      </section>
      {/*Contact One End*/}
      {/* Blog One Start */}
      <section className="blog-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 wow fadeInLeft" data-wow-delay="100ms">
              <div className="blog-one__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline">
                      <span>//</span> News &amp; Blog
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    Events Articles &amp; <br /> <span>Updates</span>
                  </h2>
                </div>
                <p className="blog-one__text-1">
                  There are many variations of passages of Lorem Ipsum availa
                  at, but majority have suffered alteration in some form, by
                  injected humour, or rando mised words.
                </p>
                <Link href="/blog" className="blog-one__btn thm-btn">
                  <span className="fas fa-arrow-circle-right" />
                  See More Blog
                </Link>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="blog-one__right">
                <ul className="list-unstyled blog-one__list">
                  <li className="wow fadeInUp" data-wow-delay="200ms">
                    <div className="blog-one__single">
                      <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                      </div>
                      <div className="blog-one__content">
                        <p className="blog-one__sub-title">Conference</p>
                        <h3 className="blog-one__title">
                          <Link href="/blog-details">
                            What Events your life made <br />
                            happy
                          </Link>
                        </h3>
                        <p className="blog-one__text">
                          Lorem sium avail but majority have suffered <br />
                          alteration in some form, by
                        </p>
                        <div className="blog-one__date">
                          <p>
                            {" "}
                            <span>24</span> November
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="300ms">
                    <div className="blog-one__single">
                      <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                      </div>
                      <div className="blog-one__content">
                        <p className="blog-one__sub-title">Announce</p>
                        <h3 className="blog-one__title">
                          <Link href="/blog-details">
                            The Most Common types of <br />
                            Events
                          </Link>
                        </h3>
                        <p className="blog-one__text">
                          Lorem sium avail but majority have suffered <br />
                          alteration in some form, by
                        </p>
                        <div className="blog-one__date">
                          <p>
                            {" "}
                            <span>17</span> October
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="wow fadeInUp" data-wow-delay="400ms">
                    <div className="blog-one__single">
                      <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                      </div>
                      <div className="blog-one__content">
                        <p className="blog-one__sub-title">Conference</p>
                        <h3 className="blog-one__title">
                          <Link href="/blog-details">
                            Paris Blockchain summit new <br />
                            slogan
                          </Link>
                        </h3>
                        <p className="blog-one__text">
                          Lorem sium avail but majority have suffered <br />
                          alteration in some form, by
                        </p>
                        <div className="blog-one__date">
                          <p>
                            {" "}
                            <span>08</span> February
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog One End */}
      {/* Brand One Start */}
      <section className="brand-one">
        <div className="brand-one__shape-1 zoominout">
          <img src="assets/images/shapes/brand-one-shape-1.png" alt="" />
        </div>
        <div className="container">
          <ul className="list-unstyled brand-one__list">
            <li>
              <div className="brand-one__img">
                <img src="assets/images/brand/brand-1-1.png" alt="" />
              </div>
            </li>
            <li>
              <div className="brand-one__img">
                <img src="assets/images/brand/brand-1-2.png" alt="" />
              </div>
            </li>
            <li>
              <div className="brand-one__img">
                <img src="assets/images/brand/brand-1-3.png" alt="" />
              </div>
            </li>
            <li>
              <div className="brand-one__img">
                <img src="assets/images/brand/brand-1-4.png" alt="" />
              </div>
            </li>
            <li>
              <div className="brand-one__img">
                <img src="assets/images/brand/brand-1-5.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Brand One End */}
    </EnvensLayouts>
  );
};
export default page;
