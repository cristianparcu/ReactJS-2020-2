const redux = require('redux');

const initialState = {
  counter: 0
}

const ACTION_TIPOS = {
  INC_COUNTER: 'INC_COUNTER',
  ADD_COUNTER: 'ADD_COUNTER'
}

//REDUCER
const rootreducer =(state=initialState, action) => {
  const type = action.type;
  switch (type) {
    case ACTION_TIPOS.INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case ACTION_TIPOS.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload.value
      };
    default:
      return state;
  }
};

//STORE
const store = redux.createStore(rootreducer);
console.log('[Initial Store]:', store.getState());


//SUBS

store.subscribe(() => {
  console.log ('[Subscription]:', store.getState())
})

//DISPATCH
const incCounterAction = {
  type: ACTION_TIPOS.INC_COUNTER,
  payload: {
  }
}

store.dispatch(incCounterAction)

store.dispatch({
  type: ACTION_TIPOS.ADD_COUNTER,
  payload: {
    value: 10
  }
})

console.log('[Updated Store]:', store.getState())

