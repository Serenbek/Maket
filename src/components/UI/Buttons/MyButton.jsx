import React from "react";
import styles from "./MyButtons.module.css";

const MyButtons = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
};

export default MyButtons;
