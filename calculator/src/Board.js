import { useMemo } from "react";
import Square from "./Square";

/*  
!BOARD 
*/

export default function Board({ xIsNext, square, onPlay }) {


    const winner = useMemo(() => calculateWinner(square), [square])

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
        status = `Winner : ${winner[0]}`
    } else if (!square.includes(null)) {
        status = `Draw`
    } else {
        status = `Next Player : '${xIsNext ? 'X' : 'O'}'`
    }

    const squares = square.map((element, move) => {
        let winningSquare = false
        if (winner && winner.includes(move)) {
            winningSquare = true
        }
        return (
            <Square key={move} value={element} winner={winningSquare} onSquareClick={() => handleClick(move)} />
        )
    })

    const board = () => {
        const rows = [0, 1, 2]

        return (
            <>
                {rows.map((row) => {
                    return (
                        <div key={row} className="board-row">
                            {squares.slice(row + row * 2, row + row * 2 + 3)}
                        </div>
                    )
                })}
            </>)
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
                return [square[a], ...winningConditions[i]]
            }

        }

        return null

    }
}