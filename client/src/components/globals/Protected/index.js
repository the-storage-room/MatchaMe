import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import actions from '../../../../Redux/actions/signup_status_actions';

class Protected extends Component {
  componentDidMount() {
    try {
      const { NODE_ENV } = process.env;
      const { signupStatus, history } = this.props
      console.log('props', this.props)
      if (NODE_ENV === 'DEVELOPMENT') {
        const { exp } = jwtDecode(localStorage.token);
        if (exp < Math.floor(Date.now() / 1000)) {
          history.push('/login')
          console.log('signupStat', this.props.signupStatus)
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signupstatus: actions.fetchUserSignupStatus
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    signupStatus: state.signupStatus
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Protected);
