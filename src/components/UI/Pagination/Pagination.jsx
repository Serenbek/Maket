import { getPagesArray } from "../../../Utils/pages";
import styles from "./Pagination.module.css";

const Pagination = ({ totalPages, page, changePage }) => {
  let pageArray = getPagesArray(totalPages);
  return (
    <div className={styles.page__wrapper}>
      {pageArray.map((p, index) => (
        <span
          onClick={() => changePage(p)}
          key={`${p}_${index}`}
          className={
            page === p
              ? [styles.page, styles.page__current].join(" ")
              : styles.page
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
