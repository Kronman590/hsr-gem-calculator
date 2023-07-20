import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEvents, clearEvents, setGems, clearGems } from "../actions/calcAction";

const Calculator = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="Calculator">
      <h2>Number of items in Calculator: {state.numOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
        className="green"
      >
        Add Item to Calculator
      </button>
      <button
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}
        className="red"
      >
        Remove Item from Calculator
      </button>
    </div>
  );
};

export default Calculator;
