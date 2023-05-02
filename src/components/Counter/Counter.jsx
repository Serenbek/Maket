import React, { useState } from "react";
import styles from "./Counter.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = () => {
  const [count, setCount] = useState(10);
  const [value, setValue] = useState("Введи текст");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count > 0 ? count - 1 : 0);
  }
  return (
    <>
      <div className={styles.counter__main}>
        <h2>Счетчик</h2>
        <h3>{count}</h3>
        <div className={styles.btnMain}>
          <button className={styles.counter__btn} onClick={decrement}>
            <RemoveIcon />
          </button>
          <button className={styles.counter__btn} onClick={increment}>
            <AddIcon />
          </button>
        </div>
      </div>
      <div className={styles.sync}>
        <h2>Управляемые компоненты</h2>
        <h3>{value}</h3>
        <input
          className={styles.countInp}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default Counter;
