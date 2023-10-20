import { useState } from "react";
import Board from "./Board"; 




/*  
!GAME 
*/
export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)])
  const [moveCoordinates, setMoveCoordinates] = useState([])
  const [currentMove, setCurrentMove] = useState(0)
  const [ordered, setOrdered] = useState(true)

  const currentSquare = history[currentMove]
  const xIsNext = currentMove % 2 === 0

  function handlePlay(newsquare) {
    const nextHistory = [...history.slice(0, currentMove + 1), newsquare]

    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    const squareLocation = nextHistory[nextHistory.length - 2].map((element, index) => {
      return element === newsquare[index] ? null : newsquare[index];
    });

    const coordinates = calculateCoordinates(squareLocation)
    setMoveCoordinates([...moveCoordinates,coordinates])
  }

  function jumpTo(move) {
    setCurrentMove(move)
  }

  function reOrder() {
    setOrdered(!ordered)
  }

  const moves = history.map((board, move) => {
    let description;
    let coordinates = moveCoordinates[move] || ""
    if (currentMove === move) {
      description = "You Are At Move #" + move 
    } else if (move > 0) {
      description = "Go To Move #" + move + " " + coordinates
    } else {
      description = "Go To Game Start " + coordinates
    }

    return (
      <li key={move} >
        <button onClick={() => jumpTo(move)} >{description}</button>
      </li>
    )
  })

  if (!ordered) {
    moves.reverse()
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={reOrder}>Toggle</button>
        <ol reversed={!ordered}>{moves}</ol>
      </div>
    </div>
  );

  function calculateCoordinates(squareLocation) {
    let row
    let col
    if (squareLocation.indexOf("X") !== -1) {
      row = Math.floor(squareLocation.indexOf("X") / 3) + 1;
      col = squareLocation.indexOf("X") % 3 + 1;
    } else {
      row = Math.floor(squareLocation.indexOf("O") / 3) + 1;
      col = squareLocation.indexOf("O") % 3 + 1;
    }

    return (`(Row ${row}, Col ${col})`);
  }
}
