// Dependencies
import axios from 'axios';

// Action Types
import {
    FETCH_PAGINATION_REQUEST,
    FETCH_PAGINATION_SUCCESS,
    FETCH_PAGINATION_ERROR,
} from './actionTypes';

import {
    request,
    received,
    error
} from './baseActions';


export const fetchPagination = (url) => dispatch => {

    dispatch(request(FETCH_PAGINATION_REQUEST));

    return new Promise((resolve, reject) => {
        axios.get(`${url}`).then(response => {
            if (response.status === 200) {
                dispatch(received(FETCH_PAGINATION_SUCCESS, response.data));
                resolve();
            } else {
                dispatch(error(FETCH_PAGINATION_ERROR, response.data));
                reject();
            }
        }).catch(error => {
            dispatch(error(FETCH_PAGINATION_ERROR, error.response));
            reject();
        });

    });

}
