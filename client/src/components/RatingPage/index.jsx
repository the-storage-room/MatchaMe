import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './RatingPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';
import Profile from '../globals/Profile/index.jsx';

const Rate = props => {
  return (
    <div>
      <Navbar />
      <div className={style.ratingContainer}>
        <div className={style.profileContainer}>
          <Profile />
          <div className={style.ratingScaleContainer}>
            Render Rating Scale Here!
          </div>
        </div>
        <Button className={style.nextBtn} text={'Next Button'} />
      </div>
    </div>
  );
};

export default withRouter(Rate);
