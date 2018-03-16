import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './FollowsPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const Follows = props => {
  return (
    <div>
      <Navbar />
      Render Follows Page Here!
    </div>
  );
};

export default withRouter(Follows);
