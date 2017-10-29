import _ from 'lodash';
import { FETCH_ISSUES } from '../actions';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ISSUES:
			return action.payload.data;
		default:
			return state;
	}
}
