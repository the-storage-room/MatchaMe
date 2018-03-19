import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './MyMatchPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';
const MyMatch = props => {
  return (
    <div>
      <Navbar />
      <div className={style.myMatchPage}>
        <div>
          <Profile hasBio={true} />
          <Button text={'End Match'} />
        </div>
        <div className={style.chatroom}>Render Chat Room Here!</div>
      </div>
    </div>
  );
};

export default withRouter(MyMatch);
