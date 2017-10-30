import { FETCH_ISSUES } from '../constants';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ISSUES:
			return action.payload.data;
		default:
			return state;
	}
}
