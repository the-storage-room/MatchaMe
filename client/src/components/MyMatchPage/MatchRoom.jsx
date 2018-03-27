import React from 'react';

import style from './MyMatchPage.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';
import PendingMatch from './PendingMatch.jsx';

const MyMatch = ({ user2, matchId, isSuccessful }) => {
  return (
    <div>
    {
      isSuccessful === 1
      ?
      <div className={style.myMatchPage}>
        <div>
          <Profile 
            url={user2.photos[0].url}
            firstname={user2.firstname}
            lastname={user2.lastname}
            age={user2.age}
            bio={user2.bio}
            />
          <Button 
            text={'End Match'}
            className={"endMatch"}
            />
          </div>
        <div 
          className={style.chatroom}>
          Render Chat Room Here!
        </div>
      </div>
      :
      <PendingMatch
        user2={user2}
        />
    }
    </div>
  );
}

export default MyMatch;