import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import MailIcon from "@mui/icons-material/Mail";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import SmartphoneIcon from "@mui/icons-material/Smartphone";
// import LocationOnIcon from "@mui/icons-material/L ocationOn";

const Details = () => {
  const { id } = useParams("");

  const [getUserData, setgetUser] = useState([]);

  console.log(getUserData);

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
      setgetUser(data);
      console.log("data added");
    }
  };

  useEffect(() => {
    setData();
  }, []);

  const deleteUser = async (id) => {
    const res = await fetch(`/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deleteData = await res.json();
    console.log(deleteData);
    if (res.status === 404 || !deleteData) {
      console.log("data not found");
    } else {
      setData();
      alert("data deleted");
    }
  };

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Well come user</h1>
      {/* <Card sx={{ maxWidth: 600 }}> */}
      {/* <CardContent> */}
      <div className="add_btn">
        <Link to={`/edit/${id}`} className="btn btn-primary">
          <i className="fa-solid fa-pen"></i>
        </Link>
        <button
          onClick={() => deleteUser(getUserData._id)}
          className="btn btn-danger"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="row">
        <div className="left_view col-lg-6 col-md-6 col-12">
          {/* <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
          <h1 style={{ color: "white", backgroundColor: "blue" }}>
            <i className="fa-regular fa-user"></i>
          </h1>

          <h3 className="mt-3">
            Name: <span>{getUserData.name}</span>
          </h3>
          <h3 className="mt-3">
            Age <span>{getUserData.age}</span>
          </h3>
          <p className="mt-3">
            Email: <span>{getUserData.email}</span>
          </p>
          {/* <p>< MailIcon/>
            Email: <span>joel@gmail.com</span>
          </p> */}
          {/* <p><WorkOutlineIcon/>  Occupation: <span>webdeveloper</span> </p> */}
          <p className="mt-3">
            {" "}
            Occupation: <span>{getUserData.work}</span>{" "}
          </p>
        </div>
        <div className="right_view col-lg-6 col-md-6 col-12">
          <h2>phone</h2>
          <p className="mt-4">
            mobile: <span>{getUserData.mobile}</span>
          </p>
          <p className="mt-3">
            LocationOnIcon location: <span>{getUserData.address}</span>
          </p>
          {/* <p><SmartphoneIcon/>mobile: <span>+234 0804443333</span></p> */}
          {/* <p><LocationOnIcon/> location: <span>ajah</span></p> */}
          <p className="mt-3">
            description:
            <span>{getUserData.description}</span>
          </p>
        </div>
      </div>

      {/* </CardContent> */}
      {/* </Card> */}
    </div>
  );
};

export default Details;
