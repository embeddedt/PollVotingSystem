import React from "react";
import styles from "./OptionButton.module.css";

interface buttonTypes {
  name: String;
}

export const OptionButton = ({ name }: buttonTypes) => {
  return (
    <div className={styles.optionButton}>
      {name}
    </div>
  );
};
