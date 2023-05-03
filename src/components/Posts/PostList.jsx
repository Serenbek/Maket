import React, { useState } from "react";
import PostItem from "./PostItem";
import styles from "./PostList.module.css";

const PostList = ({ posts, title, remove }) => {
  return (
    <div className={styles.posts__main}>
      <h1 className={styles.title}>{title}</h1>
      {posts.map((item, index) => (
        <PostItem key={item.id} number={index + 1} post={item} remove={remove}/>
      ))}
    </div>
  );
};

export default PostList;
