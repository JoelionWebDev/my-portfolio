import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate("");

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
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInputValue((newInput) => {
      return {
        ...newInput,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");

  // const [getUserData, setgetUser] = useState([]);
  // console.log(getUserData);

  const setData = async () => {
    const res = await fetch(`/getdata/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setInputValue(data);
      console.log("data added");
    }
  };

  useEffect(() => {
    setData();
  }, []);

  const { name, email, age, work, mobile, address, description } = inputValue;

  const updateUser = async (e) => {
    e.preventDefault();
    const resp = await fetch(`/update/${id}`, {
      method: "PATCH",
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
    const data2 = await resp.json();
    console.log(data2);

    if (resp.status === 422 || !data2) {
      alert("fill the data");
    } else {
      alert("data added");
      navigate("/");
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

          <button
            type="submit"
            onClick={updateUser}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
