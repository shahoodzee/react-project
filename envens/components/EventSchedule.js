"use client";

import Link from "next/link";
import { useState } from "react";

export const EventSchedule1 = () => {
  const [toggle, setToggle] = useState("nav-1");
  return (
    <section className="event-one">
      <div className="event-one__shape-1 zoominout">
        <img src="assets/images/shapes/event-one-shape-1.png" alt="" />
      </div>
      <div className="container">
        <div className="event-one__inner">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">
                <span>//</span> Event Schedule
              </p>
            </div>
            <h2 className="section-title__title">
              Follow Our Event <br /> <span>Schedule</span>
            </h2>
          </div>
          <div className="event-one__main-tab-box tabs-box">
            <ul as={"ul"} className="tab-buttons clearfix list-unstyled">
              <li
                className={`tab-btn ${toggle == "nav-1" ? "active-btn" : ""}`}
                onClick={() => setToggle("nav-1")}
              >
                <h3>
                  1<span>st</span> Day
                </h3>
                <p>February 08 , 2024</p>
              </li>
              <li
                className={`tab-btn ${toggle == "nav-2" ? "active-btn" : ""}`}
                onClick={() => setToggle("nav-2")}
              >
                <h3>
                  2<span>nd</span> Day
                </h3>
                <p>February 16 , 2024</p>
              </li>
              <li
                className={`tab-btn ${toggle == "nav-3" ? "active-btn" : ""}`}
                onClick={() => setToggle("nav-3")}
              >
                <h3>
                  3<span>rd</span> Day
                </h3>
                <p>February 17 , 2024</p>
              </li>
            </ul>
            <div className="tabs-content">
              {/*tab*/}
              <div
                className={`tab ${toggle == "nav-1" ? "active-tab" : ""}`}
                style={{ display: toggle == "nav-1" ? "active-tab" : "" }}
              >
                <div className="event-one__main-content-box">
                  <div className="event-one__circle-one" />
                  <div className="event-one__circle-two" />
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-1.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Historical Song &amp; <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single event-one__main-content-single--two">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-title-and-address-box">
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Classical Music Fest <br />
                                2024
                              </a>
                            </h4>
                            <ul className="event-one__main-content-address-box list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-pin" />
                                </div>
                                <div className="text">
                                  <p>New Hyde, 11040</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-time" />
                                </div>
                                <div className="text">
                                  <p>
                                    08 : 00 am-05 : 00 pm <br />
                                    16 March , 2024
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-3.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Dj Mixers Isolated <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*tab*/}
              <div
                className={`tab ${toggle == "nav-2" ? "active-tab" : ""}`}
                style={{ display: toggle == "nav-2" ? "active-tab" : "" }}
              >
                <div className="event-one__main-content-box">
                  <div className="event-one__circle-one" />
                  <div className="event-one__circle-two" />
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-3.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Historical Song &amp; <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single event-one__main-content-single--two">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-title-and-address-box">
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Classical Music Fest <br />
                                2024
                              </a>
                            </h4>
                            <ul className="event-one__main-content-address-box list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-pin" />
                                </div>
                                <div className="text">
                                  <p>New Hyde, 11040</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-time" />
                                </div>
                                <div className="text">
                                  <p>
                                    08 : 00 am-05 : 00 pm <br />
                                    16 March , 2024
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-2.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Dj Mixers Isolated <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*tab*/}
              <div
                className={`tab ${toggle == "nav-3" ? "active-tab" : ""}`}
                style={{ display: toggle == "nav-3" ? "active-tab" : "" }}
              >
                <div className="event-one__main-content-box">
                  <div className="event-one__circle-one" />
                  <div className="event-one__circle-two" />
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-1.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Historical Song &amp; <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single event-one__main-content-single--two">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-title-and-address-box">
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Classical Music Fest <br />
                                2024
                              </a>
                            </h4>
                            <ul className="event-one__main-content-address-box list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-pin" />
                                </div>
                                <div className="text">
                                  <p>New Hyde, 11040</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-time" />
                                </div>
                                <div className="text">
                                  <p>
                                    08 : 00 am-05 : 00 pm <br />
                                    16 March , 2024
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-3.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Dj Mixers Isolated <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const EventSchedule2 = () => {
  const [toggle, setToggle] = useState("1stday");
  return (
    <section className="events-three">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <p className="section-title__tagline">
              <span>//</span> Schedule <span>//</span>{" "}
            </p>
          </div>
          <h2 className="section-title__title">
            Information Program &amp; Event <br /> <span>Schedule</span>
          </h2>
        </div>
        <div className="events-three__main-tab-box tabs-box">
          <ul className="tab-buttons clearfix list-unstyled">
            <li
              data-tab="#1stday"
              className={`tab-btn ${toggle == "1stday" ? "active-btn" : ""}`}
              onClick={() => setToggle("1stday")}
            >
              <div className="events-three__tab-btn-content">
                <p>November 12 , 2023</p>
                <h3>
                  1<span>st</span>Day
                </h3>
              </div>
            </li>
            <li
              data-tab="#2ndday"
              className={`tab-btn ${toggle == "2ndday" ? "active-btn" : ""}`}
              onClick={() => setToggle("2ndday")}
            >
              <div className="events-three__tab-btn-content">
                <p>November 15 , 2023</p>
                <h3>
                  2<span>nd</span>Day
                </h3>
              </div>
            </li>
            <li
              data-tab="#3rdday"
              className={`tab-btn ${toggle == "3rdday" ? "active-btn" : ""}`}
              onClick={() => setToggle("3rdday")}
            >
              <div className="events-three__tab-btn-content">
                <p>November 18 , 2023</p>
                <h3>
                  3<span>rd</span>Day
                </h3>
              </div>
            </li>
            <li
              data-tab="#4thdday"
              className={`tab-btn ${toggle == "4thdday" ? "active-btn" : ""}`}
              onClick={() => setToggle("4thdday")}
            >
              <div className="events-three__tab-btn-content">
                <p>November 22 , 2023</p>
                <h3>
                  4<span>th</span>Day
                </h3>
              </div>
            </li>
          </ul>
          <div className="tabs-content">
            {/*tab*/}
            <div
              id="1stday"
              className={`tab ${toggle == "1stday" ? "active-tab" : ""}`}
            >
              <div className="events-three__main-content-box">
                <ul className="list-unstyled events-three__content-list">
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-1.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            John Singh
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">
                              Kelimontos DJ Party 2019
                            </Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-2.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Mitra Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">Meeting With Word</Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-3.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Kowlant Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">
                              Humble Hill Running Day
                            </Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*tab*/}
            {/*tab*/}
            <div
              id="2ndday"
              className={`tab ${toggle == "2ndday" ? "active-tab" : ""}`}
            >
              <div className="events-three__main-content-box">
                <ul className="list-unstyled events-three__content-list">
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-1.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            John Singh
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">
                              Kelimontos DJ Party 2019
                            </Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-2.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Mitra Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">Meeting With Word</Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-3.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Kowlant Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/contact">Humble Hill Running Day</Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*tab*/}
            {/*tab*/}
            <div
              id="3rdday"
              className={`tab ${toggle == "3rdday" ? "active-tab" : ""}`}
            >
              <div className="events-three__main-content-box">
                <ul className="list-unstyled events-three__content-list">
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-1.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            John Singh
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">
                              Kelimontos DJ Party 2019
                            </Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-2.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Mitra Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">Meeting With Word</Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-3.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Kowlant Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/contact">Humble Hill Running Day</Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*tab*/}
            {/*tab*/}
            <div
              id="4thdday"
              className={`tab ${toggle == "4thdday" ? "active-tab" : ""}`}
            >
              <div className="events-three__main-content-box">
                <ul className="list-unstyled events-three__content-list">
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-1.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            John Singh
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">
                              Kelimontos DJ Party 2019
                            </Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-2.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Mitra Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">Meeting With Word</Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-3.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Kowlant Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">
                              Humble Hill Running Day
                            </Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="contact"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Buy Ticket
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*tab*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export const EventSchedule3 = () => {
  return (
    <section className="event-two">
      <div className="container">
        <div className="event-two__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline section-title__tagline--two">
                <span>//</span> About The Event
              </p>
            </div>
            <h2 className="section-title__title">
              Our Event Agenda And <br />
              <span>Schedule</span>
            </h2>
          </div>
          <div className="event-two__btn-box">
            <Link href="/schedule-list" className="event-two__btn thm-btn-two">
              <span className="fas fa-arrow-circle-right" />
              more Schedule
            </Link>
          </div>
        </div>
        <div className="row">
          {/*Event Two Single Start*/}
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
            <div className="event-two__single">
              <div className="event-two__day-box">
                <div className="event-two__day">
                  <div className="event-two__day-shape">
                    <img
                      src="assets/images/shapes/event-two-day-box-shape.png"
                      alt=""
                    />
                  </div>
                  <h4>1st Day</h4>
                  <p>March 17, 2019</p>
                </div>
              </div>
              <div className="event-two__list-box">
                <ul className="event-two__list list-unstyled">
                  <li>
                    <div className="event-two__client-img-box">
                      <div className="event-two__client-img">
                        <img
                          src="assets/images/resources/event-two-client-img-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="event-two__content">
                      <div className="event-two__meta">
                        <p>
                          <span className="fas fa-clock" />
                          08:00am - 05:00pm
                        </p>
                        <p>
                          <span className="fas fa-map-marker" />
                          New Hyde, 11040
                        </p>
                      </div>
                      <h3 className="event-two__title">
                        <Link href="/schedule-list-2">
                          Meeting With World Class Investors
                        </Link>
                      </h3>
                      <p className="event-two__text">
                        Undertake specific mandates to address global challenges
                        the the authority by delegated to the highest methood...
                      </p>
                      <div className="event-two__btn-box">
                        <Link
                          href="schedule-list-2"
                          className="event-two__btn-2 thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          JHON sMITH
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="event-two__client-img-box">
                      <div className="event-two__client-img">
                        <img
                          src="assets/images/resources/event-two-client-img-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="event-two__content">
                      <div className="event-two__meta">
                        <p>
                          <span className="fas fa-clock" />
                          08:00am - 05:00pm
                        </p>
                        <p>
                          <span className="fas fa-map-marker" />
                          New Hyde, 11040
                        </p>
                      </div>
                      <h3 className="event-two__title">
                        <Link href="/schedule-list-2">
                          Registration For Opening Workshop
                        </Link>
                      </h3>
                      <p className="event-two__text">
                        Undertake specific mandates to address global challenges
                        the the authority by delegated to the highest methood...
                      </p>
                      <div className="event-two__btn-box">
                        <Link
                          href="schedule-list-2"
                          className="event-two__btn-2 thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          JHON sMITH
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*Event Two Single End*/}
          {/*Event Two Single Start*/}
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
            <div className="event-two__single event-two__single-2">
              <div className="event-two__day-box">
                <div className="event-two__day">
                  <div className="event-two__day-shape">
                    <img
                      src="assets/images/shapes/event-two-day-box-shape.png"
                      alt=""
                    />
                  </div>
                  <h4>2nd Day</h4>
                  <p>March 18, 2019</p>
                </div>
              </div>
              <div className="event-two__list-box">
                <ul className="event-two__list list-unstyled">
                  <li>
                    <div className="event-two__client-img-box">
                      <div className="event-two__client-img">
                        <img
                          src="assets/images/resources/event-two-client-img-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="event-two__content">
                      <div className="event-two__meta">
                        <p>
                          <span className="fas fa-clock" />
                          08:00am - 05:00pm
                        </p>
                        <p>
                          <span className="fas fa-map-marker" />
                          New Hyde, 11040
                        </p>
                      </div>
                      <h3 className="event-two__title">
                        <Link href="/schedule-list-2">
                          Humble Hill Running Day
                        </Link>
                      </h3>
                      <p className="event-two__text">
                        Undertake specific mandates to address global challenges
                        the the authority by delegated to the highest methood...
                      </p>
                      <div className="event-two__btn-box">
                        <Link
                          href="schedule-list-2"
                          className="event-two__btn-2 thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          JHON sMITH
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="event-two__client-img-box">
                      <div className="event-two__client-img">
                        <img
                          src="assets/images/resources/event-two-client-img-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="event-two__content">
                      <div className="event-two__meta">
                        <p>
                          <span className="fas fa-clock" />
                          08:00am - 05:00pm
                        </p>
                        <p>
                          <span className="fas fa-map-marker" />
                          New Hyde, 11040
                        </p>
                      </div>
                      <h3 className="event-two__title">
                        <Link href="/schedule-list-2">
                          Greetings and Opening Event
                        </Link>
                      </h3>
                      <p className="event-two__text">
                        Undertake specific mandates to address global challenges
                        the the authority by delegated to the highest methood...
                      </p>
                      <div className="event-two__btn-box">
                        <Link
                          href="schedule-list-2"
                          className="event-two__btn-2 thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          JHON sMITH
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*Event Two Single End*/}
        </div>
      </div>
    </section>
  );
};

