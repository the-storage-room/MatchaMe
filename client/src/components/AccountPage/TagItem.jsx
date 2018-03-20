import React from 'react';
import style from './AccountPage.css';

const TagItem = ({ tag, selected }) => {

  return (
    <div className={selected ? style.selected : style.tag}> {tag} </div>
  )
};

export default TagItem;
