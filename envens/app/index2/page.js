import AboutUs from "@/components/AboutUs";
import { EventSchedule3 } from "@/components/EventSchedule";
import { HeroSlider2 } from "@/components/HeroSlider";
import NextEvent from "@/components/NextEvent";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import dynamic from "next/dynamic";
import Link from "next/link";
const CountDown = dynamic(() => import("@/components/CountDown"), {
  ssr: false,
});
const PortfolioIsotope = dynamic(
  () => import("@/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <EnvensLayouts header={2} footer={2}>
      {/* /.stricky-header */}
      {/*Main Slider Start*/}
      <HeroSlider2 />
      {/*Main Slider End*/}
      {/*About Two Start*/}
      <AboutUs />
      {/*About Two End*/}
      {/*Countdown One Start*/}
      <NextEvent />
      {/*Countdown One End*/}
      {/*Team Two Start*/}
      <Team />
      {/*Team Two End*/}
      {/*Event Two Start*/}
      <EventSchedule3 />
      {/*Event Two End*/}
      {/*Pricing One Start*/}
      <Pricing />
      {/*Pricing One End*/}
      {/*Project One Start*/}
      <PortfolioIsotope />
      {/*Project One End*/}
      {/*Join Event Start*/}
      <section className="join-event">
        <div className="container">
          <div className="join-event__title-and-btn-box">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline section-title__tagline--two">
                  <span>//</span> Join Exhibt
                </p>
              </div>
              <h2 className="section-title__title">
                Why You Should Join <br />
                <span>Event</span>
              </h2>
            </div>
            <div className="join-event__btn-box">
              <Link href="/contact" className="join-event__btn thm-btn-two">
                <span className="fas fa-arrow-circle-right" />
                Buy Ticket
              </Link>
            </div>
          </div>
          <div className="join-event__top">
            <div className="row">
              {/*Join Event Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="join-event__single">
                  <div className="join-event__icon">
                    <span className="icon-icon-15151715" />
                  </div>
                  <h3 className="join-event__title">
                    <Link href="/speaker">Speaker Lineup</Link>
                  </h3>
                  <p className="join-event__text">
                    These are events where researchers, scholars, academics
                  </p>
                </div>
              </div>
              {/*Join Event Single End*/}
              {/*Join Event Single Start*/}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="join-event__single-2">
                  <div
                    className="join-event__img"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/join-event-single-shape-1.png)",
                    }}
                  ></div>
                </div>
              </div>
              {/*Join Event Single End*/}
              {/*Join Event Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="join-event__single">
                  <div className="join-event__icon">
                    <span className="icon-connection" />
                  </div>
                  <h3 className="join-event__title">
                    <Link href="/about">Networking People</Link>
                  </h3>
                  <p className="join-event__text">
                    These are events where researchers, scholars, academics
                  </p>
                </div>
              </div>
              {/*Join Event Single End*/}
            </div>
          </div>
          <div className="join-event__bottom">
            <div className="row">
              {/*Join Event Single Start*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="join-event__single mr-50px">
                  <div className="join-event__icon">
                    <span className="icon-karaoke" />
                  </div>
                  <h3 className="join-event__title">
                    <Link href="/about">Conference Party</Link>
                  </h3>
                  <p className="join-event__text">
                    These are events where researchers, scholars, academics
                  </p>
                </div>
              </div>
              {/*Join Event Single End*/}
              {/*Join Event Single Start*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="join-event__single">
                  <div className="join-event__icon">
                    <span className="icon-program" />
                  </div>
                  <h3 className="join-event__title">
                    <Link href="/about">Space Exhibition</Link>
                  </h3>
                  <p className="join-event__text">
                    These are events where researchers, scholars, academics
                  </p>
                </div>
              </div>
              {/*Join Event Single End*/}
              {/*Join Event Single Start*/}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="join-event__single mr-50px">
                  <div className="join-event__icon">
                    <span className="icon-united" />
                  </div>
                  <h3 className="join-event__title">
                    <Link href="/archives-speakers">Friendly Team</Link>
                  </h3>
                  <p className="join-event__text">
                    These are events where researchers, scholars, academics
                  </p>
                </div>
              </div>
              {/*Join Event Single End*/}
            </div>
          </div>
        </div>
      </section>
      {/*Join Event End*/}
      {/*Brand Two Start*/}
      <section className="brand-two">
        <div
          className="brand-two__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/brand-two-bg.jpg)",
          }}
        />
        <div className="container">
          <div className="brand-two__top">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline section-title__tagline--two">
                  <span>//</span> Sponsors
                </p>
              </div>
              <h2 className="section-title__title">
                Our Event General <br />
                <span>Sponsors</span>
              </h2>
            </div>
            <div className="brand-two__btn-box">
              <Link href="/sponsors" className="brand-two__btn thm-btn-two">
                <span className="fas fa-arrow-circle-right" />
                Become Sponsor
              </Link>
            </div>
          </div>
          <div className="brand-two__inner">
            <ul className="list-unstyled brand-two__list">
              <li className="wow fadeInLeft" data-wow-delay="100ms">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-delay="300ms">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="500ms">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-delay="700ms">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-4.png" alt="" />
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-delay="900ms">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-5.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Brand Two End*/}
      {/*Testimonial One Start*/}
      <TestimonialsSlider />
      {/*Testimonial One End*/}
      {/*blog Two Start*/}
      <section className="blog-two">
        <div className="container">
          <div className="blog-two__top">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <p className="section-title__tagline section-title__tagline--two">
                  <span>//</span> Latest Blog
                </p>
              </div>
              <h2 className="section-title__title">
                Latest Event News
                <br />
                <span>&amp; Blog</span>
              </h2>
            </div>
            <div className="blog-two__btn-box">
              <Link href="/blog-details" className="blog-two__btn thm-btn-two">
                <span className="fas fa-arrow-circle-right" />
                more Schedule
              </Link>
            </div>
          </div>
          <div className="row">
            {/*Blog Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="blog-two__single">
                <div className="blog-two__img-box">
                  <div className="blog-two__img">
                    <img src="assets/images/blog/blog-2-1.jpg" alt="" />
                  </div>
                  <div className="blog-two__content-box">
                    <p className="blog-two__sub-title">
                      Event &amp; Conference
                    </p>
                    <h3 className="blog-two__title">
                      <Link href="/blog-details">
                        Determine the specific focus of your blog.
                      </Link>
                    </h3>
                    <div className="blog-two__read-more-and-comment">
                      <a href="#" className="blog-two__read-more">
                        Read More
                      </a>
                      <p>/</p>
                      <a href="#" className="blog-two__comment">
                        <span className="fas fa-comments" />2 Comments
                      </a>
                    </div>
                    <div className="blog-two__date">
                      <p>20 Feb, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog Two Single End*/}
            {/*Blog Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="blog-two__single-2">
                <div className="blog-two__date-2">
                  <p>17 Nov, 2024</p>
                </div>
                <div className="blog-two__content-box-2">
                  <p className="blog-two__sub-title-2">
                    Event &amp; Conference
                  </p>
                  <h3 className="blog-two__title-2">
                    <Link href="/blog-details">
                      Develop a content strategy that aligns
                    </Link>
                  </h3>
                  <div className="blog-two__read-more-and-comment-2">
                    <a href="#" className="blog-two__read-more-2">
                      Read More
                    </a>
                    <p>/</p>
                    <a href="#" className="blog-two__comment-2">
                      <span className="fas fa-comments" />2 Comments
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-two__single-2">
                <div className="blog-two__date-2">
                  <p>17 Nov, 2024</p>
                </div>
                <div className="blog-two__content-box-2">
                  <p className="blog-two__sub-title-2">
                    Event &amp; Conference
                  </p>
                  <h3 className="blog-two__title-2">
                    <Link href="/blog-details">
                      Experiment with different content formats
                    </Link>
                  </h3>
                  <div className="blog-two__read-more-and-comment-2">
                    <a href="#" className="blog-two__read-more-2">
                      Read More
                    </a>
                    <p>/</p>
                    <a href="#" className="blog-two__comment-2">
                      <span className="fas fa-comments" />2 Comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog Two Single End*/}
            {/*Blog Two Single Start*/}
            <div
              className="col-xl-4 col-lg-6 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="blog-two__single">
                <div className="blog-two__img-box">
                  <div className="blog-two__img">
                    <img src="assets/images/blog/blog-2-2.jpg" alt="" />
                  </div>
                  <div className="blog-two__content-box">
                    <p className="blog-two__sub-title">
                      Event &amp; Conference
                    </p>
                    <h3 className="blog-two__title">
                      <Link href="/blog-details">
                        Optimize your blog for search engines
                      </Link>
                    </h3>
                    <div className="blog-two__read-more-and-comment">
                      <a href="#" className="blog-two__read-more">
                        Read More
                      </a>
                      <p>/</p>
                      <a href="#" className="blog-two__comment">
                        <span className="fas fa-comments" />2 Comments
                      </a>
                    </div>
                    <div className="blog-two__date">
                      <p>20 Feb, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog Two Single End*/}
          </div>
        </div>
      </section>
      {/*blog Two End*/}
    </EnvensLayouts>
  );
};
export default page;
