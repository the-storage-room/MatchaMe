import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';

import Navbar from '../globals/Navbar/index.jsx';
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
      this.socket = io(SOCKET_SERVER_URL, {
        query: {
          matchId: this.props.currentMatch.matchid
        }
      });
  
      this.setState({ socket: this.socket });
    }


  render() {
    return (
      <div>
        <Navbar />
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

const mapStateToProps = ({ currentMatch, accountData }) => {
  return {
    currentMatch: currentMatch,
    username: accountData.username,
    firstname: accountData.firstname,
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMatch);
