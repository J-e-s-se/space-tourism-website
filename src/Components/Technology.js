import React from "react";
import { Link } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import ResponsiveBackground from "./ResponsiveBackground";

const Technology = ({ data }) => {
  return (
    <ResponsiveBackground
      small="/assets/technology/background-technology-mobile.jpg"
      medium="/assets/technology/background-technology-tablet.jpg"
      large="/assets/technology/background-technology-desktop.jpg"
    >
      <ScrollToTop />
      <Header />
      <main className="tech container__0">
        <div className="container__1 intro">
          <h5 className="title__intro">
            <span className="op">03 </span>Space Launch 101
          </h5>
        </div>

        <div className="container__1">
          <div className="container__2">
            <picture>
              <source
                media="(max-width: 1023px)"
                srcSet={data.images.landscape.substring(1)}
              />
              <source
                media="(min-width: 1024px)"
                srcSet={data.images.portrait.substring(1)}
              />
              <img
                className="tech__img"
                srcSet={data.images.landscape.substring(1)}
                alt="launch-vehicle"
              />
            </picture>
          </div>

          <div className="container__3">
            <div className="slider__nav">
              <Link
                className={`slider ${
                  data.name === "Launch vehicle" ? "active" : null
                }`}
                to="/technology/launch_vehicle"
              >
                1
              </Link>
              <Link
                className={`slider ${
                  data.name === "Spaceport" ? "active" : null
                }`}
                to="/technology/spaceport"
              >
                2
              </Link>
              <Link
                className={`slider ${
                  data.name === "Space capsule" ? "active" : null
                }`}
                to="/technology/space_capsule"
              >
                3
              </Link>
            </div>
            <div className="container__4">
              <h6 className="tech-intro-text">The terminology...</h6>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </main>
    </ResponsiveBackground>
  );
};

export default Technology;
