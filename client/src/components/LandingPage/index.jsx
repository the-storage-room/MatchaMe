import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import './LandingPage.css';

import Main from './components/Main/index.jsx';
import Bio from './components/Bio/index.jsx';



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
          <Route path='/' component={Main} />
          <Route path='/bio' component={Bio} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(LandingPage);
