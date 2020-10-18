import * as actionTypes from '../actions';

const initialState = {
    values: []
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
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
        default:
            return state;
    }
}

export default reducer;