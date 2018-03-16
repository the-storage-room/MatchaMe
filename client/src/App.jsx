import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage/index.jsx';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup.jsx';
import Dashboard from './components/Dashboard/index.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
