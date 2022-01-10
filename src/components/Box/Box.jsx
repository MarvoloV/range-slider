import React, { useState } from "react";
import "./box.css";
const Box = () => {
  const [amount, setAmount] = useState(50);
  const handleValue = (event) => setAmount(event.target.value);
  return (
    <div className="wrapper">
      <div className="amount">
        <sup>$</sup>
        <span className="dollars">{amount}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={amount}
        onChange={handleValue}
      />
      <br />
      <button>Buy Now</button>
    </div>
  );
};

export default Box;
