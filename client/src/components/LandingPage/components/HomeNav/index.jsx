import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './HomeNav.css';

class HomeNav extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className={style.navbar}>
        <ul className={style.ul}>
          <li onClick={() => this.props.history.push('/about')}>
            About
          </li>
          <li>
            Experience
          </li>
          <li onClick={() => this.props.history.push('/bio')}>
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