import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const increment = (state, payload) => {
    const counter = state.counter + 1;
    return updateObject(state, {counter: counter});
}

const decrement = (state, payload) => {
    const counter = state.counter - 1;
    return updateObject(state, {counter: counter});
}

const add = (state, payload) => {
    const counter = state.counter + payload.value;
    return updateObject(state, {counter: counter});
}

const subtract = (state, payload) => {
    const counter = state.counter - payload.value;
    return updateObject(state, {counter: counter});
}

const reducer = (state = initialState, action) => {
    const payload = action.payload;

    switch (action.type) {
        case actionTypes.INCREMENT: return increment(state, payload);
        case actionTypes.DECREMENT: return decrement(state, payload);
        case actionTypes.ADD:       return add(state, payload);
        case actionTypes.SUBTRACT:  return subtract(state, payload);
        default:                    return state;
    }
}

export default reducer;
