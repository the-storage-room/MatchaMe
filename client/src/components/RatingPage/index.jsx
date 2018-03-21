import React from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'material-ui/Slider';
import axios from 'axios';

import style from './RatingPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';
import Profile from '../globals/Profile/index.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Rate extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: null
    };
  }

  onSliderChange = (e, val) => {
    this.state.attractiveness = val;
  }

  submitUserAttractiveness = async () => {
    try {
      const body = {
        id: 1,
        attractiveness: this.state.rating
      };
      await axios.put(`http://localhost:5000/api/users/updateUserRating`, body);
    } catch (err) {
      throw new Error(err);
    }
  }

  myfunc = () => {
    console.log(localStorage);
  }

  render() {
    return (
      <div>
      <Navbar />
      <div className={style.ratingContainer}>
        <div className={style.profileContainer}>
          <Profile />
          <div className={style.ratingScaleContainer}>
            <Slider 
              max={10}
              defaultValue={5}
              step={1}
              onChange={(e, val) => this.setState({ rating: val })}
            />
            hotness: {this.state.rating}
          </div>
        </div>
        <Button onClick={() => this.submitUserAttractiveness()} className={style.nextBtn} text={'Next Button'} />
      </div>
    </div>
    )
  }
}

// const Rate = props => {
  
//   return (
//     <div>
//       <Navbar />
//       <div className={style.ratingContainer}>
//         <div className={style.profileContainer}>
//           <Profile />
//           <div className={style.ratingScaleContainer}>
//             <Slider 
//               max={10}
//               defaultValue={5}
              
//             />
//           </div>
//         </div>
//         <Button className={style.nextBtn} text={'Next Button'} />
//       </div>
//     </div>
//   );
// };

export default withRouter(Rate);
