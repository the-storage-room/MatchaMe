import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './LandingPage.css';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return <div>Render Landing Page Here!</div>;
  }
}

export default withRouter(LandingPage);
