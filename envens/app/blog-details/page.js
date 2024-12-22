import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Blog Details"} />
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <BlogSidebar />
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__right">
                <div className="blog-details__img">
                  <img src="assets/images/blog/blog-details-1-1.jpg" alt />
                </div>
                <div className="blog-details__content">
                  <ul className="blog-details__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-tag" />
                      </div>
                      <a href="#">Corporate</a>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-user" />
                      </div>
                      <a href="#">Paul Smith</a>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-comments" />
                      </div>
                      <a href="#">0 Comment</a>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fas fa-heart" />
                      </div>
                      <a href="#">0 Like</a>
                    </li>
                  </ul>
                  <h3 className="blog-details__title-1">
                    The Birth of Modern Architecture and its Artistic
                  </h3>
                  <p className="blog-details__text-1">
                    Professionals known as architects are responsible for
                    creating architectural designs. They work with clients to
                    understand their needs, develop design concepts, and ensure
                    that the final construction meets safety, zoning, and
                    environmental regulations.
                  </p>
                  <div className="blog-details__quote-and-text">
                    <div className="blog-details__quote">
                      <span className="fas fa-quote-left" />
                    </div>
                    <p className="blog-details__quote-text">
                      In essence, architecture is a multifaceted field that
                      combines artistic creativity, engineering principles, and
                      societal considerations to shape the physical environment
                      in which we live, work, and play.
                    </p>
                  </div>
                  <ul className="blog-details__points list-unstyled">
                    <li>
                      <div className="blog-details__points-shape" />
                      <p>
                        Architectural styles vary globally, reflecting regional
                        cultures, climates, and materials.
                      </p>
                    </li>
                    <li>
                      <div className="blog-details__points-shape" />
                      <p>
                        Globalization has led to the exchange of architectural
                        ideas and practices worldwide.
                      </p>
                    </li>
                    <li>
                      <div className="blog-details__points-shape" />
                      <p>
                        Increasingly, architects focus on environmentally
                        friendly and sustainable design practices.
                      </p>
                    </li>
                    <li>
                      <div className="blog-details__points-shape" />
                      <p>
                        Buildings must be structurally sound to ensure safety.
                      </p>
                    </li>
                  </ul>
                  <p className="blog-details__quote-text-2">
                    In essence, architecture is a multifaceted field that
                    combines artistic creativity, engineering principles, and
                    societal considerations to shape the physical environment in
                    which we live, work, and play.
                  </p>
                  <div className="blog-details__social-box">
                    <p>Share:</p>
                    <div className="blog-details__social">
                      <a href="#">
                        <span className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <span className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <span className="fab fa-pinterest-p" />
                      </a>
                    </div>
                  </div>
                  <div className="comment-one">
                    <h3 className="comment-one__title">Comments (2)</h3>
                    <div className="comment-one__single">
                      <div className="comment-one__image">
                        <img src="assets/images/blog/comment-1-1.jpg" alt />
                      </div>
                      <div className="comment-one__content">
                        <h3>Mahina B. Sanwie</h3>
                        <p>
                          Blessed heaven in seasons man were image void seasons
                          given bearing fly
                          <br />
                          multiply every deed you can surem dolor mesurement
                          good.
                        </p>
                        <div className="comment-one__date-and-btn">
                          <p className="comment-one__date">February 03. 2023</p>
                          <Link
                            href="blog-details"
                            className="comment-one__btn"
                          >
                            Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="comment-one__single comment-one__single-2">
                      <div className="comment-one__image">
                        <img src="assets/images/blog/comment-1-2.jpg" alt />
                      </div>
                      <div className="comment-one__content">
                        <h3>Jhone Langua</h3>
                        <p>
                          Blessed heaven in seasons man were image void seasons
                          given bearing fly
                          <br />
                          multiply every deed you can surem dolor mesurement
                          good.
                        </p>
                        <div className="comment-one__date-and-btn">
                          <p className="comment-one__date">February 03. 2023</p>
                          <Link
                            href="blog-details"
                            className="comment-one__btn"
                          >
                            Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="comment-one__single comment-one__single-3">
                      <div className="comment-one__image">
                        <img src="assets/images/blog/comment-1-3.jpg" alt />
                      </div>
                      <div className="comment-one__content">
                        <h3>Kaniz D. Warnor</h3>
                        <p>
                          Blessed heaven in seasons man were image void seasons
                          given bearing fly
                          <br />
                          multiply every deed you can surem dolor mesurement
                          good.
                        </p>
                        <div className="comment-one__date-and-btn">
                          <p className="comment-one__date">February 03. 2023</p>
                          <Link
                            href="blog-details"
                            className="comment-one__btn"
                          >
                            Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-form__form-inner">
                    <h3 className="comment-form__title">Leave A comment</h3>
                    <form
                      action="assets/inc/sendemail.php"
                      className="comment-form__form contact-form-validated"
                      noValidate="novalidate"
                    >
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <div className="comment-form__input-box">
                            <input type="text" placeholder="Name" name="name" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="comment-form__input-box">
                            <input
                              type="text"
                              placeholder="Subject"
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12 col-lg-12">
                          <div className="comment-form__input-box text-message-box">
                            <textarea
                              name="message"
                              placeholder="Message"
                              defaultValue={""}
                            />
                          </div>
                          <div className="comment-form__btn-box">
                            <button type="submit" className="comment-form__btn">
                              Leave Comment
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
        </div>
      </section>
    </EnvensLayouts>
  );
};
export default page;
