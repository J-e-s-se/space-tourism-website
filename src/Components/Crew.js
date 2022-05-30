import React from "react";
import { Link } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import ResponsiveBackground from "./ResponsiveBackground";

const Crew = ({ data }) => {
  return (
    <ResponsiveBackground
      small="/assets/crew/background-crew-mobile.jpg"
      medium="/assets/crew/background-crew-tablet.jpg"
      large="/assets/crew/background-crew-desktop.jpg"
    >
      <ScrollToTop />
      <Header />
      <main className="crew container__0">
        <div className="container__1 intro">
          <h5 className="title__intro">
            <span className="op">02{"  "}</span>Meet your crew
          </h5>
        </div>

        <div className="container__1">
          <div className="container__2">
            <div className="crew__img-con">
              <img
                className="crew__img"
                src={data.images.png.substring(1)}
                alt="douglas-hurley"
              />
            </div>
            <hr className="crew__hr" />
          </div>

          <div className="container__3">
            <div className="slider__nav">
              <Link to="/crew/douglas_hurley">
                <div
                  className={`slider ${
                    data.name === "Douglas Hurley" ? "active" : null
                  }`}
                ></div>
              </Link>
              <Link to="/crew/mark_shuttleworth">
                <div
                  className={`slider ${
                    data.name === "Mark Shuttleworth" ? "active" : null
                  }`}
                ></div>
              </Link>
              <Link to="/crew/victor_glover">
                <div
                  className={`slider ${
                    data.name === "Victor Glover" ? "active" : null
                  }`}
                ></div>
              </Link>
              <Link to="/crew/anousheh_ansari">
                <div
                  className={`slider ${
                    data.name === "Anousheh Ansari" ? "active" : null
                  }`}
                ></div>
              </Link>
            </div>
            <h4>{data.role}</h4>
            <h3>{data.name}</h3>
            <p>{data.bio}</p>
          </div>
        </div>
      </main>
    </ResponsiveBackground>
  );
};

export default Crew;
