import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';

import MatchRoom from './MatchRoom.jsx';
import NoMatch from './NoMatch.jsx';
import WarningBox from './WarningBox.jsx'
import actions from '../../../Redux/actions/current_match_actions';

const { SOCKET_SERVER_URL } = process.env;

class MyMatch extends Component {
  constructor() {
    super();
    this.state = {
      showWarningBox: false,
      socket: null,
    };
  }

  toggleWarningBox = () => {
    this.setState({
      showWarningBox: !this.state.showWarningBox
    });
  }

  endMatch = () => {
    this.toggleWarningBox();
    this.props.rejectOrEndCurrentMatch();
  }

  componentWillMount= () => {
    if (this.props.currentMatch) {
      this.socket = io(SOCKET_SERVER_URL, {
        query: {
          matchId: this.props.currentMatch.matchid
        }
      });
      this.setState({ socket: this.socket });
    }
  }


  render() {
    return (
      <div>
        <WarningBox
          show={this.state.showWarningBox}
          onClose={this.toggleWarningBox}
          endMatch={this.endMatch}>
        </WarningBox>
        { 
          this.props.currentMatch && this.props.currentMatch.id ?
          <MatchRoom 
            user1={this.props.currentMatch.user1_id}
            user2={this.props.currentMatch.user2_id}
            matchId={this.props.currentMatch.matchid}
            isSuccessful={this.props.currentMatch.issuccessful}
            acceptCurrentMatch={this.props.acceptCurrentMatch}
            firstAccept={this.props.currentMatch.firstaccept}
            toggleWarningBox={this.toggleWarningBox}
            socket={this.state.socket}
            username={this.props.username}
            firstname={this.props.firstname}
            yourPhoto={this.props.yourPhoto}
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

const mapStateToProps = ({ currentMatch, accountData, userPhotos }) => {
  return {
    currentMatch: currentMatch,
    username: accountData.username,
    firstname: accountData.firstname,
    yourPhoto: userPhotos[0].url,
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMatch);
