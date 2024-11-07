
import React, { useState, useEffect } from 'react';
import './animation/Ani.css'; // Đảm bảo rằng bạn đã import CSS của mình

function GameXOmain() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner || !isXNext) return;

    const newBoard = board.slice();
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  };

  useEffect(() => {
    if (!isXNext && !winner) {
      const botMove = findBotMove(board);
      if (botMove !== null) {
        const newBoard = board.slice();
        newBoard[botMove] = 'O';
        setBoard(newBoard);
        setIsXNext(true);
      }
    }
  }, [isXNext, board, winner]);

  const findBotMove = (board) => {
    // Kiểm tra và chặn nếu có 2 'X' trong hàng, cột hoặc đường chéo
    const blockingMove = findBlockingMove(board);
    if (blockingMove !== null) {
      return blockingMove; // Trả về nước đi chặn
    }

    // Nếu không có nước đi chặn, chọn ngẫu nhiên ô trống
    return getRandomMove(board);
  };

  const findBlockingMove = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      const cells = [board[a], board[b], board[c]];
      const emptyIndex = combination.find(index => board[index] === null);

      // Kiểm tra xem có 2 'X' và 1 ô trống hay không
      if (cells.filter(cell => cell === 'X').length === 2 && emptyIndex !== undefined) {
        return emptyIndex; // Trả về ô cần chặn
      }
    }
    return null; // Không có nước đi chặn
  };

  const getRandomMove = (board) => {
    const emptySquares = board.map((val, index) => (val === null ? index : null)).filter(val => val !== null);
    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      return emptySquares[randomIndex];
    }
    return null; // Không có nước đi nào
  };

  const renderSquare = (index) => (
    <button 
      className={`square w-[100px] h-[100px] flex items-center justify-center border border-solid border-[#ffff]`} 
      onClick={() => handleClick(index)}
    >
      {board[index] === 'X' ? (
        <span className="text-x">{board[index]}</span>
      ) : board[index] === 'O' ? (
        <span className="text-o">{board[index]}</span>
      ) : null}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game flex flex-col items-center h-screen justify-center">
      <h1 className='text-white font-bold'>Game XO</h1>
      <div className="board grid grid-cols-[repeat(3,100px)] gap-[5px] mt-5">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => renderSquare(i))}
      </div>
      <div className="status text-xl mt-5 text-white">
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <button className="reset text-base bg-red-500 rounded-lg cursor-pointer mt-2.5 px-2.5 py-[5px] text-white" onClick={resetGame}>Restart Game</button>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default GameXOmain;
