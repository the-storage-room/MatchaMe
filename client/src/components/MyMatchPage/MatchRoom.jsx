import React from 'react';

import style from './MyMatchPage.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';

const MyMatch = ({ user2_id, matchId }) => {
  return (
    <div>
      <div>
        <Profile 
          url={user2_id.photos[0].url}
          firstname={user2_id.firstname}
          lastname={user2_id.lastname}
          age={user2_id.age}
          bio={user2_id.bio}
          />
        <Button 
          text={'End Match'}
          />
        </div>
      <div 
        className={style.chatroom}>
        Render Chat Room Here!
        </div>
    </div>
  );
}

export default MyMatch;