import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Jobs from './Jobs';
import Companies from './Companies';
import Company from './Company';
import Profile from './Profile';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Nav />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/login">
              <Login />
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
              <Profile />
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
