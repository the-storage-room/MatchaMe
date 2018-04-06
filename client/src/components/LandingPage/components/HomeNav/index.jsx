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
          <li className={style.li} onClick={() => this.props.history.push('/about')}>
            About
          </li>
          <li className={style.li} onClick={() => this.props.history.push('/experience')}>
            Experience
          </li>
          <li className={style.li} onClick={() => this.props.history.push('/match')}>
            Match
          </li>
          <li className={style.li} onClick={() => this.props.history.push('/bio')}>
            Team
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(HomeNav);