import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './Dashboard.css';
import Button from '../globals/Button/index.jsx';
import Navbar from '../globals/Navbar/index.jsx';
import Leaderboard from '../LeaderboardPage/index.jsx';
import Follows from '../FollowsPage/index.jsx';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      pointsToGo: 0,
      width: 50,
      status: ''
    };
  }

  componentDidMount() {
    const { totalPoints } = this.props.powerRanking;
    let percentage;
    let pointsLeft;
    let rankName;
    totalPoints <= 0
      ? (percentage = 0)
      : 0 < totalPoints <= 1000
        ? (percentage = totalPoints / 1000 * 100)
        : 1000 < totalPoints <= 3000
          ? (percentage = totalPoints / 3000 * 100)
          : 3000 < totalPoints <= 5000
            ? (percentage = totalPoints / 5000 * 100)
            : 5000 < totalPoints <= 10000
              ? (percentage = totalPoints / 10000 * 100)
              : (percentage = 100);

    totalPoints < 0
      ? (pointsLeft = 0 - totalPoints)
      : 0 <= totalPoints <= 1000
        ? (pointsLeft = 1000 - totalPoints)
        : 1000 < totalPoints <= 3000
          ? (pointsLeft = 3000 - totalPoints)
          : 3000 < totalPoints <= 5000
            ? (pointsLeft = 5000 - totalPoints)
            : 5000 < totalPoints <= 10000
              ? (pointsLeft = 10000 - totalPoints)
              : (pointsLeft = 0);
    totalPoints < 0
      ? (rankName = 'Bad Matchmaker')
      : 0 <= totalPoints <= 1000
        ? (rankName = 'Matchmaker')
        : 1000 < totalPoints <= 3000
          ? (rankName = 'Cupid')
          : 3000 < totalPoints <= 5000
            ? (rankName = 'Yenta')
            : 5000 < totalPoints <= 10000
              ? (rankName = 'Love Doctor')
              : (rankName = 'Love Guru');
    this.setState({
      width: percentage,
      pointsToGo: pointsLeft,
      status: rankName
    });
  }

  onClickHandlerFollowButton = () => {
    this.setState({ show: false });
  };

  onClickHandlerLeaderboardButton = () => {
    this.setState({ show: true });
  };

  render() {
    const { firstname, photos, powerRanking, follows } = this.props;
    const { totalPoints } = powerRanking;
    return (
      <div className={style.row}>
        <Navbar />
        <div className={style.wrapper}>
          <div className={style.column}>
            <div className={style.welcome}>Welcome back, {firstname}</div>
            <img className={style.photo} src={photos[0] && photos[0].url} />
            <div className={style.info}>
              <div className={style.userranking}>Points: {totalPoints} </div>
              <div className={style.status}>
                You are currently a {this.state.status}
              </div>
              <div className={style.userBoardPlace}>
                Leaderboard Ranking: {powerRanking.rank}{' '}
              </div>
              <div className={style.countdown}>
                You have {this.state.pointsToGo} more points to rank up
              </div>

              <progress max="100" value={this.state.width} />
            </div>
          </div>
          <div className={style.column2}>
            <div className={style.choice}>
              <Button onClick={this.onClickHandlerFollowButton} text="Follow" />
              <Button
                onClick={this.onClickHandlerLeaderboardButton}
                text="Leaderboard"
              />
            </div>
            {this.state.show ? (
              <div className={style.leaderboardContainer}>
                <Leaderboard />
              </div>
            ) : (
              <Follows />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const mapStateToProps = ({
  accountData,
  userPhotos,
  bioData,
  tags,
  leaderboard,
  powerRanking
}) => {
  return {
    firstname: accountData.firstname,
    lastname: accountData.lastname,
    age: bioData.age,
    tags: tags.user,
    photos: userPhotos,
    leaderboard: leaderboard,
    powerRanking: powerRanking
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
