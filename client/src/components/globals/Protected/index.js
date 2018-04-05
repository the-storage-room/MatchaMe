import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

class Protected extends Component {
  componentDidMount() {
    try {
      const { NODE_ENV } = process.env;
      const { signupStatus, history } = this.props
      if (NODE_ENV === 'PRODUCTION') {
        const { exp } = jwtDecode(localStorage.token);
        if (exp < Math.floor(Date.now() / 1000)) {
          history.push('/login')
          signupStatus === 0 || signupStatus === false ? history.push('/onboarding/bio') : null;
        } else {
          signupStatus === 0 || signupStatus === false ? history.push('/onboarding/bio') : null;
        }
      }
    } catch (err) {
      console.log('error in Protected', err);
      history.push('/login');
    }
  }
  render() {
    const { component: Component } = this.props;
    return <Component {...this.props} />;
  }
}

export default Protected;
