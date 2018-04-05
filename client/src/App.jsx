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
<<<<<<< HEAD
import Protected from './components/globals/Protected';
=======
import Protected from '../src/components/globals/Protected/index';
<<<<<<< HEAD
>>>>>>> moar landing page
import actions from '../Redux/actions/initialize_actions';
=======
import Bio from '../src/components/LandingPage/components/Bio/index.jsx';
import About from '../src/components/LandingPage/components/About/index.jsx';
import Main from '../src/components/LandingPage/components/Main/index.jsx';
>>>>>>> moar landing page

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

          <Route path="/home" component={props => <Protected component={Home} {...props} />} />
          <Route path="/dashboard" component={props => <Protected component={Dashboard} {...props} />} />
          <Route path="/initialize" component={Initialize} />
          <Route path="/rate" component={props => <Protected component={Rate} {...props} />} />
          <Route
            path="/matchmaker"
            component={props => <Protected component={MatchMaker} {...props} />}
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
          <Route exact path="/" component={Main} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}


export default App;
