import React from 'react';
import moment from 'moment';

import style from './MyMatch.css';

const ChatItem = ({ chat, username, theirPhoto, yourPhoto }) => {

  const timeAgo = () => {
    return moment(chat.time).fromNow();
  }

  return (
    <div className={style.chatItem}>
      {
        chat.username === username
        ?
        <div>
          <img 
            className={style.yourAvatar}
            src={yourPhoto}
            />
          <div 
            className={style.chatMessage + ' ' + style.yourMessage}
            >
          {chat.message}
          </div>
          <div className={style.yourTime}>
            {timeAgo()}
          </div>
        </div>
        :
        <div>
          <img 
            className={style.theirAvatar}
            src={theirPhoto}
            />
          <div
            className={style.chatMessage + ' ' + style.theirMessage}
            >
          {chat.firstname}: {chat.message}
          </div>
            <div className={style.theirTime}>
              {timeAgo()}
            </div>
        </div>
      }
    </div>
  );
}

export default ChatItem;