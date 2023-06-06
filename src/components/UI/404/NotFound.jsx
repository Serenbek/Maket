import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>404</h2>
      <div className={styles.line}></div>
      <p className={styles.txt}>This page could not be found.</p>
    </div>
  );
};

export default NotFound;
