import React, { Component } from 'react';

import style from './MyMatch.css';
import Button from '../globals/Button/index.jsx';
import PendingMatch from './PendingMatch.jsx';
import Chatroom from './Chatroom.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import turnBirthdayIntoAge from '../../utils/turnBirthdayIntoAge';


class MyMatch extends Component {
  constructor() {
    super();
    this.state = {
      target: 0,
    }
  }

  handlePhotoClick = (photo) => {
    if (photo === 'main') {
      let newPhoto = this.state.target;
      newPhoto += 1;
      if (newPhoto === this.props.user2.photos.length) { newPhoto = 0 }
      this.setState({
        target: newPhoto
      })
    } else {
      this.setState({
        target: photo
      })
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
    
    let realAge;
    if (user2) {
      realAge = turnBirthdayIntoAge(user2.age)
    }

    let photos = user2.photos.map((photo) => {
      return photo.url
    })

    return (
      <div>
      {
        isSuccessful === 1 || firstAccept === user1
        ?
        <div className={style.mymatchwrapper}>
          <div className={style.header}>
            <Navbar />
          </div>
            <div className={style.profile}>
              <div className={style.mainphoto}>
              <img 
                className={style.mainimg}
                src={user2.photos[this.target]}
                onClick={() => this.handlePhotoClick('main')}
                />
              </div>
              <div className={style.smallphotos}>
              <div className={style.smallerphotosgrid}>
                <div className={style.smallimg}>
                  <img 
                    className={style.img1}
                    src={photos[0]}
                    onClick={() => this.handlePhotoClick(0)}
                    />
                </div>
                <div className={style.smallimg}>
                  <img 
                    className={style.img2}
                    src={photos[1]}
                    onClick={() => this.handlePhotoClick(1)}
                    />
                </div>
                <div className={style.smallimg}>
                  <img 
                    className={style.img3}
                    src={photos[2]}
                    onClick={() => this.handlePhotoClick(2)}
                    />
                  </div>
                  <div className={style.smallimg}>
                  <img 
                    className={style.img4}
                    src={photos[3]}
                    onClick={() => this.handlePhotoClick(3)}
                    />
                  </div>
                </div>
              </div>
              <div className={style.bio}>
                <div className={style.name}>
                {user2.firstname} {user2.lastname[0]}.
                </div>
                <div className={style.age}>
                {realAge} years old
                </div>
                  {/* <div className={style.tags}>
                    <div className={style.tag}>
                    {user2.tags[0]}
                    </div>
                    <div className={style.tag}>
                    {user2.tags[1]}
                    </div>
                    <div className={style.tag}>
                    {user2.tags[2]}
                    </div>
                  </div> */}
                <div className={style.biography}>
                  {`"${user2.bio}"`}
                </div>
              </div>
            </div>
            <div className={style.endMatch}>
              <Button 
                text={'End Match'}
                className={"red"}
                onClick={() => {toggleWarningBox()}}
                />
            </div>
            <div className={style.showprofile}>
              <Button 
                text={'Show Profile'}
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