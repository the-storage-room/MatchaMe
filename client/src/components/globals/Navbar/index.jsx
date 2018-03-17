import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './Navbar.css';
import Logo from '../Logo/index.jsx';

const Navbar = props => {
  return (
    <h2 className={style.headerContainer}>
      <Logo />
      <div className={style.navContainer}>
        <div
          className={style.navButton}
          onClick={() => props.history.push('/dashboard')}
        >
          Dash
        </div>
        <div
          className={style.navButton}
          onClick={() => props.history.push('/rate')}
        >
          Rate
        </div>
        <div
          className={style.navButton}
          onClick={() => props.history.push('/matchmake')}
        >
          MatchMake
        </div>
        <div
          className={style.navButton}
          onClick={() => props.history.push('/follows')}
        >
          Follows
        </div>
        <div
          className={style.navButton}
          onClick={() => props.history.push('/mymatch')}
        >
          My Match
        </div>
        <div
          className={style.navButton}
          onClick={() => props.history.push('/leaderboard')}
        >
          Leaderboard
        </div>
        <div
          className={style.navButton}
          onClick={() => props.history.push('/account')}
        >
          *Avatar*
        </div>
      </div>
    </h2>
  );
};

export default withRouter(Navbar);
