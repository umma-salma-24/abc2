/* eslint-disable react/jsx-key */
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.selectedDatas);
  return (
    <div>
      <h1 className="credit-time">
        Credit Hour Remaining {props.selectedDatas.length} hr{" "}
      </h1>
      <hr />

      <p className="credit-heading">Course Name</p>

      {props.selectedDatas.map((data) => (
        <ol>
          <li key={data.credit}>{data.title}</li>
        </ol>
      ))}
    </div>
  );
};

export default Cart;
