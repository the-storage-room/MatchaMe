import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './MatchMakerPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';
import Profile from '../globals/Profile/index.jsx';
import actions from '../../../Redux/actions/matchmaker_page_actions';

class MatchMaker extends Component {
  constructor() {
    super();
    this.state = {
      starred: 0,
    };
  }

  decideOnMatch = (vote) => {
    console.log(this.props)
    const voteObject = {
      matchId: this.props.matchId,
      starred: 0,
      decision: vote,
    }
    this.props.postMatchmakerDecision(voteObject)
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <Navbar />
        <div className={style.matchMakerContainer}>
          <div className={style.decisionContainer}>
            <Profile 
              url={this.props.user1.photos[0].url}
              firstname={this.props.user1.firstname}
              lastname={this.props.user1.lastname}
              age={this.props.user1.age}user2
              bio={this.props.user1.bio}
              />
            <div className={style.approvalContainer}>
              <Button 
                text={'Yes'}
                onClick={()=>this.decideOnMatch(1)}
                />
              <Button 
                text={'No'} 
                onClick={()=>this.decideOnMatch(0)}
                />
            </div>
            <Profile 
              url={this.props.user2.photos[0].url}
              firstname={this.props.user2.firstname}
              lastname={this.props.user2.lastname}
              age={this.props.user2.age}
              bio={this.props.user2.bio}
              />
          </div>
          <div className={style.commentsContainer}>View Comments</div>
        </div>
      </div>
    );
    
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    postMatchmakerDecision: actions.postMatchmakerDecision,
  }, dispatch);
}

const mapStateToProps = ({ matches }) => {
  return {
    user1: matches[matches.length - 1].user1_id,
    user2: matches[matches.length - 1].user1_id,
    matchId: matches[matches.length - 1].id,
    comments: matches[matches.length - 1].comments,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchMaker);
