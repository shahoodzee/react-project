import Link from "next/link";
import { Fragment } from "react";
const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    default:
      return <Footer2 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <Fragment>
      <footer className="site-footer">
        <div className="site-footer__shape-1" />
        <div className="site-footer__bg-box">
          <div
            className="site-footer__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/site-footer-bg.jpg)",
            }}
          />
        </div>
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget__contact">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Contact</h3>
                    </div>
                    <div className="footer-widget__contact-inner">
                      <p className="footer-widget__contact-text">
                        80 Road Broklyn Street, 600 <br />
                        New York, USA
                      </p>
                      <ul className="footer-widget__contact-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-envelope" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="mailto:needhelp@company.com">
                                needhelp@company.com
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-telephone-symbol-button" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="tel:926668880000">+92 666 888 0000</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__link">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Links</h3>
                    </div>
                    <ul className="footer-widget__link-list list-unstyled">
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/speaker">Our Team</Link>
                      </li>
                      <li>
                        <Link href="/schedule-list">Upcoming Events</Link>
                      </li>
                      <li>
                        <Link href="/blog">Latest News</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget__column footer-widget__events">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Find Events</h3>
                    </div>
                    <ul className="footer-widget__link-list list-unstyled">
                      <li>
                        <Link href="/schedule-list-2">Virtual Events</Link>
                      </li>
                      <li>
                        <Link href="/about">Online Webinars</Link>
                      </li>
                      <li>
                        <Link href="/about">Legal &amp; Finance</Link>
                      </li>
                      <li>
                        <Link href="/about">Virtual Conferences</Link>
                      </li>
                      <li>
                        <Link href="/about">Online Classe</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__column footer-widget__gallery">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Gallery</h3>
                    </div>
                    <ul className="footer-widget__gallery-list list-unstyled clearfix">
                      <li>
                        <div className="footer-widget__gallery-img">
                          <img
                            src="assets/images/gallery/footer-widget-gallery-1-1.jpg"
                            alt=""
                          />
                          <a href="#">Instagram</a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__gallery-img">
                          <img
                            src="assets/images/gallery/footer-widget-gallery-1-2.jpg"
                            alt=""
                          />
                          <a href="#">Instagram</a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__gallery-img">
                          <img
                            src="assets/images/gallery/footer-widget-gallery-1-3.jpg"
                            alt=""
                          />
                          <a href="#">Instagram</a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__gallery-img">
                          <img
                            src="assets/images/gallery/footer-widget-gallery-1-4.jpg"
                            alt=""
                          />
                          <a href="#">Instagram</a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__gallery-img">
                          <img
                            src="assets/images/gallery/footer-widget-gallery-1-5.jpg"
                            alt=""
                          />
                          <a href="#">Instagram</a>
                        </div>
                      </li>
                      <li>
                        <div className="footer-widget__gallery-img">
                          <img
                            src="assets/images/gallery/footer-widget-gallery-1-6.jpg"
                            alt=""
                          />
                          <a href="#">Instagram</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <div className="site-footer__bottom-logo-and-social">
                <div className="site-footer__bottom-logo">
                  <Link href="/index">
                    <img
                      src="assets/images/resources/site-footer-logo-1.png"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="site-footer__social">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                  <a href="#">
                    <i className="fas fa-wifi" />
                  </a>
                </div>
              </div>
              <p className="site-footer__bottom-text">
                {" "}
                © Copyright 2024 by <a href="#">Company.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

