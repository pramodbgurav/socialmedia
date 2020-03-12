import React, { useState, useEffect, useContext } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

import Nav from "./components/nav";

import Maincomponent from './components/main-component';






function App() {
  const [posts, setPosts] = useState([]);

  // const users = {
  //   1: "Pramod Gurav",
  //   2: "Sandeep Hirwale",
  //   3: "Shivraj Sawant",
  //   4: "Anushree Nair",
  //   5: "Dhruv Dvivedi"
  // };

  const UserContext = React.createContext({
    name: 'Pramod Gurav',
    "id":1
  });

 

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

  return (
    <React.Fragment>
       <UserContext.Provider value={{id:"1"}}>
      <Router>
        <div className="container"></div>
        <Nav />
        <Route exact path="/" render={loadPost} />
      </Router>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
