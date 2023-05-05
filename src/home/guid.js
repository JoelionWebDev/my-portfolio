import React from "react";
import img from "../asset/bg2.jpg";

const Guid = () => {
  return (
    <main className="guidBg">
      <div className="guidLines">
        <img className="image" src={img} alt="img" />
        <div className="guideInfo ">
          <h3 className="g">Joel Igono's</h3>
          <h1 className="g">web dev guide</h1>
          <p className="p1 g">
            the most complete guide to web developemnt technologies on the
            planet.
          </p>
          <p className="p2 g">
            this guide also goes inot different programming concepts, careers
            and even mental health.
          </p>
        </div>
      </div>
      <div className="guidBtn">
        <button>GET IT FOR $6.00</button>
      </div>
    </main>
  );
};

export default Guid;
