import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeToken } from '../actions/index';
import { bindActionCreators } from 'redux';

class Authenticate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: ''
		}
	}

	handleClick = () => {
		console.log('handleClick this.props', this.props);
		this.props.getToken(this.state.token);
	}

	render() {
		return (
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					onChange={event => this.setState({token: event.target.value})}
				/>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => {this.handleClick()}}
				>
					Set token
				</button>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ storeToken: storeToken }, dispatch);
}
export default connect(null, mapDispatchToProps)(Authenticate);
