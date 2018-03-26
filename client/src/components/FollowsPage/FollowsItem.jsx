import React from 'react';

import style from './FollowsPage.css';

const FollowsItem = ({ decision, starred, onClick, user1, user2 }) => {
  return (
    <div className={style.followItem}>
      <div className={style.user1}>
        <img 
          className={style.avatar}
          src={user1.photos[0].url}
          />
        <h3 className={style.h3}>
        {user1.firstname} {user1.lastname[0]}
        </h3>
      </div>
      <div className={style.decision}>
        {decision}
      </div>
      <div className={style.user2}>
        <img 
          className={style.avatar}
          src={user2.photos[0].url}
          />
        <h3 className={style.h3}>
          {user2.firstname} {user2.lastname[0]}
        </h3>
      </div>
    </div>
  )
};

export default FollowsItem;
