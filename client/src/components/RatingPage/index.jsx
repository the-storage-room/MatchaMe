import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './RatingPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const Rate = props => {
  return (
    <div>
      <Navbar />
      <div className={style.ratingContainer}>
        <div className={style.profileContainer}>
          <div className={style.photoContainer}>
            <img
              src="http://quikandslow.com/wp-content/uploads/tom-from-myspace-lg.jpg"
              height="300"
              width="300"
            />
          </div>
          <div className={style.ratingScaleContainer}>
            Render Rating Scale Here!
          </div>
          <div className={style.userInfoContainer}>
            <span>Name: MySpace Tom</span>
            <span>Age: ???</span>
            <span>Tags: Friendly</span>
          </div>
        </div>
        <button className={style.nextBtn}>Next Button</button>
      </div>
    </div>
  );
};

export default withRouter(Rate);
