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
      username: '',
      firstname: '',
      lastname: ''
    };
  }

  submitAuthData = async (e) => {
    e.preventDefault();
    const { username, email, password, firstname, lastname } = this.state;
    const body = {
      username,
      email,
      password,
      firstname, 
      lastname
    }
    try {
      const data = await axios.post(`${REST_SERVER_URL}/api/auth/signup`, body);
      data ? this.props.history.push('/login') : alert('taken');
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
      <div className={style.wrapper}>
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
              name="firstname"
              type="text"
              placeholder="Enter first name"
              onChange={this.handleInputChange}
            /> <br />
            <Input 
              name="lastname"
              type="text"
              placeholder="Enter last name"
              onChange={this.handleInputChange}
            /> <br />
            <Input 
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={this.handleInputChange}
            /> <br />
            <div className={style.submit}>
            <Button
              className={style.signupButton}
              text="Sign Up"
              onClick={(e) => this.submitAuthData(e)}
            />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
