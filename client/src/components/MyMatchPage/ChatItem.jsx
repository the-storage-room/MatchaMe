import React from 'react';

import style from './MyMatchPage.css';

const ChatItem = ({ chat }) => {
  return (
    <div className={style.chatItem}>
      {chat.firstname} - {chat.message}
    </div>
  );
}

export default ChatItem;