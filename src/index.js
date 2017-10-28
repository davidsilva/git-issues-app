import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import RepoList from './components/repo_list';
import Authenticate from './components/authenticate';
import IssueList from './components/issue_list';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/repos/:id" component={IssueList} />
					<Route path="/repos" component={RepoList} />
					<Route path="/" component={Authenticate} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
)
