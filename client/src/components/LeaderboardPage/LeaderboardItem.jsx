import React from 'react';

import style from './LeaderboardPage.css';

const LeaderboardItem = ({ powerranking, primaryPhoto, username, index }) => {
  return (
    <div className={style.boardwrapper}>
      <div className={style.rank}>{index + 1}</div>
      <img className={style.avatar} src={primaryPhoto.url} />
      <div className={style.username}>{username}</div>

      <div className={style.pRC}>
        <div className={style.powerrankingTitle}>TOTAL POINTS: </div>
        <div className={style.powerranking}>{powerranking}</div>
      </div>
    </div>
  );
};

export default LeaderboardItem;
