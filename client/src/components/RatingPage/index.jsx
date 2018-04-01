import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './Rating.css';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';
import actions from '../../../Redux/actions/ratings_page_actions';
import Footer from '../globals/Footer/index.jsx';
import turnBirthdayIntoAge from '../../utils/turnBirthdayIntoAge';

class Rate extends Component {
  constructor() {
    super();
    this.state = {
      rating: 5,
      users: [],
    };
  }

  submitUserAttractiveness = () => {
    if (this.state.rating === null) {
      alert('please rate this person')
    } else {
      const body = {
        ratee: this.props.userToRate.id,
        attractiveness: this.state.rating,
        rater: this.props.id,
      };
      this.props.submitRating(body);
      this.setState({
        rating: null
      })
    }
  }

  handleSliderChange = (e) => {
    this.setState({
      rating: e.target.value
    })
  }


  // <Profile 
  //   url={this.props.userToRate.photos[0]}
  //   firstname={this.props.userToRate.firstname}
  //   lastname={this.props.userToRate.lastname}
  //   age={this.props.userToRate.age}
  //   tags={this.props.userToRate.tags}
  //   bio={this.props.userToRate.bio}
  // />

  render() {
    let realAge = turnBirthdayIntoAge(this.props.userToRate.age)
    return (
      <div>
        <div className={style.wrapper}>
          <div className={style.header}>
            <Navbar />
          </div>
          <div className={style.mainphoto}>
            <img 
              className={style.mainimg}
              src={this.props.userToRate.photos[0]}
              />
          </div>
          <div>
          </div>
          <div className={style.smallerphotos}>
            <div className={style.smallerphotosgrid}>
              <img 
                className={style.img1}
                src={this.props.userToRate.photos[2]}
                />
              <img 
                className={style.img2}
                src={this.props.userToRate.photos[3]}
                />
              <img 
                className={style.img3}
                src={this.props.userToRate.photos[4]}
                />
              <img 
                className={style.img4}
                src={this.props.userToRate.photos[1]}
                />
            </div>
          </div>
          <div className={style.bio}>
            <div className={style.name}>
            {this.props.userToRate.firstname} {this.props.userToRate.lastname[0]}.
            </div>
            <div className={style.age}>
            {realAge} years old
            </div>
              <div className={style.tags}>
                <div className={style.tag}>
                {this.props.userToRate.tags[0]}
                </div>
                <div className={style.tag}>
                {this.props.userToRate.tags[1]}
                </div>
                <div className={style.tag}>
                {this.props.userToRate.tags[2]}
                </div>
              </div>
            <div className={style.biography}>
              {`"${this.props.userToRate.bio}"`}
            </div>
          </div>
          <div className={style.slider}>
            <input 
              type="range"
              min="0" 
              max="10"
              defaultValue="5"
              className={style.sliderinput}
              onChange={this.handleSliderChange}
              />
          </div>
          <div className={style.buttons}>
            <div className={style.rating}>
              {this.state.rating}
            </div>
            <div className={style.next}>
              <Button
                text={"See Next Person!"}
                />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchMoreUsersToRate: actions.fetchMoreUsersToRate,
    submitRating: actions.submitRating,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    userToRate: state.ratings[state.ratings.length - 1],
    id: state.accountData.id
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rate);
