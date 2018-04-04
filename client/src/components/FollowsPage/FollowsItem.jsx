import React from 'react';

import style from './FollowsPage.css';
import Button from '../globals/Button/index.jsx';

const FollowsItem = ({
  index,
  matchId,
  decision,
  starred,
  onClick,
  user1,
  user2,
  activevoting,
  firstAccept,
  secondAccept,
  isSuccessful,
  firstRejection,
  active,
}) => {
  const statusFinder = () => {
    if (!activevoting && firstAccept === undefined) {
      return ' Failed at Matchmaker Stage';
    } else if (activevoting && firstAccept === undefined) {
      return ' Pending at Matchmaker Stage';
    } else if (firstAccept === null && active) {
      return ' Waiting for Matchees to Accept';
    } else if (firstAccept === null && !active) {
      const rejecter = user1.id === firstRejection ? user1.firstname : user2.firstname;
      return ` Rejected by ${rejecter}`;
    } else if (firstAccept && secondAccept) {
      if (active) {
        return ' Accepted by both and active! :)';
      } else {
        return ' Accept by both but... sadly... inactive...';
      }
    } else if (firstAccept && firstRejection) {
      const rejecter2 = user1.id === firstRejection ? user1.firstname : user2.firstname;
      const accepter = user1.id === firstAccept ? user1.firstname : user2.firstname;
      return ` Accepted by ${accepter}... and later rejected by ${rejecter2}`;
    }
  };
  return (
    < div className={style.followItem} >
      <div className={style.user1}>
        <img className={style.avatar} src={user1.photos[0].url} />
        <h3 className={style.h3}>
          {user1.firstname} {user1.lastname[0]}
        </h3>
      </div>
      <div className={style.decision}>
        Status:
        {statusFinder()}
      </div>
      <div className={style.user2}>
        <img className={style.avatar} src={user2.photos[0].url} />
        <h3 className={style.h3}>
          {user2.firstname} {user2.lastname[0]}
        </h3>
      </div>
      <Button onClick={() => onClick(matchId, starred, index)} className={starred ? 'yellowStar' : 'greyStar'} />
    </div >
  );
};

export default FollowsItem;
