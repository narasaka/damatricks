import { ChangeEvent, useEffect, useState } from "react";
import { Comp } from "../models";
import Counter from "./Counter";
import { competitions as comps } from "../data";

const Main: React.FC = () => {
  const [tricklist, setTricklist] = useState<string[]>([]);
  const [initialList, setInitialList] = useState<string[]>([]);
  const [currTrick, setCurrTrick] = useState<string>(
    "Choose a tricklist to start!"
  );
  const [selectedValue, setSelectedValue] = useState<string>("default");
  const [showNext, setShowNext] = useState<boolean>(false);
  const [showReset, setShowReset] = useState<boolean>(false);
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const compObj: Comp | undefined = comps.find(
      (comp) => comp.id === event.target.value
    );
    if (compObj) {
      const initial: string[] = compObj.tricks;
      const trickIndex: number = Math.floor(
        Math.random() * compObj.tricks.length
      );
      const newTrick: string = compObj.tricks[trickIndex];
      const newTricklist: string[] = new Array().concat(
        compObj.tricks.slice(0, trickIndex),
        compObj.tricks.slice(trickIndex + 1)
      );
      setInitialList(initial);
      setSelectedValue(compObj.id);
      setCurrTrick(newTrick);
      setTricklist(newTricklist);
      setShowReset(false);
      setShowNext(true);
    }
  };

  const handleNext = () => {
    const trickIndex: number = Math.floor(Math.random() * tricklist.length);
    const newTrick: string = tricklist[trickIndex];
    const newTricklist: string[] = new Array().concat(
      tricklist.slice(0, trickIndex),
      tricklist.slice(trickIndex + 1)
    );
    if (tricklist.length === 0) {
      console.log("done");
      setCurrTrick("");
      setShowReset(true);
      setShowNext(false);
      return;
    }
    setCurrTrick(newTrick);
    setTricklist(newTricklist);
  };

  const handleResetList = () => {
    const trickIndex: number = Math.floor(Math.random() * initialList.length);
    const newTrick: string = initialList[trickIndex];
    const newTricklist: string[] = new Array().concat(
      initialList.slice(0, trickIndex),
      initialList.slice(trickIndex + 1)
    );
    setCurrTrick(newTrick);
    setTricklist(newTricklist);
    setShowReset(false);
    setShowNext(true);
  };

  const handleResetScore = () => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  };

  useEffect(() => {
    const isInitialized = Boolean(localStorage.getItem("isInitialized"));
    if (isInitialized) {
      const gameState = JSON.parse(localStorage.getItem("gameState") || "{}");
      const {
        tricklist,
        currTrick,
        playerOneScore,
        playerTwoScore,
        selectedValue,
        showNext,
        showReset,
      } = gameState;
      setTricklist(tricklist);
      setCurrTrick(currTrick);
      setPlayerOneScore(playerOneScore);
      setPlayerTwoScore(playerTwoScore);
      setSelectedValue(selectedValue);
      setShowNext(showNext);
      setShowReset(showReset);
    } else {
      localStorage.setItem("isInitialized", "true");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const isInitialized = Boolean(localStorage.getItem("isInitialized"));
    if (isInitialized) {
      const gameState = {
        tricklist,
        currTrick,
        playerOneScore,
        playerTwoScore,
        selectedValue,
        showNext,
        showReset,
      };
      localStorage.setItem("gameState", JSON.stringify(gameState));
      console.log(gameState);
    } else {
      localStorage.setItem("isInitialized", "true");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    tricklist,
    currTrick,
    playerOneScore,
    playerTwoScore,
    selectedValue,
    showNext,
    showReset,
  ]);

  return (
    <main>
      <select
        className="dropdown text-center"
        onChange={handleChange}
        value={selectedValue}
      >
        <option value="default" disabled>
          -- Choose a tricklist --
        </option>
        {comps.map((comp) => {
          return (
            <option key={comp.id} value={comp.id}>
              {comp.name}
            </option>
          );
        })}
      </select>
      <section className="trick">
        <h1 className="trick-name text-2xl font-bold">{currTrick}</h1>
        {showNext === false ? null : (
          <button className="btn random" onClick={handleNext}>
            Next trick
          </button>
        )}
        {showReset ? (
          <button className="btn reset" onClick={handleResetList}>
            Reset tricklist
          </button>
        ) : null}
      </section>
      <section className="scoreboard">
        <h1 className="scoreboard-text text-2xl font-bold">Scoreboard</h1>
        <div className="counters">
          <Counter
            player="Player One"
            score={playerOneScore}
            setScore={setPlayerOneScore}
          />
          <Counter
            player="Player Two"
            score={playerTwoScore}
            setScore={setPlayerTwoScore}
          />
        </div>
        <button
          className="btn reset-score"
          style={
            playerOneScore || playerTwoScore ? {} : { backgroundColor: "grey" }
          }
          onClick={handleResetScore}
        >
          Reset scoreboard
        </button>
      </section>
    </main>
  );
};

export default Main;
