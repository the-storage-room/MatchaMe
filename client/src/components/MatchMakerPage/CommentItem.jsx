import React from 'react';

import style from './MatchMakerPage.css';
import Button from '../globals/Button/index.jsx';
import CommentItem from './CommentItem.jsx';

const CommentItem = ({ comments, exitComments }) => {
  return (
    <div className={style.comments}>
      <textarea className={style.textbox} />
      <div className={style.commentsFeed}>
        { comments.length ? 
          comments.map((comment) => {
            return (
              <CommentItem
                key={comment.id}
                />
              )
          })
          : "no comments yet..."
        }
      </div>
      <Button
        text={"Upvote"}
        className={"tag"}
        />
      <Button
        className={"X"}
        text={"Downvote"}
        onClick={() => exitComments()}
        />
    </div>
  );
}

export default CommentItem;