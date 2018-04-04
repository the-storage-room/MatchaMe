import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../globals/Input/index.jsx';
import Gender from './Gender.jsx';
import actions from '../../../Redux/actions/account_page_actions';
import style from './AccountPage.css';
import Button from '../globals/Button/index.jsx';

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
      preference: 0,
    };
  }

  handleClick = () => {
    this.props.updateBioData({location: this.state.location})
  }

  handleGenderChange = (state, genderNum) => {
    this.setState({ [state]: genderNum });
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  componentDidUpdate = () => {
    let { state } = this
    let allValuesEntered = true;
    for (let key in state) {
      if (!state[key]) {
        allValuesEntered = false;
      }
    }
    this.props.renderButton(allValuesEntered);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className={style.basicMargin}>
          Date of Birth: 
          <div>
          <Input 
            placeholder="MM" 
            onChange={this.handleInputChange} 
            name="month"
            maxLength='2'
            type="text"
            />
          <Input 
            placeholder="DD" 
            onChange={this.handleInputChange} 
            name="month"
            maxLength='2'
            />
          <Input 
            placeholder="YYYY" 
            onChange={this.handleInputChange} 
            name="year"
            maxLength='4'
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
              value={this.props.location}
              />
          </div>
        </div>
        <div className={style.basicMargin}>
          Gender: 
          <Gender
            type='gender'
            handleGenderChange={this.handleGenderChange}
            />
        </div>
        <div className={style.basicMargin}>
          Gender preferences:
          <Gender
            type='pref'
            handleGenderChange={this.handleGenderChange}
            />
        </div>
        <div className={style.basicMargin}>
          Bio: 
          <div>
          <textarea 
            placeholder="Who are you?"
            onChange={this.handleInputChange} 
            name="bio"
            >
          </textarea>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateBioData: actions.updateBioData,
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    location: state.bioData.location
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BioInfo);
