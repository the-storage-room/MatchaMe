import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './MatchMaker.css';
import Comments from './Comments.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';
import actions from '../../../Redux/actions/matchmaker_page_actions';
import Footer from '../globals/Footer/index.jsx';
import turnBirthdayIntoAge from '../../utils/turnBirthdayIntoAge';

class MatchMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user1target: 0,
      user2target: 0
    };
  }

  decideOnMatch = (vote) => {
    let { matchid } = this.props;
    const voteObject = {
      matchId: matchid,
      starred: 0,
      decision: vote
    };
    this.props.postMatchmakerDecision(voteObject);
  };

  submitComment = comment => {
    let { matchid } = this.props;
    this.props.addCommentOnMatch(matchid, comment);
  };

  voteOnComment = (commentId, vote, index) => {
    this.props.voteOnCommentOnMatch(commentId, vote, index);
  };

  refreshComments = () => {
    let { matchid } = this.props;
    this.props.fetchCommentsOnMatch(matchid);
  };

  handlePhotoClick = user => {
    if (user === 1) {
      let newPhoto = this.state.user1target;
      newPhoto += 1;
      if (newPhoto === this.props.user1.photos.length) {
        newPhoto = 0;
      }
      this.setState({
        user1target: newPhoto
      });
    } else {
      let newPhoto = this.state.user2target;
      newPhoto += 1;
      if (newPhoto === this.props.user2.photos.length) { newPhoto = 0 }
      this.setState({
        user2target: newPhoto
      });
    }
  };

  
  render() {
    let user1Age =
      this.props.user1 && turnBirthdayIntoAge(this.props.user1.age);
    let user2Age =
      this.props.user2 && turnBirthdayIntoAge(this.props.user2.age);

    // let sortedComments;
    // if (this.props.comments) {
    //   sortedComments = this.props.comments.sort((a, b) => {
    //     return b.votes - a.votes
    //   })
    // }
    if (this.props.matchid) {
      return (
        <div>
          <div className={style.wrapper}>
            <div className={style.header}>
              <Navbar />
            </div>
            <div className={style.user1main}>
              <img
                className={style.mainimg}
                src={this.props.user1.photos[this.state.user1target]}
                onClick={() => this.handlePhotoClick(1)}
              />
            </div>
            <div className={style.user2main}>
              <img
                className={style.mainimg}
                src={this.props.user2.photos[this.state.user2target]}
                onClick={() => this.handlePhotoClick()}
              />
            </div>
            <div className={style.user1bio}>
              <div className={style.name}>
                {this.props.user1.firstname} {this.props.user1.lastname[0]}.
              </div>
              <div className={style.age}>{user1Age} years old</div>
              <div className={style.tags}>
                <div className={style.tag}>{this.props.user1.tags[0]}</div>
                <div className={style.tag}>{this.props.user1.tags[1]}</div>
                <div className={style.tag}>{this.props.user1.tags[2]}</div>
              </div>
              <div className={style.biography}>
                {`"${this.props.user1.bio}"`}
              </div>
            </div>
            <div className={style.user2bio}>
              <div className={style.name}>
                {this.props.user2.firstname} {this.props.user2.lastname[0]}.
              </div>
              <div className={style.age}>{user2Age} years old</div>
              <div className={style.tags}>
                <div className={style.tag}>{this.props.user2.tags[0]}</div>
                <div className={style.tag}>{this.props.user2.tags[1]}</div>
                <div className={style.tag}>{this.props.user2.tags[2]}</div>
              </div>
              <div className={style.biography}>
                {`"${this.props.user2.bio}"`}
              </div>
            </div>
            <div className={style.decision}>
              {`${this.props.user1.firstname} and ${
                this.props.user2.firstname
              } are a...`}
              <div className={style.decidebuttons}>
                <Button
                    text={`Good Match`}
                    onClick={()=>this.decideOnMatch('approved')}
                    />
                <Button
                    text={`Bad Match`}
                    onClick={()=>this.decideOnMatch('rejected')}
                    className={'red'}
                    />
              </div>
            </div>
            <div className={style.chatroom}>
              <Comments
                submitComment={this.submitComment}
                comments={this.props.comments}
                voteOnComment={this.voteOnComment}
              />
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <div className={style.nomatchwrapper}>
            <div className={style.header}>
              <Navbar />
            </div>
            <div className={style.noMatch}>
              <div className={style.noMatchText}>No Matches left to rate!</div>
              <Button text={'Refresh'} />
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      postMatchmakerDecision: actions.postMatchmakerDecision,
      addCommentOnMatch: actions.addCommentOnMatch,
      voteOnCommentOnMatch: actions.voteOnCommentOnMatch,
      fetchCommentsOnMatch: actions.fetchCommentsOnMatch
    },
    dispatch
  );
};

const mapStateToProps = ({ matches, comments }) => {
  return {
    matchid: matches[matches.length - 1] && matches[matches.length - 1].id,
    user1: matches[matches.length - 1] && matches[matches.length - 1].user1,
    user2: matches[matches.length - 1] && matches[matches.length - 1].user2,
    comments: comments.length && comments || matches[matches.length - 1] && matches[matches.length - 1].comments,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchMaker);
