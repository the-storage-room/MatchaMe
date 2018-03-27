import React, { Component } from 'react';

import style from './MatchMakerPage.css';
import Button from '../globals/Button/index.jsx';
import CommentItem from './CommentItem.jsx';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textvalue: '',
    };
  }

  submitComment = () => {
    const { textvalue } = this.state;
    this.props.submitComment(textvalue)
    this.setState({
      textvalue: '',
    })
  }

  generateClassNameFromVotes = (voteCount) => {
    if (voteCount > 0) {
      return "positive"
    } else if (voteCount < 0) {
      return "negative"
    } else {
      return "zero"
    }
  }

  handleTextareaChange = (e) => {
    this.setState({
      textvalue: e.target.value,
    })
  }

  render() {
    const { comments, exitComments, voteOnComment } = this.props;
    return (
      <div className={style.comments}>
        <textarea
          className={style.textbox}
          onChange={this.handleTextareaChange}
          />
        <div className={style.commentsFeed}>
          { comments.length ? 
            comments.map((comment, index) => {
              return (
                <CommentItem
                  key={comment.id}
                  comment={comment.comment}
                  username={comment.username}
                  voteOnComment={voteOnComment}
                  id={comment.id}
                  votes={comment.votes}
                  index={index}
                  className={this.generateClassNameFromVotes(comment.votes)}
                  />
                )
            })
            : "no comments yet..."
          }
        </div>
        <Button
          text={"Enter"}
          className={"tag"}
          onClick={() => this.submitComment()}
          />
        <Button
          className={"X"}
          text={"Close Comments"}
          onClick={() => exitComments()}
          />
      </div>
    );
  }
}

export default Comments;