import * as actionTypes from './actionTypes';

export const increment = () => ({
    type: actionTypes.INCREMENT
});

export const decrement = () => ({
    type: actionTypes.DECREMENT
});

const addResult = ( payload ) => {
    return {
        type: actionTypes.ADD,
        payload: { ...payload }
    }
};

export const add = (payload) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addResult(payload))
        }, 2000);
    }
};

export const subtract = (payload) => ({
    type: actionTypes.SUBTRACT,
    payload: { ...payload }
});