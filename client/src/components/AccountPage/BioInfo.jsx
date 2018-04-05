import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../globals/Input/index.jsx';
import Gender from './Gender.jsx';
import style from './AccountPage.css';

class BioInfo extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      bio: '',
      month: '',
      day: '',
      year: '',
      gender: 0,
      pref: 0,
    };
  }

  handleGenderChange = (state, genderNum) => {
    this.setState({ [state]: genderNum });
    this.props.handleGenderChange({ [state]: genderNum });
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    this.props.handleBioInputChange({ [name]: value });
  }

  componentDidUpdate = () => {
    let allValuesEntered = true;
    for (let key in this.state) {
      if (!this.state[key]) {
        allValuesEntered = false;
      }
    }
    this.props.renderButton(allValuesEntered);
  }

  componentDidMount = () => {

    let ageState;

    if (this.props.age) {
      let ageString = this.props.age.toString();

      let year = ageString.slice(0, 4);
      let month = ageString.slice(0, 2);
      let day = ageString.slice(0, 2);

      ageState = {
        year: Number(year),
        month: Number(month),
        day: Number(day),
      }

      this.setState(ageState)
    }

    const bioState = {
      location: this.props.location,
      bio: this.props.bio,
      gender: this.props.gender,
      pref: this.props.pref,
    }
    this.setState(bioState)

    this.props.setIndexState(bioState, ageState)
  }

  render() {
    return (
      <div>
        <div className={style.tagHead}>
          Please enter your info!
        </div>
        <div className={style.basicMargin}>
          Date of Birth:
          <div>
            <Input
              placeholder="MM"
              onChange={this.handleInputChange}
              name="month"
              maxLength='2'
              type="text"
              value={this.state.month}
            />
            <Input
              placeholder="DD"
              onChange={this.handleInputChange}
              name="day"
              maxLength='2'
              value={this.state.day}
            />
            <Input
              placeholder="YYYY"
              onChange={this.handleInputChange}
              name="year"
              maxLength='4'
              value={this.state.year}
            />
          </div>
        </div>
        <div className={style.basicMargin}>
          ZIP Code:
          <div>
            <Input
              type="text"
              placeholder="XXXXX"
              onChange={this.handleInputChange}
              name="location"
              maxLength='5'
              value={this.state.location}
            />
          </div>
        </div>
        <div className={style.basicMargin}>
          Gender:
          <Gender
            type='gender'
            handleGenderChange={this.handleGenderChange}
            gender={this.props.gender}
          />
        </div>
        <div className={style.basicMargin}>
          Gender preferences:
          <Gender
            type='pref'
            handleGenderChange={this.handleGenderChange}
            gender={this.props.pref}
          />
        </div>
        <div className={style.basicMargin}>
          Bio:
          <div>
            <textarea
              placeholder="Who are you?"
              onChange={this.handleInputChange}
              name="bio"
              value={this.state.bio}
            >
            </textarea>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ bioData }) => {
  return {
    location: bioData.location,
    bio: bioData.bio,
    gender: bioData.gender,
    pref: bioData.preference,
    age: bioData.age
  };
}
export default connect(mapStateToProps)(BioInfo);
