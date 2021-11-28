import React from "react";
import "./index.css";

const CounterBox = ({
  count,
  handleChange,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <>
      <div className="grid">
        <div className="cell left">
          <p className="minus" onClick={handleDecrease}>
            -
          </p>
        </div>
        <input
          type="number"
          value={count}
          onChange={handleChange}
          className="cell middle"
        />
        <div className="cell right">
          <p className="plus" onClick={handleIncrease}>
            +
          </p>
        </div>
      </div>
    </>
  );
};

export default CounterBox;
