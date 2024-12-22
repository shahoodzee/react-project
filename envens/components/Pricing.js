"use client";
import Link from "next/link";
import { useState } from "react";

const Pricing = () => {
  const [toggle, setToggle] = useState("premiumplan");
  return (
    <section className="pricing-one">
      <div className="pricing-one__shape-1 float-bob-y">
        <img src="assets/images/shapes/pricing-one-shape-1.png" alt="" />
      </div>
      <div className="pricing-one__shape-2 img-bounce">
        <img src="assets/images/shapes/pricing-one-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="pricing-one__inner">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline section-title__tagline--two">
                <span>//</span> Pricing Plan
              </p>
            </div>
            <h2 className="section-title__title">
              Choose Your Tickets <br />
              <span>Pricing</span>
            </h2>
          </div>
          <div className="pricing-one__main-tab-box tabs-box">
            <div className="pricing-one__main-tab-buttons">
              <ul className="tab-buttons clearfix list-unstyled">
                <li
                  data-tab="#premiumplan"
                  className={`tab-btn ${
                    toggle == "premiumplan" ? "active-btn" : ""
                  }`}
                  onClick={() => setToggle("premiumplan")}
                >
                  <p>Premium Plan</p>
                </li>
                <li
                  data-tab="#basicplan"
                  className={`tab-btn ${
                    toggle == "basicplan" ? "active-btn" : ""
                  }`}
                  onClick={() => setToggle("basicplan")}
                >
                  <p>Basic Plan</p>
                </li>
                <li
                  data-tab="#standardplan"
                  className={`tab-btn ${
                    toggle == "standardplan" ? "active-btn" : ""
                  }`}
                  onClick={() => setToggle("standardplan")}
                >
                  <p>Standard Plan</p>
                </li>
              </ul>
            </div>
            <div className="pricing-one__main-tab-content">
              <div className="tabs-content">
                {/*tab*/}
                <div
                  className={`tab  ${
                    toggle == "premiumplan" ? "active-tab" : ""
                  }`}
                  id="premiumplan"
                >
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="pricing-one__main-tab-img-box">
                        <div className="pricing-one__main-tab-img">
                          <img
                            src="assets/images/resources/pricing-one-main-tab-img-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8">
                      <div className="pricing-one__main-tab-price-and-points">
                        <div className="pricing-one__main-tab-price-box">
                          <div className="pricing-one__main-tab-price">
                            <h4>
                              <span>$</span>690
                            </h4>
                            <p>/ Per Month</p>
                            <div className="pricing-one__main-tab-price-shape-1">
                              <img
                                src="assets/images/shapes/pricing-one-price-shape-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="pricing-one__main-tab-price-btn-box">
                            <Link
                              href="contact"
                              className="pricing-one__main-tab-price-btn thm-btn-two"
                            >
                              <span className="fas fa-arrow-circle-right" />
                              Buy Ticket
                            </Link>
                          </div>
                        </div>
                        <div className="pricing-one__main-tab-points-box">
                          <div className="pricing-one__main-tab-points-list">
                            <h3 className="pricing-one__main-tab-points-title">
                              Vip Seat With Food
                            </h3>
                            <ul className="pricing-one__main-tab-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Can Access Online Free</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Ask Question Privately</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Get Vip Privileges Seta</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Free Lunch &amp; Free Wifi</p>
                              </li>
                            </ul>
                          </div>
                          <div className="pricing-one__main-tab-points-list pricing-one__main-tab-points-list-2">
                            <h3 className="pricing-one__main-tab-points-title">
                              Vip Seat With Food
                            </h3>
                            <ul className="pricing-one__main-tab-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Can Access Online Free</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Ask Question Privately</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Get Vip Privileges Seta</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Free Lunch &amp; Free Wifi</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={`tab  ${
                    toggle == "basicplan" ? "active-tab" : ""
                  }`}
                  id="basicplan"
                >
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="pricing-one__main-tab-img-box">
                        <div className="pricing-one__main-tab-img">
                          <img
                            src="assets/images/resources/pricing-one-main-tab-img-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8">
                      <div className="pricing-one__main-tab-price-and-points">
                        <div className="pricing-one__main-tab-price-box">
                          <div className="pricing-one__main-tab-price">
                            <h4>
                              <span>$</span>690
                            </h4>
                            <p>/ Per Month</p>
                            <div className="pricing-one__main-tab-price-shape-1">
                              <img
                                src="assets/images/shapes/pricing-one-price-shape-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="pricing-one__main-tab-price-btn-box">
                            <Link
                              href="contact"
                              className="pricing-one__main-tab-price-btn thm-btn-two"
                            >
                              <span className="fas fa-arrow-circle-right" />
                              Buy Ticket
                            </Link>
                          </div>
                        </div>
                        <div className="pricing-one__main-tab-points-box">
                          <div className="pricing-one__main-tab-points-list">
                            <h3 className="pricing-one__main-tab-points-title">
                              Vip Seat With Food
                            </h3>
                            <ul className="pricing-one__main-tab-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Can Access Online Free</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Ask Question Privately</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Get Vip Privileges Seta</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Free Lunch &amp; Free Wifi</p>
                              </li>
                            </ul>
                          </div>
                          <div className="pricing-one__main-tab-points-list pricing-one__main-tab-points-list-2">
                            <h3 className="pricing-one__main-tab-points-title">
                              Vip Seat With Food
                            </h3>
                            <ul className="pricing-one__main-tab-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Can Access Online Free</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Ask Question Privately</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Get Vip Privileges Seta</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Free Lunch &amp; Free Wifi</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={`tab  ${
                    toggle == "standardplan" ? "active-tab" : ""
                  }`}
                  id="standardplan"
                >
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="pricing-one__main-tab-img-box">
                        <div className="pricing-one__main-tab-img">
                          <img
                            src="assets/images/resources/pricing-one-main-tab-img-3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8">
                      <div className="pricing-one__main-tab-price-and-points">
                        <div className="pricing-one__main-tab-price-box">
                          <div className="pricing-one__main-tab-price">
                            <h4>
                              <span>$</span>690
                            </h4>
                            <p>/ Per Month</p>
                            <div className="pricing-one__main-tab-price-shape-1">
                              <img
                                src="assets/images/shapes/pricing-one-price-shape-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="pricing-one__main-tab-price-btn-box">
                            <Link
                              href="contact"
                              className="pricing-one__main-tab-price-btn thm-btn-two"
                            >
                              <span className="fas fa-arrow-circle-right" />
                              Buy Ticket
                            </Link>
                          </div>
                        </div>
                        <div className="pricing-one__main-tab-points-box">
                          <div className="pricing-one__main-tab-points-list">
                            <h3 className="pricing-one__main-tab-points-title">
                              Vip Seat With Food
                            </h3>
                            <ul className="pricing-one__main-tab-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Can Access Online Free</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Ask Question Privately</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Get Vip Privileges Seta</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Free Lunch &amp; Free Wifi</p>
                              </li>
                            </ul>
                          </div>
                          <div className="pricing-one__main-tab-points-list pricing-one__main-tab-points-list-2">
                            <h3 className="pricing-one__main-tab-points-title">
                              Vip Seat With Food
                            </h3>
                            <ul className="pricing-one__main-tab-points list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Can Access Online Free</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Ask Question Privately</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Get Vip Privileges Seta</p>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-angle-double-right" />
                                </div>
                                <p>Free Lunch &amp; Free Wifi</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;

export const Pricing2 = () => {
  return (
    <section className="pricing-two">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">
              <span>//</span> Price Plan <span>//</span>
            </span>
          </div>
          <h2 className="section-title__title">
            Ticket To The Grow Marketing <br /> <span>Conference</span>
          </h2>
        </div>
        <div className="row">
          {/*Pricing Two Single Start*/}
          <div
            className="col-xl-4 col-lg-4 wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="pricing-two__single">
              <div className="pricing-two__single-inner">
                <h4 className="pricing-two__title">Standard Pass</h4>
                <div className="pricing-two__price-box">
                  <h2>
                    <span>$</span>20
                  </h2>
                  <p>/ One Day</p>
                </div>
                <ul className="list-unstyled pricing-two__points">
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Can Access Online Free</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Gat Vip Privileges Seta</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Free Lunch Foods Free Wifi</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Always plan support</p>
                    </div>
                  </li>
                </ul>
                <div className="pricing-two__btn-box">
                  <Link href="/pricing" className="pricing-two__btn">
                    Buy Ticket
                  </Link>
                </div>
                <div className="pricing-two__shape-1">
                  <img
                    src="assets/images/shapes/pricing-two-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="pricing-two__shape-2">
                  <img
                    src="assets/images/shapes/pricing-two-shape-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pricing-two__popular">
                <p>Popular</p>
              </div>
            </div>
          </div>
          {/*Pricing Two Single End*/}
          {/*Pricing Two Single Start*/}
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="pricing-two__single">
              <div className="pricing-two__single-inner">
                <h4 className="pricing-two__title">Flexible Pass</h4>
                <div className="pricing-two__price-box">
                  <h2>
                    <span>$</span>40
                  </h2>
                  <p>/ One Day</p>
                </div>
                <ul className="list-unstyled pricing-two__points">
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Can Access Online Free</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Gat Vip Privileges Seta</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Free Lunch Foods Free Wifi</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Always plan support</p>
                    </div>
                  </li>
                </ul>
                <div className="pricing-two__btn-box">
                  <Link href="/pricing" className="pricing-two__btn">
                    Buy Ticket
                  </Link>
                </div>
                <div className="pricing-two__shape-1">
                  <img
                    src="assets/images/shapes/pricing-two-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="pricing-two__shape-2">
                  <img
                    src="assets/images/shapes/pricing-two-shape-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pricing-two__popular">
                <p>Popular</p>
              </div>
            </div>
          </div>
          {/*Pricing Two Single End*/}
          {/*Pricing Two Single Start*/}
          <div
            className="col-xl-4 col-lg-4 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="pricing-two__single">
              <div className="pricing-two__single-inner">
                <h4 className="pricing-two__title">Business Pass</h4>
                <div className="pricing-two__price-box">
                  <h2>
                    <span>$</span>70
                  </h2>
                  <p>/ One Day</p>
                </div>
                <ul className="list-unstyled pricing-two__points">
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Can Access Online Free</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Gat Vip Privileges Seta</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Free Lunch Foods Free Wifi</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon" />
                    <div className="text">
                      <p>Always plan support</p>
                    </div>
                  </li>
                </ul>
                <div className="pricing-two__btn-box">
                  <Link href="/pricing" className="pricing-two__btn">
                    Buy Ticket
                  </Link>
                </div>
                <div className="pricing-two__shape-1">
                  <img
                    src="assets/images/shapes/pricing-two-shape-1.png"
                    alt=""
                  />
                </div>
                <div className="pricing-two__shape-2">
                  <img
                    src="assets/images/shapes/pricing-two-shape-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pricing-two__popular">
                <p>Popular</p>
              </div>
            </div>
          </div>
          {/*Pricing Two Single End*/}
        </div>
      </div>
    </section>
  );
};
