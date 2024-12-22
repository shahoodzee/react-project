"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export const HeroSlider1 = () => {
  return (
    <section className="main-slider">
      <Swiper
        className="swiper-container thm-swiper__slider"
        {...sliderProps.heroSlider}
      >
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-1-1.jpg)",
            }}
          />
          <div className="main-slider__img">
            <img src="assets/images/resources/main-slider-img-1-1.jpg" alt="" />
          </div>
          <div className="main-slider__shape-1" />
          <div className="main-slider__shape-2">
            <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
          </div>
          <div className="main-slider__shape-3" />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">musicfest</p>
                  <h2 className="main-slider__title">
                    Harmonia <br /> 2024
                  </h2>
                  <a href="#" className="main-slider__curved-circle">
                    <div className="curved-circle">Discover more our work</div>
                    {/* /.curved-circle */}
                    <div className="main-slider__arrow-icon-box">
                      <div className="main-slider__arrow-icon">
                        <span className="icon-down-right" />
                      </div>
                    </div>
                  </a>
                  {/* /.curved-circle */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-1-2.jpg)",
            }}
          />
          <div className="main-slider__img">
            <img src="assets/images/resources/main-slider-img-1-2.jpg" alt="" />
          </div>
          <div className="main-slider__shape-1" />
          <div className="main-slider__shape-2">
            <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
          </div>
          <div className="main-slider__shape-3" />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">musicfest</p>
                  <h2 className="main-slider__title">
                    Harmonia <br /> 2024
                  </h2>
                  <a href="#" className="main-slider__curved-circle">
                    <div className="curved-circle">Discover more our work</div>
                    {/* /.curved-circle */}
                    <div className="main-slider__arrow-icon-box">
                      <div className="main-slider__arrow-icon">
                        <span className="icon-down-right" />
                      </div>
                    </div>
                  </a>
                  {/* /.curved-circle */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-1-3.jpg)",
            }}
          />
          <div className="main-slider__img">
            <img src="assets/images/resources/main-slider-img-1-3.jpg" alt="" />
          </div>
          <div className="main-slider__shape-1" />
          <div className="main-slider__shape-2">
            <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
          </div>
          <div className="main-slider__shape-3" />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">musicfest</p>
                  <h2 className="main-slider__title">
                    Harmonia <br /> 2024
                  </h2>
                  <a href="#" className="main-slider__curved-circle">
                    <div className="curved-circle">Discover more our work</div>
                    {/* /.curved-circle */}
                    <div className="main-slider__arrow-icon-box">
                      <div className="main-slider__arrow-icon">
                        <span className="icon-down-right" />
                      </div>
                    </div>
                  </a>
                  {/* /.curved-circle */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination" />
        {/* If we need navigation buttons */}
      </Swiper>
    </section>
  );
};

