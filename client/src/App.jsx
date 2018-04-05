import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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
import Initialize from './components/InitializePage/index.jsx';
import Home from './components/HomePage/index.jsx';
import Protected from '../src/components/globals/Protected/index';
import actions from '../Redux/actions/initialize_actions';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    // if they have an active web token
    // initialize with the webtoken
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <Route path="/home" component={props => <Protected component={Home} {...props} />} />
          <Route path="/dashboard" component={props => <Protected component={Dashboard} {...props} />} />
          <Route path="/initialize" component={Initialize} />
          <Route path="/rate" component={props => <Protected component={Rate} {...props} />} />
          <Route
            path="/matchmaker"
            component={props => < Protected component={MatchMaker} {...props} />}
          />
          <Route path="/follows" component={props => <Protected component={Follows} {...props} />} />
          <Route path="/mymatch" component={props => <Protected component={MyMatch} {...props} />} />
          <Route
            path="/leaderboard"
            component={props => <Protected component={Leaderboard} {...props} />}
          />
          <Route
            path="/onboarding/:page(tags)/:tagtype(user|pref)"
            component={props => <Protected component={Account} {...props} />}
          />
          <Route
            path="/onboarding/:page(bio|photoupload)"
            component={props => <Protected component={Account} {...props} />}
          />
          <Route
            path="/account/:page(tags)/:tagtype(user|pref)"
            component={props => <Protected component={Account} {...props} />}
          />
          <Route
            path="/account/:page(bio|photoupload)"
            component={props => <Protected component={Account} {...props} />}
          />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
