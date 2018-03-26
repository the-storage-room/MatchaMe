import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './FollowsPage.css';
import Navbar from '../globals/Navbar/index.jsx';
import FollowsContainer from './FollowsContainer.jsx';

class Follows extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleStar = () => {

  }
  
  render() {
    return (
      <div>
        <Navbar />
        <div className={style.followsContainer}>
          <div className={style.starredContainer}>
            <FollowsContainer
              type="starred"
              data={this.props.starred}
              handleStar={this.handleStar}
              />
          </div>
          <div className={style.resultsContainer}>
            <FollowsContainer
              type="allOthers"
              data={this.props.allOthers}
              handleStar={this.handleStar}
              />
            </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
}

const mapStateToProps = ({ follows }) => {
  return {
    starred: follows.star,
    allOthers: follows.allOthers,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Follows);