export const HeroSlider2 = () => {
  return (
    <section className="main-slider-two">
      <Swiper
        {...sliderProps.heroSlider}
        className="swiper-container thm-swiper__slider"
      >
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider-two__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-2-1.jpg)",
            }}
          />
          <div className="main-slider-two__shape-1 float-bob-y">
            <img
              src="assets/images/shapes/main-slider-two-shape-1.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-2">
            <img
              src="assets/images/shapes/main-slider-two-shape-2.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-3">
            <img
              src="assets/images/shapes/main-slider-two-shape-3.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-4 zoominout">
            <img
              src="assets/images/shapes/main-slider-two-shape-4.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-5">
            <img
              src="assets/images/shapes/main-slider-two-shape-5.png"
              alt=""
              className="img-bounce"
            />
          </div>
          <div className="main-slider-two__img">
            <img
              src="assets/images/resources/main-slider-two-img-1.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider-two__content">
                  <div className="main-slider-two__content-shape-1 float-bob-y">
                    <img
                      src="assets/images/shapes/main-slider-two-content-shape-1.png"
                      alt=""
                    />
                  </div>
                  <h2 className="main-slider-two__title">
                    Business <br />{" "}
                    <span className="color-text">Conference</span> <br />
                    <span className="italic-text">in usa</span>
                  </h2>
                  <div className="main-slider-two__border" />
                  <a href="#" className="main-slider-two__curved-circle">
                    <div className="curved-circle">Discover more our work</div>
                    {/* /.curved-circle */}
                    <div className="main-slider-two__arrow-icon-box">
                      <div className="main-slider-two__arrow-icon">
                        <span className="icon-down-right" />
                      </div>
                    </div>
                  </a>
                  {/* /.curved-circle */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider-two__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-2-2.jpg)",
            }}
          />
          <div className="main-slider-two__shape-1 float-bob-y">
            <img
              src="assets/images/shapes/main-slider-two-shape-1.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-2">
            <img
              src="assets/images/shapes/main-slider-two-shape-2.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-3">
            <img
              src="assets/images/shapes/main-slider-two-shape-3.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-4 zoominout">
            <img
              src="assets/images/shapes/main-slider-two-shape-4.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-5">
            <img
              src="assets/images/shapes/main-slider-two-shape-5.png"
              alt=""
              className="img-bounce"
            />
          </div>
          <div className="main-slider-two__img">
            <img
              src="assets/images/resources/main-slider-two-img-2.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider-two__content">
                  <div className="main-slider-two__content-shape-1 float-bob-y">
                    <img
                      src="assets/images/shapes/main-slider-two-content-shape-1.png"
                      alt=""
                    />
                  </div>
                  <h2 className="main-slider-two__title">
                    Business <br />{" "}
                    <span className="color-text">Conference</span> <br />
                    <span className="italic-text">in usa</span>
                  </h2>
                  <div className="main-slider-two__border" />
                  <a href="#" className="main-slider-two__curved-circle">
                    <div className="curved-circle">Discover more our work</div>
                    {/* /.curved-circle */}
                    <div className="main-slider-two__arrow-icon-box">
                      <div className="main-slider-two__arrow-icon">
                        <span className="icon-down-right" />
                      </div>
                    </div>
                  </a>
                  {/* /.curved-circle */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider-two__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-2-3.jpg)",
            }}
          />
          <div className="main-slider-two__shape-1 float-bob-y">
            <img
              src="assets/images/shapes/main-slider-two-shape-1.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-2">
            <img
              src="assets/images/shapes/main-slider-two-shape-2.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-3">
            <img
              src="assets/images/shapes/main-slider-two-shape-3.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-4 zoominout">
            <img
              src="assets/images/shapes/main-slider-two-shape-4.png"
              alt=""
            />
          </div>
          <div className="main-slider-two__shape-5">
            <img
              src="assets/images/shapes/main-slider-two-shape-5.png"
              alt=""
              className="img-bounce"
            />
          </div>
          <div className="main-slider-two__img">
            <img
              src="assets/images/resources/main-slider-two-img-3.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider-two__content">
                  <div className="main-slider-two__content-shape-1 float-bob-y">
                    <img
                      src="assets/images/shapes/main-slider-two-content-shape-1.png"
                      alt=""
                    />
                  </div>
                  <h2 className="main-slider-two__title">
                    Business <br />{" "}
                    <span className="color-text">Conference</span> <br />
                    <span className="italic-text">in usa</span>
                  </h2>
                  <div className="main-slider-two__border" />
                  <a href="#" className="main-slider-two__curved-circle">
                    <div className="curved-circle">Discover more our work</div>
                    {/* /.curved-circle */}
                    <div className="main-slider-two__arrow-icon-box">
                      <div className="main-slider-two__arrow-icon">
                        <span className="icon-down-right" />
                      </div>
                    </div>
                  </a>
                  {/* /.curved-circle */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination" />
        {/* If we need navigation buttons */}
      </Swiper>
    </section>
  );
};

