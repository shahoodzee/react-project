import Brand from "@/components/Brand";
import PageBanner from "@/components/PageBanner";
import EnvensLayouts from "@/layouts/EnvensLayouts";
const page = () => {
  return (
    <EnvensLayouts>
      <PageBanner pageName={"Venue Page"} />
      {/*Venue Page Start*/}
      <section className="venue-page">
        <div className="container">
          <div className="venue-page__inner">
            <div
              className="venue-page__img"
              style={{
                backgroundImage: "url(assets/images/resources/venue-img-1.jpg)",
              }}
            />
            <div className="venue-page__venu-box">
              <div
                className="venue-page__venu-box-bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/venue-page-venu-box-bg.jpg)",
                }}
              ></div>
              <h3 className="venue-page__address-title">
                Get Direction to the Event Hall
              </h3>
              <ul className="list-unstyled venue-page__address">
                <li>
                  <div className="icon">
                    <span className="icon-laptop" />
                  </div>
                  <div className="content">
                    <h4>Venue</h4>
                    <p>Grand Conference Hall</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-placeholder1" />
                  </div>
                  <div className="content">
                    <h4>Address</h4>
                    <p>
                      1Hd-50, 010 Avenue, NY 9001 <br />
                      United States
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="list-unstyled venue-page__address-two">
                <li>
                  <h4>Tickets Info</h4>
                  <p>Samira Banwan</p>
                  <p>
                    <a href="tel:00021485503">000 - 214 - 85503</a>
                  </p>
                  <p>
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </p>
                </li>
                <li>
                  <h4>Programme Details</h4>
                  <p>Samira Banwan</p>
                  <p>
                    <a href="tel:00021485503">000 - 214 - 85503</a>
                  </p>
                  <p>
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Venue Page End*/}
      {/*Google Map Start*/}
      <section className="google-map-one">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="google-map__one"
          allowFullScreen=""
        />
      </section>
      {/*Google Map End*/}
      {/*Brand Three Start*/}
      <Brand />
      {/*Brand Three End*/}
    </EnvensLayouts>
  );
};
export default page;
