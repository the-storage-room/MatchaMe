import React, { Component } from 'react';
import axios from 'axios';

import Input from '../globals/Input';
import Button from '../globals/Button';

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

  submitAuthData = async (e) => {

  }

  handleInputChange = (e) => {

  }

  render() {
    return <div></div>;
  }
}

export default Signup;
