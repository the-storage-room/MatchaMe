import React, { Component } from 'react';

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

export default LandingPage;
