import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
const router = routerMiddleware(history);

export const configureStore = (options, rootReducer) => {

    const { initialState = {} } = options;

    const middlewares = [
        thunk,
        router,
    ];

    return createStore(rootReducer, initialState, composeEnchancers(applyMiddleware(...middlewares)));

}
