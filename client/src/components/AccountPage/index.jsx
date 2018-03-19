import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PhotoUpload from './../globals/PhotoUpload/index.jsx';

import style from './AccountPage.css';
import Navbar from '../globals/Navbar/index.jsx';

class Account extends Component {
  constructor() {
    super();
    this.state = {
      isFirstTimeUser: true,
      currentPage: 1,
    };
  }

  render () {
    return (
      <div>
        {
          this.state.isFirstTimeUser
          ? <Navbar />
          : null
          }
        <div className={style.upload}>
          <PhotoUpload />
        </div>
      </div>
    );
  }
}

export default withRouter(Account);
