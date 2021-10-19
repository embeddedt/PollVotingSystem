import React from "react";
import styles from "./OptionButton.module.css";

interface buttonTypes {
  name: String;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const OptionButton = ({ name, onClick }: buttonTypes) => {
  return (
    <div onClick={onClick} className={styles.optionButton}>
      {name}
    </div>
  );
};
