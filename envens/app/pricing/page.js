import PageBanner from "@/components/PageBanner";
import Pricing from "@/components/Pricing";
import EnvensLayouts from "@/layouts/EnvensLayouts";
import Link from "next/link";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Prices Plan"} />
      <section className="pricing-two pricing-three">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                <span>//</span> Price Plan <span>//</span>
              </span>
            </div>
            <h2 className="section-title__title">
              Ticket To The Grow Marketing <br /> <span>Conference</span>
            </h2>
          </div>
          <div className="row">
            {/*Pricing Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="pricing-two__single">
                <div className="pricing-two__single-inner">
                  <h4 className="pricing-two__title">Standard Pass</h4>
                  <div className="pricing-two__price-box">
                    <h2>
                      <span>$</span>20
                    </h2>
                    <p>/ One Day</p>
                  </div>
                  <ul className="list-unstyled pricing-two__points">
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Can Access Online Free</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Gat Vip Privileges Seta</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Free Lunch Foods Free Wifi</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Always plan support</p>
                      </div>
                    </li>
                  </ul>
                  <div className="pricing-two__btn-box">
                    <Link href="/pricing" className="pricing-two__btn">
                      Buy Ticket
                    </Link>
                  </div>
                  <div className="pricing-two__shape-1">
                    <img
                      src="assets/images/shapes/pricing-two-shape-1.png"
                      alt
                    />
                  </div>
                  <div className="pricing-two__shape-2">
                    <img
                      src="assets/images/shapes/pricing-three-shape-1.png"
                      alt
                    />
                  </div>
                </div>
                <div className="pricing-two__popular">
                  <p>Popular</p>
                </div>
              </div>
            </div>
            {/*Pricing Two Single End*/}
            {/*Pricing Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="pricing-two__single">
                <div className="pricing-two__single-inner">
                  <h4 className="pricing-two__title">Flexible Pass</h4>
                  <div className="pricing-two__price-box">
                    <h2>
                      <span>$</span>40
                    </h2>
                    <p>/ One Day</p>
                  </div>
                  <ul className="list-unstyled pricing-two__points">
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Can Access Online Free</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Gat Vip Privileges Seta</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Free Lunch Foods Free Wifi</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Always plan support</p>
                      </div>
                    </li>
                  </ul>
                  <div className="pricing-two__btn-box">
                    <Link href="/pricing" className="pricing-two__btn">
                      Buy Ticket
                    </Link>
                  </div>
                  <div className="pricing-two__shape-1">
                    <img
                      src="assets/images/shapes/pricing-two-shape-1.png"
                      alt
                    />
                  </div>
                  <div className="pricing-two__shape-2">
                    <img
                      src="assets/images/shapes/pricing-three-shape-1.png"
                      alt
                    />
                  </div>
                </div>
                <div className="pricing-two__popular">
                  <p>Popular</p>
                </div>
              </div>
            </div>
            {/*Pricing Two Single End*/}
            {/*Pricing Two Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="pricing-two__single">
                <div className="pricing-two__single-inner">
                  <h4 className="pricing-two__title">Business Pass</h4>
                  <div className="pricing-two__price-box">
                    <h2>
                      <span>$</span>70
                    </h2>
                    <p>/ One Day</p>
                  </div>
                  <ul className="list-unstyled pricing-two__points">
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Can Access Online Free</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Gat Vip Privileges Seta</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Free Lunch Foods Free Wifi</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon" />
                      <div className="text">
                        <p>Always plan support</p>
                      </div>
                    </li>
                  </ul>
                  <div className="pricing-two__btn-box">
                    <Link href="/pricing" className="pricing-two__btn">
                      Buy Ticket
                    </Link>
                  </div>
                  <div className="pricing-two__shape-1">
                    <img
                      src="assets/images/shapes/pricing-two-shape-1.png"
                      alt
                    />
                  </div>
                  <div className="pricing-two__shape-2">
                    <img
                      src="assets/images/shapes/pricing-three-shape-1.png"
                      alt
                    />
                  </div>
                </div>
                <div className="pricing-two__popular">
                  <p>Popular</p>
                </div>
              </div>
            </div>
            {/*Pricing Two Single End*/}
          </div>
        </div>
      </section>
      <Pricing />
    </EnvensLayouts>
  );
};
export default page;
