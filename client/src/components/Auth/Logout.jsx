// import React, { Component } from 'react';
import axios from 'axios';

const { REST_SERVER_URL } = process.env;

const Logout = async (props) => {
  console.log('props from logout', props)
  try {
    const data = await axios.get(`${REST_SERVER_URL}/api/auth/logout`)
    localStorage.clear();
    props.history.push('/login')
  } catch (err) {
    console.log('error on logout', err)
  }
}


export default Logout;