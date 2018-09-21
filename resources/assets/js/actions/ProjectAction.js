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