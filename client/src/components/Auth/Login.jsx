import React, { Component } from 'react';
import axios from 'axios';

import Input from '../globals/Input/index.jsx';
import Button from '../globals/Button/index.jsx';

import style from './Auth.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  

  submitAuthData = async (e) => {
    e.preventDefault();
    const body = {
      username,
      email, 
      password
    };
    try {
      const data = await axios.post(`http://localhost:5000/api/auth/login`, body);
      localStorage.setItem('id', data.data.id);
      localStorage.setItem('email', data.data.email);
      localStorage.setItem('token', data.data.token);
      data ? this.props.history.push('/dashboard') : this.props.history.push('/login');
      console.log(localStorage);
    } catch (err) {
      throw new Error(err);
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
          <span> or </span> <br />
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
            text="Login"
            onClick={(e) => this.submitAuthData(e)}
          />
        </form>
      </div>
    );
  }
}

export default Login;
