"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Gallary = ({ top = true, className = "gallery-two" }) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".masonary-layout", {
        itemSelector: ".wow",
        percentPosition: true,
        masonry: {
          columnWidth: ".wow",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section className={className}>
      {top && (
        <div className="gallery-two__top">
          <div className="container">
            <div className="gallery-two__top-inner">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    <span>//</span> Event Gallery
                    <span>//</span>
                  </span>
                </div>
                <h2 className="section-title__title">
                  Our Greatest Event <br /> <span>Showcase</span>
                </h2>
              </div>
              <div className="gallery-two__btn-box">
                <Link href="/gallery" className="gallery-two__btn thm-btn-two">
                  <span className="fas fa-arrow-circle-right" />
                  View All Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="gallery-two__bottom">
        <div className="container">
          <div className="row masonary-layout">
            {/*Project Three Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-1.jpg" alt="" />
                  <div className="gallery-two__content">
                    <div
                      className="gallery-two__content-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/gallery-two-content-shape-1.png)",
                      }}
                    ></div>
                    <div className="gallery-two__zoom-and-link">
                      <a
                        href="assets/images/gallery/gallery-2-1.jpg"
                        className="img-popup"
                      >
                        <span className="icon-zoom" />
                      </a>
                      <Link href="/project-details">
                        <span className="icon-plus" />
                      </Link>
                    </div>
                    <div className="gallery-two__content-text">
                      <p>Event</p>
                      <h5>Conference 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
            {/*Project Three Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-2.jpg" alt="" />
                  <div className="gallery-two__content">
                    <div
                      className="gallery-two__content-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/gallery-two-content-shape-1.png)",
                      }}
                    ></div>
                    <div className="gallery-two__zoom-and-link">
                      <a
                        href="assets/images/gallery/gallery-2-2.jpg"
                        className="img-popup"
                      >
                        <span className="icon-zoom" />
                      </a>
                      <Link href="/project-details">
                        <span className="icon-plus" />
                      </Link>
                    </div>
                    <div className="gallery-two__content-text">
                      <p>Event</p>
                      <h5>Conference 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
            {/*Project Three Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-3.jpg" alt="" />
                  <div className="gallery-two__content">
                    <div
                      className="gallery-two__content-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/gallery-two-content-shape-1.png)",
                      }}
                    ></div>
                    <div className="gallery-two__zoom-and-link">
                      <a
                        href="assets/images/gallery/gallery-2-3.jpg"
                        className="img-popup"
                      >
                        <span className="icon-zoom" />
                      </a>
                      <Link href="/project-details">
                        <span className="icon-plus" />
                      </Link>
                    </div>
                    <div className="gallery-two__content-text">
                      <p>Event</p>
                      <h5>Conference 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
            {/*Project Three Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-4.jpg" alt="" />
                  <div className="gallery-two__content">
                    <div
                      className="gallery-two__content-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/gallery-two-content-shape-1.png)",
                      }}
                    ></div>
                    <div className="gallery-two__zoom-and-link">
                      <a
                        href="assets/images/gallery/gallery-2-4.jpg"
                        className="img-popup"
                      >
                        <span className="icon-zoom" />
                      </a>
                      <Link href="/project-details">
                        <span className="icon-plus" />
                      </Link>
                    </div>
                    <div className="gallery-two__content-text">
                      <p>Event</p>
                      <h5>Conference 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
            {/*Project Three Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-5.jpg" alt="" />
                  <div className="gallery-two__content">
                    <div
                      className="gallery-two__content-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/gallery-two-content-shape-1.png)",
                      }}
                    ></div>
                    <div className="gallery-two__zoom-and-link">
                      <a
                        href="assets/images/gallery/gallery-2-5.jpg"
                        className="img-popup"
                      >
                        <span className="icon-zoom" />
                      </a>
                      <Link href="/project-details">
                        <span className="icon-plus" />
                      </Link>
                    </div>
                    <div className="gallery-two__content-text">
                      <p>Event</p>
                      <h5>Conference 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
            {/*Project Three Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-6.jpg" alt="" />
                  <div className="gallery-two__content">
                    <div
                      className="gallery-two__content-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/gallery-two-content-shape-1.png)",
                      }}
                    ></div>
                    <div className="gallery-two__zoom-and-link">
                      <a
                        href="assets/images/gallery/gallery-2-6.jpg"
                        className="img-popup"
                      >
                        <span className="icon-zoom" />
                      </a>
                      <Link href="/project-details">
                        <span className="icon-plus" />
                      </Link>
                    </div>
                    <div className="gallery-two__content-text">
                      <p>Event</p>
                      <h5>Conference 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
            {/*Project Three Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-7.jpg" alt="" />
                  <div className="gallery-two__content">
                    <div
                      className="gallery-two__content-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/gallery-two-content-shape-1.png)",
                      }}
                    ></div>
                    <div className="gallery-two__zoom-and-link">
                      <a
                        href="assets/images/gallery/gallery-2-7.jpg"
                        className="img-popup"
                      >
                        <span className="icon-zoom" />
                      </a>
                      <Link href="/project-details">
                        <span className="icon-plus" />
                      </Link>
                    </div>
                    <div className="gallery-two__content-text">
                      <p>Event</p>
                      <h5>Conference 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
            {/*Project Three Single Start*/}
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-8.jpg" alt="" />
                  <div className="gallery-two__content">
                    <div
                      className="gallery-two__content-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/gallery-two-content-shape-1.png)",
                      }}
                    ></div>
                    <div className="gallery-two__zoom-and-link">
                      <a
                        href="assets/images/gallery/gallery-2-8.jpg"
                        className="img-popup"
                      >
                        <span className="icon-zoom" />
                      </a>
                      <Link href="/project-details">
                        <span className="icon-plus" />
                      </Link>
                    </div>
                    <div className="gallery-two__content-text">
                      <p>Event</p>
                      <h5>Conference 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
            {/*Project Three Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="900ms"
            >
              <div className="gallery-two__single">
                <div className="gallery-two__img">
                  <img src="assets/images/gallery/gallery-2-9.jpg" alt="" />
                  <div className="gallery-two__content">
                    <div
                      className="gallery-two__content-shape-1"
                      style={{
                        backgroundImage:
                          "url(assets/images/shapes/gallery-two-content-shape-1.png)",
                      }}
                    ></div>
                    <div className="gallery-two__zoom-and-link">
                      <a
                        href="assets/images/gallery/gallery-2-9.jpg"
                        className="img-popup"
                      >
                        <span className="icon-zoom" />
                      </a>
                      <Link href="/project-details">
                        <span className="icon-plus" />
                      </Link>
                    </div>
                    <div className="gallery-two__content-text">
                      <p>Event</p>
                      <h5>Conference 2023</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Project Three Single End*/}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallary;
