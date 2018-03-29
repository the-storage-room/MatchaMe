import React from 'react';

import style from './MyMatchPage.css';

const ChatItem = ({ chat, username, theirPhoto, yourPhoto }) => {
  return (
    <div className={style.chatItem}>
      {
        chat.username === username
        ?
        <div>
          <img 
            className={style.miniAvatar}
            src={yourPhoto}
            />
          <div 
            className={style.chatMessage + ' ' + style.yourMessage}
            >
          You: {chat.message}
          </div>
        </div>
        :
        <div>
          <img 
            className={style.miniAvatar}
            src={theirPhoto}
            />
          <div
            className={style.chatMessage + ' ' + style.theirMessage}
            >
          {chat.firstname}: {chat.message}
          </div>
        </div>
      }
    </div>
  );
}

export default ChatItem;