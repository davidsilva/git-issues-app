import axios from 'axios';

const ROOT_URL = 'https://api.github.com/';
const API_KEY = '05036cb1a51123ba3946077c100955e35093c9c2';

export const FETCH_REPOS = 'FETCH_REPOS';
//export const FETCH_ISSUES = 'FETCH_ISSUES';

const MY_OPTIONS = {
	method: 'GET',
	mode: 'cors',
	headers: {
		'Authorization': 'Token 05036cb1a51123ba3946077c100955e35093c9c2'
	}
};

export function fetchRepos() {
	const url = `${ROOT_URL}user/repos`;
	const request = axios.get(url, MY_OPTIONS)
	
	return {
		type: FETCH_REPOS,
		payload: request
	};
}