export const EventSchedule4 = () => {
  const [toggle, setToggle] = useState("nav-1");
  return (
    <section className="schedule-list">
      <div
        className="schedule-list__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/schedule-list-bg.jpg)",
        }}
      />
      <div className="container">
        <div className="schedule-list__inner">
          <div className="schedule-list__main-tab-box tabs-box">
            <div className="schedule-list__main-tab-buttons">
              <ul className="tab-buttons clearfix list-unstyled">
                <li
                  data-tab="#firstday"
                  className={`tab-btn ${toggle == "nav-1" ? "active-btn" : ""}`}
                  onClick={() => setToggle("nav-1")}
                >
                  <p>First Day</p>
                </li>
                <li
                  data-tab="#secondday"
                  className={`tab-btn ${toggle == "nav-2" ? "active-btn" : ""}`}
                  onClick={() => setToggle("nav-2")}
                >
                  <p>second Day</p>
                </li>
                <li
                  data-tab="#thirdday"
                  className={`tab-btn ${toggle == "nav-3" ? "active-btn" : ""}`}
                  onClick={() => setToggle("nav-3")}
                >
                  <p>Third Day</p>
                </li>
              </ul>
            </div>
            <div className="schedule-list__main-tab-content">
              <div className="tabs-content">
                {/*tab*/}
                <div
                  className={`tab ${toggle == "nav-1" ? "active-tab" : ""}`}
                  style={{ display: toggle == "nav-1" ? "active-tab" : "" }}
                >
                  <div className="schedule-list__content-inner">
                    <div className="schedule-list__first-half">
                      <p>1st half</p>
                    </div>
                    <div className="schedule-list__second-half">
                      <p>2nd Half</p>
                    </div>
                    <div className="schedule-list__more">
                      <p>MOre</p>
                    </div>
                    <div className="schedule-list__single">
                      <div className="schedule-list__date">
                        <p>April 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-1.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Registration Opening Workshop</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2">
                      <div className="schedule-list__date">
                        <p>June 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-2.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Introduction About Speakers</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-3">
                      <div className="schedule-list__date">
                        <p>March 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-3.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Marketing And Empathy Psycology</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2 schedule-list__single-4">
                      <div className="schedule-list__date">
                        <p>January 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-4.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Greeting And Opening Event</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={`tab ${toggle == "nav-2" ? "active-tab" : ""}`}
                  style={{ display: toggle == "nav-2" ? "active-tab" : "" }}
                >
                  <div className="schedule-list__content-inner">
                    <div className="schedule-list__first-half">
                      <p>1st half</p>
                    </div>
                    <div className="schedule-list__second-half">
                      <p>2nd Half</p>
                    </div>
                    <div className="schedule-list__more">
                      <p>MOre</p>
                    </div>
                    <div className="schedule-list__single">
                      <div className="schedule-list__date">
                        <p>April 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-1.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Registration Opening Workshop</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2">
                      <div className="schedule-list__date">
                        <p>June 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-2.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Introduction About Speakers</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-3">
                      <div className="schedule-list__date">
                        <p>March 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-3.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Marketing And Empathy Psycology</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2 schedule-list__single-4">
                      <div className="schedule-list__date">
                        <p>January 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-4.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Greeting And Opening Event</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={`tab ${toggle == "nav-3" ? "active-tab" : ""}`}
                  style={{ display: toggle == "nav-3" ? "active-tab" : "" }}
                >
                  <div className="schedule-list__content-inner">
                    <div className="schedule-list__first-half">
                      <p>1st half</p>
                    </div>
                    <div className="schedule-list__second-half">
                      <p>2nd Half</p>
                    </div>
                    <div className="schedule-list__more">
                      <p>MOre</p>
                    </div>
                    <div className="schedule-list__single">
                      <div className="schedule-list__date">
                        <p>April 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-1.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Registration Opening Workshop</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2">
                      <div className="schedule-list__date">
                        <p>June 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-2.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Introduction About Speakers</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-3">
                      <div className="schedule-list__date">
                        <p>March 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-3.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Marketing And Empathy Psycology</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2 schedule-list__single-4">
                      <div className="schedule-list__date">
                        <p>January 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-4.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Greeting And Opening Event</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
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
