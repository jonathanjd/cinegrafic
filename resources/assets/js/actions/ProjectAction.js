// Dependencies
import axios from 'axios';
import {
    myURL
} from '../utils/url';
// Action Types
import {
    FETCH_PROJECT_CREATE_REQUEST,
    FETCH_PROJECT_CREATE_SUCCESS,
    FETCH_PROJECT_CREATE_ERROR,
    FETCH_PROJECT_LIST_REQUEST,
    FETCH_PROJECT_LIST_SUCCESS,
    FETCH_PROJECT_LIST_ERROR,
    FETCH_PROJECT_SHOW_REQUEST,
    FETCH_PROJECT_SHOW_SUCCESS,
    FETCH_PROJECT_SHOW_ERROR,
    FETCH_PROJECT_DELETE_REQUEST,
    FETCH_PROJECT_DELETE_SUCCESS,
    FETCH_PROJECT_DELETE_ERROR,
    GET_PROJECT_DATA,
} from './actionTypes';

import {
    request,
    received,
    error
} from './baseActions';


export const fetchProjectCreate = (data) => dispatch => {
    dispatch(request(FETCH_PROJECT_CREATE_REQUEST));

    return new Promise((resolve, reject) => {
        axios.post(`${myURL}/projects`, data).then(response => {
            if (response.status === 200) {
                dispatch(received(FETCH_PROJECT_CREATE_SUCCESS, response.data));
                resolve();
            } else {
                dispatch(error(FETCH_PROJECT_CREATE_ERROR, response.data));
                reject();
            }
        }).catch(error => {
            dispatch(error(FETCH_PROJECT_CREATE_ERROR, error.response));
            reject();
        });

    });

}

export const fetchProjectList = () => dispatch => {
    dispatch(request(FETCH_PROJECT_LIST_REQUEST));

    return new Promise((resolve, reject) => {
        axios.get(`${myURL}/projects`).then(response => {
            if (response.status === 200) {
                dispatch(received(FETCH_PROJECT_LIST_SUCCESS, response.data));
                resolve();
            } else {
                dispatch(error(FETCH_PROJECT_LIST_ERROR, response.data));
                reject();
            }
        }).catch(error => {
            dispatch(error(FETCH_PROJECT_LIST_ERROR, error.response));
            reject();
        });

    });

}

export const fetchProjectShow = (id) => dispatch => {
    dispatch(request(FETCH_PROJECT_SHOW_REQUEST));

    return new Promise((resolve, reject) => {
        axios.get(`${myURL}/projects/${id}`).then(response => {
            if (response.status === 200) {
                dispatch(received(FETCH_PROJECT_SHOW_SUCCESS, response.data));
                resolve();
            } else {
                dispatch(error(FETCH_PROJECT_SHOW_ERROR, response.data));
                reject();
            }
        }).catch(error => {
            dispatch(error(FETCH_PROJECT_SHOW_ERROR, error.response));
            reject();
        });

    });

}

export const fetchProjectDelete = (id) => dispatch => {
    dispatch(request(FETCH_PROJECT_DELETE_REQUEST));

    return new Promise((resolve, reject) => {
        axios.delete(`${myURL}/projects/${id}`).then(response => {
            if (response.status === 200) {
                dispatch(received(FETCH_PROJECT_DELETE_SUCCESS, response.data));
                resolve();
            } else {
                dispatch(error(FETCH_PROJECT_DELETE_ERROR, response.data));
                reject();
            }
        }).catch(error => {
            dispatch(error(FETCH_PROJECT_DELETE_ERROR, error.response));
            reject();
        });

    });

}

export const getProjectData = (payload) => {
    return {
        type: GET_PROJECT_DATA,
        payload: payload
    }
}
