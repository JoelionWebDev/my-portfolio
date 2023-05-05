import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./home/Home";
import Courses from "./pages/Courses";
import EBook from "./pages/eBook";

import Blogs from "./pages/Blogs";
import Guide from "./pages/guide";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="Courses" element={<Courses />} />
        <Route path="Guide" element={<Guide />} />
        <Route path="eBook" element={<EBook />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
