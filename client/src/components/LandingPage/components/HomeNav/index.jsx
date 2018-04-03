import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './HomeNav.css';

class HomeNav extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className={style.navbar}>
        <ul className={style.ul}>
          <li>
            About
          </li>
          <li>
            Experience
          </li>
          <li>
            Team
          </li>
          <li>
            Match
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(HomeNav);