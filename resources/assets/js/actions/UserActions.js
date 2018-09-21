// Dependencies
import axios from 'axios';
import {
    myURL
} from '../utils/url';
// Action Types
import {
    FETCH_USER_CREATE_REQUEST,
    FETCH_USER_CREATE_SUCCESS,
    FETCH_USER_CREATE_ERROR,
    FETCH_USER_UPDATE_REQUEST,
    FETCH_USER_UPDATE_SUCCESS,
    FETCH_USER_UPDATE_ERROR,
    FETCH_USER_LIST_REQUEST,
    FETCH_USER_LIST_SUCCESS,
    FETCH_USER_LIST_ERROR,
    GET_USER_DATA_EDIT,
    GET_USER_DATA_EDIT_ROLE,
    GET_USER_DATA_EDIT_STATUS,
} from './actionTypes';

import {
    request,
    received,
    error
} from './baseActions';

export const fetchUserCreate = (data) => dispatch => {
    dispatch(request(FETCH_USER_CREATE_REQUEST));

    return new Promise((resolve, reject) => {
        axios.post(`${myURL}/users`, data).then(response => {
            if (response.status === 200) {
                dispatch(received(FETCH_USER_CREATE_SUCCESS, response.data));
                resolve();
            } else {
                dispatch(error(FETCH_USER_UPDATE_ERROR, response.data));
                reject();
            }
        }).catch(error => {
            dispatch(error(FETCH_USER_UPDATE_ERROR, error.response));
            reject();
        });

    });

}

export const fetchUserUpdate = (data) => dispatch => {
    dispatch(request(FETCH_USER_UPDATE_REQUEST));

    return new Promise((resolve, reject) => {
        axios.patch(`${myURL}/users/${data.id}`, data).then(response => {
            if (response.status === 200) {
                dispatch(received(FETCH_USER_UPDATE_SUCCESS, response.data));
                resolve();
            } else {
                dispatch(error(FETCH_USER_CREATE_ERROR, response.data));
                reject();
            }
        }).catch(error => {
            dispatch(error(FETCH_USER_CREATE_ERROR, error.response));
            reject();
        });

    });

}

export const fetchUserList = () => dispatch => {
    dispatch(request(FETCH_USER_LIST_REQUEST));

    return new Promise((resolve, reject) => {
        axios.get(`${myURL}/users`).then(response => {
            if (response.status === 200) {
                dispatch(received(FETCH_USER_LIST_SUCCESS, response.data));
                resolve();
            } else {
                dispatch(error(FETCH_USER_LIST_ERROR, response.data));
                reject();
            }
        }).catch(error => {
            dispatch(error(FETCH_USER_LIST_ERROR, error.response));
            reject();
        });

    });
}

export const getUserDataEdit = (payload) => {
    return {
        type: GET_USER_DATA_EDIT,
        payload
    }
}

export const getUserDataEditRole = (payload) => {
    return {
        type: GET_USER_DATA_EDIT_ROLE,
        payload
    }
}

export const getUserDataEditStatus = (payload) => {
    return {
        type: GET_USER_DATA_EDIT_STATUS,
        payload
    }
}
