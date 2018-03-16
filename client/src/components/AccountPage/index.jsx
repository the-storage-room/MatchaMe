import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './AccountPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const Account = props => {
  return (
    <div>
      <Navbar />
      Render AccountPage Page Here!
    </div>
  );
};

export default withRouter(Account);
