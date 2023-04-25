import React, { useState } from "react";
import MyInput from "../UI/Inputs/MyInput";
import MyButton from "../UI/Buttons/MyButton";
import styles from "./PostForm.module.css";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form className={styles.myForm}>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название публикации"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Название описания"
      />
      <MyButton onClick={addNewPost}>Создать</MyButton>
    </form>
  );
};

export default PostForm;
