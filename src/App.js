import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import CounterPage from "./pages/CounterPage";
import Navbar from "./components/UI/Navbar/Navbar";
import NFoundPage from "./pages/NFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/counterPage" element={<CounterPage />} />
        <Route path="*" element={<NFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
