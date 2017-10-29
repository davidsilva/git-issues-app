import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRepos, fetchIssues } from '../actions';

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
// GET /repos/:owner/:repo/issues
	renderRepos() {
		return _.map(this.props.repos, repo => {
			return (
				<li className="list-group-item"
					key={repo.id}
					onClick={() => this.selectRepo(repo.name, repo.owner.login, this.props.token)}
				>
					{repo.name}
				</li>
			);
		});
	}

	renderIssues() {
		console.log('this.props.issues', this.props.issues);
		return this.props.issues.map((issue) => {
			return (
				<li
					key={issue.id}
					className="list-group-item"
				>
					<h2>{issue.title}</h2>
					<p><em>Created</em> {issue.created_at}</p>
					<p>{issue.body}</p>
				</li>
			)
		})
	}

	selectRepo(repoId, ownerId, token) {
		this.props.fetchIssues(repoId, ownerId, token);
	}

	render() {
		console.log('this.props.issues', this.props.issues);
		if (this.props.issues && this.props.issues.length > 0) {
			return (
				<div className="container">
					<div className="row">
						<div className="col-xs-6">
							<ol className="list-group">
								{this.renderRepos()}
							</ol>
						</div>
						<div className="col-xs-6">
							<ol className="list-group">
								{this.renderIssues()}
							</ol>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<ol className="list-group">
							{this.renderRepos()}
						</ol>
					</div>
				</div>
			</div>
		)
	}
}

/*
The "state" argument is the *application* state
*/
function mapStateToProps(state) {
	console.log('mapStateToProps state', state);
	return { repos: state.repos, issues: state.issues };
}

// export a "container"
// connect takes a function and a component and produces a container
// whenever application state changes, container will automatically re-render
export default connect(mapStateToProps, { fetchRepos, fetchIssues })(RepoList);
