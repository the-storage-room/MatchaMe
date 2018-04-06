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
    const { starred, allOthers } = this.props
    return (
      <div className={style.followsContainer}>
        {
          starred.length > 0 
          ? <div className={style.starredContainer}>
            <div className={style.favMsg}>Your favorite matches</div>
            <FollowsContainer data={starred} handleStar={this.handleStar} />
            </div> 
          : <div className={style.noStar}>You have no favorites!</div>
        }
        {
          allOthers.length > 0 ? <div className={style.resultsContainer}>
          <div className={style.matchMsg}>Most recent matches</div>
          <FollowsContainer data={allOthers} handleStar={this.handleStar} />
        </div> : <div className={style.noFollow}>Match more people!</div>
        }
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
    starred: follows.starred || [],
    allOthers: follows.allOthers || [],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Follows);
