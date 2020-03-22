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
import User from './components/User';




function App ()
{
  const [ posts, setPosts ] = useState([]);
  const [ user, setUser ] = useState({ id: '', name: '' })
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




  let validPostIds = [];

  function getCommentsData ()
  {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data =>
      {
        let vComments = data.filter((vComamnt) =>
        {
          if (validPostIds.includes(vComamnt.postId))
          {
            return vComamnt;
          }
        })
        setComments(vComments);
      }
      )
  }

  function getPostData (userID)
  {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>
      {
        let vData = data.filter((vPost) =>
        {
          if (vPost.userId == userID)
          {
            validPostIds.push(vPost.id);
            return vPost;
          }
        })
        setPosts(vData)
      })
  }



  function loadPost ()
  {
    if (loggedUser.id !== 0)
    {
      getPostData(user.id);
      getCommentsData();

      return (
        <React.Fragment>
          <Nav />
          <main>
            <Maincomponent allPosts={ posts } ></Maincomponent>
          </main>
        </React.Fragment>
      )

    } else
    {
      return (


        <User className="App" />
      )
    }
  }

  let loggedUser = {
    id: ''
  };
  function onFormSubmitUser (userData)
  {
    loggedUser = userData;
    setUser(userData);
  }


  function onAddPost (postdata)
  {
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
    onAddPost,
    comments: comments,
    postCount: postCount,
    commentCount: commentCount,
    onFormSubmitComment,
    onFormSubmitUser,
    user,
    posts
  }

  return (
    <React.Fragment>
      <UserContext.Provider value={ methods }>
        <Router>
          <div className="container"></div>

          <Route exact path="/" render={ loadPost } />
        </Router>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
