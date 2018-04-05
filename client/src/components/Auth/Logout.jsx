import React, { Component } from 'react';
import axios from 'axios';

const { REST_SERVER_URL } = process.env;

class Logout extends Component {
  constructor(props) {
    super(props)
  }

  logoutUser = async () => {
    try {
      await axios.get(`${REST_SERVER_URL}/api/auth/logout`)
      localStorage.clear();
    } catch (err) {
      console.log('Error on logout', err)
    }
  }

  render() {
    this.props.history.push('/');
    return null;
  }
}

export default Logout;