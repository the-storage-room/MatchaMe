import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import action from '../../../../Redux/actions/initialize_status_actions';
import initialize from '../../../../Redux/actions/initialize_actions';

class Protected extends Component {
  constructor() {
    super();
  }

  componentDidMount = async () => {
    try {
      const { 
        signupStatus, 
        history, 
        location, 
        initializeState, 
        initialize } = this.props;

      const path = location.pathname.slice(1, 11);
      const roundedExp = Math.floor(Date.now() / 1000)
      
      if (!localStorage.token) {
        history.push('/login');
        return;
      }
      const { exp } = jwtDecode(localStorage.token);
      if (exp < roundedExp) {
        history.push('/login')
      } else if (!initializeState) {
        console.log(this.props)
        initialize(history, this.props.location.pathname)
        // history.push('/initialize')
        console.log(this.props.initializeState)
      } else if (signupStatus === false && path !== 'onboarding') {
        history.push('/onboarding/bio')
        console.log(4, path)
      }
    } catch (err) {
      console.log('error in protected', err)
    }
  }

  render() {
    const { component: Component } = this.props;
    return <Component {...this.props} />
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    initializeStateAction: action.updateInitializeState,
    initialize: initialize.initialize
  }, dispatch)
}

const mapStateToProps = state => {
  return {
    signupStatus: state.signupStatus,
    initializeState: state.initializeState,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Protected);