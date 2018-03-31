import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import style from './Nav.css';
// import Logo from '../Logo/index.jsx';
import Avatar from '../Avatar/index.jsx'

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (

      <div className={style.wrapper}>
          <div 
            className={style.side}
            >
          </div>
          <div
            className={style.column1}
            onClick={() => this.props.history.push('/rate')}
            >
            Rate
            </div>
          <div
            className={style.column2}
            onClick={() => this.props.history.push('/matchmaker')}
            >
            MatchMaker
            </div>
          <div
            className={style.logo}
            onClick={() => this.props.history.push('/home')}
            >
            MatchaMe
            </div>
          <div
            className={style.column3}
            onClick={() => this.props.history.push('/mymatch')}
            >
            My Match
            </div>
          <div
            className={style.column4}
            onClick={() => this.props.history.push('/leaderboard')}
            >
            Dashboard
            </div>
          <div
            className={style.avatar}
            >
          <Avatar/>
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.userPhotos
  };
}

export default withRouter(connect(mapStateToProps)(Navbar));
