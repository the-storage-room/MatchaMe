import React, { Component } from 'react';

import style from './Dashboard.css';

import Navbar from '../globals/Navbar/index.jsx';
import Profile from '../globals/Profile/index.jsx';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={style.dashboardContainer}>
          <div className={style.profileContainer}>
            <Profile hasBio={true} />
          </div>

          <div className={style.matchContainer}>
            <div className={style.myMatchContainer}>
              Render My Matches Here!
            </div>
            <div className={style.myFollowingContainer}>
              Render My Following Matches Here!
            </div>
          </div>

          <div className={style.leaderboardContainer}>
            Render Leadeboard Here!
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
