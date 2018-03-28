import React from 'react';

import style from './MyMatchPage.css';

const ChatItem = ({firstname, text}) => {
  return (
    <div className={style.chatItem}>
      {firstname}: {text}
    </div>
  );
}

export default ChatItem;