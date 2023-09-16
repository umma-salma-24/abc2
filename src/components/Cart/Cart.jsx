/* eslint-disable react/jsx-key */

import "./Cart.css";

const Cart = ({ selectedDatas, remaining, totalRead }) => {
  console.log(remaining);
  return (
    <div>
      <h1 className="credit-time">Credit Hour Remaining:{remaining}</h1>

      <hr />

      <p className="credit-heading">Course Name</p>

      {selectedDatas.map((data, index) => (
        <div>
          <p key={index}>
            {index + 1}. {data.title}
          </p>
        </div>
      ))}
      <h3>Total Credit Hour :{totalRead} </h3>
    </div>
  );
};

export default Cart;
