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


  // firstname={this.props.firstname}
  // lastname={this.props.lastname}
  // tags={this.props.tags}
  // age={this.props.age}
  // bio={this.props.bio}

  render() {
    return (
      <div className="row">
        <Navbar />
        <div className={style.column}>
          <h1 className={style.welcome}>
          Welcome back {this.props.firstname}!
          </h1>
          <img
            className={style.photo}
            src={this.props.photos[0].url}
            />
        </div>
        <div className={style.column}>
          <div>
            <div className={style.rank}>
              You are...
            </div>
            <div>
              <img
                className={style.rankPhoto}
                src="https://ravishly-9ac9.kxcdn.com/cdn/farfuture/RNwjBX_Bk9SPEIwwCW2JPhjhBapVt4kU-CSyg2z1GA4/mtime:1432435666/sites/default/files/field/image/matchmaking.jpg"
                />
              <div className={style.stats}>
                Total Points: 103
              </div>
            </div>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.stats}>
            You need X pts to rank up!
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
