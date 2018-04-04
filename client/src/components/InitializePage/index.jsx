import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './InitializePage.css';
import actions from '../../../Redux/actions/initialize_actions';

class Initialize extends Component {
	componentDidMount = () => {
		console.log('history', this.props.history);
		this.props.initialize(this.props.history);
	};

	render() {
		return <div>Please Wait while the App Initializes!</div>;
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			initialize: actions.initialize,
		},
		dispatch
	);
};

const mapStateToProps = () => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Initialize);
