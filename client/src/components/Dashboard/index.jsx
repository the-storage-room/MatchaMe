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
			show: true,
			pointsToGo: 0,
		};
	}

	onClickHandlerFollowButton = () => {
		this.setState({ show: false });
	};

	onClickHandlerLeaderboardButton = () => {
		this.setState({ show: true });
	};

	render() {
		const { firstname, photos, powerRanking, follows } = this.props;
		console.log('follows', follows);
		return (
			<div className="row">
				<Navbar />
				<div className={style.wrapper}>
					<div className={style.column}>
						<div className={style.welcome}>Welcome back, {firstname}</div>
						<img className={style.photo} src={photos[0].url} />
						<div className={style.info}>
							<div className={style.userranking}>Points: {powerRanking.totalPoints} </div>
							<div className={style.countdown}>You have X more points to rank up</div>

							<progress max="100" value="25">
								Hi
							</progress>
						</div>
					</div>
					<div className={style.column}>
						<div className={style.choice}>
							<Button onClick={this.onClickHandlerFollowButton} text="Follow" />
							<Button onClick={this.onClickHandlerLeaderboardButton} text="Leaderboard" />
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

const mapStateToProps = ({ accountData, userPhotos, bioData, tags, leaderboard, powerRanking }) => {
	return {
		firstname: accountData.firstname,
		lastname: accountData.lastname,
		age: bioData.age,
		tags: tags.user,
		photos: userPhotos,
		leaderboard: leaderboard,
		powerRanking: powerRanking,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
