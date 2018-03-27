import React from 'react';

import style from './MyMatchPage.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';

const Pending = ({ user2, handleClick}) => {
  return (
    <div className={style.pending}>
      <div className={style.profileHolder}>
      <Profile 
        url={user2.photos[0].url}
        firstname={user2.firstname}
        lastname={user2.lastname}
        age={user2.age}
        bio={user2.bio}
        />
        </div>
      <div className={style.pendingContainer}>
        You have a match! Is this a good match for you?
        <Button 
          text={'Yes'}
          onClick={() => handleClick()}
          />
        <Button 
          text={'No'}
          onClick={() => handleClick()}
          />
      </div>
    </div>
  );
}

export default Pending;