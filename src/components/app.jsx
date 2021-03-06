import React, { Component } from 'react';
import Authenticate from './authenticate';
import RepoList from '../containers/repo_list';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authenticated: false,
			token: ''
		}
	}

	getToken = (token) => {
		this.setState({token: token, authenticated: true});
	}

	render() {
		if (!this.state.authenticated) {
			return (
				<Authenticate getToken={this.getToken} />
			);
		}
		else {
			return (
				<RepoList token={this.state.token} />
			);
		}
	}
}

export default App;
