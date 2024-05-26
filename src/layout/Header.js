import Link from "next/link";
import { Fragment, useState } from "react";

const Menu = () => (
  <Fragment>
    <div className="logo hover-masks-logo">
      <a href="#">
        <span className="mask-lnk">
          <strong>qraxiss</strong>
        </span>
        <span className="mask-lnk mask-lnk-hover">
          <a href="assets/qraxiss-resume.pdf" target="_blank">
            Download <strong>CV</strong>
          </a>
        </span>
      </a>
    </div>
    {/* top menu */}
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
          <ul className="menu">
            <li className="menu-item">
              <Link href="/">
                <a>
                  <span className="mask-lnk">Home</span>
                  <span className="mask-lnk mask-lnk-hover">Home</span>
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/resume">
                <a>
                  <span className="mask-lnk">Resume</span>
                  <span className="mask-lnk mask-lnk-hover">Resume</span>
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/works">
                <a>
                  <span className="mask-lnk">Works</span>
                  <span className="mask-lnk mask-lnk-hover">Works</span>
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/contacts">
                <a>
                  <span className="mask-lnk">Contact</span>
                  <span className="mask-lnk mask-lnk-hover">Contact</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top">
      <Menu />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top">
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
      </div>
    </header>
  );
};
