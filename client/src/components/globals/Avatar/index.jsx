import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './Avatar.css';

class Avatar extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <img className={style.avatar} src={this.props.photo} />;
	}
}

const mapStateToProps = state => {
	return {
		photo: state.userPhotos[0] && state.userPhotos[0].url,
	};
};

export default connect(mapStateToProps)(Avatar);
