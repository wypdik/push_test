const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
var test = 0;

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  const io = socketIO(server);

  io.on("connection", (socket)=>{
    console.log("ユーザーが接続しました");

    socket.on("plus", (not)=>{
      console.log(not);
      not += 1;
      console.log(not);
      test = not
      io.emit("member-plus", test);
    });
  });
