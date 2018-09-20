import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import Root from './containers/Root';
import rootReducer from './reducers';


const store = configureStore({
    initialState: {},
}, rootReducer);

const RootComponent = (
    <Provider store={store}>
        <Root />
    </Provider>
);
if (document.getElementById('app')) {
    ReactDOM.render(RootComponent , document.getElementById('app'));
}
