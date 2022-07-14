import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Header from "./Header/Header";
import Compose from "./Compose/Compose";
import Post from "./Post/Post";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://practiceapi.devmountain.com/api/posts")
      .then((res) => setPosts(res.data));
  }, []);

  const updatePost = () => {};

  const deletePost = () => {};

  const createPost = () => {};

  return (
    <div className="App__parent">
      <Header />

      <section className="App__content">
        <Compose />
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              text={post.text}
              date={post.date}
              deletePostFn={deletePost}
            />
          );
        })}
      </section>
    </div>
  );
};

export default App;
