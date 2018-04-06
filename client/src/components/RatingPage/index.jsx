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
      trigger: false,
      selected: false
    };
  }

  componentWillReceiveProps = nextProps => {
    nextProps.userToRate &&
      this.setState({
        rating: `${nextProps.userToRate.firstname} is a...`,
        trigger: false
      });
  };

  componentDidMount = () => {
    this.props.userToRate &&
      this.setState({
        rating: `${this.props.userToRate.firstname} is a...`
      });
  };

  handlePhotoClick = photo => {
    if (photo === 'main') {
      let newPhoto = this.state.target;
      newPhoto += 1;
      if (newPhoto === this.props.userToRate.photos.length) {
        newPhoto = 0;
      }
      this.setState({
        target: newPhoto
      });
    } else {
      this.setState({
        target: photo
      });
    }
  }

  submitUserAttractiveness = () => {
    if (!this.state.selected) {
      alert(`Please rate ${this.props.userToRate.firstname}!`);
    } else {
      const body = {
        ratee: this.props.userToRate.id,
        attractiveness: this.state.rating,
        rater: this.props.id
      };
      this.props.submitRating(body);
    }
    this.setState({
      trigger: true,
      selected: false,
      target: 0,
    });
  };

  handleSliderChange = e => {
    this.setState({
      rating: ` ${e.target.value}`,
      selected: true
    });
  };

  render() {
    if (this.props.userToRate) {
      let realAge = turnBirthdayIntoAge(this.props.userToRate.age);
      return (
        <div>
          <div className={style.wrapper}>
            <div className={style.header}>
              <Navbar />
            </div>
            <div className={style.mainphoto}>
              <img
                className={style.mainimg}
                onClick={() => this.handlePhotoClick('main')}
                src={this.props.userToRate.photos[this.state.target]}
              />
            </div>
            <div />
            <div className={style.smallerphotos}>
              <div className={style.smallerphotosgrid}>
                <div className={style.smallimg}>
                  <img
                    className={style.img1}
                    src={this.props.userToRate.photos[0]}
                    onClick={() => this.handlePhotoClick(0)}
                  />
                </div>
                <div className={style.smallimg}>
                  <img
                    className={style.img2}
                    src={this.props.userToRate.photos[1]}
                    onClick={() => this.handlePhotoClick(1)}
                  />
                </div>
                <div className={style.smallimg}>
                  <img
                    className={style.img3}
                    src={this.props.userToRate.photos[2]}
                    onClick={() => this.handlePhotoClick(2)}
                  />
                </div>
                <div className={style.smallimg}>
                  <img
                    className={style.img4}
                    src={this.props.userToRate.photos[3]}
                    onClick={() => this.handlePhotoClick(3)}
                  />
                </div>
              </div>
            </div>
            <div className={style.bio}>
              <div className={style.name}>
                {this.props.userToRate.firstname}{' '}
                {this.props.userToRate.lastname &&
                  this.props.userToRate.lastname[0]}.
              </div>
              <div className={style.age}>{realAge} years old</div>
              <div className={style.tags}>
                <div className={style.tag}>{this.props.userToRate.tags[0]}</div>
                <div className={style.tag}>{this.props.userToRate.tags[1]}</div>
                <div className={style.tag}>{this.props.userToRate.tags[2]}</div>
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
              <div className={style.rating}>{this.state.rating}</div>
            </div>
            <div className={style.buttons}>
              <div className={style.next}>
                <Button
                  text={`Rate ${
                    this.props.userToRate.firstname
                  } to See Next Person!`}
                  onClick={this.submitUserAttractiveness}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <div className={style.nomatchwrapper}>
            <div className={style.header}>
              <Navbar />
            </div>
            <div className={style.noMatch}>
              <div className={style.noMatchText}>No Matches left to rate!</div>
              <Button
                text={'Refresh'}
                onClick={this.props.fetchMoreUsersToRate}
              />
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchMoreUsersToRate: actions.fetchMoreUsersToRate,
      submitRating: actions.submitRating
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    userToRate: state.ratings[state.ratings.length - 1],
    onDeck:
      state.ratings[state.ratings.length - 2] &&
      state.ratings[state.ratings.length - 2].firstname,
    id: state.accountData.id
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rate);
