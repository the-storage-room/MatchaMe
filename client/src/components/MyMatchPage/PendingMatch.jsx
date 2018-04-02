import React from 'react';

import style from './MyMatch.css';
import Button from '../globals/Button/index.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import Footer from '../globals/Footer/index.jsx';
import turnBirthdayIntoAge from '../../utils/turnBirthdayIntoAge';

const Pending = ({ user2, accept, reject }) => {
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
            text={'Yes'}
            onClick={() => accept()}
            />
          <Button 
            text={'No'}
            className={'red'}
            onClick={() => reject()}
            />
            </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default Pending;