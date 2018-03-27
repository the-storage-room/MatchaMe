import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './MatchMakerPage.css';
import Comments from './Comments.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';
import Profile from '../globals/Profile/index.jsx';
import actions from '../../../Redux/actions/matchmaker_page_actions';

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
    const { comments } = this.props.matchToRate;
    const sortedComments = comments.sort((a, b) => {
      return b.votes - a.votes 
    })


    return (
      <div>
        <Navbar />
        {
          this.props.matchToRate ?
          <div className={style.matchMakerContainer}>
            <div className={style.decisionContainer}>
              <Profile 
                url={this.props.matchToRate.user1_id.photos[0].url}
                firstname={this.props.matchToRate.user1_id.firstname}
                lastname={this.props.matchToRate.user1_id.lastname}
                age={this.props.matchToRate.user1_id.age}user2
                bio={this.props.matchToRate.user1_id.bio}
                />
              <div className={style.approvalContainer}>
                <Button 
                  text={'Yes'}
                  onClick={()=>this.decideOnMatch('approved')}
                  />
                <Button 
                  text={'No'} 
                  onClick={()=>this.decideOnMatch('rejected')}
                  />
              </div>
              <Profile 
                url={this.props.matchToRate.user2_id.photos[0].url}
                firstname={this.props.matchToRate.user2_id.firstname}
                lastname={this.props.matchToRate.user2_id.lastname}
                age={this.props.matchToRate.user2_id.age}
                bio={this.props.matchToRate.user2_id.bio}
                />
            </div>
            {
              this.state.showComments
            ?
              <Comments
                exitComments={() => this.exitComments()}
                submitComment={this.submitComment}
                refreshComments={this.refreshComments}
                comments={sortedComments}
                voteOnComment={this.voteOnComment}
                />
            :
              <div
                className={style.commentsContainer}
                onClick={() => this.setState({showComments: true})}
                >View Comments
              </div>
            }
          </div>
          : "Sorry! No more matches to vote on!"
        }
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
