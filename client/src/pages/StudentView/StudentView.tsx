import React from "react";
import { OptionButton } from "../../components/OptionButton/OptionButton";
import styles from "./StudentView.module.css";
import Cookies from "universal-cookie";

export const StudentView = () => {
  const cookies = new Cookies();
  const options = "ABCDEF".split("");
  const optionButtons = options.map((name, idx) => {
    return (<OptionButton name={name} key={idx} />);
  });

  const clearCookies = () => {
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
      <div className={styles.clearCookies} onClick={() => clearCookies()}>
        Clear Cookies
      </div>
    </>
  );
};
