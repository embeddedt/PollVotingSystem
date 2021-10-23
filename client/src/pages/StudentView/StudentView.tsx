import React, { useEffect, useState } from "react";
import { OptionButton } from "../../components/OptionButton/OptionButton";
import styles from "./StudentView.module.css";
import Cookies from "universal-cookie";
import { io } from "socket.io-client";

export const StudentView = () => {
  const cookies = new Cookies();
  const options = "ABCDEF".split("");
  const optionButtons = options.map((name, idx) => {
    return (
      <OptionButton name={name} key={idx} onClick={() => sendButton(name)} />
    );
  });

  const socket = io("localhost:3001");
  const [roomCode, setRoomCode] = useState(cookies.get("roomCode"));
  const [connected, setConnected] = useState(true);

  socket.on("connect", () => {
    console.log("Connected to Socket");
  });

  socket.on("close", (e) => {
    const { quizId } = e;
    console.log("Room Code:", roomCode);
    if (connected && quizId === roomCode) {
      console.log("Disconnected from Socket");
      cookies.remove("roomCode");
      setRoomCode(null);
      setConnected(false);
    }
  });

  useEffect(() => {
    if (!connected) {
      socket.disconnect();
    } else {
      socket.connect();
    }
  });

  const sendButton = (buttonName: string) => {
    socket.emit("studentVote", { button: buttonName, "student#": 1234 });
  };

  const clearCookiesRedirect = () => {
    cookies.remove("roomCode");
    window.location.reload();
  };

  return (
    <>
      <div className={styles.studentView}>
        VOTE
        <div className={styles.studentViewButtons}>{optionButtons}</div>
      </div>
      <div>Is Connected: {connected ? roomCode : "Not Connected"}</div>
      <div
        className={styles.clearCookies}
        onClick={() => clearCookiesRedirect()}
      >
        Clear Cookies
      </div>
    </>
  );
};
