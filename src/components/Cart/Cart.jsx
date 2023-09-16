/* eslint-disable react/jsx-key */
import React from "react";
import "./Cart.css";

const Cart = ({ selectedDatas, remaining, totalRead }) => {
  console.log(selectedDatas);
  return (
    <div>
      <h1 className="credit-time">
        Credit Hour Remaining:{remaining} {selectedDatas.length}
      </h1>

      <hr />

      <p className="credit-heading">Course Name</p>

      {selectedDatas.map((data) => (
        <>
          <ol>
            <li key={data.credit}>{data.title}</li>
          </ol>
          <h3>Total Credit Hour :{totalRead} </h3>
        </>
      ))}
    </div>
  );
};

export default Cart;
