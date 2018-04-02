import React from 'react';
import style from './Dashboard.css';

const LeaderboardItem = ({ powerranking, primaryPhoto, username, index }) => {
	return (
		<div className={style.boardwrapper}>
			<div className={style.leaderboardItems}>
				<div className={style.col1}>
					<div className={style.rank}>{index + 1}</div>
					<img className={style.avatar} src={primaryPhoto.url} />
					<div className={style.username}>{username}</div>
				</div>
				<div className={style.col2}>
					<div className={style.pRC}>
						<div className={style.powerrankingTitle}>TOTAL POINTS</div>
						<div className={style.powerranking}>{powerranking}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeaderboardItem;
