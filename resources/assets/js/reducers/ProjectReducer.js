// Action Types
import {
    FETCH_PROJECT_CREATE_REQUEST,
    FETCH_PROJECT_CREATE_SUCCESS,
    FETCH_PROJECT_CREATE_ERROR,
    FETCH_PROJECT_LIST_REQUEST,
    FETCH_PROJECT_LIST_SUCCESS,
    FETCH_PROJECT_LIST_ERROR,
    FETCH_PAGINATION_REQUEST,
    FETCH_PAGINATION_SUCCESS,
    FETCH_PAGINATION_ERROR,
    FETCH_PROJECT_SHOW_REQUEST,
    FETCH_PROJECT_SHOW_SUCCESS,
    FETCH_PROJECT_SHOW_ERROR,
} from '../actions/actionTypes';

// Initial State
const initialState = {
    message: '',
    loading: false,
    data: [],
    projects: [],
    project: '',
    usersByProject: [],
    prev_page_url: null,
    next_page_url: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROJECT_CREATE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_PROJECT_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            };

        case FETCH_PROJECT_CREATE_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload
            };

        case FETCH_PROJECT_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_PROJECT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                projects: action.payload.data,
                prev_page_url: action.payload.prev_page_url,
                next_page_url: action.payload.next_page_url
            };

        case FETCH_PROJECT_LIST_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload
            };

        case FETCH_PAGINATION_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_PAGINATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                projects: action.payload.data,
                prev_page_url: action.payload.prev_page_url,
                next_page_url: action.payload.next_page_url
            };

        case FETCH_PAGINATION_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload
            };

        case FETCH_PROJECT_SHOW_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_PROJECT_SHOW_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                project: action.payload,
                usersByProject: action.payload.users
            };

        case FETCH_PROJECT_SHOW_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload
            };

        default:
            return state;
    }
}
