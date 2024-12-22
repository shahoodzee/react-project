import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Contact Us"} />
      {/*Quick Contact Start*/}
      <section className="quick-contact">
        <div className="container">
          <div className="row">
            {/*Quick Contact Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="quick-contact__single">
                <h4 className="quick-contact__title">Visit a Office</h4>
                <p className="quick-contact__text">
                  You are most welcome to visit office.
                </p>
                <div className="quick-contact__contact-list">
                  <p>
                    Boat House, 152/21 City Road
                    <br /> Hoxton N1 6NG, UK.
                  </p>
                </div>
                <div className="quick-contact__icon">
                  <span className="icon-pin" />
                </div>
              </div>
            </div>
            {/*Quick Contact Single End*/}
            {/*Quick Contact Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="quick-contact__single">
                <h4 className="quick-contact__title">Make a Call</h4>
                <p className="quick-contact__text">
                  Keeping you always better connected.
                </p>
                <div className="quick-contact__contact-list">
                  <p>
                    <a href="tel:15557890123">Service: +1 555-7890-123</a>
                  </p>
                  <p>
                    <a href="tel:2334567890178802">
                      Sales: +233 456 789 01 &amp; 788 02
                    </a>
                  </p>
                </div>
                <div className="quick-contact__icon">
                  <span className="icon-phone-call" />
                </div>
              </div>
            </div>
            {/*Quick Contact Single End*/}
            {/*Quick Contact Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="quick-contact__single">
                <h4 className="quick-contact__title">Send Email</h4>
                <p className="quick-contact__text">
                  Drop us a mail we will answer you asap.
                </p>
                <div className="quick-contact__contact-list">
                  <p>
                    <a href="mailto:support@mailus.com">
                      Sales: support@mailus.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:sendmail@company.com">
                      Service: sendmail@company.com{" "}
                    </a>
                  </p>
                </div>
                <div className="quick-contact__icon">
                  <span className="icon-email" />
                </div>
              </div>
            </div>
            {/*Quick Contact Single End*/}
          </div>
        </div>
      </section>
      {/*Quick Contact End*/}
      {/*Contact Two Start*/}
      <section className="contact-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="contact-two__left">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                  className="contact-two__google-map"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-xl-7">
              <div className="contact-two__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <p className="section-title__tagline section-title__tagline--two">
                      <span>//</span>
                      Contact With Us
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    Join the Community to <br />
                    <span>Know Us</span>
                  </h2>
                </div>
                <div className="contact-two__form-box">
                  <div className="contact-two__form-img">
                    <img
                      src="assets/images/resources/contact-two-form-img.jpg"
                      alt
                    />
                  </div>
                  <form
                    className="contact-form-validated contact-two__form"
                    action="assets/inc/sendemail.php"
                    method="post"
                    noValidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__input-box">
                          <div className="contact-two__input-box-icon">
                            <span className="fas fa-calendar-alt" />
                          </div>
                          <input
                            type="text"
                            name="date"
                            placeholder="Select date"
                            id="datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6">
                        <div className="contact-two__input-box">
                          <input
                            type="text"
                            name="time"
                            placeholder="Select time"
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6">
                        <div className="contact-two__input-box">
                          <div className="select-box">
                            <select className="selectmenu wide">
                              <option selected="selected">Passengers</option>
                              <option>Passengers 01</option>
                              <option>Passengers 02</option>
                              <option>Passengers 03</option>
                              <option>Passengers 04</option>
                              <option>Passengers 05</option>
                              <option>Passengers 06</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-page__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Write Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="contact-two__btn-box">
                          <button
                            type="submit"
                            className="thm-btn contact-two__btn"
                          >
                            Send A Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="result" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Two End*/}
    </EnvensLayouts>
  );
};
export default page;
