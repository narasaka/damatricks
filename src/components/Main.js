import React, { useState } from "react";
import Counter from "./Counter";
import comps from "./Comps";

const Main = () => {
  const [tricklist, setTricklist] = useState([]);
  const [initialList, setInitialList] = useState([]);
  const [currTrick, setCurrTrick] = useState("Choose a tricklist to start!");
  const [selectedValue, setSelectedValue] = useState("default");
  const [showNext, setShowNext] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleChange = (event) => {
    const compObj = comps.find((comp) => comp.id === event.target.value);
    const initial = compObj.tricks;
    const trickIndex = Math.floor(Math.random() * compObj.tricks.length);
    const newTrick = compObj.tricks[trickIndex];
    const newTricklist = [].concat(
      compObj.tricks.slice(0, trickIndex),
      compObj.tricks.slice(trickIndex + 1)
    );
    setInitialList(initial);
    setSelectedValue(compObj.id);
    setCurrTrick(newTrick);
    setTricklist(newTricklist);
    setShowReset(false);
    setShowNext(true);
  };

  const handleNext = () => {
    const trickIndex = Math.floor(Math.random() * tricklist.length);
    const newTrick = tricklist[trickIndex];
    const newTricklist = [].concat(
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

  const handleReset = () => {
    const trickIndex = Math.floor(Math.random() * initialList.length);
    const newTrick = initialList[trickIndex];
    const newTricklist = [].concat(
      initialList.slice(0, trickIndex),
      initialList.slice(trickIndex + 1)
    );
    setCurrTrick(newTrick);
    setTricklist(newTricklist);
    setShowReset(false);
    setShowNext(true);
  };

  React.useEffect(() => {
    console.log(tricklist);
  }, [tricklist]);

  return (
    <main>
      <select
        className="dropdown"
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
      <div className="trick">
        <h1 className="trick-name">{currTrick}</h1>
        {showNext === false ? null : (
          <button className="btn random" onClick={handleNext}>
            Next trick
          </button>
        )}
        {showReset ? (
          <button className="btn random" onClick={handleReset}>
            Reset tricklist
          </button>
        ) : null}
      </div>
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <div className="counters">
          <Counter player="Player 1" />
          <Counter player="Player 2" />
        </div>
      </div>
    </main>
  );
};

export default Main;
