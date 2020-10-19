import * as actionTypes from '../actions';

const initState = {
    counters: []
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SAVE:
            return {
                counters: [...state.counters, action.payload.value]
            }
        default:
            return state;
    }
}

export default reducer;