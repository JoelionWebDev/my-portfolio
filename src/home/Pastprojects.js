import React, { useState } from "react";
import { people } from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./pstproject.css";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, url, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <h1>My past Projects</h1>
      <p>I have 8 of my projects here for you to browse through</p>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h3 style={{ color: "red" }} className="author">
        {name}
      </h3>
      <a href={url}>{job}</a>

      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          prev
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
          next
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        skip this one
      </button>
    </article>
  );
};

export default Review;
