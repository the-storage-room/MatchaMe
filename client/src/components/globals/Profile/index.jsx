import React from 'react';

import style from './Profile.css';

const Profile = ({ url, firstname, lastname, age, tags, bio}) => {
  // let bioSpan = this.props.hasBio === true ? <span>Bio: Render Bio Here!</span> : '';
  return (
    <div className={style.profileContainer}>
      <div className={style.photoContainer}>
        <img
          src={url}
          height="300"
          width="300"
        />
      </div>
      <div className={style.userInfoContainer}>
        <span>Name: {firstname} {lastname && lastname[0]}</span>
        <span>Age: {age}</span>
        <span>Tags: {tags}</span>
        <span>Bio: {bio}</span>
      </div>
  </div>
  );
}



// const Profile = props => {
//   let bioSpan = props.hasBio === true ? <span>Bio: Render Bio Here!</span> : '';

//   return (
//     <div className={style.profileContainer}>
//       <div className={style.photoContainer}>
//         <img
//           src="http://quikandslow.com/wp-content/uploads/tom-from-myspace-lg.jpg"
//           height="300"
//           width="300"
//         />
//       </div>
//       <div className={style.userInfoContainer}>
//         <span>Name: MySpace Tom</span>
//         <span>Age: ???</span>
//         <span>Tags: Friendly</span>
//         {bioSpan}
//       </div>
//     </div>
//   );
// };

export default Profile;
