import React, { Component } from 'react';

import style from './AccountPage.css';
import Button from '../globals/Button/index.jsx';

class Gender extends Component {
  constructor() {
    super();
    this.state = {
      genderState: [],
    };
  }

  genderToNumberObject = {
    m: 1,
    f: 2,
    o: 3,
    fm: 4,
    mo: 5,
    fo: 6,
    fmo: 7,
  }

  numberToGenderObject = {
    1: ['m'],
    2: ['f'],
    3: ['o'],
    4: ['f','m'],
    5: ['m','o'],
    6: ['f','o'],
    7: ['f','m','o']
  }

  convertGenderStateToNumber = (arrayOfGender) => {
    let genderString = arrayOfGender.join('')
    return this.genderToNumberObject[genderString]
  }

  onGenderClick = (gender) => {
    let { genderState } = this.state
    if (genderState.includes(gender)) {
      genderState.splice(genderState.indexOf(gender), 1);
    } else {
    genderState.push(gender)
    genderState.sort()
    }
    let newGenderState = (this.props.type !== 'gender') ? genderState : [gender];
    this.setState({
      genderState: newGenderState
    })
    let genderNumber = this.convertGenderStateToNumber(newGenderState);
    this.props.handleGenderChange(this.props.type, genderNumber);
  }

  componentDidMount = () => {
    this.props.gender &&
    this.setState({
      genderState: this.numberToGenderObject[this.props.gender],
    })
  }

  render () {
    return (
      <div>
      <Button 
        text={'Female'} 
        key={'f'} 
        className={this.state.genderState.includes('f') ? 'selected' : 'tag'} 
        onClick={() => this.onGenderClick('f')} 
        />
      <Button 
        text={'Male'} 
        key={'m'} 
        className={this.state.genderState.includes('m') ? 'selected' : 'tag'} 
        onClick={() => this.onGenderClick('m')} 
        />
      <Button 
        text={'Other'} 
        key={'o'} 
        className={this.state.genderState.includes('o') ? 'selected' : 'tag'} 
        onClick={() => this.onGenderClick('o')} 
        />
      </div>
    );
  }
}

export default Gender;
