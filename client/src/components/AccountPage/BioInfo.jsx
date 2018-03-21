import React, { Component } from 'react';

import Input from './../globals/Input/index.jsx';
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
    this.props.renderButton(allValuesEntered)

  }

  render() {
    console.log(this.state.gender, this.state.pref)
    return (
      <div>
        <div className={style.basicMargin}>
          Birthdate: (Format: XX/XX/XXXX)
          <Input 
            placeholder="Month" 
            onChange={this.handleInputChange} 
            name={'month'}
            maxLength='2'
            />
          <Input 
            placeholder="Day" 
            onChange={this.handleInputChange} 
            name={'day'}
            maxLength='2'
            />
          <Input 
            placeholder="Year" 
            onChange={this.handleInputChange} 
            name={'year'}
            maxLength='4'
            />
        </div>
        <div className={style.basicMargin}>
          ZIP Code <Input 
          type="text"
          placeholder="ZIP Code goes here"
          onChange={this.handleInputChange} 
          name='location'
          maxLength='5'
          />
        </div>
        <div className={style.basicMargin}>
          gender: 
          <Gender
          type='gender'
          handleGenderChange={this.handleGenderChange}
          />
        </div>
        <div>
          gender preferences: 
          <Gender
          type='pref'
          handleGenderChange={this.handleGenderChange}
          />
        </div>
        <div className={style.basicMargin}>
          bio: 
          <textarea 
          placeholder="Bio goes HERE"
          onChange={this.handleInputChange} 
          name={'bio'}
          >
          </textarea>
        </div>
      </div>
    )
  }
}

export default BioInfo;