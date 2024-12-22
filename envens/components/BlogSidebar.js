import Link from "next/link";

const BlogSidebar = () => {
  return (
    <div className="col-xl-4 col-lg-5">
      <div className="sidebar">
        <div className="sidebar__single sidebar__search">
          <h3 className="sidebar__title">Search</h3>
          <form action="#" className="sidebar__search-form">
            <input type="search" placeholder="Search here" />
            <button type="submit">
              <i className="icon-loupe" />
            </button>
          </form>
        </div>
        <div className="sidebar__single sidebar__category">
          <h3 className="sidebar__title">Category</h3>
          <ul className="blog-details__catagories-list list-unstyled">
            <li>
              <Link href="/blog-details">
                Notable Speakers
                <span className="icon-right-arrows" />
              </Link>
            </li>
            <li className="active">
              <Link href="/blog-details">
                Personal Insights
                <span className="icon-right-arrows" />
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                Home Renovation
                <span className="icon-right-arrows" />
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                Standout speakers
                <span className="icon-right-arrows" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar__single sidebar__post">
          <h3 className="sidebar__title">Recent Post</h3>
          <ul className="sidebar__post-list list-unstyled">
            <li>
              <div className="sidebar__post-image">
                <img src="assets/images/blog/lp-1-1.jpg" alt />
              </div>
              <div className="sidebar__post-content">
                <h3>
                  <Link href="/blog-details">
                    If there were any standout speakers at the conference
                  </Link>
                </h3>
                <span className="sidebar__post-content-date">24 Mach 2024</span>
              </div>
            </li>
            <li>
              <div className="sidebar__post-image">
                <img src="assets/images/blog/lp-1-2.jpg" alt />
              </div>
              <div className="sidebar__post-content">
                <h3>
                  <Link href="/blog-details">
                    Provide brief profiles of these speakers and summarize
                  </Link>
                </h3>
                <span className="sidebar__post-content-date">24 Mach 2024</span>
              </div>
            </li>
            <li>
              <div className="sidebar__post-image">
                <img src="assets/images/blog/lp-1-2.jpg" alt />
              </div>
              <div className="sidebar__post-content">
                <h3>
                  <Link href="/blog-details">
                    Share your own reflections and insights from attending
                  </Link>
                </h3>
                <span className="sidebar__post-content-date">24 Mach 2024</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="sidebar__single sidebar__tags">
          <h3 className="sidebar__title">Tags Cloud</h3>
          <div className="sidebar__tags-list">
            <a href="#">Event</a>
            <a href="#">Meetup</a>
            <a href="#">Toolset</a>
            <a href="#">Conference</a>
            <a href="#">Store</a>
            <a href="#">Public</a>
            <a href="#">Creative</a>
            <a href="#">schedule</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
