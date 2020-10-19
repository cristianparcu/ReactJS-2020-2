const redux = require('redux');

const initialState = {
  counter: 0
}

const ACTION_TYPES = {
  INC_COUNTER: 'INC_COUNTER',
  ADD_COUNTER: 'ADD_COUNTER'
}

// Reducer
const rootReducer = (state=initialState, action) => {
  const type = action.type;

  switch (type) {
    case ACTION_TYPES.INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case ACTION_TYPES.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload.value
      };
    default:
      return state;
  }
}

// Store
const store = redux.createStore(rootReducer);
console.log('[Initial Store]:', store.getState());

// Subscriber
store.subscribe(() => {
  console.log('[Subscription]:', store.getState());
})

// Dispatch actions
store.dispatch({
  type: ACTION_TYPES.INC_COUNTER,
  payload: {}
});

store.dispatch({
  type: ACTION_TYPES.ADD_COUNTER,
  payload: {
    value: 10
  }
});

console.log('[Updated Store]:', store.getState())
