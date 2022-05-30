import React from "react";
import { Link, useMatch } from "react-router-dom";


function Nav(props) {
  const { open } = props;
  
  const match = useMatch('/:page/*')
  let page = "home"
  if (match) {
    page = match.params.page
  }

  return (
    <div className={`nav__menu ${open ? "show" : ""}`}>
      <Link to="/" className={page === "home" && "__active"}>
        <h5>
          <span>00 </span>Home
        </h5>
      </Link>
      <Link to="/destination/moon" className={page === "destination" && "__active"}>
        <h5>
          <span>01 </span>Destination
        </h5>
      </Link>
      <Link to="/crew/douglas_hurley" className={page === "crew" && "__active"}>
        <h5>
          <span>02 </span>Crew
        </h5>
      </Link>
      <Link to="/technology/launch_vehicle" className={page === "technology" && "__active"}>
        <h5>
          <span>03 </span>Technology
        </h5>
      </Link>
    </div>
  );
}

export default Nav;
