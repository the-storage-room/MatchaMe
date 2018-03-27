import React, { Component } from 'react';

import style from './MatchMakerPage.css';
import Button from '../globals/Button/index.jsx';

class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteButtonState: 'neutral',
    };
  }


  voteOnComment = (id, vote, index, newState) => {
    this.props.voteOnComment(id, vote, index);
    this.setState({
      voteButtonState: newState
    })
  }
 
  render () {
    const { 
      comment, 
      id, 
      username, 
      votes, 
      className, 
      index } = this.props;
    const { 
      voteButtonState 
    } = this.state;
    return (
      <div className={style.commentItem}>
        <div className={style.commentBox}>
          {username}: {comment}
        </div>
        <div>
          {
            voteButtonState === 'neutral' &&
              <div>
              <Button
                className={"downvote"}
                text={"Downvote"}
                onClick={() => this.voteOnComment(id, -1, index, 'negative')}
                />
              <Button
                text={"Upvote"}
                className={"upvote"}
                onClick={() => this.voteOnComment(id, 1, index, 'positive')}
                />
              </div>
          }
          {
            voteButtonState === 'positive' &&
              <div>
              <Button
                className={"downvote"}
                text={"Downvote"}
                onClick={() => this.voteOnComment(id, -2, index, 'negative')}
                />
              <Button
                text={"Upvote"}
                className={"upvoteSelected"}
                onClick={() => this.voteOnComment(id, -1, index, 'neutral')}
                />
              </div>
          }
          {
            voteButtonState === 'negative' &&
              <div>
              <Button
                className={"downvoteSelected"}
                text={"Downvote"}
                onClick={() => this.voteOnComment(id, 1, index, 'neutral')}
                />
              <Button
                text={"Upvote"}
                className={"upvote"}
                onClick={() => this.voteOnComment(id, 2, index, 'positive')}
                />
              </div>
          }
          <div
            className={style[className]}
            >
            {votes}
            </div>
          </div>
      </div>
    );
  }
}

export default CommentItem;