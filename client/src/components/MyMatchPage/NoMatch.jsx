import React from 'react';

import style from './MyMatchPage.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';

const NoMatch = ({ checkForNewMatch }) => {
  return (
    <div className={style.noMatch}>
      <div className={style.noMatchText}>
        You have no match!
      </div>
      <Button 
        text={"Refresh"}
        onClick={() => checkForNewMatch()}
        />
    </div>
  );
}

export default NoMatch;