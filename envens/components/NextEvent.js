import Link from "next/link";
import CountDown from "./CountDown";

const NextEvent = () => {
  return (
    <section className="countdown-one">
      <div
        className="countdown-one__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/countdown-one-bg.jpg)",
        }}
      />
      <div className="countdown-one__shape-2 float-bob-x">
        <img src="assets/images/shapes/countdown-one-shape-2.png" alt="" />
      </div>
      <div className="countdown-one__shape-3 float-bob-y">
        <img src="assets/images/shapes/countdown-one-shape-3.png" alt="" />
      </div>
      <div className="countdown-one__shape-4 float-bob-y-2">
        <img src="assets/images/shapes/countdown-one-shape-4.png" alt="" />
      </div>
      <div className="countdown-one__shape-5 zoominout">
        <img src="assets/images/shapes/countdown-one-shape-5.png" alt="" />
      </div>
      <div className="countdown-one__shape-6">
        <img src="assets/images/shapes/countdown-one-shape-6.png" alt="" />
      </div>
      <div className="countdown-one__shape-7">
        <img src="assets/images/shapes/countdown-one-shape-7.png" alt="" />
      </div>
      <div className="countdown-one__shape-8 float-bob-x">
        <img src="assets/images/shapes/countdown-one-shape-8.png" alt="" />
      </div>
      <div className="container">
        <div className="countdown-one__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline section-title__tagline--two">
                <span>//</span> Next Event
              </p>
            </div>
            <h2 className="section-title__title">
              Our Next Event
              <br /> Starts In
            </h2>
          </div>
          <div className="countdown-one__btn-box">
            <Link href="/contact" className="countdown-one__btn thm-btn-two">
              <span className="fas fa-arrow-circle-right" />
              Book Your Seat
            </Link>
          </div>
        </div>
        <div className="countdown-one__inner">
          <div className="countdown-one__shape-1">
            <img src="assets/images/shapes/countdown-one-shape-1.png" alt="" />
          </div>
          <div className="countdown time-countdown-one">
            <CountDown />
          </div>
        </div>
      </div>
    </section>
  );
};
export default NextEvent;
