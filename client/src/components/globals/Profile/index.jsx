import React from 'react';

import style from './Profile.css';

const Profile = ({ url, firstname, lastname, age, tags, bio}) => {
  return (
    <div className={style.profileContainer}>
      <div className={style.photoContainer}>
        <img
          src={url}
          height="270"
          width="270"
        />
      </div>
      <div className={style.userInfoContainer}>
        <span>Name: {firstname} {lastname && lastname[0]}.</span>
        <span>Age: {age}</span>
        <span>Tags: {
          tags
            .map((tag, i) => {
              return (i < tags.length - 1)
              ? tag + ' - '
              : tag
            })
          }
        </span>
        <span>Bio: {bio}</span>
      </div>
  </div>
  );
}

export default Profile;
