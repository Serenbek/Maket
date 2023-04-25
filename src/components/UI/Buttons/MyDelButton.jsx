import React from "react";
import styles from "./MyButtons.module.css";

const MyDelButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myDelBtn}>
      {children}
    </button>
  );
};

export default MyDelButton;
