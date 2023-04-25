import React from "react";
import styles from "./MyInput.module.css";

const MyInputs = React.forwardRef((props, ref) => {
  return <input ref={ref} className={styles.myInput} {...props} />;
});

export default MyInputs;
