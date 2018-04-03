import React, { Component } from 'react';

import style from './MyMatch.css';
import Button from '../globals/Button/index.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import Footer from '../globals/Footer/index.jsx';
import turnBirthdayIntoAge from '../../utils/turnBirthdayIntoAge';

class Pending extends Component {
  render() {
    const { user2, accept, reject } = this.props;
    let realAge;
    if (user2) {
      realAge = turnBirthdayIntoAge(user2.age)
    }
    return (
      <div>
        <div className={style.pendingwrapper}>
          <div className={style.header}>
            <Navbar />
          </div>
          <div className={style.message}>
            <div>You matched with</div>
            <div>{user2.firstname}!</div>
          </div>
          <div className={style.mainphoto}>
          <img 
            className={style.mainimg}
            src={user2.photos[0].url}
            />
          </div>
          <div className={style.smallphotos}>
          <div className={style.smallerphotosgrid}>
            <div className={style.smallimg}>
              <img 
                className={style.img1}
                src={user2.photos[0].url}
                onClick={() => this.handlePhotoClick(0)}
                />
            </div>
            <div className={style.smallimg}>
              <img 
                className={style.img2}
                src={user2.photos[1].url}
                onClick={() => this.handlePhotoClick(1)}
                />
            </div>
            <div className={style.smallimg}>
              <img 
                className={style.img3}
                src={user2.photos[2].url}
                onClick={() => this.handlePhotoClick(2)}
                />
              </div>
              <div className={style.smallimg}>
              <img 
                className={style.img4}
                src={user2.photos[3].url}
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
          <div className={style.buttons}>
            <div className={style.prompt}>
            Is this a good match?
            </div>
            <div>
            <div className={style.prompt}>
            <Button 
              text={'Accept to Enter Chat'}
              onClick={() => accept()}
              />
            <Button 
              text={'Reject'}
              className={'red'}
              onClick={() => reject()}
              />
              </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default Pending;