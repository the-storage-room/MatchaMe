import React from 'react';

import style from './LeaderboardPage.css';

const BoardItem = ({ powerranking, primaryPhoto, username }) => {
  return (
    <div
      className={style.smallImageBox}
      >
      {powerranking} - - - - - {username}
      <img 
        className={style.smallImage}
        src={primaryPhoto.url}
        />
    </div>
  );
};

export default BoardItem;