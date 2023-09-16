/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [selectedDatas, setSelectedDatas] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const handleSelectData = (data) => {
    setSelectedDatas([...selectedDatas, data]);
  };

  return (
    <div className="header">
      <h1>Course Registration</h1>
      <div className="card-container">
        {datas.map((data) => (
          <div key={data.credit} className="card">
            <img className="img" src={data.cover_img} alt="" />
            <div className="card-title">
              <p>{data.title}</p>
            </div>
            <div className="card-description">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="description">
              <p>$</p>
              <p>Price:{data.Price}</p>
              <p>Credit:{data.Credit}</p>
            </div>
            <button onClick={() => handleSelectData(data)} className="btn">
              Select
            </button>
          </div>
        ))}
        <div className="cart">
          <Cart selectedDatas={selectedDatas}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
