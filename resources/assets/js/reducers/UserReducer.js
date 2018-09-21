// Action Types
import {
    FETCH_USER_CREATE_REQUEST,
    FETCH_USER_CREATE_SUCCESS,
    FETCH_USER_CREATE_ERROR,
    FETCH_USER_LIST_REQUEST,
    FETCH_USER_LIST_SUCCESS,
    FETCH_USER_LIST_ERROR,
    GET_USER_DATA_EDIT,
    GET_USER_DATA_EDIT_ROLE,
    GET_USER_DATA_EDIT_STATUS,
} from '../actions/actionTypes';

// Initial State
const initialState = {
    message: '',
    loading: false,
    users: [],
    user: {
        id: '',
        role: '',
        status: '',
        password: '',
    }
};

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_USER_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload,
            }

        case FETCH_USER_CREATE_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
            }

        case FETCH_USER_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            }

        case FETCH_USER_LIST_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
            }

        case GET_USER_DATA_EDIT:
            return {
                ...state,
                user: {
                    id: action.payload.id,
                    role: action.payload.role,
                    status: action.payload.status,
                    password: action.payload.password,
                }
            }

        case GET_USER_DATA_EDIT_STATUS:
            return {
                ...state,
                user: {
                    status: action.payload.status,
                }
            }

        case GET_USER_DATA_EDIT_ROLE:
            return {
                ...state,
                user: {
                    role: action.payload.role,
                }
            }

        default:
            return state;
    }

};
