import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [count, setcount] = useState(Array(9).fill(null));
  const [xturn, setXturn] = useState(true);
  //   console.log(count);
  const WinnerCheck = () => {
    const Winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of Winner) {
      const [a, b, c] = logic;
      if (count[a] !== null && count[a] === count[b] && count[a] === count[c]) {
        return count[a];
      }
    }
    return false;
  };

  const isWinner = WinnerCheck();

  const handleClick = (index) => {
    const newCount = [...count];
    newCount[index] = xturn ? "X" : "O";
    setcount(newCount);
    setXturn(!xturn);
  };
  const handleReset = () => {
    setcount(Array(0).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          <div className="won">
            <h1 className="won-text">{isWinner} won the game... </h1>
            <div className="btn">
              <button className="btn-i" onClick={handleReset}>
                Play Again
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="board-container">
          <h1 className="game-name">tik tak toe</h1>
          <div className="Board-row">
            <Square onClick={() => handleClick(0)} value={count[0]} />
            <Square onClick={() => handleClick(1)} value={count[1]} />
            <Square onClick={() => handleClick(2)} value={count[2]} />
          </div>
          <div className="Board-row">
            <Square onClick={() => handleClick(3)} value={count[3]} />
            <Square onClick={() => handleClick(4)} value={count[4]} />
            <Square onClick={() => handleClick(5)} value={count[5]} />
          </div>
          <div className="Board-row">
            <Square onClick={() => handleClick(6)} value={count[6]} />
            <Square onClick={() => handleClick(7)} value={count[7]} />
            <Square onClick={() => handleClick(8)} value={count[8]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
