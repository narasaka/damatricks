import React from "react";

const Counter = (props) => {
  const handlePlus = () => {
    props.setScore((score) => score + 1);
  };
  const handleMinus = () => {
    if (props.score > 0) props.setScore((score) => score - 1);
  };

  return (
    <div className="counter">
      <div className="player">{props.player}</div>
      <h2 className="score">{props.score}</h2>
      <button className="btn minus" onClick={handleMinus}>
        -
      </button>
      <button className="btn plus" onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

export default Counter;
