import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './LeaderboardPage.css';
import Navbar from '../globals/Navbar/index.jsx';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Navbar />
        <div className={style.leaderboardContainer}>
          <div />
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
}

const mapStateToProps = ({ Leaderboard }) => {
  return {
    Leaderboard,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
