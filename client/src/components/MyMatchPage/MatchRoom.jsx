import React, { Component } from 'react';

import style from './MyMatchPage.css';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';
import PendingMatch from './PendingMatch.jsx';
import Chatroom from './Chatroom.jsx';
import Navbar from '../globals/Navbar/index.jsx';

class MyMatch extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const { 
      user2, 
      matchId, 
      isSuccessful, 
      acceptCurrentMatch, 
      rejectOrEndCurrentMatch, 
      user1, 
      firstAccept, 
      toggleWarningBox,
      socket,
      username,
      firstname,
    } = this.props;

    console.log(user1)
    return (
      <div>
      {
        isSuccessful === 1 || firstAccept === user1
        ?
        <div className={style.myMatchPage}>
        <div className={style.header}>
          <Navbar />
        </div>
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
              <Chatroom 
                socket={socket}
                username={username}
                firstname={firstname}
                theirPhoto={user2.photos[0].url}
                yourPhoto={this.props.yourPhoto}
                />
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
}

export default MyMatch;