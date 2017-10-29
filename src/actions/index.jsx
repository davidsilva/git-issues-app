import axios from 'axios';

const ROOT_URL = 'https://api.github.com/';

export const FETCH_REPOS = 'FETCH_REPOS';
export const FETCH_ISSUES = 'FETCH_ISSUES';

export function fetchRepos(token) {
	const url = `${ROOT_URL}user/repos`;
	let myOptions = {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Authorization': `Token ${token}`
		}
	};

	const request = axios.get(url, myOptions)
	
	return {
		type: FETCH_REPOS,
		payload: request
	};
}
// GET /repos/:owner/:repo/issues

export function fetchIssues(repoId, ownerId, token) {
	const url = `${ROOT_URL}repos/${ownerId}/${repoId}/issues`;
	let myOptions = {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Authorization': `Token ${token}`
		}
	};

	const request = axios.get(url, myOptions)
	
	return {
		type: FETCH_ISSUES,
		payload: request
	};
}
