import axios from 'axios';

const ROOT_URL = 'https://api.github.com/';
const API_KEY = '05036cb1a51123ba3946077c100955e35093c9c2';

export const FETCH_REPOS = 'FETCH_REPOS';
//export const FETCH_ISSUES = 'FETCH_ISSUES';

export function fetchRepos(token) {
	console.log('fechRepos token', token);
	const url = `${ROOT_URL}user/repos`;
	let myOptions = {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Authorization': `Token ${token}`
		}
	};
	console.log('myOptions', myOptions);

	const request = axios.get(url, myOptions)
	
	return {
		type: FETCH_REPOS,
		payload: request
	};
}
