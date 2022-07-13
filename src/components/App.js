import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post'

const App = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://practiceapi.devmountain.com/api/posts')
      .then(res => setPosts(res.data))
  }, [])


  const updatePost = (id, text) => {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, { text })
      .then(res => setPosts(res.data))
  }

  const deletePost = (id) => {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
      .then(res => setPosts(res.data))
  }

  const createPost = (text) => {
    axios.post(`https://practiceapi.devmountain.com/api/posts`, { text })
      .then(res => setPosts(res.data))
  }

  return (
    <div className='App__parent'>
      <Header />

      <section className='App__content'>
        <Compose createPostFn={createPost} />
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              text={post.text}
              date={post.date}
              deletePostFn={deletePost}
            />
          )
        })}
      </section>
    </div>
  )
}


export default App;