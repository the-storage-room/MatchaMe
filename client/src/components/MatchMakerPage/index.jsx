import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './MatchMakerPage.css';
import Navbar from '../globals/Navbar/index.jsx';

const MatchMaker = props => {
  return (
    <div>
      <Navbar />
      Render MatchMaker Page Here!
    </div>
  );
};

export default withRouter(MatchMaker);
