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
      rating: '',
      users: [],
      target: 0,
      img1: 1,
      img2: 2,
      img3: 3,
      img4: 4,
      img5: 5,
      trigger: false,
      selected: false,
    };
  }

  componentWillReceiveProps = () => {
    if (this.state.trigger) {
      this.setState({
        rating: `${this.props.onDeck} is a...`,
        trigger: false,
      })
    }
  }

  componentDidMount = () => {
    this.setState({
      rating: `${this.props.userToRate.firstname} is a...`
    })
  }

  handlePhotoClick = (imgState) => {
      let tempTarget = this.state.target;
      const newState = {target: this.state[imgState]};
      newState[imgState] = tempTarget;
      this.setState(newState)
  }



  submitUserAttractiveness = () => {
    if (!this.state.selected) {
      alert('please rate this person')
    } else {
      const body = {
        ratee: this.props.userToRate.id,
        attractiveness: this.state.rating,
        rater: this.props.id,
      };
      this.props.submitRating(body);
    }
    this.setState({
      trigger: true,
      selected: false,
    })
  }

  handleSliderChange = (e) => {
    this.setState({
      rating: ` ${e.target.value}`,
      selected: true,
    })
  }

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
              src={this.props.userToRate.photos[this.state.target]}
              />
          </div>
          <div>
          </div>
          <div className={style.smallerphotos}>
            <div className={style.smallerphotosgrid}>
              <img 
                className={style.img1}
                src={this.props.userToRate.photos[this.state.img1]}
                onClick={() => this.handlePhotoClick('img1')}
                />
              <img 
                className={style.img2}
                src={this.props.userToRate.photos[this.state.img2]}
                onClick={() => this.handlePhotoClick('img2')}
                />
              <img 
                className={style.img3}
                src={this.props.userToRate.photos[this.state.img3]}
                onClick={() => this.handlePhotoClick('img3')}
                />
              <img 
                className={style.img4}
                src={this.props.userToRate.photos[this.state.img4]}
                onClick={() => this.handlePhotoClick('img4')}
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
            <div className={style.rating}>
            {this.state.rating}
            </div>
          </div>
          <div className={style.buttons}>
            <div className={style.next}>
              <Button
                text={`Rate ${this.props.userToRate.firstname} to See Next Person!`}
                onClick={this.submitUserAttractiveness}
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
    onDeck: state.ratings[state.ratings.length - 2] && state.ratings[state.ratings.length - 2].firstname,
    id: state.accountData.id
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rate);
