import BlogSidebar from "@/components/BlogSidebar";
import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Blog-Standard"} />
      <section className="blog-page">
        <div className="container">
          <div className="row">
            <BlogSidebar />
            <div className="col-xl-8 col-lg-7">
              <div className="blog-page__right">
                {/*Blog Page Single Start*/}
                <div className="blog-page__single">
                  <div className="blog-page__img">
                    <img src="assets/images/blog/blog-page-1-1.jpg" alt />
                    <div className="blog-page__date">
                      <p>20 Feb, 2024</p>
                    </div>
                  </div>
                  <div className="blog-page__content">
                    <ul className="blog-page__meta list-unstyled">
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
                    <h3 className="blog-page__title">
                      <Link href="/blog-details">
                        Highlight the main points from any keynote presentations
                      </Link>
                    </h3>
                    <p className="blog-page__text-1">
                      Professionals known as architects are responsible for
                      creating architectural designs. They work with clients to
                      understand their needs, develop design concepts, and
                      ensure that the final construction meets safety, zoning,
                      and environmental regulations.
                    </p>
                    <p className="blog-page__text-2">
                      Involves the design of commercial buildings like offices,
                      retail spaces, and industrial facilities. Encompasses the
                      design of outdoor spaces, parks, and landscapes.
                    </p>
                    <div className="blog-page__btn-box">
                      <a href="#" className="blog-page__btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/*Blog Page Single End*/}
                {/*Blog Page Single Start*/}
                <div className="blog-page__single">
                  <div className="blog-page__img">
                    <img src="assets/images/blog/blog-page-1-2.jpg" alt />
                    <div className="blog-page__date">
                      <p>20 Feb, 2024</p>
                    </div>
                  </div>
                  <div className="blog-page__content">
                    <ul className="blog-page__meta list-unstyled">
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
                    <h3 className="blog-page__title">
                      <Link href="/blog-details">
                        Discuss any panel discussions that took place
                      </Link>
                    </h3>
                    <p className="blog-page__text-1">
                      Professionals known as architects are responsible for
                      creating architectural designs. They work with clients to
                      understand their needs, develop design concepts, and
                      ensure that the final construction meets safety, zoning,
                      and environmental regulations.
                    </p>
                    <p className="blog-page__text-2">
                      Involves the design of commercial buildings like offices,
                      retail spaces, and industrial facilities. Encompasses the
                      design of outdoor spaces, parks, and landscapes.
                    </p>
                    <div className="blog-page__btn-box">
                      <a href="#" className="blog-page__btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/*Blog Page Single End*/}
                {/*Blog Page Single Start*/}
                <div className="blog-page__single">
                  <div className="blog-page__img">
                    <img src="assets/images/blog/blog-page-1-3.jpg" alt />
                    <div className="blog-page__date">
                      <p>20 Feb, 2024</p>
                    </div>
                  </div>
                  <div className="blog-page__content">
                    <ul className="blog-page__meta list-unstyled">
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
                    <h3 className="blog-page__title">
                      <Link href="/blog-details">
                        Summarize any workshops, breakout sessions
                      </Link>
                    </h3>
                    <p className="blog-page__text-1">
                      Professionals known as architects are responsible for
                      creating architectural designs. They work with clients to
                      understand their needs, develop design concepts, and
                      ensure that the final construction meets safety, zoning,
                      and environmental regulations.
                    </p>
                    <p className="blog-page__text-2">
                      Involves the design of commercial buildings like offices,
                      retail spaces, and industrial facilities. Encompasses the
                      design of outdoor spaces, parks, and landscapes.
                    </p>
                    <div className="blog-page__btn-box">
                      <a href="#" className="blog-page__btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/*Blog Page Single End*/}
                <div className="blog-page__pagination">
                  <ul className="pg-pagination list-unstyled">
                    <li className="count">
                      <Link href="/blog-details">1</Link>
                    </li>
                    <li className="count">
                      <Link href="/blog-details">2</Link>
                    </li>
                    <li className="count">
                      <Link href="/blog-details">3</Link>
                    </li>
                    <li className="next">
                      <Link href="/blog-details" aria-label="Next">
                        <i className="icon-right-arrows" />
                      </Link>
                    </li>
                  </ul>
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
