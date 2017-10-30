import React, { Component } from 'react';

class Authenticate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: ''
		}
	}

	handleClick = () => {
		this.props.getToken(this.state.token);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<p>Please enter your GitHub token...</p>
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
					</div>
				</div>
			</div>
		);
	}
}

export default Authenticate;

