import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Địa chỉ server

function GameXOTwo() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [roomId, setRoomId] = useState('');
  const [player, setPlayer] = useState('X');

  useEffect(() => {

    const roomId = prompt('Enter room ID:');
    setRoomId(roomId);
    socket.emit('joinGame', roomId);


    socket.on('gameState', (newBoard) => {
      setBoard(newBoard);
    });

    return () => {
      socket.off('gameState');
    };
  }, []);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;


    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);


    socket.emit('makeMove', { roomId, index, player });

    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="game flex flex-col items-center justify-center h-screen">
      <h1 className="text-white font-bold">Game XO</h1>
      <div className="board grid grid-cols-[repeat(3,100px)] gap-[5px] mt-5">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => renderSquare(i))}
      </div>
      <div className="status text-xl mt-5 text-white">
        {calculateWinner(board)
          ? `Winner: ${calculateWinner(board)}`
          : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
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
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default GameXOTwo;
