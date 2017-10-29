import { combineReducers } from 'redux';
import RepoReducer from './reducer_repo';
import IssueReducer from './reducer_issue';

const rootReducer = combineReducers({
	repos: RepoReducer,
	issues: IssueReducer
});

export default rootReducer;
