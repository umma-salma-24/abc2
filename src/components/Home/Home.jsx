import React, { useEffect } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className="body">
      <h1>Course Registration</h1>
      <div className="card">
        <img
          className="img"
          src="https://i.ibb.co/dpFTyhB/Rectangle-2-2.png"
          alt=""
        />
        <div className="card-title">
          <p>Introdtion to C++ for DSA</p>
        </div>
        <div className="card-description">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="description">
          <p>$</p>
          <p>Price:</p>
          <p>Credit:</p>
        </div>
        <button className="btn">Select</button>
      </div>
    </div>
  );
};

export default Home;
