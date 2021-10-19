import React, { useState } from "react";
import styles from "./ProfView.module.css";
import { useHistory } from "react-router";
import { instance } from "../../axios";

export const ProfView = () => {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState("");
  const returnHome = () => {
    history.push("/");
  };

  const endPoll = () => {
    console.log("Ending Poll");
    instance.post("/quiz/end", { "quizId": roomCode }).catch(e => {
      console.log(e);
    });
  };

  const startPoll = () => {
    console.log("Starting Poll");
    instance.post("/quiz/start", { "quizId": roomCode }).catch(e => {
      console.log(e);
    });
  };
  return (
    <>
      <div className={styles.profViewContainer}>
        POLL CONTROLS
        <div className={styles.pollStartEnd} onClick={() => startPoll()}>Start Poll</div>
        <div className={styles.pollStartEnd} onClick={() => endPoll()}>End Poll
        </div>
        <input type={"text"} onChange={(event) => setRoomCode(event.target.value)} placeholder={"Room Code"} />
      </div>
      <div className={styles.returnHomePage} onClick={() => returnHome()}>Return to Home Page</div>
    </>
  );
};

