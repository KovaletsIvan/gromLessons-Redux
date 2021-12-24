import React from "react";
import { connect } from "react-redux";
import { incrise, decrise, reset } from "./counter.actions";

const Counter = ({ value, add, subtract, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={subtract}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {value}
      </span>
      <button className="counter__button" onClick={add}>
        +
      </button>
    </div>
  );
};

const mapState = (state) => {
  return {
    value: state.counter,
  };
};
const mapDispatch = {
  add: incrise,
  subtract: decrise,
  reset: reset,
};

export default connect(mapState, mapDispatch)(Counter);
