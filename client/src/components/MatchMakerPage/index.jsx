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
      user1target: 0,
      user2target: 0,
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

  handlePhotoClick = (photo, user) => {
    if (user === 1) {
      this.setState({
        user1target: photo
      })
    } else {
      this.setState({
        user2target: photo
      })
    }
  }

  
  render() {
    let sortedComments;
    if (this.props.comments) {
      sortedComments = this.props.comments.sort((a, b) => {
        return b.votes - a.votes 
      })
    }

    console.log(this.props)
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
              />
          </div>
          <div className={style.user2main}>
            <img 
              className={style.mainimg}
              src={this.props.user2.photos[this.state.user2target]}
              />
          </div>
          <div className={style.user1bio}>
            bio1
          </div>
          <div className={style.user2bio}>
            bio2
          </div>
          <div className={style.user1small}>
            <div className={style.smallerphotosgrid}>
              <img 
                className={style.img1}
                src={this.props.user1.photos[0]}
                onClick={() => this.handlePhotoClick(0, 1)}
                />
              <img 
                className={style.img2}
                src={this.props.user1.photos[1]}
                onClick={() => this.handlePhotoClick(1, 1)}
                />
              <img 
                className={style.img3}
                src={this.props.user1.photos[2]}
                onClick={() => this.handlePhotoClick(2, 1)}
                />
              <img 
                className={style.img4}
                src={this.props.user1.photos[3]}
                onClick={() => this.handlePhotoClick(3, 1)}
                />
            </div>
          </div>
          <div className={style.user2small}>
          <div className={style.smallerphotosgrid}>
              <img 
                className={style.img1}
                src={this.props.user2.photos[0]}
                onClick={() => this.handlePhotoClick(0)}
                />
              <img 
                className={style.img2}
                src={this.props.user2.photos[1]}
                onClick={() => this.handlePhotoClick(1)}
                />
              <img 
                className={style.img3}
                src={this.props.user2.photos[2]}
                onClick={() => this.handlePhotoClick(2)}
                />
              <img 
                className={style.img4}
                src={this.props.user2.photos[3]}
                onClick={() => this.handlePhotoClick(3)}
                />
            </div>
          </div>
          <div className={style.decision}>
            decision
          </div>
          <div className={style.chatroom}>
            Chatroom
          </div>
        </div>
        <Footer/>
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
    matchid: matches[matches.length - 1] && matches[matches.length - 1].id,
    user1: matches[matches.length - 1] && matches[matches.length - 1].user1_id,
    user2: matches[matches.length - 1] && matches[matches.length - 1].user2_id,
    comments: matches[matches.length - 1] && matches[matches.length - 1].comments,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchMaker);
