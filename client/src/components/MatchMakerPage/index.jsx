import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './MatchMakerPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';

const MatchMaker = props => {
  return (
    <div>
      <Navbar />
      <div className={style.matchMakerContainer}>
        <div className={style.decisionContainer}>
          <div className={style.profileContainer}>
            <div className={style.photoContainer}>
              <img
                src="http://quikandslow.com/wp-content/uploads/tom-from-myspace-lg.jpg"
                height="300"
                width="300"
              />
            </div>
            <div className={style.userInfoContainer}>
              <span>Name: MySpace Tom</span>
              <span>Age: ???</span>
              <span>Tags: Friendly</span>
              <span>Bio: Render Bio Here!</span>
            </div>
          </div>
          <div className={style.approvalContainer}>
            <Button text={'Yes'} />
            <Button text={'No'} />
          </div>
          <div className={style.profileContainer}>
            <div className={style.photoContainer}>
              <img
                src="http://quikandslow.com/wp-content/uploads/tom-from-myspace-lg.jpg"
                height="300"
                width="300"
              />
            </div>
            <div className={style.userInfoContainer}>
              <span>Name: MySpace Tom</span>
              <span>Age: ???</span>
              <span>Tags: Friendly</span>
              <span>Bio: Render Bio Here!</span>
            </div>
          </div>
        </div>
        <div className={style.commentsContainer}>View Comments</div>
      </div>
    </div>
  );
};

export default withRouter(MatchMaker);
