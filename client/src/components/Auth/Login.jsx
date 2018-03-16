import React, { Component } from 'react';

import './Auth.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return <div>Render Login Page Here!</div>;
  }
}

export default Login;
