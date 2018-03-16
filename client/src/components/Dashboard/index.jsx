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
        Render Dashboard Here!
      </div>
    );
  }
}

export default Dashboard;
