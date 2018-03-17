import React, { Component } from 'react';

import style from './Dashboard.css';

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
        <div className={style.dashboardContainer}>
          <div className={style.profileContainer}>
            <div className={style.photoContainer}>
              <img
                src="http://quikandslow.com/wp-content/uploads/tom-from-myspace-lg.jpg"
                height="150"
                width="150"
              />
            </div>
            <div className={style.bioContainer}>Render Bio Here!</div>
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
