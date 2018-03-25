import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './Dashboard.css';
import Navbar from '../globals/Navbar/index.jsx';
import Profile from '../globals/Profile/index.jsx';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className={style.dashboardContainer}>
          <div className={style.profileContainer}>
          <Profile 
              url={this.props.photos[0].url}
              firstname={this.props.firstname}
              lastname={this.props.lastname}
              age={this.props.age}
              bio={this.props.bio}
              />
          </div>

          <div className={style.matchContainer}>
            <div className={style.myMatchContainer}>
              Render My Matches Here!
            </div>
            <div className={style.myFollowingContainer}>
              Render My Following Matches Here!
            </div>
          </div>

          <div className={style.leaderboardContainer}>
            Render Leadeboard Here!
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    firstname: state.accountData.firstname,
    lastname: state.accountData.lastname,
    age: state.bioData.age,
    tags: state.tags,
    photos: state.userPhotos

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
