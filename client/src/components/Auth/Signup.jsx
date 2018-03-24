import React, { Component } from 'react';
import axios from 'axios';

import Input from '../globals/Input/index.jsx';
import Button from '../globals/Button/index.jsx';

import style from './Auth.css';

const { REST_SERVER_URL } = process.env;

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
    e.preventDefault();
    const { username, email, password } = this.state;
    const body = {
      username,
      email,
      password
    }
    try {
      const data = await axios.post(`${REST_SERVER_URL}/api/auth/signup`, body);
      console.log(data)
      //data ? this.props.history.push('/login') : alert('taken');
    } catch (err) {
      console.error(err)
    }
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className={style.signupContainer}>
        <form className={style.signupForm}>
          <Input
            name="username"
            type="text"
            placeholder="Enter username"
            onChange={this.handleInputChange}
          /> <br />
          <Input 
            name="email"
            type="text"
            placeholder="Enter e-mail"
            onChange={this.handleInputChange}
          /> <br />
          <Input 
            name="password"
            type="text"
            placeholder="Enter password"
            onChange={this.handleInputChange}
          /> <br />
          <Button
            className={style.signupButton}
            text="Sign Up"
            onClick={(e) => this.submitAuthData(e)}
          />
        </form>
      </div>
    );
  }
}

export default Signup;
