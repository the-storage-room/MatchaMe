import React, { Component } from 'react';
import axios from 'axios';

const { REST_SERVER_URL } = process.env;

// const Logout = async (props) => {
//   try {
//     await axios.get(`${REST_SERVER_URL}/api/auth/logout`)
//     localStorage.clear();
//     props.history.push('/')
//     return null;
//   } catch (err) {
//     console.log('error on logout', err)
//   }
// }

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