import React, { Component } from 'react';

import Button from '../globals/Button/index.jsx';
import style from './MatchMaker.css';

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
      className, 
      index } = this.props;
    const { 
      voteButtonState 
    } = this.state;
    return (
      <div className={style.commentItem}>
        <div className={style.voteDiv}>
          {
            voteButtonState === 'neutral' &&
              <div className={style.voteholder}>
              <Button
                text={""}
                className={"upvote"}
                onClick={() => this.voteOnComment(id, 1, index, 'positive')}
                />
              <Button
                className={"downvote"}
                text={""}
                onClick={() => this.voteOnComment(id, -1, index, 'negative')}
                />
              </div>
          }
          {
            voteButtonState === 'positive' &&
              <div className={style.voteholder}>
                <Button
                  text={""}
                  className={"upvoteSelected"}
                  onClick={() => this.voteOnComment(id, -1, index, 'neutral')}
                  />
                <Button
                  className={"downvote"}
                  text={""}
                  onClick={() => this.voteOnComment(id, -2, index, 'negative')}
                  />
              </div>
          }
          {
            voteButtonState === 'negative' &&
              <div className={style.voteholder}>
                <Button
                  text={""}
                  className={"upvote"}
                  onClick={() => this.voteOnComment(id, 2, index, 'positive')}
                  />
                <Button
                  className={"downvoteSelected"}
                  text={""}
                  onClick={() => this.voteOnComment(id, 1, index, 'neutral')}
                  />
              </div>
          }
        </div>
          <div className={style.commentBox}>
            {username}: {comment}
          </div>
      </div>
    );
  }
}

export default CommentItem;