import React, { Component } from 'react';
import axios from 'axios';

import Input from '../globals/Input/index.jsx';
import Button from '../globals/Button/index.jsx';

import style from './Auth.css';

const { REST_SERVER_URL } = process.env;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  submitAuthData = async e => {
    const { username, password } = this.state;
    e.preventDefault();
    const body = {
      username,
      password
    };
    try {
      const data = await axios.post(`${REST_SERVER_URL}/api/auth/login`, body);
      localStorage.setItem('token', data.data.token);
      if (data) {
        this.props.history.push('/initialize');
      } else {
        this.setState({ username: '' });
        this.setState({ password: '' });
        this.props.history.push('/login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={style.signupContainer}>
        <form className={style.signupForm}>
          <Input
            name="username"
            type="text"
            placeholder="Enter username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />{' '}
          <br />
          <Input
            className={style.passwordForm}
            name="password"
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />{' '}
          <br />
          <Button
            className={style.signupButton}
            text="Login"
            onClick={e => this.submitAuthData(e)}
          />
        </form>
      </div>
    );
  }
}

export default Login;
