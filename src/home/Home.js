import React from "react";
import Hero from "./hero";
import About from "./About";
import PastProject from "./Pastprojects";

import Footer from "./footer";

const Home = () => {
  return (
    <React.Fragment>
      <main style={{ color: "gray" }}>
        <div className="container">
          <div className="heroContainer">
            <Hero />
          </div>
          <About />

          <PastProject />

          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
