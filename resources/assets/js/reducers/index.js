// dependencies
import {
    combineReducers
} from 'redux';
import {
    reducer as reduxForm
} from 'redux-form';
// import reducers...
import user from './UserReducer';
import message from './MessageReducer';


const rootReducer = combineReducers({
    user,
    message,
    form: reduxForm,
});

export default rootReducer;
