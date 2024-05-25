import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
import Image from "next/image";

const ItemIsotope = () => {
  const categories = [
    {
      category: "All",
      defaultValue: "box-item",
    },

    {
      category: "Web3",
      defaultValue: "f-web3",
    },
    {
      category: "Algo Trade",
      defaultValue: "f-algo-trade",
    },
    {
      category: "Data Science",
      defaultValue: "f-data-science",
    },
  ];

  const works = [
    {
      image: "images/works/app-shopcek.png",
      description: "app.shopcek.com",
    },
    {
      image: "images/works/shopcek.png",
      description: "shopcek.com",
    },
    {
      image: "images/works/arabulucuyuz.png",
      description: "arabulucuyuz.com",
    },
    {
      image: "images/works/city-street-visuals.png",
      description: "Konya Street Visualization",
    },
    {
      image: "images/works/fundamentai.png",
      description: "FundamentAI",
    },
    {
      image: "images/works/linker.png",
      description: "Linker Company",
    },
    {
      image: "images/works/ozteknik.png",
      description: "Özteknik Hidrolik",
    },
    {
      image: "images/works/vod.png",
      description: "Video Streaming Place For Students",
    },
  ];

  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          {categories.map(({ category, defaultValue }) => (
            <div className="btn-group">
              <label
                data-text="All"
                className={`c-pointer ${activeBtn(defaultValue)}`}
                onClick={handleFilterKeyChange(defaultValue)}
              >
                <input
                  type="radio"
                  name="fl_radio"
                  defaultValue={`.${defaultValue}`}
                />
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        {works.map(({ description, image }, index) => (
          <div className="box-item f-web3">
            {" "}
            {/* add class "animate-to-page" if need animated transition to page and delete target="_blank" rel="noreferrer" */}
            <div className="image">
              <a href="#gallery-1" className="has-popup-gallery hover-animated">
                <img src={image} className="wp-post-image" alt="" />
                <span className="info circle">
                  <span className="centrize full-width">
                    <span className="vertical-center">
                      <span className="icon fas fa-images" />
                      <span className="desc">
                        <span className="category">Gallery</span>
                        <span className="name">{description}</span>
                      </span>
                    </span>
                  </span>
                </span>
              </a>
              <div id="gallery-1" className="mfp-hide">
                <a href="images/work1.jpg" />
                <a href="images/work2.jpg" />
                <a href="images/work3.jpg" />
                <a href="images/work4.jpg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
