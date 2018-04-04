import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './FollowsPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import FollowsContainer from './FollowsContainer.jsx';
import actions from '../../../Redux/actions/follows_page_actions';

class Follows extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleStar = (matchId, starred, index) => {
    starred ? this.props.unstarFollow(matchId, index) : this.props.starFollow(matchId, index);
  };

  render() {
    console.log('starred', this.props.starred);
    return (
      <div className={style.followsContainer}>
        <div className={style.starredContainer}>
          <FollowsContainer data={this.props.starred} handleStar={this.handleStar} />
        </div>
        <div className={style.resultsContainer}>
          <FollowsContainer data={this.props.allOthers} handleStar={this.handleStar} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      starFollow: actions.starFollow,
      unstarFollow: actions.unstarFollow,
    },
    dispatch
  );
};

const mapStateToProps = ({ follows }) => {
  return {
    starred: follows.starred,
    allOthers: follows.allOthers,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Follows);
