// Action Types
import {
    FETCH_PROJECT_CREATE_REQUEST,
    FETCH_PROJECT_CREATE_SUCCESS,
    FETCH_PROJECT_CREATE_ERROR,
} from '../actions/actionTypes';

// Initial State
const initialState = {
    message: '',
    loading: false,
};

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_PROJECT_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_PROJECT_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload,
            }

        case FETCH_PROJECT_CREATE_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
            }

        default:
            return state;
    }

};
