import React from 'react';

import style from './MatchMakerPage.css';
import Button from '../globals/Button/index.jsx';

const CommentItem = ({ voteOnComment, comment, id, username, votes, className, index}) => {
  return (
    <div className={style.commentItem}>
      {username}: {comment}
      <Button
        className={"downvote"}
        text={"Downvote"}
        onClick={() => voteOnComment(id, -1, index)}
        />
      <Button
        text={"Upvote"}
        className={"upvote"}
        onClick={() => voteOnComment(id, 1, index)}
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