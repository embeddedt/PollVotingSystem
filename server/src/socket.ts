// socket setup
import { Server, Socket } from "socket.io";

// keep track of whether a room is open or closed instead of querying from dd
// For each room key, the value is an array where the first element is the current question
// and the second element is the total number of question
// if first question is -1 then the poll is closed
/**
 * TODO: shift to redis
 */
const rooms: Record<string, number[]> = {};

const io = new Server({
  cors: {
    origin: process.env.FRONTEND,
  },
});

// log the socket id when client socket connects for the first time
io.on("connection", (socket: Socket) => {
  console.log(`connect: ${socket.id}`);
});

export { io, rooms };