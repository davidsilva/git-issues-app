import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos, fetchIssues } from '../actions';
import { bake_cookie, read_cookie } from 'sfcookies';

class RepoList extends Component {
	constructor(props) {
		super(props);
		var sortKeyCookie = read_cookie('sortKey');
		var sortKey = (sortKeyCookie.length === 0) ? '' : sortKeyCookie;

		this.state = {
			authenticated: false,
			token: '',
			sortKey: sortKey
		}
	}
	
	componentDidMount() {
		if (this.props.token) {
			this.props.fetchRepos(this.props.token);

		}
	}

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

	sortIssues(sortKey) {
		this.props.issues.sort(function(a, b) {
			var valueA = a[sortKey];
			var valueB = b[sortKey];
			if (valueA < valueB) {
				return -1;
			}
			if (valueA > valueB) {
				return 1;
			}
			return 0;
		});
	}

	renderIssues() {
		if (this.state.sortKey) {
			this.sortIssues(this.state.sortKey);
		}

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

	selectSortKey(sortKey) {
		bake_cookie('sortKey', sortKey);
		this.setState({sortKey: sortKey});
	}

	render() {
		if (this.props.issues && this.props.issues.length > 0) {
			console.log('this.state.sortKey', this.state.sortKey);
			return (
				<div className="container">
					<div className="row">
						<div className="col-xs-6">
							<h2>Your Repos</h2>
							<ol className="list-group">
								{this.renderRepos()}
							</ol>
						</div>
						<div className="col-xs-6">
							<h2>Issues</h2>
							<div className="form-group">
								<label
									htmlFor="sort-select"
									className="control-label"
								>
									Sort by...
								</label>
								<select
									className="form-control"
									onChange={event => this.selectSortKey(event.target.value)}
									value={this.state.sortKey}
								>
									<option defaultValue={""}></option>
									<option value="title">Title</option>
									<option value="created_at">Created</option>
									<option value="body">Description</option>
								</select>
							</div>
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
						<h2>Your Repos</h2>
						<ol className="list-group">
							{this.renderRepos()}
						</ol>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { repos: state.repos, issues: state.issues };
}

export default connect(mapStateToProps, { fetchRepos, fetchIssues })(RepoList);
