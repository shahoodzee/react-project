"use client";
import { envensUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header }) => {
  useEffect(() => {
    envensUtility.stickyHeader();
  }, []);

  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;

    default:
      return <Header2 />;
  }
};
export default Header;

const Menus = () => {
  return (
    <ul className="main-menu__list">
      <li className="dropdown">
        <Link href="/">Home </Link>
        <ul>
          <li>
            <Link href="/">Home One</Link>
          </li>
          <li>
            <Link href="/index2">Home Two</Link>
          </li>
          <li>
            <Link href="/index3">Home Three</Link>
          </li>
          <li className="dropdown">
            <a href="#">Header Styles</a>
            <ul>
              <li>
                <Link href="/">Header One</Link>
              </li>
              <li>
                <Link href="/index2">Header Two</Link>
              </li>
              <li>
                <Link href="/index3">Header Three</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li className="dropdown">
        <a href="#">Pages</a>
        <ul>
          <li>
            <Link href="/speaker">Speaker</Link>
          </li>
          <li>
            <Link href="/archives-speakers">Archives Speakers</Link>
          </li>
          <li>
            <Link href="/speaker-single">Speaker Single</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/faq">Faq</Link>
          </li>
          <li>
            <Link href="/venue">Venue</Link>
          </li>
          <li>
            <Link href="/sponsors">Sponsors</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/404">404 Error</Link>
          </li>
          <li>
            <Link href="/coming-soon">Coming Soon</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#">Schedule</a>
        <ul>
          <li>
            <Link href="/schedule-list">Schedule List 01</Link>
          </li>
          <li>
            <Link href="/schedule-list-2">Schedule List 02</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#">Blog</a>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/blog-details">Blog Details</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

const Social = () => {
  return (
    <div className="main-menu__social">
      <a href="#">
        <span className="fab fa-facebook-f" />
      </a>
      <a href="">
        <span className="fab fa-twitter" />
      </a>
      <a href="">
        <span className="fab fa-linkedin-in" />
      </a>
    </div>
  );
};

const SearchBtn = ({
  className = "main-menu__search search-toggler",
  setSearchToggle,
}) => {
  return (
    <div className="main-menu__search-box">
      <a
        href="#"
        className={className}
        onClick={(e) => {
          e.preventDefault();
          setSearchToggle(true);
        }}
      >
        <span className="icon-loupe" />
        <p className="main-menu__search-text">Search here ..</p>
      </a>
    </div>
  );
};

const SearchPopup = ({ toggle, setSearchToggle }) => {
  return (
    <div className={`search-popup ${toggle ? "active" : ""}`}>
      <div
        className="search-popup__overlay search-toggler"
        onClick={() => setSearchToggle(false)}
      />
      <div className="search-popup__content">
        <form action="#">
          <label labelFor="search" className="sr-only">
            search here
          </label>
          <input type="text" id="search" placeholder="Search Here..." />
          <button type="submit" aria-label="search submit" className="thm-btn">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

const MobileMenu = ({ mobileToggle, setMobileToggle }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <div className={`mobile-nav__wrapper ${mobileToggle ? "expanded" : ""}`}>
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={() => setMobileToggle(false)}
      />
      {/* /.mobile-nav__overlay */}
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={() => setMobileToggle(false)}
        >
          <i className="fa fa-times" />
        </span>
        <div className="logo-box">
          <Link href="/" aria-label="logo image">
            <img src="assets/images/resources/logo-2.png" width={150} alt />
          </Link>
        </div>
        {/* /.logo-box */}
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            <li className="dropdown current">
              <Link href="/">
                Home{" "}
                <button
                  aria-label="dropdown toggler"
                  onClick={() => activeMenuSet("home")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </Link>
              <ul style={activeLi("home")}>
                <li className="current">
                  <Link href="/">Home One</Link>
                </li>
                <li>
                  <Link href="/index2">Home Two</Link>
                </li>
                <li>
                  <Link href="/index3">Home Three</Link>
                </li>
                <li className="dropdown">
                  <a href="#">
                    Header Styles
                    <button
                      aria-label="dropdown toggler"
                      onClick={() => multiMenuSet("header-style")}
                    >
                      <i className="fa fa-angle-down" />
                    </button>
                  </a>
                  <ul style={multiMenuActiveLi("header-style")}>
                    <li className="current">
                      <Link href="/">Header One</Link>
                    </li>
                    <li>
                      <Link href="/index2">Header Two</Link>
                    </li>
                    <li>
                      <Link href="/index3">Header Three</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className="dropdown">
              <a href="#">
                Pages
                <button
                  aria-label="dropdown toggler"
                  onClick={() => activeMenuSet("Pages")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Pages")}>
                <li>
                  <Link href="/speaker">Speaker</Link>
                </li>
                <li>
                  <Link href="/archives-speakers">Archives Speakers</Link>
                </li>
                <li>
                  <Link href="/speaker-single">Speaker Single</Link>
                </li>
                <li>
                  <Link href="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/faq">Faq</Link>
                </li>
                <li>
                  <Link href="/venue">Venue</Link>
                </li>
                <li>
                  <Link href="/sponsors">Sponsors</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/404">404 Error</Link>
                </li>
                <li>
                  <Link href="/coming-soon">Coming Soon</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                Schedule
                <button
                  aria-label="dropdown toggler"
                  onClick={() => activeMenuSet("Schedule")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Schedule")}>
                <li>
                  <Link href="/schedule-list">Schedule List 01</Link>
                </li>
                <li>
                  <Link href="/schedule-list-2">Schedule List 02</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                Blog
                <button
                  aria-label="dropdown toggler"
                  onClick={() => activeMenuSet("Blog")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Blog")}>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/blog-details">Blog Details</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* /.mobile-nav__container */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope" />
            <a href="mailto:needhelp@packageName__.com">needhelp@envens.com</a>
          </li>
          <li>
            <i className="fa fa-phone-alt" />
            <a href="tel:666-888-0000">666 888 0000</a>
          </li>
        </ul>
        {/* /.mobile-nav__contact */}
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-facebook-square" />
            <a href="#" className="fab fa-pinterest-p" />
            <a href="#" className="fab fa-instagram" />
          </div>
          {/* /.mobile-nav__social */}
        </div>
        {/* /.mobile-nav__top */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
  );
};

const Header1 = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <Fragment>
      <header className="main-header">
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/">
                    <img src="assets/images/resources/logo-1.png" alt="" />
                  </Link>
                </div>
                <div className="main-menu__login-box">
                  <div className="icon">
                    <span className="icon-user" />
                  </div>
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Join With Us">Join With Us</option>
                      <option value={1}>Login</option>
                      <option value={2}>Register</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__main-menu-box">
                  <a
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={() => setMobileToggle(true)}
                  >
                    <i className="fa fa-bars" />
                  </a>
                  <Menus />
                </div>
                <div className="main-menu__social-and-search-box">
                  <Social />
                  <SearchBtn setSearchToggle={setSearchToggle} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content" />
      </div>
      <SearchPopup toggle={searchToggle} setSearchToggle={setSearchToggle} />
      <MobileMenu
        mobileToggle={mobileToggle}
        setMobileToggle={setMobileToggle}
      />
    </Fragment>
  );
};

const Header2 = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <Fragment>
      <header className="main-header main-header-two">
        <nav className="main-menu main-menu-two">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/">
                    <img src="assets/images/resources/logo-2.png" alt="" />
                  </Link>
                </div>
                <div className="main-menu__login-box">
                  <div className="icon">
                    <span className="icon-user" />
                  </div>
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Join With Us">Join With Us</option>
                      <option value={1}>Login</option>
                      <option value={2}>Register</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__main-menu-box">
                  <a
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={() => setMobileToggle(true)}
                  >
                    <i className="fa fa-bars" />
                  </a>
                  <Menus />
                </div>
                <div className="main-menu__social-and-search-box">
                  <div className="main-menu__social">
                    <a href="#">
                      <span className="fab fa-facebook-f" />
                    </a>
                    <a href="">
                      <span className="fab fa-twitter" />
                    </a>
                    <a href="">
                      <span className="fab fa-linkedin-in" />
                    </a>
                  </div>
                  <SearchBtn setSearchToggle={setSearchToggle} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu main-menu-two">
        <div className="sticky-header__content" />
      </div>
      <SearchPopup toggle={searchToggle} setSearchToggle={setSearchToggle} />
      <MobileMenu
        mobileToggle={mobileToggle}
        setMobileToggle={setMobileToggle}
      />
    </Fragment>
  );
};

const Header3 = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <Fragment>
      <header className="main-header-three">
        <div className="main-header-three__top">
          <div className="main-header-three__top-inner">
            <ul className="list-unstyled main-header-three__contact-list">
              <li>
                <div className="icon">
                  <i className="icon-email" />
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
                  <i className="icon-pin" />
                </div>
                <div className="text">
                  <p>80 Broklyn Golden Street UK</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-phone-call" />
                </div>
                <div className="text">
                  <p>
                    <a href="tel:0012346823705">+00 (1234) 682 3705</a>
                  </p>
                </div>
              </li>
            </ul>
            <div className="main-header-three__social-and-top-menu">
              <div className="main-header-three__social">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="#">
                  <i className="fas fa-wifi" />
                </a>
              </div>
              <div className="main-header-three__top-menu">
                <ul className="main-header-three__top-menu-list list-unstyled">
                  <li>
                    <Link href="/faq">Our Faqs</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__left">
                <div className="main-menu-three__logo">
                  <Link href="/">
                    <img src="assets/images/resources/logo-3.png" alt="" />
                  </Link>
                </div>
                <div className="main-menu-three__main-menu-box">
                  <a
                    href="#"
                    className="mobile-nav__toggler"
                    onClick={() => setMobileToggle(true)}
                  >
                    <i className="fa fa-bars" />
                  </a>
                  <Menus />
                </div>
              </div>
              <div className="main-menu-three__right">
                <div className="main-menu-three__login-box">
                  <div className="icon">
                    <span className="icon-user" />
                  </div>
                  <div className="select-box">
                    <select className="wide">
                      <option data-display="Join With Us">Join With Us</option>
                      <option value={1}>Login</option>
                      <option value={2}>Register</option>
                    </select>
                  </div>
                </div>
                <SearchBtn
                  className="main-menu-three__search search-toggler"
                  setSearchToggle={setSearchToggle}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu main-menu-three">
        <div className="sticky-header__content" />
        {/* /.sticky-header__content */}
      </div>
      <SearchPopup toggle={searchToggle} setSearchToggle={setSearchToggle} />
      <MobileMenu
        mobileToggle={mobileToggle}
        setMobileToggle={setMobileToggle}
      />
    </Fragment>
  );
};
