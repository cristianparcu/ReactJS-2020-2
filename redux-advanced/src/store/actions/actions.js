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

export const add = (payload) => ({
    type: ADD,
    payload: { ...payload }
});

export const subtract = (payload) => ({
    type: SUBTRACT,
    payload: { ...payload }
});
