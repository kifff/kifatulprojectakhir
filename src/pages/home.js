import React from "react";
import "./home.css";
import portfolioImage from "../assets/images/kifffprofil2.png";

const Home = () => {
  return (
    <div className="home">
      <div className="des">
        <h2>Welcome to My Portfolio</h2>
        <p>This is the home page.</p>
      </div>

      <div class="container">
        <div class="box1">
          <img
            src={portfolioImage}
            alt="Portfolio"
            className="portfolio-image"
          />
        </div>
        <div className="box2">
          <div className="aa">
            <div className="hello">Hello,</div>
            <div className="im"> I'm Kifff</div>
          </div>
          <div className="bb">
            <div className="be">
              My study focus and concentration is in the field of backend
              engineering, artificial intelligence, embedded systems / internet
              of thinks{" "}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
