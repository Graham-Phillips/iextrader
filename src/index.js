import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import initStore from './init/initStore';
import { Provider } from 'react-redux';
import marketsReducer from './reducers/MarketsReducer';
import AppRouter from './router/AppRouter';

export const store = initStore({
	marketsReducer,
  
});

ReactDOM.render(
	<Provider store = {store}>
		<AppRouter />
	</Provider>,
	document.getElementById('app-root')
);