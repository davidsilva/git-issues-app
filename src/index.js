import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import App from './components/app';
import IssueList from './components/issue_list';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/repos/:ownerId/:repoId/issues" component={IssueList} />
					<Route path="/" component={App} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
)
