import React, { Component } from 'react';
import axios from 'axios';

import Input from '../globals/Input/index.jsx';
import Button from '../globals/Button/index.jsx';

import './Auth.css';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      username: ''
    };
  }

  // submitAuthData = async (e) => {
  //   e.preventDefault();
  //   try {

  //   } catch (err) {

  //   }
  // }

  // handleInputChange = (e) => {

  // }

  render() {
    return <div></div>;
  }
}

export default Signup;
