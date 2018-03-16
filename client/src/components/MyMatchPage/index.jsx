import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './MyMatchPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const MyMatch = props => {
  return (
    <div>
      <Navbar />
      Render MyMatch Page Here!
    </div>
  );
};

export default withRouter(MyMatch);
