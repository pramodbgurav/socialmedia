import React, { useState, useEffect } from 'react';
import './App.css';

import
{
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

import Nav from "./components/nav";

import Maincomponent from './components/main-component';


import UserContext from './components/Context';




function App ()
{
  const [ posts, setPosts ] = useState([]);
  const [ postCount, setPostCount ] = useState(0);
  const [ comments, setComments ] = useState([]);
  const [ commentCount, setCommentsCount ] = useState(0)
  // const users = {
  //   1: "Pramod Gurav",
  //   2: "Sandeep Hirwale",
  //   3: "Shivraj Sawant",
  //   4: "Anushree Nair",
  //   5: "Dhruv Dvivedi"
  // };





  useEffect(() =>
  {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))


  }, [])

  useEffect(() =>
  {

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setComments(data))


  }, [])

  function loadPost ()
  {
    setPostCount(posts.length)
    setCommentsCount(comments.length)
    return (

      <main>
        <Maincomponent allPosts={ posts } postCount={ postCount }></Maincomponent>
      </main>
    )
  }


  function onAddPost (postdata)
  {
    console.log("in add post")
    console.log(postdata);
    let postedData = {
      "id": +new Date(),
      "title": postdata.title,
      "body": postdata.body

    }
    setPosts([ postedData, ...posts ] //speread operator copying todolist
    )
    setPostCount(postCount + 1);

  }

  function onFormSubmitComment (newComment)
  {
    console.log(newComment);
    let postedData = {
      "id": +new Date(),
      "body": newComment.body,
      "postId": newComment.postId
    }
    setComments([ postedData, ...comments ] //speread operator copying todolist
    )
    setCommentsCount(commentCount + 1)

  }

  const methods = {
    todoListDataFromApp: [],
    onAddPost,
    comments: comments,
    postCount: postCount,
    commentCount: commentCount,
    onFormSubmitComment
  }

  return (
    <React.Fragment>
      <UserContext.Provider value={ methods }>
        <Router>
          <div className="container"></div>
          <Nav />
          <Route exact path="/" render={ loadPost } />
        </Router>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
