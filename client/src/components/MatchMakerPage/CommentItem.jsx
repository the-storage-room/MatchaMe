import React from 'react';

import style from './MatchMakerPage.css';
import Button from '../globals/Button/index.jsx';

const CommentItem = ({ voteOnComment, comment, id, username, votes, className}) => {
  return (
    <div className={style.commentItem}>
      {username}: {comment}
      <Button
        className={"downvote"}
        text={"downvote"}
        onClick={() => voteOnComment(-1)}
        />
      <Button
        text={"Upvote"}
        className={"upvote"}
        onClick={() => voteOnComment(1)}
        />
        <div
          className={style[className]}
          >
          {votes}
        </div>
    </div>
  );
}

export default CommentItem;