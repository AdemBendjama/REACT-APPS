

/*  
!SQUARE 
*/

export default function Square({ value, onSquareClick, winner }) {

    return (
      <button
        style={winner ? { backgroundColor: 'red' } : {}}
        className="square"
        onClick={onSquareClick}
      >
        {value}
      </button>
    );
  }