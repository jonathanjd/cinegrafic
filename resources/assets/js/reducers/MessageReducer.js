// Action Types
import {
    CHANGE_MESSAGE_ALERT,
} from '../actions/actionTypes';

// Initial State
const initialState = {
    type: '',
    message: '',
};

export default function messageReducer(state = initialState, action) {

    switch (action.type) {
        case CHANGE_MESSAGE_ALERT:
            return {
                ...state,
                type: action.payload.type,
                message: action.payload.message,
            }

        default:
            return state;
    }

}
