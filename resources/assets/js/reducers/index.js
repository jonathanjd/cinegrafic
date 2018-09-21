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
import project from './ProjectReducer';


const rootReducer = combineReducers({
    user,
    message,
    project,
    form: reduxForm,
});

export default rootReducer;
