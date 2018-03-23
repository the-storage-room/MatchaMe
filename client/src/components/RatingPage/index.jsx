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
      rating: null,
      users: []
    };
  }

  componentDidMount = async () => {
    // use .env for http request
    try {
      const users = await axios.get(`http://localhost:5000/api/users/fetchMultipleUsers/6`);
      users.data.forEach(user => this.setState({ users: [...this.state.users, user ]}));
    } catch (err) {
      console.log(err);
    }
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
    console.log(this.state.users);
    
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
        <Button onClick={() => this.myfunc()} text='test' />
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
