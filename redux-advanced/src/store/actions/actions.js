export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const increment = () => ({
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});

const addResult = ( payload ) => {
    return {
        type: ADD,
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
    type: SUBTRACT,
    payload: { ...payload }
});
