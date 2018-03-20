import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './index.css';

import LandingPage from './components/LandingPage/index.jsx';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup.jsx';
import Dashboard from './components/Dashboard/index.jsx';
import Rate from './components/RatingPage/index.jsx';
import MatchMaker from './components/MatchMakerPage/index.jsx';
import Follows from './components/FollowsPage/index.jsx';
import MyMatch from './components/MyMatchPage/index.jsx';
import Leaderboard from './components/LeaderboardPage/index.jsx';
import Account from './components/AccountPage/index.jsx';

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
          <Route path="/rate" component={Rate} />
          <Route path="/matchmaker" component={MatchMaker} />
          <Route path="/follows" component={Follows} />
          <Route path="/mymatch" component={MyMatch} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/account/:page/:tagtype(user|mate)" component={Account} />
          <Route path="/account/:page(bio|photoupload)" component={Account} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
