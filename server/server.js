require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const io = require("./socket");
const quizRouter = require("./api/quiz");
const app = express();
app.use(cors({ origin: process.env.FRONTEND, credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/quiz", quizRouter);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
  io.attach(server);
});
