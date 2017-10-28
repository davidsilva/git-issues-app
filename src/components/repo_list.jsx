import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRepos } from '../actions';

class RepoList extends Component {
	componentDidMount() {
		this.props.fetchRepos();
	}

	renderRepos() {
		//if (this.props.repos.length === 0) return;
		console.log('renderRepos this.props.repos', this.props.repos);

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
