"use client";

import { Fragment, useEffect, useState } from "react";
import ContentModal from "../components/popup/ContentModal";
import ImageGallery from "../components/popup/ImageGallery";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { cursor, stickyNav } from "../utils";

import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";

const Layout = ({ children, noHeader }) => {
  useEffect(() => {
    cursor();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);

  useEffect(() => {
    if (window.location.pathname) {
      setPathname(window.location.pathname);
    }
  }, []);

  const [pathname, setPathname] = useState();

  return (
    <Fragment>
      <VideoPopup />
      <ImageGallery />
      <ImageView />
      <ContentModal />
      <Preloader />
      {/* Container */}
      <div className="container">
        {/* Cursor */}
        <div className="cursor-follower" />
        {/* Header */}
        {!noHeader && <Header />}

        {/* Wrapper */}
        <div className="wrapper">
          {/* Section Started */}
          {children}
        </div>
        {/* Footer */}
        <Footer />
        {/* Lines */}
        <div className={pathname === "/" ? "lines" : ""}>
          <div className="content">
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Layout;
