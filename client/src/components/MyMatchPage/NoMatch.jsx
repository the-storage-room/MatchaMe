import React from 'react';

import style from './MyMatchPage.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';

const NoMatch = ({ user2_id, matchId }) => {
  return (
    <div className={style.noMatch}>
      You have no match!
    </div>
  );
}

export default NoMatch;