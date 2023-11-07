import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLeftContainer">
        <div className="heroText">
          <p>Unlock</p>
          <p>unparralleled</p>
          <p>efficiency in</p>
          <p>your QA</p>
          <p>process with</p>
          <p>
            Quality Aces<span>.</span>
          </p>
        </div>
        <div>
          <p>We can allow you to experience the benefits</p>
          <p>of out expertise,personalized attention,</p>
          <p>agility, cost-effectiveness,commitment</p>
          <p>to quality, and long-term partnership.</p>
        </div>
        <div>
          <a href="#" className="findMoreButton">
            Find Out more
          </a>
        </div>
      </div>
      <div>
        <img src="./hero.jpg" alt="hero"></img>
      </div>
    </div>
  );
};

export default Hero;
