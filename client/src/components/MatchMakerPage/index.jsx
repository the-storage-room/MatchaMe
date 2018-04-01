import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './MatchMaker.css';
import Comments from './Comments.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';
import Profile from '../globals/Profile/index.jsx';
import actions from '../../../Redux/actions/matchmaker_page_actions';
import Footer from '../globals/Footer/index.jsx';
import turnBirthdayIntoAge from '../../utils/turnBirthdayIntoAge';

class MatchMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starred: 0,
      showComments: false,
    };
  }

  decideOnMatch = (vote) => {
    const voteObject = {
      matchId: this.props.matchToRate.id,
      starred: 0,
      decision: vote,
    }
    this.props.postMatchmakerDecision(voteObject)
  }

  exitComments = () => {
    const { showComments } = this.state;
    !!showComments && this.setState({
      showComments: false
    })
  }

  submitComment = (comment) => {
    let { id } = this.props.matchToRate;
    this.props.addCommentOnMatch(id, comment)
  }

  voteOnComment = (commentId, vote, index) => {
    this.props.voteOnCommentOnMatch(commentId, vote, index)
  }

  refreshComments = () => {
    let { id } = this.props.matchToRate;
    this.props.fetchCommentsOnMatch(id)
  }

  
  render() {
    let sortedComments;
    if (this.props.matchToRate) {
      const { comments } = this.props.matchToRate;
      sortedComments = comments.sort((a, b) => {
        return b.votes - a.votes 
      })
    }
    return (
      <div>
        <Navbar />
          <div className={style.matchMakerContainer}>
            <div className={style.decisionContainer}>
            </div>
          <Comments
            exitComments={() => this.exitComments()}
            submitComment={this.submitComment}
            refreshComments={this.refreshComments}
            comments={sortedComments}
            voteOnComment={this.voteOnComment}
            />
        <Footer/>
      </div>
    </div>
    );
    
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    postMatchmakerDecision: actions.postMatchmakerDecision,
    addCommentOnMatch: actions.addCommentOnMatch,
    voteOnCommentOnMatch: actions.voteOnCommentOnMatch,
    fetchCommentsOnMatch: actions.fetchCommentsOnMatch
  }, dispatch);
}

const mapStateToProps = ({ matches }) => {
  return {
    matchToRate: matches[matches.length - 1],
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchMaker);
