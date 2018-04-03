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
			width: 50,
		};
	}

	componentDidMount() {
		const { totalPoints } = this.props.powerRanking;
		if (totalPoints <= 0) {
			this.setState({ width: 0 });
		} else if (
			0 < totalPoints <= 250 ||
			1000 < totalPoints <= 1500 ||
			3000 < totalPoints <= 3500 ||
			5000 < totalPoints <= 6250
		) {
			this.setState({ width: 25 });
		} else if (
			250 < totalPoints <= 500 ||
			1500 < totalPoints <= 2000 ||
			3500 < totalPoints <= 4000 ||
			6250 < totalPoints <= 7500
		) {
			this.setState({ width: 50 });
		} else if (
			500 < totalPoints <= 750 ||
			2000 < totalPoints <= 2500 ||
			4000 < totalPoints <= 4500 ||
			7500 < totalPoints <= 8750
		) {
			this.setState({ width: 75 });
		} else {
			this.setState({ width: 100 });
		}
	}

	onClickHandlerFollowButton = () => {
		this.setState({ show: false });
	};

	onClickHandlerLeaderboardButton = () => {
		this.setState({ show: true });
	};

	render() {
		const { firstname, photos, powerRanking, follows } = this.props;
		return (
			<div className={style.row}>
				<Navbar />
				<div className={style.wrapper}>
					<div className={style.column}>
						<div className={style.welcome}>Welcome back, {firstname}</div>
						<img className={style.photo} src={photos[0].url} />
						<div className={style.info}>
							<div className={style.userranking}>Points: {powerRanking.totalPoints} </div>
							<div className={style.countdown}>You have X more points to rank up</div>

							<progress max="100" value={this.state.width}>
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
