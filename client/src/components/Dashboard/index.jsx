import React, { Component } from 'react';

import './Dashboard.css';

import Navbar from '../globals/Navbar/index.jsx';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>Render Dashboard Here!</div>
      </div>
    );
  }
}

export default Dashboard;
