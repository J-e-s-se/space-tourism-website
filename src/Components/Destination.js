import React from "react";
import { Link } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import ResponsiveBackground from "./ResponsiveBackground";


const Destination = ({ data }) => {
  return (
    <ResponsiveBackground
      small="/assets/destination/background-destination-mobile.jpg" 
      medium="/assets/destination/background-destination-tablet.jpg" 
      large="/assets/destination/background-destination-desktop.jpg"
    >
      <ScrollToTop />
      <Header />
      <main className="destination container__0 des__main">
        <div className="container__1 intro">
          <h5 className="title__intro">
            <span className="op">01 </span>Pick your destination
          </h5>
        </div>

        <div className="container__1">
          <div className="container__2">
            <img
              className="destination__img"
              src={data.images.png.substring(1)}
              alt="Moon"
            />
          </div>

          <div className="container__3">
            <div className="destination__nav">
              <Link to="/destination/moon">
                <h6 className={data.name === "Moon" ? "__active" : null}>
                  Moon
                </h6>
              </Link>
              <Link to="/destination/mars">
                <h6 className={data.name === "Mars" ? "__active" : null}>
                  Mars
                </h6>
              </Link>
              <Link to="/destination/europa">
                <h6 className={data.name === "Europa" ? "__active" : null}>
                  Europa
                </h6>
              </Link>
              <Link to="/destination/titan">
                <h6 className={data.name === "Titan" ? "__active" : null}>
                  Titan
                </h6>
              </Link>
            </div>
            <h2 className="planet-title">{data.name}</h2>
            <p className="destination__text">{data.description}</p>
            <hr className="hr__margin" />

            <div className="destination__info">
              <div className="destination__distance">
                <div className="sbh2">Avg. distance</div>
                <div className="distvalue sbh1">{data.distance}</div>
              </div>
              <div className="destination__time">
                <div className="sbh2">Est. travel time</div>
                <div className="timevalue sbh1">{data.travel}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ResponsiveBackground>
  );
};

export default Destination;
