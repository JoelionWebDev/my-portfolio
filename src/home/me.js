import React from "react";
import img from "../asset/joe.jpg";

const Me = () => {
  return (
    <main className="meBg">
      <div className="meTitle">
        <h2>
          Who Is <span>Joel Igono?</span>
        </h2>
      </div>
      <div className="meContnet">
        <img src={img} alt="img" />
        <div className="meText">
          <p>
            I started codding in 2019 at the age of 25. I became a part-time
            educator & content creator in 2022. I guide people on how to become
            a web developer under their own roof. I break down complex concepts
            by showing you how to implement them in real life project-based
            courses and tutorials.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Me;
