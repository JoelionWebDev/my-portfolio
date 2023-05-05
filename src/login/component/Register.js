import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Register = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: "",
  });
  const setdata = (e) => {
    const { name, value } = e.target;

    setInputValue((newInput) => {
      return {
        ...newInput,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    e.preventDefault();
    const { name, email, age, work, mobile, address, description } = inputValue;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        work,
        mobile,
        address,
        description,
      }),
    });
    const data = await res.json();

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("data added");
      console.log("data added");
    }
  };

  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={inputValue.name}
              onChange={setdata}
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6  col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={inputValue.email}
              onChange={setdata}
              name="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              value={inputValue.age}
              onChange={setdata}
              name="age"
              className="form-control"
              id="age"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              value={inputValue.mobile}
              onChange={setdata}
              name="mobile"
              className="form-control"
              id="mobile"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={inputValue.address}
              onChange={setdata}
              name="address"
              className="form-control"
              id="address"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="work" className="form-label">
              Work
            </label>
            <input
              type="text"
              value={inputValue.work}
              onChange={setdata}
              name="work"
              className="form-control"
              id="work"
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              className="form-control"
              value={inputValue.description}
              onChange={setdata}
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" onClick={addData} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
