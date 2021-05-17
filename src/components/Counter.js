import React, { useState } from "react";

const Counter = (props) => {
  const [name, setName] = useState(props.player);
  const handlePlus = () => {
    props.setScore((score) => score + 1);
  };
  const handleMinus = () => {
    if (props.score > 0) props.setScore((score) => score - 1);
  };
  const handleChange = (target) => {
    setName(target.value);
  };

  return (
    <div className="counter">
      <input
        className="player"
        type="text"
        value={name}
        onChange={handleChange}
      />
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
