import React, { useState } from "react";

const Counter = (props) => {
  const [score, setScore] = useState(0);
  const handlePlus = () => {
    setScore((score) => score + 1);
  };
  const handleMinus = () => {
    if (score > 0) setScore((score) => score - 1);
  };

  return (
    <div className="counter">
      <div className="player">{props.player}</div>
      <h2 className="score">{score}</h2>
      <button className="btn plus" onClick={handlePlus}>
        +
      </button>
      <button className="btn minus" onClick={handleMinus}>
        -
      </button>
    </div>
  );
};

export default Counter;
