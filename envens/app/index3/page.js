import Counter from "@/components/Counter";
import { EventSchedule2 } from "@/components/EventSchedule";
import { HeroSlider3 } from "@/components/HeroSlider";
import { Pricing2 } from "@/components/Pricing";
import TeamSlider from "@/components/TeamSlider";
import { TestimonialSlider2 } from "@/components/TestimonialsSlider";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import dynamic from "next/dynamic";
import Link from "next/link";
const CountDown = dynamic(() => import("@/components/CountDown"), {
  ssr: false,
});
const Gallary = dynamic(() => import("@/components/Gallary"), {
  ssr: false,
});

const page = () => {
  const pageStyles = {
    "--envens-base": "#ff3639",
    "--envens-base-rgb": "255, 54, 57",
    "--envens-black": "#04171a",
    "--envens-black-rgb": "4, 23, 26",
  };
  return (
    <EnvensLayouts header={3} rootElements={pageStyles}>
      {/* /.stricky-header */}
      {/*Main Slider Start*/}
      <HeroSlider3 />
      {/*Main Slider End*/}
      {/*About Three Start*/}
      <section className="about-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms">
              <div className="about-three__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline section-title__tagline--two">
                      <span>//</span> About Company
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    International Greatest <span>Conferences</span>
                  </h2>
                </div>
                <p className="about-three__text">
                  Vestibulum tellus. Curabitur nlputate justo elit, at elementum
                  ates pulvinar vel. in a Pellentesque habitant morbi tristique.
                  Pellentesque habitant justo tristique.
                </p>
                <ul className="about-three__points list-unstyled">
                  <li>
                    <div className="icon">
                      <div
                        className="about-three__points-icon-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shapes/about-three-points-icon-shape.png)",
                        }}
                      ></div>
                      <span className="icon-connection" />
                    </div>
                    <div className="content">
                      <h4>Target Audience</h4>
                      <p>
                        Utilize social media platforms, email newsletters, and{" "}
                        <br />
                        partnerships with event organizers
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <div
                        className="about-three__points-icon-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shapes/about-three-points-icon-shape.png)",
                        }}
                      ></div>
                      <span className="icon-team" />
                    </div>
                    <div className="content">
                      <h4>20+ Main Sponser</h4>
                      <p>
                        Utilize social media platforms, email newsletters, and{" "}
                        <br />
                        partnerships with event organizers
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="about-three__btn-and-user-box">
                  <div className="about-three__btn-box">
                    <Link
                      href="/about"
                      className="about-three__btn thm-btn-two"
                    >
                      <span className="fas fa-arrow-circle-right" />
                      Discover more
                    </Link>
                  </div>
                  <div className="about-three__user-info">
                    <div className="about-three__user-img">
                      <img
                        src="assets/images/resources/about-user-user-img.jpg"
                        alt=""
                      />
                    </div>
                    <div className="about-three__user-sign">
                      <p>Mike Hardson</p>
                      <span>CEO of Agrion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-three__right">
                <div
                  className="about-three__img"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/about-three-img-shape-1.png)",
                  }}
                />
                <div className="about-three__experience">
                  <div className="about-three__experience-count count-box">
                    <h3 className="count-text">
                      <Counter end={15} />
                    </h3>
                    <span>+</span>
                    <p>Years</p>
                  </div>
                  <p className="about-three__experience-text">of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Three End*/}
      {/*Countdown One Start*/}
      <section className="countdown-two">
        <div className="container">
          <div
            className="countdown-two__inner wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div
              className="countdown-two__bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/countdown-two-bg.jpg)",
              }}
            />
            <div className="countdown-two__countdown-timer-box">
              <div className="countdown time-countdown-three">
                <CountDown />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Countdown One End*/}
      {/*Feature Two Start*/}
      <section className="feature-two">
        <div className="feature-two__wrap">
          <div
            className="feature-two__shape-bg float-bob-y"
            style={{
              backgroundImage:
                "url(assets/images/shapes/feature-two-shape-bg.png)",
            }}
          />
          <div className="feature-two__shape-1">
            <img src="assets/images/shapes/feature-two-shape-1.png" alt="" />
          </div>
          <div className="feature-two__shape-2">
            <img src="assets/images/shapes/feature-two-shape-2.png" alt="" />
          </div>
          <div className="feature-two__shape-3">
            <img src="assets/images/shapes/feature-two-shape-3.png" alt="" />
          </div>
          <div className="feature-two__shape-4">
            <img src="assets/images/shapes/feature-two-shape-4.png" alt="" />
          </div>
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline">
                  <span>//</span> Our Features <span>//</span>{" "}
                </p>
              </div>
              <h2 className="section-title__title">
                Features For Our Client For <br /> <span>Your Event</span>
              </h2>
            </div>
            <div className="row">
              {/*Feature Two Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="feature-two__single">
                  <div className="feature-two__img">
                    <img
                      src="assets/images/resources/feature-two-1-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="feature-two__content">
                    <h4 className="feature-two__title">
                      <Link href="/speaker">Confirm Speakers</Link>
                    </h4>
                    <div className="feature-two__icon-and-text">
                      <div className="feature-two__icon">
                        <span className="icon-icon-15151715" />
                      </div>
                      <p className="feature-two__text">
                        This invol high-level structure <br />
                        of software system.
                      </p>
                    </div>
                    <div className="feature-two__btn-box">
                      <Link href="/speaker" className="feature-two__btn">
                        More Details <span className="icon-right-up" />{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="feature-two__count" />
                </div>
              </div>
              {/*Feature Two Single End*/}
              {/*Feature Two Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="feature-two__single">
                  <div className="feature-two__img">
                    <img
                      src="assets/images/resources/feature-two-1-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="feature-two__content">
                    <h4 className="feature-two__title">
                      <Link href="/about">Best Digital Ideas</Link>
                    </h4>
                    <div className="feature-two__icon-and-text">
                      <div className="feature-two__icon">
                        <span className="icon-brain" />
                      </div>
                      <p className="feature-two__text">
                        This invol high-level structure <br />
                        of software system.
                      </p>
                    </div>
                    <div className="feature-two__btn-box">
                      <Link href="/about" className="feature-two__btn">
                        More Details <span className="icon-right-up" />{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="feature-two__count" />
                </div>
              </div>
              {/*Feature Two Single End*/}
              {/*Feature Two Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="feature-two__single">
                  <div className="feature-two__img">
                    <img
                      src="assets/images/resources/feature-two-1-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="feature-two__content">
                    <h4 className="feature-two__title">
                      <Link href="/contact">Networking People</Link>
                    </h4>
                    <div className="feature-two__icon-and-text">
                      <div className="feature-two__icon">
                        <span className="icon-connection" />
                      </div>
                      <p className="feature-two__text">
                        This invol high-level structure <br />
                        of software system.
                      </p>
                    </div>
                    <div className="feature-two__btn-box">
                      <Link href="/contact" className="feature-two__btn">
                        More Details <span className="icon-right-up" />{" "}
                      </Link>
                    </div>
                  </div>
                  <div className="feature-two__count" />
                </div>
              </div>
              {/*Feature Two Single End*/}
            </div>
          </div>
        </div>
      </section>
      {/*Feature Two End*/}
      {/*Events Three Start*/}
      <EventSchedule2 />
      {/*Events Three End*/}
      {/*Team Three Start*/}
      <TeamSlider />
      {/*Team Three End*/}
      {/*Pricing Two Start*/}
      <Pricing2 />
      {/*Pricing Two End*/}
      {/*Gallery Two Start*/}
      <Gallary />
      {/*Gallery Two End*/}
      {/*Brand Three Start*/}
      <section className="brand-three">
        <div className="brand-three__wrap">
          <div
            className="brand-three__shape-bg float-bob-y"
            style={{
              backgroundImage:
                "url(assets/images/shapes/brand-three-shape-bg.png)",
            }}
          />
          <div className="brand-three__shape-1">
            <img src="assets/images/shapes/brand-three-shape-1.png" alt="" />
          </div>
          <div className="brand-three__shape-2">
            <img src="assets/images/shapes/brand-three-shape-2.png" alt="" />
          </div>
          <div className="brand-three__shape-3">
            <img src="assets/images/shapes/brand-three-shape-3.png" alt="" />
          </div>
          <div className="brand-three__shape-4">
            <img src="assets/images/shapes/brand-three-shape-4.png" alt="" />
          </div>
          <div className="container">
            <div className="brand-three__inner">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    <span>//</span> Sponsors <span>//</span>
                  </span>
                </div>
                <h2 className="section-title__title">
                  Our Company Official <br /> <span>Sponsors</span>
                </h2>
              </div>
              <ul className="list-unstyled brand-three__list">
                <li>
                  <div className="brand-three__img-box">
                    <div className="brand-three__img">
                      <img src="assets/images/brand/brand-3-1.png" alt="" />
                    </div>
                    <div className="brand-three__img-hover">
                      <img
                        src="assets/images/brand/brand-3-1-hover.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="brand-three__img-box">
                    <div className="brand-three__img">
                      <img src="assets/images/brand/brand-3-2.png" alt="" />
                    </div>
                    <div className="brand-three__img-hover">
                      <img
                        src="assets/images/brand/brand-3-2-hover.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="brand-three__img-box">
                    <div className="brand-three__img">
                      <img src="assets/images/brand/brand-3-3.png" alt="" />
                    </div>
                    <div className="brand-three__img-hover">
                      <img
                        src="assets/images/brand/brand-3-3-hover.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="brand-three__img-box">
                    <div className="brand-three__img">
                      <img src="assets/images/brand/brand-3-4.png" alt="" />
                    </div>
                    <div className="brand-three__img-hover">
                      <img
                        src="assets/images/brand/brand-3-4-hover.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-unstyled brand-three__list brand-three__list--two">
                <li>
                  <div className="brand-three__img-box">
                    <div className="brand-three__img">
                      <img src="assets/images/brand/brand-3-5.png" alt="" />
                    </div>
                    <div className="brand-three__img-hover">
                      <img
                        src="assets/images/brand/brand-3-5-hover.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="brand-three__img-box">
                    <div className="brand-three__img">
                      <img src="assets/images/brand/brand-3-6.png" alt="" />
                    </div>
                    <div className="brand-three__img-hover">
                      <img
                        src="assets/images/brand/brand-3-6-hover.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="brand-three__img-box">
                    <div className="brand-three__img">
                      <img src="assets/images/brand/brand-3-7.png" alt="" />
                    </div>
                    <div className="brand-three__img-hover">
                      <img
                        src="assets/images/brand/brand-3-7-hover.png"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Brand Three End*/}
      {/*Testimonial Two Start*/}
      <TestimonialSlider2 />
      {/*Testimonial Two End*/}
      {/*Blog Three Start*/}
      <section className="blog-three">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                <span>//</span> Latest Blog <span>//</span>
              </span>
            </div>
            <h2 className="section-title__title">
              Whats Going On Around <br /> <span>You</span>
            </h2>
          </div>
          <div className="row">
            {/*Blog Three Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="blog-three__single">
                <div className="blog-three__img">
                  <img src="assets/images/blog/blog-3-1.jpg" alt="" />
                </div>
                <div className="blog-three__date-and-tag">
                  <div className="blog-three__date">
                    <p>20 Feb, 2024</p>
                  </div>
                  <div className="blog-three__tag">
                    <div className="blog-three__tag-border" />
                    <p className="blog-three__tag-text">Event Conference</p>
                  </div>
                </div>
                <h3 className="blog-three__title">
                  <Link href="/blog-details">
                    Paris Blockchain Summit New Slogan
                  </Link>
                </h3>
              </div>
            </div>
            {/*Blog Three Single End*/}
            {/*Blog Three Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="blog-three__single">
                <div className="blog-three__img">
                  <img src="assets/images/blog/blog-3-2.jpg" alt="" />
                </div>
                <div className="blog-three__date-and-tag">
                  <div className="blog-three__date">
                    <p>20 Feb, 2024</p>
                  </div>
                  <div className="blog-three__tag">
                    <div className="blog-three__tag-border" />
                    <p className="blog-three__tag-text">Event Conference</p>
                  </div>
                </div>
                <h3 className="blog-three__title">
                  <Link href="/blog-details">
                    What Events Your Life Made Happy
                  </Link>
                </h3>
              </div>
            </div>
            {/*Blog Three Single End*/}
            {/*Blog Three Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="blog-three__single">
                <div className="blog-three__img">
                  <img src="assets/images/blog/blog-3-1.jpg" alt="" />
                </div>
                <div className="blog-three__date-and-tag">
                  <div className="blog-three__date">
                    <p>20 Feb, 2024</p>
                  </div>
                  <div className="blog-three__tag">
                    <div className="blog-three__tag-border" />
                    <p className="blog-three__tag-text">Event Conference</p>
                  </div>
                </div>
                <h3 className="blog-three__title">
                  <Link href="/blog-details">
                    The Most Common Types Of Events
                  </Link>
                </h3>
              </div>
            </div>
            {/*Blog Three Single End*/}
          </div>
        </div>
      </section>
      {/*Blog Three End*/}
    </EnvensLayouts>
  );
};
export default page;
