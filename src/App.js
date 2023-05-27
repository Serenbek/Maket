import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import PostList from "./components/Posts/PostList";
import PostForm from "./components/PostForm/PostForm";
import { toast } from "react-toastify";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Inputs/MyInput";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/Buttons/MyButton";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const badResponse = () => {
    toast.error(`${postError}`);
  };

  return (
    <div className="App">
      <Counter />
      <br />
      <MyButton onClick={() => setModal(true)}>Создать публикацию</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <br />
      <br />
      {postError && badResponse()}
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список публикаций"
        />
      )}
    </div>
  );
}

export default App;
