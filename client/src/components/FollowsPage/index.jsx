import React from 'react';
import { withRouter } from 'react-router-dom';

import style from './FollowsPage.css';
import Navbar from '../globals/Navbar/index.jsx';
// import StarredFollowsList from './StarredFollowsList'

<<<<<<< HEAD
const Follows = props => {
  return (
    <div>
      <Navbar />
      <div className={style.followsContainer}>
        <div className={style.starredContainer}>
          Render Starred matches Here
          {/* <StarredFollowsList /> */}
        </div>
        <div className={style.resultsContainer}>Render All Matches Here!</div>
=======
// const Follows = props => {
//   return (
//     <div>
//       <Navbar />
//       <div className={style.followsContainer}>
//         <div className={style.starredContainer}>
//           Render Starred matches Here
//           <StarredFollowsList />
//         </div>
//         <div className={style.resultsContainer}>Render All Matches Here!</div>
//       </div>
//     </div>
//   );
// };

class Follow extends React.Component => {
  render() {
    return (
      <div>
        <Navbar />
        <div className={style.followContainer}
>>>>>>> 1176fa07ad51471a090922b6246e8726139f8b98
      </div>
    )
  }
}

export default withRouter(Follows);
