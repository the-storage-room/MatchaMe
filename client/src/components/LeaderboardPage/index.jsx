import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './LeaderboardPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const Leaderboard = props => {
  return (
    <div>
      <Navbar />
      <div className={style.leaderboardContainer}>
        <div />
      </div>
    </div>
  );
};

export default withRouter(Leaderboard);
