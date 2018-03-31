import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './Rating.css';
import Navbar from '../globals/Navbar/index.jsx';
import Button from '../globals/Button/index.jsx';
import Profile from '../globals/Profile/index.jsx';
import actions from '../../../Redux/actions/ratings_page_actions';
import Footer from '../globals/Footer/index.jsx';

class Rate extends Component {
  constructor() {
    super();
    this.state = {
      rating: null,
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
  // <Profile 
  //   url={this.props.userToRate.photos[0]}
  //   firstname={this.props.userToRate.firstname}
  //   lastname={this.props.userToRate.lastname}
  //   age={this.props.userToRate.age}
  //   tags={this.props.userToRate.tags}
  //   bio={this.props.userToRate.bio}
  // />

  render() {
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
          <div className={style.smallerphotos}>
            <img 
              className={style.img2}
              src={this.props.userToRate.photos[2]}
              />
            <img 
              className={style.img3}
              src={this.props.userToRate.photos[3]}
              />
            <img 
              className={style.img4}
              src={this.props.userToRate.photos[4]}
              />
            <img 
              className={style.img5}
              src={this.props.userToRate.photos[1]}
              />
          </div>
          <div className={style.bio}>
            Bio
          </div>
          <div className={style.slider}>
            slider
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
