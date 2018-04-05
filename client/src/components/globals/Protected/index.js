import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../../../../Redux'
import jwtDecode from 'jwt-decode';
import actions from '../../../../Redux/actions/signup_status_actions';

class Protected extends Component {
  constructor() {
    super();
    this.state = {
      pathname: '',
    }
  }

  componentDidMount() {
    try {
      const { NODE_ENV } = process.env;
      const { signupStatus, history, location, component, initializeState } = this.props;
      if (!localStorage.token) {
        history.push('/login')
      } else {
        const { exp } = jwtDecode(localStorage.token);
        const path = location.pathname.slice(1, 11);
        if (exp > Math.floor(Date.now() / 1000) && signupStatus === false && path !== 'onboarding') {
          history.push('/onboarding/bio')
        } else if (exp > Math.floor(Date.now() / 1000) && signupStatus === true) {
          console.log('initialize', initializeState)
          console.log('store', store.getState())
          if (initializeState === false && component.name !== 'HomePage') {
            console.log('initializeState', initializeState)
            initializeState = true;
            history.push('/initialize')
          }
        } else if (exp < Math.floor(Date.now() / 1000)) {
          history.push('/login')
        }
      }
    } catch (err) {
      console.log('error in protected', err)

    }
  }

  render() {
    const { component: Component } = this.props;
    console.log('this.props from render', this.props)
    return <Component {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signupstatus: actions.fetchUserSignupStatus
  }, dispatch)
}

const mapStateToProps = state => {
  console.log('staaaaaate', state)
  return {
    signupStatus: state.signupStatus,
    initializeState: state.initializeState,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Protected);
