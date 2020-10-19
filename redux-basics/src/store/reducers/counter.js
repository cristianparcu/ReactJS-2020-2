import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    const {INCREMENT, DECREMENT, ADD, SUBTRACT}= actionTypes;
    switch (type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                counter: state.counter - 1
            }
        case ADD:
            return {
                counter: state.counter + payload.value
            }
        case SUBTRACT:
            return {
                counter: state.counter - payload.value
            }
        default:
            return state;
    }
}

export default reducer;
