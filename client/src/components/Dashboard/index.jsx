import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './Dashboard.css';
import Navbar from '../globals/Navbar/index.jsx';
import LeaderboardItem from './LeaderboardItem.jsx';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			show: true,
		};
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
				<div className={style.wrapper}>
					<div className={style.column}>
						<img className={style.photo} src={this.props.photos[0].url} />
						<div className={style.userinfo}>Info here</div>
					</div>
					<div className={style.column}>
						<div className={style.choice}>
							<button
								onClick={() => {
									this.setState({ show: false });
								}}
							>
								Follows
							</button>
							<button
								onClick={() => {
									this.setState({ show: true });
								}}
							>
								Leaderboard
							</button>
						</div>
						{this.state.show ? (
							<div className={style.leaderboardContainer}>
								{this.props.leaderboard.map((boarditem, index) => {
									return (
										<LeaderboardItem
											key={index}
											username={boarditem.username}
											powerranking={boarditem.powerranking}
											primaryPhoto={boarditem.primaryPhoto}
											index={index}
										/>
									);
								})}
							</div>
						) : (
							<div className={style.follows}>Follows</div>
						)}
					</div>

					{/* <div className={style.column}>
					<h1 className={style.welcome}>Welcome back {this.props.firstname}!</h1>
					<img className={style.photo} src={this.props.photos[0].url} />
				</div>
				<div className={style.column}>
					<div>
						<div className={style.rank}>You are...</div>
						<div>
							<img
								className={style.rankPhoto}
								src="https://ravishly-9ac9.kxcdn.com/cdn/farfuture/RNwjBX_Bk9SPEIwwCW2JPhjhBapVt4kU-CSyg2z1GA4/mtime:1432435666/sites/default/files/field/image/matchmaking.jpg"
							/>
							<div className={style.stats}>Total Points: 103</div>
						</div>
					</div>
				</div>
				<div className={style.column}>
					<div className={style.stats}>You need X pts to rank up!</div>
				</div> */}
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({}, dispatch);
};

const mapStateToProps = ({ accountData, userPhotos, bioData, tags, leaderboard }) => {
	console.log(leaderboard);
	return {
		firstname: accountData.firstname,
		lastname: accountData.lastname,
		age: bioData.age,
		tags: tags.user,
		photos: userPhotos,
		leaderboard: leaderboard,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
