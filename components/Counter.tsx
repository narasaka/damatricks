import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface Props {
  player: string;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const Counter: React.FC<Props> = ({ player, score, setScore }) => {
  const [name, setName] = useState(player);
  const handlePlus = () => {
    setScore((score: number) => score + 1);
  };
  const handleMinus = () => {
    if (score > 0) setScore((score: number) => score - 1);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="counter">
      <input
        className="player"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <h2 className="score text-2xl font-bold">{score}</h2>
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
