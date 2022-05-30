import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import ScrollToTop from "./ScrollToTop"
import ResponsiveBackground from "./ResponsiveBackground";

const Home = () => {
  return (
    <ResponsiveBackground 
      small="/assets/home/background-home-mobile.jpg" 
      medium="/assets/home/background-home-tablet.jpg" 
      large="/assets/home/background-home-desktop.jpg"
    >
      <ScrollToTop />
      <Header />
      <main className="container__0 home">
        <div className="container__1">
          <div className="container__2">
            <h5>So, you want to travel to</h5>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="container__3">
            <Link to="/destination/moon">
              <div className="explore">
                <p className="explore-text">explore</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </ResponsiveBackground>
  );
};

export default Home;
