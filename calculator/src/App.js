import { useState } from "react";


function Square({ value, onSquareClick }) {

  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, square, onPlay }) {


  const winner = calculateWinner(square)

  function handleClick(i) {
    if (square[i] || winner) {
      return
    }

    const newsquare = square.slice()
    if (xIsNext) {
      newsquare[i] = 'X'
    } else {
      newsquare[i] = 'O'
    }

    onPlay(newsquare)
  }

  let status
  if (winner) {
    status = `Winner : ${winner}`
  } else {
    status = `Next Player : '${xIsNext ? 'X' : 'O'}'`
  }



  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => handleClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );

  function calculateWinner(square) {
    const winningConditions = [
      // Rows
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      // Columns
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      // Diagonals
      [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];

      if ((square[a]) && (square[a] === square[b]) && (square[a] === square[c])) {
        return square[a]
      }

    }

    return null

  }
}

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const currentSquare = history[currentMove]
  const xIsNext = currentMove % 2 === 0

  function handlePlay(newsquare) {
    const nextHistory = [...history.slice(0, currentMove + 1), newsquare]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(move) {
    setCurrentMove(move)
  }

  const moves = history.map((board, move) => {
    let description;
    if (move > 0) {
      description = "Go To Move #" + move
    } else {
      description = "Go To Game Start"
    }

    return (
      <li key={move} >
        <button onClick={() => jumpTo(move)} >{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
