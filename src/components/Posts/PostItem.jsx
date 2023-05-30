import React from "react";
import styles from "./PostItem.module.css";
import MyDelButton from "../UI/Buttons/MyDelButton";

const PostItem = (props) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.post__title}>
        {props.post.id}. {props.post.title}
      </h2>
      <div className={styles.post__content}>
        <p>{props.post.body}</p>
        <MyDelButton onClick={() => props.remove(props.post)}>
          Удалить
        </MyDelButton>
      </div>
    </div>
  );
};

export default PostItem;
