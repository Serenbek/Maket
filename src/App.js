import { useMemo, useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import PostList from "./components/Posts/PostList";
import PostForm from "./components/PostForm/PostForm";
import { toast } from "react-toastify";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Inputs/MyInput";
import PostFilter from "./components/PostFilter/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Публикация 6",
      body: "Описание 99",
    },
    {
      id: 2,
      title: "Публикация 9",
      body: "Описание 2",
    },
    {
      id: 3,
      title: "Публикация 2",
      body: "Описание 1 ",
    },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("Отработала функ сортед постс");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const notPosts = () => {
    if (sortedAndSearchedPosts.length === 0) {
      toast.error("Публикаций не найдено!");
    }
  };

  return (
    <div className="App">
      <Counter />
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      <br />
      <br />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список публикаций"
        />
      ) : (
        notPosts()
        // <h2 style={{ textAlign: "center" }}>Публикаций не найдено!</h2>
      )}
    </div>
  );
}

export default App;
