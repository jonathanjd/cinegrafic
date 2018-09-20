// Action Types
import {
    CHANGE_MESSAGE_ALERT,
} from './actionTypes';

export const changeMessageAlert = (payload) => {
    return {
        type: CHANGE_MESSAGE_ALERT,
        payload: payload
    }
}
