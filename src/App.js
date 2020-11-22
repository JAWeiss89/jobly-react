import React, {useState, useEffect } from 'react';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Jobs from './Jobs';
import Companies from './Companies';
import Company from './Company';
import Profile from './Profile';
import JoblyAPI from './JoblyAPI';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      console.log("Checking if logged in...")
      if(localStorage._token && localStorage.username) {
        let foundUser = await JoblyAPI.getUser(localStorage.username);
        setUser(foundUser);
        console.log(foundUser);
      }
    }
    checkIfLoggedIn();

  }, [])

  return (
    <div className="App">
      <BrowserRouter >
        <Nav  user={user} setUser={setUser}/>
        <Switch>
          <Route exact path="/">
              <Home user={user}/>
          </Route>
          <Route exact path="/login">
              <Login user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/jobs">
              <Jobs />
          </Route>
          <Route exact path="/companies">
              <Companies />
          </Route>
          <Route exact path="/companies/:handle">
              <Company />
          </Route>
          <Route exact path="/profile">
              <Profile user={user}/>
          </Route>
          <Route>
              <h1>Oh no 404</h1>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
