import React, {useState, useEffect } from "react";
import Nav from "./Nav";

const Header = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleHamburger = () => {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };

  useEffect(() => {
    const body = document.body
    window.scrollTo(0, 0)
    if (navOpen) {
      body.classList.add("noscroll")
    }
    else {
      body.classList.remove("noscroll")
    }

  }, [navOpen])

  return (
    <header className="header container__0">
      <svg className="space-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>

      <div className="container__1">
        <hr />
        <Nav open={navOpen} page={props.page}/>

        <div className="hamburger" onClick={toggleHamburger}>
          {navOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;