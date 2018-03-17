import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './RatingPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const Rate = props => {
  return (
    <div>
      <Navbar />
      <div className={style.ratingContainer}>
        Render Rating Page Here!
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
      </div>
    </div>
  );
};

export default withRouter(Rate);
