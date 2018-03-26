import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './MyMatchPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Profile from '../globals/Profile/index.jsx';
import Button from '../globals/Button/index.jsx';
import MatchRoom from './MatchRoom.jsx';
import NoMatch from './NoMatch.jsx';

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
          this.props.currentMatch ?
          <MatchRoom 
            currentMatch={this.props.currentMatch}
            /> :
          <NoMatch />
        }
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
    currentMatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMatch);
