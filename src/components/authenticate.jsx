import React, { Component } from 'react';

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

export default Authenticate;

