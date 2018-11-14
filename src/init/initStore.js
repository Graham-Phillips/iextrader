import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';


const composeEnhancers = composeWithDevTools({
	export: true,
});

const middleware = [thunkMiddleware];
// if (process.env.NODE_ENV !== 'production')
// {
// 	middleware.push(require('redux-logger').createLogger()); // neat middleware that logs actions
// }

export default function initStore(reducers)
{
	return createStore(
		combineReducers(reducers),
		composeEnhancers(applyMiddleware(...middleware)),
	);
}
