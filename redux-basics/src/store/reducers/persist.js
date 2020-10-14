import * as actionTypes from '../actions';

const initialState = {
    values: []
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SAVE:
            return {
                ...state,
                values: [
                    ...state.values,
                    payload.value
                ]
            }
        default:
            return state;
    }
}

export default reducer;
