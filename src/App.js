import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import PostList from "./components/Posts/PostList";
import PostForm from "./components/PostForm/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Публикация",
      body: "Описание",
    },
    {
      id: 2,
      title: "Публикация 2",
      body: "Описание 2",
    },
    {
      id: 3,
      title: "Публикация 3",
      body: "Описание 3 ",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <Counter />
      <PostForm create={createPost} />
      <PostList posts={posts} title="Список публикаций" />
    </div>
  );
}

export default App;
