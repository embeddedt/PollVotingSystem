const io = require("socket.io")({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log(`connect: ${socket.id}`);

  socket.on("studentVote", (data) => {
    console.log(data)
  })
});

module.exports = io;
