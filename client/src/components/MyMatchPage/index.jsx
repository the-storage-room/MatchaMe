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
    return (
      <div>
        <Navbar />
        { 
          this.props.currentMatch && this.props.currentMatch.id ?
          <MatchRoom 
            user1={this.props.currentMatch.user1_id}
            user2={this.props.currentMatch.user2_id}
            matchId={this.props.currentMatch.matchid}
            isSuccessful={this.props.currentMatch.issuccessful}
            acceptCurrentMatch={this.props.acceptCurrentMatch}
            rejectOrEndCurrentMatch={this.props.rejectOrEndCurrentMatch}
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
    rejectOrEndCurrentMatch: actions.rejectOrEndCurrentMatch,
    checkForNewMatch: actions.checkForNewMatch,
  }, dispatch);
}

const mapStateToProps = ({ currentMatch }) => {
  return {
    currentMatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMatch);
