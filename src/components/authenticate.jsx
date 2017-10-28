import React, { Component } from 'react';
import { connect } from 'react-redux';

class Authenticate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: ''
		}
	}

	setToken() {
		console.log('this.state', this.state);
		const { token } = this.state;
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
					onClick={() => {this.setToken()}}
				>
					Set token
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		token: state
	}
}

export default Authenticate;
