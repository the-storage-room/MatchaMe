import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
          <div
            className={style.avatar}
            onClick={() => {
              this.setState({ showDropdown: !this.state.showDropdown });
            }}
          >
            <Avatar />
          </div>
        </div>
        {this.state.showDropdown ? (
          <div className={style['dropdown-container']}>
            <ul className={style['dropdown-menu']}>
              <li
                className={style['dropdown-menu-item']}
                onClick={() => this.props.history.push('/logout')}
              >
                Logout
              </li>
              <li
                className={style['dropdown-menu-item']}
                onClick={() => this.props.history.push('/account/bio')}
              >
                Setting
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
