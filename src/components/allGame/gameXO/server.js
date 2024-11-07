const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let games = {}; // Lưu trữ trạng thái các trò chơi

// Sự kiện khi có người chơi kết nối
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Tham gia phòng (một trò chơi)
  socket.on('joinGame', (roomId) => {
    socket.join(roomId);
    if (!games[roomId]) {
      games[roomId] = Array(9).fill(null); // Khởi tạo bàn cờ trống
    }
    io.to(roomId).emit('gameState', games[roomId]);
  });

  // Sự kiện khi người chơi di chuyển
  socket.on('makeMove', ({ roomId, index, player }) => {
    if (games[roomId][index] === null) { // Chỉ cho phép di chuyển khi ô trống
      games[roomId][index] = player;
      io.to(roomId).emit('gameState', games[roomId]);
    }
  });

  // Sự kiện khi ngắt kết nối
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
