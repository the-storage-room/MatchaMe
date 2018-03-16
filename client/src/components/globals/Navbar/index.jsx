import React from 'react';

import style from './Navbar.css';

const Navbar = () => {
  return (
    <h2 className={style.navContainer}>
      <div className={style.navButton}>Dash</div>
      <div className={style.navButton}>Rate</div>
      <div className={style.navButton}>MatchMake</div>
      <div className={style.navButton}>Follows</div>
      <div className={style.navButton}>My Match</div>
      <div className={style.navButton}>Leaderboard</div>
      <div className={style.navButton}>Avatar</div>
    </h2>
  );
};

export default Navbar;
