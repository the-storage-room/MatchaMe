import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './InitializePage.css';
import actions from '../../../Redux/actions/initialize_actions';

class Initialize extends Component {
  componentDidMount = async () => {
    if (localStorage.token) {
      this.props.initialize(this.props.history);
    } else {
      this.props.history.push('/login');
    }
  };

  render() {
    return (
      <div className={style.loadingContainer}>
        <div className={style.message}>Loading...</div>
        <img
          className={style.loadingImage}
          src="https://media3.giphy.com/media/XcJKsYtKPk0Vy/giphy.gif"
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      initialize: actions.initialize
    },
    dispatch
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Initialize);
