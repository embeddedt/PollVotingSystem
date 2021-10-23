const express = require("express");
const router = express.Router();
const io = require("../socket");

router.post("/end", (req, res) => {
  // Note: Will need to check Redis Cache otherwise this shouldn't be executed
  const { quizId } = req.body;
  try {
    console.log(
      "Performed whatever stuff was needed to be done to end a quiz on the backed"
    );
    console.log("Ending QuizID: ", quizId);
    io.emit("close", { quizId });
    return res.send("Quiz ended");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Woops something went wrong");
  }
});

router.post("/start", (req, res) => {
  const { quizId } = req.body;
  try {
    console.log(
      "Performed whatever stuff was needed to be done to end a quiz on the backed"
    );
    console.log("Starting QuizID: ", quizId);
    io.emit("start", { quizId });
    return res.send("Quiz Started");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Woops something went wrong");
  }
});

module.exports = router;
