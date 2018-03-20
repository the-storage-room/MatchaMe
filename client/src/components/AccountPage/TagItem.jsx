import React from 'react';
import style from './AccountPage.css';

const TagItem = ({ tag, selected, onClick }) => {

  return (
    <div
      className={selected ? style.selected : style.tag}
      onClick={() => onClick(tag)}
      > 
      {tag}
      </div>
  )
};

export default TagItem;
