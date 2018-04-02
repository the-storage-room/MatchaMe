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
    let user1Age = turnBirthdayIntoAge(this.props.user1.age)
    let user2Age = turnBirthdayIntoAge(this.props.user2.age)

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
            <div className={style.name}>
              {this.props.user1.firstname} {this.props.user1.lastname[0]}.
            </div>
            <div className={style.age}>
            {user1Age} years old
            </div>
              <div className={style.tags}>
                <div className={style.tag}>
                {this.props.user1.tags[0]}
                </div>
                <div className={style.tag}>
                {this.props.user1.tags[1]}
                </div>
                <div className={style.tag}>
                {this.props.user1.tags[2]}
                </div>
              </div>
            <div className={style.biography}>
              {`"${this.props.user1.bio}"`}
            </div>
          </div>
          <div className={style.user2bio}>
            <div className={style.name}>
                {this.props.user2.firstname} {this.props.user2.lastname[0]}.
              </div>
              <div className={style.age}>
              {user2Age} years old
              </div>
                <div className={style.tags}>
                  <div className={style.tag}>
                  {this.props.user2.tags[0]}
                  </div>
                  <div className={style.tag}>
                  {this.props.user2.tags[1]}
                  </div>
                  <div className={style.tag}>
                  {this.props.user2.tags[2]}
                  </div>
                </div>
              <div className={style.biography}>
                {`"${this.props.user2.bio}"`}
              </div>
            </div>
          <div className={style.user1small}>
            <div className={style.smallerphotosgrid}>
              <div className={style.img1}>
                <img 
                  className={style.img1photo}
                  src={this.props.user1.photos[0]}
                  onClick={() => this.handlePhotoClick(0, 1)}
                  />
              </div>
              <div className={style.img2}>
                <img 
                  className={style.img2photo}
                  src={this.props.user1.photos[1]}
                  onClick={() => this.handlePhotoClick(1, 1)}
                  />
              </div>
              <div className={style.img3}>
                <img 
                  className={style.img3photo}
                src={this.props.user1.photos[2]}
                onClick={() => this.handlePhotoClick(2, 1)}
                />
              </div>
              <div className={style.img4}>
                <img 
                  className={style.img4photo}
                  src={this.props.user1.photos[3]}
                  onClick={() => this.handlePhotoClick(3, 1)}
                  />
              </div>
            </div>
          </div>
          <div className={style.user2small}>
            <div className={style.smallerphotosgrid}>
              <div className={style.img1}>
                <img 
                  className={style.img1photo}
                  src={this.props.user2.photos[0]}
                  onClick={() => this.handlePhotoClick(0)}
                  />
              </div>
              <div className={style.img2}>
                <img 
                  className={style.img2photo}
                  src={this.props.user2.photos[1]}
                  onClick={() => this.handlePhotoClick(1)}
                  />
              </div>
              <div className={style.img3}>
                <img 
                  className={style.img3photo}
                src={this.props.user2.photos[2]}
                onClick={() => this.handlePhotoClick(2)}
                />
              </div>
              <div className={style.img4}>
                <img 
                  className={style.img4photo}
                  src={this.props.user2.photos[3]}
                  onClick={() => this.handlePhotoClick(3)}
                  />
              </div>
            </div>
          </div>
          <div className={style.decision}>
            {`${this.props.user1.firstname} and ${this.props.user2.firstname} are a...`}
            <Button
                text={`Good Couple`}
                onClick={this.submitUserAttractiveness}
                />
            <Button
                text={`Bad Couple`}
                onClick={this.submitUserAttractiveness}
                className={'red'}
                />
          </div>
          <div className={style.chatroom}>
            <Comments
              submitComment={this.submitComment}
              comments={sortedComments}
              voteOnComment={this.voteOnComment}
              />
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
    user1: matches[matches.length - 1] && matches[matches.length - 1].user1,
    user2: matches[matches.length - 1] && matches[matches.length - 1].user2,
    comments: matches[matches.length - 1] && matches[matches.length - 1].comments,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchMaker);
