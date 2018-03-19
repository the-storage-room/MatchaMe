import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './FollowsPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const Follows = props => {
  return (
    <div>
      <Navbar />
      <div className={style.followsContainer}>
        <div className={style.starredContainer}>
          Render Starred Matches Here!
        </div>
        <div className={style.resultsContainer}>Render All Matches Here!</div>
      </div>
    </div>
  );
};

export default withRouter(Follows);
