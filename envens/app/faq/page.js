import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Our Faq"} />
      <section className="faq-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="faq-page__left">
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion-1"
                >
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Where Does Eventime Take Place?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable. Phasellus a rhoncus
                          erat. Vivamus vel eros vitae est aliquet pellentesque
                          vitae.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Where Does Eventime Take Place?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable. Phasellus a rhoncus
                          erat. Vivamus vel eros vitae est aliquet pellentesque
                          vitae.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>How Can I Get The Latest News On Exhibit 2020?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable. Phasellus a rhoncus
                          erat. Vivamus vel eros vitae est aliquet pellentesque
                          vitae.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>What makes your company different?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable. Phasellus a rhoncus
                          erat. Vivamus vel eros vitae est aliquet pellentesque
                          vitae.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>How Can I Get The Latest News On Exhibit 2020?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable. Phasellus a rhoncus
                          erat. Vivamus vel eros vitae est aliquet pellentesque
                          vitae.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>Will you be updating your theme weekly?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable. Phasellus a rhoncus
                          erat. Vivamus vel eros vitae est aliquet pellentesque
                          vitae.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>How Can My Company Sponsor This Event 2019?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority
                          have suffered alteration in some fo injected humour,
                          or randomised words believable. Phasellus a rhoncus
                          erat. Vivamus vel eros vitae est aliquet pellentesque
                          vitae.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="faq-page__right">
                <div className="faq-page__solution-box">
                  <h3 className="faq-page__solution-title">
                    Let's talk about improving your IT Solution
                  </h3>
                  <form
                    className="contact-form-validated faq-page__form"
                    action="assets/inc/sendemail.php"
                    method="post"
                    noValidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="faq-page__input-box">
                          <input
                            type="text"
                            name="username"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="faq-page__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="faq-page__input-box">
                          <div className="select-box">
                            <select className="wide">
                              <option data-display="Select Subject">
                                Your Subject
                              </option>
                              <option value={1}>Select Subject 01</option>
                              <option value={2}>Select Subject 02</option>
                              <option value={3}>Select Subject 03</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="faq-page__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="faq-page__btn-box">
                          <button
                            type="submit"
                            className="faq-page__btn thm-btn-two"
                          >
                            Request a quote
                            <span className="icon-right-arrows" />
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
          <div className="faq-page__need-help">
            <div className="row">
              <div className="col-xl-7">
                <div className="faq-page__need-help-inner">
                  <h3 className="faq-page__need-help-title">
                    We’re here to help you
                  </h3>
                  <form action="#" className="faq-page__search-form">
                    <input type="search" placeholder="Search here" />
                    <button type="submit">
                      <i className="icon-loupe" />
                    </button>
                  </form>
                  <p className="faq-page__need-help-text">
                    Or choose <a href="#">contact us</a> and explain us
                    everything you need?
                  </p>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="faq-page__need-help-contact">
                  <div
                    className="faq-page__need-help-contact-bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/backgrounds/faq-page-need-help-contact-bg.png)",
                    }}
                  ></div>
                  <h3 className="faq-page__need-help-contact-title">
                    Still have questions? contact now
                  </h3>
                  <div className="faq-page__need-help-contact-box">
                    <div className="icon">
                      <span className="icon-phone-call" />
                    </div>
                    <div className="content">
                      <p>Call Anytime</p>
                      <h4>
                        <a href="tel:9212340800">+92 (1234) 0800</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EnvensLayouts>
  );
};
export default page;
