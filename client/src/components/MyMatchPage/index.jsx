import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './MyMatchPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';
import MatchRoom from './MatchRoom.jsx';
import NoMatch from './NoMatch.jsx';
import actions from '../../../Redux/actions/current_match_actions';

class MyMatch extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Navbar />
        { 
          this.props.currentMatch && this.props.currentMatch.id ?
          <MatchRoom 
            user1={this.props.currentMatch.user1_id}
            user2={this.props.currentMatch.user2_id}
            matchId={this.props.currentMatch.matchid}
            isSuccessful={this.props.currentMatch.isSuccessful}
            acceptCurrentMatch={this.props.acceptCurrentMatch}
            rejectCurrentMatch={this.props.rejectCurrentMatch}
            endCurrentMatch={this.props.endCurrentMatch}
            firstAccept={this.props.currentMatch.firstaccept}
            /> :
          <NoMatch
            checkForNewMatch={this.props.checkForNewMatch}
            />
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    acceptCurrentMatch: actions.acceptCurrentMatch,
    rejectCurrentMatch: actions.rejectCurrentMatch,
    endCurrentMatch: actions.endCurrentMatch,
    checkForNewMatch: actions.checkForNewMatch,
  }, dispatch);
}

const mapStateToProps = ({ currentMatch }) => {
  return {
    currentMatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMatch);
