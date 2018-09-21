// Action Types
import {
    FETCH_PROJECT_CREATE_REQUEST,
    FETCH_PROJECT_CREATE_SUCCESS,
    FETCH_PROJECT_CREATE_ERROR,
    FETCH_PROJECT_LIST_REQUEST,
    FETCH_PROJECT_LIST_SUCCESS,
    FETCH_PROJECT_LIST_ERROR,
} from '../actions/actionTypes';

// Initial State
const initialState = {
    message: '',
    loading: false,
    data: [],
    projects: [],
    prev_page_url: null,
    next_page_url: null,
    current_page: '',
    last_page: '',
    path: '',
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

        case FETCH_PROJECT_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_PROJECT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                projects: action.payload.data,
                current_page: action.payload.current_page,
                last_page: action.payload.last_page,
                prev_page_url: action.payload.prev_page_url,
                next_page_url: action.payload.next_page_url,
                path: action.payload.path,
            }

        case FETCH_PROJECT_LIST_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
            }

        default:
            return state;
    }

};
