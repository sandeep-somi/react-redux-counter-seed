import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Link } from 'react-router';
import { browserHistory } from 'react-router'
import {createMemoryHistory} from 'history';
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store';
import { App }from './containers'
import Routes from './routes'

//const history = syncHistoryWithStore(createMemoryHistory(), store);
const history = createMemoryHistory(store);
ReactDOM.render(
	  <Provider store={store}>
	    <Router history={history}>
				<Routes />
	    </Router>
	  </Provider>,
  document.getElementById('app')
)
