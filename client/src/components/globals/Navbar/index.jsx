import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Navbar.css';

const Navbar = props => {
  return (
    <h2 className={style.navContainer}>
      <div
        className={style.navButton}
        onClick={() => props.history.push('/dashboard')}
        dangerouslySetInnerHTML="Dash"
      />
      <div className={style.navButton}>Rate</div>
      <div className={style.navButton}>MatchMake</div>
      <div className={style.navButton}>Follows</div>
      <div className={style.navButton}>My Match</div>
      <div className={style.navButton}>Leaderboard</div>
      <div className={style.navButton}>Avatar</div>
    </h2>
  );
};

export default withRouter(Navbar);
