import _ from 'lodash';
import { FETCH_REPOS } from '../actions';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_REPOS:
			/*
			let repos = [];
			console.log('action.payload', action.payload);
			for (var i = 0; i < action.payload.data.length; i++) {
				repos.push(action.payload.data[i]);
			}
			console.log('repos', repos);
			return repos;
			*/
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}