const Footer2 = () => {
  return (
    <footer className="site-footer-two">
      <div
        className="site-footer-two__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/site-footer-two-bg.jpg)",
        }}
      />
      <div
        className="site-footer-two__shape-bg-1"
        style={{
          backgroundImage:
            "url(assets/images/shapes/site-footer-two-shape-bg-1.png)",
        }}
      />
      <div className="site-footer-two__top">
        <div className="site-footer-two__top-shape-2 float-bob-x">
          <img
            src="assets/images/shapes/site-footer-two-top-shape-2.png"
            alt=""
          />
        </div>
        <div className="site-footer-two__top-shape-3 float-bob-y">
          <img
            src="assets/images/shapes/site-footer-two-top-shape-3.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="site-footer-two__top-inner">
            <div className="site-footer-two__top-shape-1 img-bounce">
              <img
                src="assets/images/shapes/site-footer-two-top-shape-1.png"
                alt=""
              />
            </div>
            <div className="site-footer-two__top-icon-box">
              <div className="site-footer-two__top-icon">
                <span className="icon-placeholder" />
              </div>
              <div className="site-footer-two__top-icon-content">
                <p>Our Location</p>
                <h5>191 Integer, LA 0829</h5>
              </div>
            </div>
            <div className="site-footer-two__logo">
              <Link href="/index">
                <img
                  src="assets/images/resources/site-footer-logo-2.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="site-footer-two__top-icon-box">
              <div className="site-footer-two__top-icon">
                <span className="icon-telephone" />
              </div>
              <div className="site-footer-two__top-icon-content">
                <p>Make a Call</p>
                <h5>
                  <a href="tel:2334567908">(+233) 456 79 08</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer-two__middle">
        <div className="container">
          <div className="site-footer-two__middle-inner">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget-two__column footer-widget-two__about">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">About Us</h3>
                  </div>
                  <div className="footer-widget-two__link-list-box">
                    <ul className="footer-widget-two__link-list list-unstyled">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/about">Custom Widget</Link>
                      </li>
                      <li>
                        <Link href="/about">Short Codes</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/about">Short Codes</Link>
                      </li>
                    </ul>
                    <ul className="footer-widget-two__link-list footer-widget-two__link-list--two list-unstyled">
                      <li>
                        <Link href="/gallery">Our Projects</Link>
                      </li>
                      <li>
                        <Link href="/about">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link href="/pricing">Pricing Table</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget-two__column footer-widget-two__link">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Quick Link</h3>
                  </div>
                  <ul className="footer-widget-two__link-list list-unstyled">
                    <li>
                      <Link href="/index">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/speaker">Terms</Link>
                    </li>
                    <li>
                      <Link href="/sponsors">Our Awards</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget-two__column footer-widget-two__gallery">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Instagram</h3>
                  </div>
                  <ul className="footer-widget-two__gallery-list list-unstyled clearfix">
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-1.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-2.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-3.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-4.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-5.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-6.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget-two__column footer-widget-two__social">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Follow Us</h3>
                  </div>
                  <ul className="footer-widget-two__link-list list-unstyled">
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Linkedin</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer-two__bottom">
        <div className="container">
          <div className="site-footer-two__bottom-inner">
            <p className="site-footer-two__bottom-text">
              Copyright © 2024 all rights reserved.
            </p>
            <ul className="list-unstyled site-footer-two__botom-menu">
              <li>
                <Link href="/about">Privacy</Link>
              </li>
              <li>
                <Link href="/about">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/sponsors">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="site-footer-two">
      <div
        className="site-footer-two__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/site-footer-two-bg.jpg)",
        }}
      />
      <div
        className="site-footer-two__shape-bg-1"
        style={{
          backgroundImage:
            "url(assets/images/shapes/site-footer-two-shape-bg-1.png)",
        }}
      />
      <div className="site-footer-two__top">
        <div className="site-footer-two__top-shape-2 float-bob-x">
          <img
            src="assets/images/shapes/site-footer-two-top-shape-2.png"
            alt=""
          />
        </div>
        <div className="site-footer-two__top-shape-3 float-bob-y">
          <img
            src="assets/images/shapes/site-footer-two-top-shape-3.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="site-footer-two__top-inner">
            <div className="site-footer-two__top-shape-1 img-bounce">
              <img
                src="assets/images/shapes/site-footer-two-top-shape-1.png"
                alt=""
              />
            </div>
            <div className="site-footer-two__top-icon-box">
              <div className="site-footer-two__top-icon">
                <span className="icon-placeholder" />
              </div>
              <div className="site-footer-two__top-icon-content">
                <p>Our Location</p>
                <h5>191 Integer, LA 0829</h5>
              </div>
            </div>
            <div className="site-footer-two__logo">
              <Link href="/index">
                <img
                  src="assets/images/resources/site-footer-logo-3.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="site-footer-two__top-icon-box">
              <div className="site-footer-two__top-icon">
                <span className="icon-telephone" />
              </div>
              <div className="site-footer-two__top-icon-content">
                <p>Make a Call</p>
                <h5>
                  <a href="tel:2334567908">(+233) 456 79 08</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer-two__middle">
        <div className="container">
          <div className="site-footer-two__middle-inner">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget-two__column footer-widget-two__about">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">About Us</h3>
                  </div>
                  <div className="footer-widget-two__link-list-box">
                    <ul className="footer-widget-two__link-list list-unstyled">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/about">Custom Widget</Link>
                      </li>
                      <li>
                        <Link href="/about">Short Codes</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/about">Short Codes</Link>
                      </li>
                    </ul>
                    <ul className="footer-widget-two__link-list footer-widget-two__link-list--two list-unstyled">
                      <li>
                        <Link href="/gallery">Our Projects</Link>
                      </li>
                      <li>
                        <Link href="/about">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link href="/pricing">Pricing Table</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget-two__column footer-widget-two__link">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Quick Link</h3>
                  </div>
                  <ul className="footer-widget-two__link-list list-unstyled">
                    <li>
                      <Link href="/index">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/speaker">Terms</Link>
                    </li>
                    <li>
                      <Link href="/sponsors">Our Awards</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget-two__column footer-widget-two__gallery">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Instagram</h3>
                  </div>
                  <ul className="footer-widget-two__gallery-list list-unstyled clearfix">
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-1.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-2.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-3.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-4.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-5.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="footer-widget-two__gallery-img">
                        <img
                          src="assets/images/gallery/footer-widget-two-gallery-1-6.jpg"
                          alt=""
                        />
                        <a href="#">
                          <span className="icon-link" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget-two__column footer-widget-two__social">
                  <div className="footer-widget-two__title-box">
                    <h3 className="footer-widget-two__title">Follow Us</h3>
                  </div>
                  <ul className="footer-widget-two__link-list list-unstyled">
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Linkedin</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer-two__bottom">
        <div className="container">
          <div className="site-footer-two__bottom-inner">
            <p className="site-footer-two__bottom-text">
              Copyright © 2024 all rights reserved.
            </p>
            <ul className="list-unstyled site-footer-two__botom-menu">
              <li>
                <Link href="/about">Privacy</Link>
              </li>
              <li>
                <Link href="/about">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/sponsors">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
