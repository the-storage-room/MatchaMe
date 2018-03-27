import React from 'react';

import style from './MatchMakerPage.css';
import Button from '../globals/Button/index.jsx';
import CommentItem from './CommentItem.jsx';

const Comments = ({ comments, matchId }) => {
  return (
    <div className={style.comments}>
      <div className={style.textbox}>
      </div>
      <div>
        {
          comments.map((comment) => {
            return <CommentItem />
          })
        }
      </div>
    </div>
  );
}

export default Comments;