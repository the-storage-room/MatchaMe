import React, { Component } from 'react';

import style from './MyMatch.css';
import Button from '../globals/Button/index.jsx';
import PendingMatch from './PendingMatch.jsx';
import Chatroom from './Chatroom.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import turnBirthdayIntoAge from '../../utils/turnBirthdayIntoAge';


class MatchRoom extends Component {
  constructor() {
    super();
    this.state = {
      target: 0,
      showProfile: false,
      showChatroom: true,
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

  toggleButtonText = () => {
    return (this.state.showProfile) ? "Hide Profile" : "Show Profile"
  }

  toggleProfile = () => {
    let { showProfile, showChatroom } = this.state;
    this.setState({
      showProfile: !showProfile,
      showChatroom: !showChatroom
    })
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

    window.onresize = () => {
      this.forceUpdate();
    }

    return (
      <div>
      {
        isSuccessful === 1 || firstAccept === user1
        ?
        <div className={style.mymatchwrapper}>
          <div className={style.chatheader}>
            <Navbar/>
          </div>
            <div className={style.endMatch}>
              <Button 
                text={'End Match'}
                className={window.innerWidth < 899 ? "redsmall" : "red"}
                onClick={() => {this.props.toggleWarningBox()}}
                />
            </div>
            <div className={style.toggleProfile}>
              <Button 
                text={this.toggleButtonText()}
                className={"small"}
                onClick={() => {this.toggleProfile()}}
                />
            </div>
            <div className= {style.chatProfile}>
            {
              (this.state.showProfile || window.innerWidth > 899) &&
            <div>
              <div className={style.mainphotoforchat}>
              <img 
                className={style.mainimgforchat}
                src={photos[this.state.target]}
                onClick={() => this.handlePhotoClick('main')}
                />
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
            }
            {
              (this.state.showProfile || window.innerWidth > 899) &&
            <div className={style.smallphotosforchat}>
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
            </div>
            }
            </div>
            { this.state.showChatroom && 
              <div className={style.chatroom}>
                <Chatroom
                  user2firstname={user2.firstname}
                  username={username}
                  firstname={firstname}
                  theirPhoto={user2.photos[0].url}
                  yourPhoto={this.props.yourPhoto}
                  toggleWarningBox={toggleWarningBox}
                  isSuccessful={isSuccessful}
                  toggleProfile={() => this.toggleProfile()}
                  matchId={matchId}
                  />
              </div>
            }
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

export default MatchRoom;