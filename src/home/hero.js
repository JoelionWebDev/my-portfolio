import React from "react";
import "./hero.css";
import Joel from "../asset/Joel.jpg";

const Hero = () => {
  return (
    <React.Fragment>
      <main className="hero">
        <div className="h-two">
          <h2>Hey I' am Joel</h2>
          <div>
            <div className="flex">
              <a className="icon" href="https://wa.me/qr/PNAHWNMWMZ2WK1">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a className="icon" href="https://www.youtube.com/@joetechstudio">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a className="icon" href="https://www.instagram.com/joeligono/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                className="icon"
                href="https://www.linkedin.com/in/igono-joel-88b680185"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a className="icon" href="https://wa.link/859wj7">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <p style={{ color: "black", fontSize: "0.8rem" }}>
              igonojoel1010@gmail.com
            </p>
          </div>
        </div>

        <section className="container1 main-container">
          <div id="section1" className="browser-nav">
            <div className="brower-dot">
              <div className="dot" id="dot1"></div>
              <div className="dot" id="dot2"></div>
              <div className="dot" id="dot3"></div>
            </div>
            <ul className="contact">
              <li>
                <a href="https://www.youtube.com/@joetechstudio/">
                  Check out my Youtube
                </a>
              </li>
            </ul>
          </div>

          <div className="browser-img">
            <img className="portfilio-pcs" src={Joel} alt="Joel image" />

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <h5>Personalize Theme</h5>
            </div>

            <div className="dottedTheme">
              <div data-mode="white" className="dotted white" id="d1"></div>
              <div data-mode="blue" className="dotted blue" id="d2"></div>
              <div data-mode="green" className="dotted green" id="d3"></div>
              <div data-mode="yellow" className="dotted yellow" id="d4"></div>
            </div>
            <p className="style">
              Your theme setting will be saved for next visit
            </p>
          </div>

          <div className="browser-dot">
            <div className="shadow">
              <div className="whatIdo">
                <div className="dott" id="dott1"></div>
                <div className="dott" id="dott2"></div>
                <h4>What I do</h4>

                <p style={{ fontSize: "0.7em", fontWeight: "bold" }}>
                  I am a Full-stack web developer and a digital marketer with
                  different skills.
                </p>
                <div className="dott" id="dott3"></div>
                <div className="dott" id="dott4"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Hero;
