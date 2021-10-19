import React, { useEffect, useState } from "react";
import { OptionButton } from "../../components/OptionButton/OptionButton";
import styles from "./StudentView.module.css";
import Cookies from "universal-cookie";
import { io } from "socket.io-client";

export const StudentView = () => {
  const cookies = new Cookies();
  const options = "ABCDEF".split("");
  const optionButtons = options.map((name, idx) => {
    return (<OptionButton name={name} key={idx} onClick={() => sendButton(name)} />);
  });
  const [connected, setConnected] = useState(false);
  const socket = io("localhost:3001");
  const roomCode = cookies.get("roomCode");


  useEffect(() => {
    if (!connected) {
      socket.on("connect", () => {
        console.log("Connected to Socket");
        setConnected(true);
      });
    }
    return () => {
      // socket.off("connect");
    };
  });

  useEffect(() => {
    if (connected) {
      socket.on("close", (e) => {
        if (connected) {
          const { quizId } = e;
          console.log("Room Code: ", roomCode);
          if (quizId === roomCode) {
            console.log("Disconnected from Socket");
            setConnected(false);
            socket.off("close");
          }
        }
      });
    }
  });

  const sendButton = (buttonName: string) => {
    socket.emit("studentVote", { "button": buttonName, "student#": 1234 });
  };

  const clearCookiesRedirect = () => {
    cookies.remove("roomCode");
    window.location.reload();
  };

  return (
    <>
      <div className={styles.studentView}>
        VOTE
        <div className={styles.studentViewButtons}>
          {optionButtons}
        </div>
      </div>
      <div>
        Is Connected: {connected ? "Yes" : "No"}
      </div>
      <div className={styles.clearCookies} onClick={() => clearCookiesRedirect()}>
        Clear Cookies
      </div>
    </>
  );
};
