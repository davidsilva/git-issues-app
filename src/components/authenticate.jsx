import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Authenticate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: '',
			redirect: false
		}
	}

	handleClick() {
		console.log('this.state', this.state);
		const { token } = this.state;
		this.setState({token: token, redirect: true});
		console.log('Redirect');
	}

	render() {
		const { redirect, token } = this.state;

		if (redirect) {
			return <Redirect to='/repos' />;
		}

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
		)
	}
}

function mapStateToProps(state) {
	return {
		token: state
	}
}

export default Authenticate;
