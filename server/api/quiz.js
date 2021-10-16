const express = require("express");
const router = express.Router();
const io = require("../socket");

router.post("/end", (req, res) => {
  const { quizId } = req.body;
  try {
    console.log(
      "Performed whatever stuff was needed to be done to end a quiz on the backed"
    );
    io.emit("close", { quizId });
    return res.send("Quiz ended");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Woops something went wrong");
  }
});

module.exports = router;
