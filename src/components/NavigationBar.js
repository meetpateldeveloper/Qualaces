import React from "react";
import "./NavigationBar.css";
import HamburgerMenu from "./HamburgerMenu";

const NavigationBar = () => {
  return (
    <div>
      <div className="navBar">
        <div className="logoContainer">
          <a href="/">
            <img src="./logo.png" alt="Qualaces-logo" className="logoImage" />
          </a>
          <h1>Qualaces</h1>
        </div>
        <ul className="desktop-nav-links">
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
