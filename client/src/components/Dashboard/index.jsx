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
              tags={this.props.tags}
              age={this.props.age}
              bio={this.props.bio}
              />
          </div>

          <div className={style.matchContainer}>
            <div className={style.myMatchContainer}>
              Render My Matches Here!
            </div>
            <div className={style.myFollowingContainer}>
              Render Statistics Here?
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

const mapStateToProps = ({ accountData , userPhotos, bioData, tags }) => {
  return {
    firstname: accountData.firstname,
    lastname: accountData.lastname,
    age: bioData.age,
    tags: tags.user,
    photos: userPhotos
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
