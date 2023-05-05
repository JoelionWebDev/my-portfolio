import React from "react";
import { social } from "../data";
import "./footer.css";

const footer = () => {
  return (
    <div className="bgfollow">
      <h2>&copy; JoeTech media</h2>
      <div className="socialLink">
        <ul className="social-icons Sicon">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <h2
                  style={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                  }}
                >
                  <a style={{ color: "red" }} href={url}>
                    {icon}
                  </a>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default footer;
