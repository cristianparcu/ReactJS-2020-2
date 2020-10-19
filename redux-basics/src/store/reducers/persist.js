import * as actionTypes from '../actions';

const initialState = {
  counter: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE:
        return {
            counter: [...state.counter, action.payload.value]
        }
    default:
        return state;
  }
}

export default reducer;