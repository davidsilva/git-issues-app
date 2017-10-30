import axios from 'axios';
import { FETCH_REPOS, FETCH_ISSUES } from '../constants';

const ROOT_URL = 'https://api.github.com/';

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
