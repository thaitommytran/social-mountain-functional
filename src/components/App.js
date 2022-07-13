import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post'

const App = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    
  }, [])


  const updatePost = () => {
    
  }

  const deletePost = () => {
    
  }

  const createPost = () => {
    
  }

  return (
    <div className='App__parent'>
      <Header />

      <section className='App__content'>
        <Compose  />
      </section>
    </div>
  )
}


export default App;