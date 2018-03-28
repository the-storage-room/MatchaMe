import React from 'react';

import style from './MyMatchPage.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';
import PendingMatch from './PendingMatch.jsx';
import Chatroom from './Chatroom.jsx';

const MyMatch = ({ user2, matchId, isSuccessful, acceptCurrentMatch, rejectOrEndCurrentMatch, user1, firstAccept, toggleWarningBox}) => {
  console.log(isSuccessful)
  return (
    <div>
    {
      isSuccessful === 1 || firstAccept === user1
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
            onClick={() => {toggleWarningBox()}}
            />
          </div>
        <div className={style.chatroom}>
          {
            isSuccessful
            ?
            <Chatroom />
            :
            "Waiting for your match to Accept..."
          }
          
        </div>
      </div>
      :
      <PendingMatch
        user2={user2}
        accept={acceptCurrentMatch}
        reject={toggleWarningBox}
        user1={user1}
        firstAccept={firstAccept}
        />
    }
    </div>
  );
}

export default MyMatch;