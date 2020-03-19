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




const DEFAULT_STATE = {
  comments: [
    { id: 1, post_id: 1, title: "comment 1", body: "comment 1 goes here" },
    { id: 2, post_id: 1, title: "comment 2", body: "comment 2 goes here" },
    { id: 3, post_id: 1, title: "comment 3", body: "comment 3 goes here" },
    { id: 4, post_id: 2, title: "comment 4", body: "comment 4 goes here" }
  ]
}


function App ()
{
  const [ posts, setPosts ] = useState([]);
  const [ comments, setComments ] = useState(DEFAULT_STATE.comments);

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

  function loadPost ()
  {

    return (

      <main>
        <Maincomponent allPosts={ posts }></Maincomponent>
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

  }

  function onFormSubmitComment (newComment)
  {
    console.log(newComment);
    let postedData = {
      "id": +new Date(),
      "body": newComment.body,
      "post_id": newComment.post_id
    }
    setComments([ postedData, ...comments ] //speread operator copying todolist
    )

  }

  const methods = {
    todoListDataFromApp: [],
    onAddPost,
    comments: comments,
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
