import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import style from './Avatar.css';

class Avatar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <img 
        className={style.avatar}
        src={this.props.photo}
        onClick={() => this.props.history.push('/account/bio')}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photo: state.userPhotos[0].url
  }
}

export default withRouter(connect(mapStateToProps)(Avatar));