export const HeroSlider3 = () => {
  return (
    <section className="main-slider-three">
      <Swiper
        {...sliderProps.heroSlider}
        className="swiper-container thm-swiper__slider"
      >
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider-three__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-3-1.jpg)",
            }}
          />
          <div className="main-slider-three__shape-1 float-bob-x">
            <img
              src="assets/images/shapes/main-slider-three-shape-1.png"
              alt=""
            />
          </div>
          <div className="main-slider-three__shape-2 img-bounce">
            <img
              src="assets/images/shapes/main-slider-three-shape-2.png"
              alt=""
            />
          </div>
          <div className="main-slider-three__shape-3 float-bob-y">
            <img
              src="assets/images/shapes/main-slider-three-shape-3.png"
              alt=""
            />
          </div>
          <div className="main-slider-three__img">
            <img
              src="assets/images/resources/main-slider-three-img-1.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider-three__content">
                  <div className="main-slider-three__content-shape-1">
                    <img
                      src="assets/images/shapes/main-slider-three-content-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="main-slider-three__sbu-title-box">
                    <div
                      className="main-slider-three__sbu-title-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/main-slider-three-sbu-title-shape-1.png)",
                      }}
                    ></div>
                    <p className="main-slider-three__sbu-title">
                      Welcome To Our Conference 2024
                    </p>
                  </div>
                  <h2 className="main-slider-three__title">
                    Biggest <br /> Conference
                  </h2>
                  <a href="#" className="main-slider-three__curved-circle">
                    <div className="curved-circle">Discover more our work</div>
                    {/* /.curved-circle */}
                    <div className="main-slider-three__arrow-icon-box">
                      <div className="main-slider-three__arrow-icon">
                        <span className="icon-down-right" />
                      </div>
                    </div>
                  </a>
                  {/* /.curved-circle */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider-three__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-3-2.jpg)",
            }}
          />
          <div className="main-slider-three__shape-1 float-bob-x">
            <img
              src="assets/images/shapes/main-slider-three-shape-1.png"
              alt=""
            />
          </div>
          <div className="main-slider-three__shape-2 img-bounce">
            <img
              src="assets/images/shapes/main-slider-three-shape-2.png"
              alt=""
            />
          </div>
          <div className="main-slider-three__shape-3 float-bob-y">
            <img
              src="assets/images/shapes/main-slider-three-shape-3.png"
              alt=""
            />
          </div>
          <div className="main-slider-three__img">
            <img
              src="assets/images/resources/main-slider-three-img-2.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider-three__content">
                  <div className="main-slider-three__content-shape-1">
                    <img
                      src="assets/images/shapes/main-slider-three-content-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="main-slider-three__sbu-title-box">
                    <div
                      className="main-slider-three__sbu-title-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/main-slider-three-sbu-title-shape-1.png)",
                      }}
                    ></div>
                    <p className="main-slider-three__sbu-title">
                      Welcome To Our Conference 2024
                    </p>
                  </div>
                  <h2 className="main-slider-three__title">
                    Biggest <br /> Conference
                  </h2>
                  <a href="#" className="main-slider-three__curved-circle">
                    <div className="curved-circle">Discover more our work</div>
                    {/* /.curved-circle */}
                    <div className="main-slider-three__arrow-icon-box">
                      <div className="main-slider-three__arrow-icon">
                        <span className="icon-down-right" />
                      </div>
                    </div>
                  </a>
                  {/* /.curved-circle */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="main-slider-three__bg"
            style={{
              backgroundImage: "url(assets/images/backgrounds/slider-3-3.jpg)",
            }}
          />
          <div className="main-slider-three__shape-1 float-bob-x">
            <img
              src="assets/images/shapes/main-slider-three-shape-1.png"
              alt=""
            />
          </div>
          <div className="main-slider-three__shape-2 img-bounce">
            <img
              src="assets/images/shapes/main-slider-three-shape-2.png"
              alt=""
            />
          </div>
          <div className="main-slider-three__shape-3 float-bob-y">
            <img
              src="assets/images/shapes/main-slider-three-shape-3.png"
              alt=""
            />
          </div>
          <div className="main-slider-three__img">
            <img
              src="assets/images/resources/main-slider-three-img-3.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider-three__content">
                  <div className="main-slider-three__content-shape-1">
                    <img
                      src="assets/images/shapes/main-slider-three-content-shape-1.png"
                      alt=""
                    />
                  </div>
                  <div className="main-slider-three__sbu-title-box">
                    <div
                      className="main-slider-three__sbu-title-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/main-slider-three-sbu-title-shape-1.png)",
                      }}
                    ></div>
                    <p className="main-slider-three__sbu-title">
                      Welcome To Our Conference 2024
                    </p>
                  </div>
                  <h2 className="main-slider-three__title">
                    Biggest <br /> Conference
                  </h2>
                  <a href="#" className="main-slider-three__curved-circle">
                    <div className="curved-circle">Discover more our work</div>
                    {/* /.curved-circle */}
                    <div className="main-slider-three__arrow-icon-box">
                      <div className="main-slider-three__arrow-icon">
                        <span className="icon-down-right" />
                      </div>
                    </div>
                  </a>
                  {/* /.curved-circle */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination" />
        {/* If we need navigation buttons */}
      </Swiper>
    </section>
  );
};
