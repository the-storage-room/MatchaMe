import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './MatchMakerPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';
import Profile from '../globals/Profile/index.jsx';

const MatchMaker = props => {
  return (
    <div>
      <Navbar />
      <div className={style.matchMakerContainer}>
        <div className={style.decisionContainer}>
          <Profile hasBio={true} />
          <div className={style.approvalContainer}>
            <Button text={'Yes'} />
            <Button text={'No'} />
          </div>
          <Profile hasBio={true} />
        </div>
        <div className={style.commentsContainer}>View Comments</div>
      </div>
    </div>
  );
};

export default withRouter(MatchMaker);
