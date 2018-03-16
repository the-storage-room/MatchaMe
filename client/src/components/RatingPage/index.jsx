import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './RatingPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const Rate = props => {
  return (
    <div>
      <Navbar />
      Render Rating Page Here!
    </div>
  );
};

export default withRouter(Rate);
