import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import style from './Navbar.css';
import Logo from '../Logo/index.jsx';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <h2 className={style.headerContainer}>
        <Logo />
        <div className={style.navContainer}>
          <div
            className={style.navButton}
            onClick={() => this.props.history.push('/dashboard')}
          >
            Dash
          </div>
          <div
            className={style.navButton}
            onClick={() => this.props.history.push('/rate')}
          >
            Rate
          </div>
          <div
            className={style.navButton}
            onClick={() => this.props.history.push('/matchmaker')}
          >
            MatchMaker
          </div>
          <div
            className={style.navButton}
            onClick={() => this.props.history.push('/follows')}
          >
            Follows
          </div>
          <div
            className={style.navButton}
            onClick={() => this.props.history.push('/mymatch')}
          >
            My Match
          </div>
          <div
            className={style.navButton}
            onClick={() => this.props.history.push('/leaderboard')}
          >
            Leaderboard
          </div>
          <div
            className={style.navButton}
            onClick={() => this.props.history.push('/account/bio')}
          >
          <img
            src={this.props.photos[0].url}
            height="50"
            width="50"
            
          />
          </div>
        </div>
      </h2>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.userPhotos
  };
}

export default withRouter(connect(mapStateToProps)(Navbar));
