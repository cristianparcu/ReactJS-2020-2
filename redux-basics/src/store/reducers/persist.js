import * as actionTypes from '../actions';

const initialState = {
  values: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE:
        return {
            values: [...state.values, action.payload.value]
        }
    default:
        return state;
  }
}

export default reducer;