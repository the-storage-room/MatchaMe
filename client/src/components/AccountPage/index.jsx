import React from 'react';
import { withRouter } from 'react-router-dom';
import PhotoUpload from './../globals/PhotoUpload/index.jsx';

import style from './AccountPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const Account = props => {
  return (
    <div>
      <Navbar />
      <div className={style.upload}>
        <PhotoUpload />
      </div>
    </div>
  );
};

export default withRouter(Account);
