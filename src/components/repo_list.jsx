import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions';

class RepoList extends Component {
	componentDidMount() {
		this.props.fetchRepos();
	}

	renderRepos() {
		if (this.props.repos.length === 0) return;
		console.log('renderRepos this.props.repos.length', this.props.repos.length);

		return (
			<div>
				{
					this.props.repos.map(repo => {
						//console.log('repo', repo);
						return (
							<li key={repo.id} className="list-group-item">
								{repo.name} xxx
							</li>
						)
					})
				}
			</div>
		)
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
