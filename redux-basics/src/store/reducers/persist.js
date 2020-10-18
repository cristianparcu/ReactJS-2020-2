import * as actionTypes from '../actions';

const initialState = {
    values : [5,7,10,15]
}

const reducer = { state= initialState, action} => {
    const {type} = action;
    const {SAVE} = actionTypes;

    switch (type) {
        case SAVE:
            const updatedValues = [
                ...state.values
            ];
            updatedValues.push(payload.value);

            return {
                ...state,
                values: updatedValues
            }
        default;
        return state;
    }
}