import React, { useState } from "react";
import PostItem from "./PostItem";
import styles from "./PostList.module.css";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Публикаций не найдено!</h1>;
  }
  return (
    <div className={styles.posts__main}>
      <h1 className={styles.title}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            // nodeRef={nodeRef}
            timeout={500}
            classNames="post"
          >
            <PostItem
              // key={post.id}
              number={index + 1}
              post={post}
              remove={remove}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
