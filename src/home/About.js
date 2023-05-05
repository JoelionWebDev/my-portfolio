import React from "react";
import "./About.css";

function About() {
  return (
    <section className="s1">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me" id="about">
            <h4>More about me</h4>

            <p>
              I build new projects just to tickle my brain, I also train people
              to become a beter programer like my self.
            </p>
            <p>
              While I keep busy learning and improving my skills, I equally
              reach out for interviews and seminars.
            </p>

            <hr />
            <h4>TOP EXPERTISE</h4>
            <p>
              Full stack developer with primary focus on nodejs, express and
              reactjs
            </p>
            <a target="_blank" href="Resume.pdf">
              <h3>Download Resume</h3>
            </a>
            <div className="skills">
              <ul>
                <li>html/css</li>
                <li>Javascript</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>React</li>
                <li>Mongodb</li>
                <li>API</li>
              </ul>

              <ul>
                <li>Google maps</li>
                <li>passportjs</li>
                <li>Sass</li>
                <li>Content creator</li>
                <li>Graphic Design</li>
                <li>Runing ads</li>
                <li>.</li>
              </ul>
            </div>
          </div>
          <div className="social-links">
            <h3 style={{ textAlign: " center" }}>My profile</h3>

            <h4>Below are my contacts and social handles</h4>
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
              <a className="icon" href="https://wa.link/859wj7">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a className="icon" href="">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                className="icon"
                href="https://www.linkedin.com/in/igono-joel-88b680185"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a className="icon" href="https://twitter.com/JoelionXpress">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <p style={{ color: "black" }}>igonojoel1010@gmail.com</p>
            <h5>07051804515/09058892149</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
