import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LeaderboardItem from './LeaderboardItem.jsx';
import style from './LeaderboardPage.css';
import Navbar from '../globals/Navbar/index.jsx';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={style.leaderboardContainer}>
          {
            this.props.leaderboard.map((boarditem, index) => {
              return (
                <LeaderboardItem
                  key={index}
                  username={boarditem.username}
                  powerranking={boarditem.powerranking}
                  primaryPhoto={boarditem.primaryPhoto}
                  index={index}
                  />
              )
            })
          }
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

const mapStateToProps = ({ leaderboard }) => {
  return {
    leaderboard,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
