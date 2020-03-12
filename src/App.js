import React, { useState, useEffect } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

import Nav from "./components/nav";

import Maincomponent from './components/main-component';


import Usercontext from './components/user-context';



const UserContextProvider = (props) => {
  return (
    <Usercontext.Provider value={props.value}>
      {props.children}
    </Usercontext.Provider>
  )
}


function App() {
  const [posts, addPost] = useState([]);
  const [postListing, setPost] = useState({ postList: [] });

  // const users = {
  //   1: "Pramod Gurav",
  //   2: "Sandeep Hirwale",
  //   3: "Shivraj Sawant",
  //   4: "Anushree Nair",
  //   5: "Dhruv Dvivedi"
  // };

  const UserContext = React.createContext();



  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))

  }, [])

  function loadPost() {

    return (

      <main>
        <Maincomponent allPosts={posts}></Maincomponent>
      </main>
    )
  }


  function onAddPost(postdata) {
    console.log("in add post")
    console.log(postdata);
    let postedData = {
      "id": +new Date,
      "title": postdata.title,
      "body": postdata.body
    }
    setPost({
      posts: [postedData, ...postListing.postList] //speread operator copying todolist
    })

  }

  const methods = {
    todoListDataFromApp: [],
    onAddPost: onAddPost
  }

  return (
    <React.Fragment>
      <UserContextProvider value={methods}>
        <Router>
          <div className="container"></div>
          <Nav />
          <Route exact path="/" render={loadPost} />
        </Router>
      </UserContextProvider>
    </React.Fragment>
  );
}

export default App;
