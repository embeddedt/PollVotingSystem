import React from "react";
import styles from "./ProfView.module.css";
import { useHistory } from "react-router";

export const ProfView = () => {
  const history = useHistory();

  const returnHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className={styles.profViewContainer}>
        POLL CONTROLS
        <div className={styles.pollStartEnd}>Start Poll</div>
        <div className={styles.pollStartEnd}>End Poll</div>
      </div>
      <div className={styles.returnHomePage} onClick={() => returnHome()}>Return to Home Page</div>
    </>
  );
};

