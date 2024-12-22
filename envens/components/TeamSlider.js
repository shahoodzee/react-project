"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamSlider = () => {
  return (
    <section className="team-three">
      <div
        className="team-three__bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/team-three-bg.jpg)",
        }}
      ></div>
      <div className="container">
        <div className="team-three__top">
          <div className="team-three__top-left">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">
                  <span>//</span> About The Event
                </span>
              </div>
              <h2 className="section-title__title">
                Our Best Expert Event <br /> <span>Speakers</span>
              </h2>
            </div>
          </div>
          <div className="team-three__top-right">
            <div className="team-three__nav">
              <div className="swiper-button-next1 c-pointer">
                <i className="icon-arrow" />
              </div>
              <div className="swiper-button-prev1 c-pointer">
                <i className="icon-right-arrows" />
              </div>
            </div>
          </div>
        </div>
        <div className="team-three__bottom">
          <Swiper
            {...sliderProps.team1}
            className="thm-swiper__slider swiper-container"
          >
            <div className="swiper-wrapper">
              {/*Team Three Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="team-three__single">
                  <div className="team-three__img-box">
                    <div className="team-three__img">
                      <img src="assets/images/team/team-three-3-1.jpg" alt="" />
                    </div>
                    <div className="team-three__share-and-social">
                      <div className="team-three__share">
                        <a href="#">
                          <span className="fas fa-share-alt" />
                        </a>
                      </div>
                      <div className="team-three__social">
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                        <a href="#">
                          <span className="fas fa-wifi" />
                        </a>
                      </div>
                    </div>
                    <div className="team-three__content">
                      <p className="team-three__sub-title">Ceo Founder</p>
                      <h4 className="team-three__title">
                        <Link href="/speaker-single">Matthew White</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Team Three Single End*/}
              {/*Team Three Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="team-three__single">
                  <div className="team-three__img-box">
                    <div className="team-three__img">
                      <img src="assets/images/team/team-three-3-2.jpg" alt="" />
                    </div>
                    <div className="team-three__share-and-social">
                      <div className="team-three__share">
                        <a href="#">
                          <span className="fas fa-share-alt" />
                        </a>
                      </div>
                      <div className="team-three__social">
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                        <a href="#">
                          <span className="fas fa-wifi" />
                        </a>
                      </div>
                    </div>
                    <div className="team-three__content">
                      <p className="team-three__sub-title">Ceo Founder</p>
                      <h4 className="team-three__title">
                        <Link href="/speaker-single">D. Saira Smith</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Team Three Single End*/}
              {/*Team Three Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="team-three__single">
                  <div className="team-three__img-box">
                    <div className="team-three__img">
                      <img src="assets/images/team/team-three-3-3.jpg" alt="" />
                    </div>
                    <div className="team-three__share-and-social">
                      <div className="team-three__share">
                        <a href="#">
                          <span className="fas fa-share-alt" />
                        </a>
                      </div>
                      <div className="team-three__social">
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                        <a href="#">
                          <span className="fas fa-wifi" />
                        </a>
                      </div>
                    </div>
                    <div className="team-three__content">
                      <p className="team-three__sub-title">Ceo Founder</p>
                      <h4 className="team-three__title">
                        <Link href="/speaker-single">Maksdora White</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Team Three Single End*/}
              {/*Team Three Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="team-three__single">
                  <div className="team-three__img-box">
                    <div className="team-three__img">
                      <img src="assets/images/team/team-three-3-1.jpg" alt="" />
                    </div>
                    <div className="team-three__share-and-social">
                      <div className="team-three__share">
                        <a href="#">
                          <span className="fas fa-share-alt" />
                        </a>
                      </div>
                      <div className="team-three__social">
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                        <a href="#">
                          <span className="fas fa-wifi" />
                        </a>
                      </div>
                    </div>
                    <div className="team-three__content">
                      <p className="team-three__sub-title">Ceo Founder</p>
                      <h4 className="team-three__title">
                        <Link href="/speaker-single">Matthew White</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Team Three Single End*/}
              {/*Team Three Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="team-three__single">
                  <div className="team-three__img-box">
                    <div className="team-three__img">
                      <img src="assets/images/team/team-three-3-2.jpg" alt="" />
                    </div>
                    <div className="team-three__share-and-social">
                      <div className="team-three__share">
                        <a href="#">
                          <span className="fas fa-share-alt" />
                        </a>
                      </div>
                      <div className="team-three__social">
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                        <a href="#">
                          <span className="fas fa-wifi" />
                        </a>
                      </div>
                    </div>
                    <div className="team-three__content">
                      <p className="team-three__sub-title">Ceo Founder</p>
                      <h4 className="team-three__title">
                        <Link href="/speaker-single">D. Saira Smith</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Team Three Single End*/}
              {/*Team Three Single Start*/}
              <SwiperSlide className="swiper-slide">
                <div className="team-three__single">
                  <div className="team-three__img-box">
                    <div className="team-three__img">
                      <img src="assets/images/team/team-three-3-3.jpg" alt="" />
                    </div>
                    <div className="team-three__share-and-social">
                      <div className="team-three__share">
                        <a href="#">
                          <span className="fas fa-share-alt" />
                        </a>
                      </div>
                      <div className="team-three__social">
                        <a href="#">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <span className="fab fa-pinterest-p" />
                        </a>
                        <a href="#">
                          <span className="fas fa-wifi" />
                        </a>
                      </div>
                    </div>
                    <div className="team-three__content">
                      <p className="team-three__sub-title">Ceo Founder</p>
                      <h4 className="team-three__title">
                        <Link href="/speaker-single">Maksdora White</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/*Team Three Single End*/}
            </div>
            {/* If we need navigation buttons */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default TeamSlider;
