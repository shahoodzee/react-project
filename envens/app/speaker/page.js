import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Speakers"} />
      <section className="speaker-page">
        <div className="container">
          <div className="row">
            {/*Speaker Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <img src="assets/images/team/speaker-page-1-1.jpg" alt />
                  </div>
                  <div className="speaker-page__img-shape" />
                  <div className="speaker-page__share-and-social">
                    <div className="speaker-page__share">
                      <a href="#">
                        <span className="fas fa-share-alt" />
                      </a>
                    </div>
                    <div className="speaker-page__social">
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <span className="fab fa-vimeo-v" />
                      </a>
                      <a href="#">
                        <span className="fas fa-wifi" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="speaker-page__content">
                  <h3>
                    <Link href="/speaker-single">Samira B. Tim</Link>
                  </h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
            {/*Speaker Page Single End*/}
            {/*Speaker Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <img src="assets/images/team/speaker-page-1-2.jpg" alt />
                  </div>
                  <div className="speaker-page__img-shape" />
                  <div className="speaker-page__share-and-social">
                    <div className="speaker-page__share">
                      <a href="#">
                        <span className="fas fa-share-alt" />
                      </a>
                    </div>
                    <div className="speaker-page__social">
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <span className="fab fa-vimeo-v" />
                      </a>
                      <a href="#">
                        <span className="fas fa-wifi" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="speaker-page__content">
                  <h3>
                    <Link href="/speaker-single">Kevin Smith</Link>
                  </h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
            {/*Speaker Page Single End*/}
            {/*Speaker Page Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="speaker-page__single">
                <div className="speaker-page__img-box">
                  <div className="speaker-page__img">
                    <img src="assets/images/team/speaker-page-1-3.jpg" alt />
                  </div>
                  <div className="speaker-page__img-shape" />
                  <div className="speaker-page__share-and-social">
                    <div className="speaker-page__share">
                      <a href="#">
                        <span className="fas fa-share-alt" />
                      </a>
                    </div>
                    <div className="speaker-page__social">
                      <a href="#">
                        <span className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <span className="fab fa-vimeo-v" />
                      </a>
                      <a href="#">
                        <span className="fas fa-wifi" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="speaker-page__content">
                  <h3>
                    <Link href="/speaker-single">Tim Sefert</Link>
                  </h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
            {/*Speaker Page Single End*/}
          </div>
        </div>
      </section>
      <Team />
    </EnvensLayouts>
  );
};
export default page;
