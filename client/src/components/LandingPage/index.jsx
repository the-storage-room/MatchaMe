import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './LandingPage.css';

import Main from './components/Main/index.jsx';
import Bio from './components/Bio/index.jsx';
import About from './components/About/index.jsx';



class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(LandingPage);
