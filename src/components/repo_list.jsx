import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRepos } from '../actions';

class RepoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			authenticated: false,
			token: ''
		}
	}
	
	componentDidMount() {
		console.log('componentDidMount this.props.token', this.props.token)
		if (this.props.token) {
			this.props.fetchRepos(this.props.token);

		}
	}

	renderRepos() {
		return _.map(this.props.repos, repo => {
			return (
				<li className="list-group-item" key={repo.id}>
					<Link to={`/repos/${repo.id}`}>
						{repo.name}
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<ol className="list-group">
				{this.renderRepos()}
			</ol>
		);
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps state', state);
	return { repos: state.repos };
}

export default connect(mapStateToProps, { fetchRepos })(RepoList);
