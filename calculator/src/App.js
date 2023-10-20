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

  const squares = square.map((element, move) => {
    return (
      <Square key={move} value={element} onSquareClick={() => handleClick(move)} />
    )
  })

  const board = () => {
    const b = []
    for (let i = 0; i < 3; i++) {
      b.push(<div key={i} className="board-row">
        {squares[i + 2 * i]}
        {squares[i + 1 + 2 * i]}
        {squares[i + 2 + 2 * i]}
      </div>)
    }

    return (
      <div>
        {b}
      </div>);
  }

  return (
    <>
      <div className="status">{status}</div>
      {board()}
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
    if (currentMove === move) {
      description = "You Are At Move #" + move
    } else if (move > 0) {
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
