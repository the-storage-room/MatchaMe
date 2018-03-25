import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './MyMatchPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';

class MyMatch extends Component {
  constructor() {
    super();
    this.state = {
      starred: 0,
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={style.myMatchPage}>
          <div>
            <Profile 
              url={this.props.mate.photos[0].url}
              firstname={this.props.mate.firstname}
              lastname={this.props.mate.lastname}
              age={this.props.mate.age}
              bio={this.props.mate.bio}
              />
            <Button text={'End Match'} />
          </div>
          <div className={style.chatroom}>Render Chat Room Here!</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

const mapStateToProps = ({ currentMatch }) => {
  return {
    mate: currentMatch.user2_id,
    matchId: currentMatch.matchid,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMatch);
