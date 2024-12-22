import Link from "next/link";

const PageBanner = ({ pageName }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)",
        }}
      ></div>
      <div className="page-header__shape-1">
        <img src="assets/images/shapes/page-header-shape-1.png" alt />
      </div>
      <div className="page-header__shape-2">
        <img src="assets/images/shapes/page-header-shape-2.png" alt />
      </div>
      <div className="page-header__shape-3">
        <img src="assets/images/shapes/page-header-shape-3.png" alt />
      </div>
      <div className="container">
        <div className="page-header__inner">
          <h2>{pageName}</h2>
          <div className="thm-breadcrumb__box">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>-</span>
              </li>
              <li>{pageName}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
