import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import style from './Nav.css';
// import Logo from '../Logo/index.jsx';
import Avatar from '../Avatar/index.jsx';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showDropdown: false,
    };
  }

  logoutClick = async () => {
    const { REST_SERVER_URL } = process.env;
    try {
      await axios.get(`${REST_SERVER_URL}/api/auth/logout`)
      localStorage.clear();
      await this.props.history.push('/')
    } catch (err) {
      console.log('error on logout', err)
    }
  }

  render() {
    return (
      <div>
        <div className={style.wrapper}>
          <div className={style.side} />
          <div className={style.column1} onClick={() => this.props.history.push('/rate')}>
            Rate
          </div>
          <div className={style.column2} onClick={() => this.props.history.push('/matchmaker')}>
            MatchMaker
          </div>
          <div className={style.logo} onClick={() => this.props.history.push('/home')}>
            MatchaMe
          </div>
          <div className={style.column3} onClick={() => this.props.history.push('/mymatch')}>
            My Match
          </div>
          <div className={style.column4} onClick={() => this.props.history.push('/dashboard')}>
            Dashboard
          </div>
          <div className={style.avatar} onMouseOver={() => {
            this.setState({ showDropdown: !this.state.showDropdown });
          }}>
            <Avatar />
          </div>
        </div>
        {this.state.showDropdown ? (
          <div className={style['dropdown-container']}>
            <ul className={style['dropdown-menu']}>
              <li
                className={style['dropdown-menu-item']}
                onClick={() => this.props.history.push('/account/bio')}
              >
                Setting
              </li>
              <li
                className={style['dropdown-menu-item']}
                onClick={this.logoutClick}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.userPhotos,
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
