import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: '',
        role: '',
        idToken: '',
        localId: ''
    },
    loadingAuth: false,
    error:''
}
const Error_Handing = (state, action) =>{
    return updateObject(state,{
        error: action.payload.message
    })
}
const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
          userName: action.payload.userName,
          role: action.payload.role,
          idToken: action.payload.idToken,
          localId: action.payload.localId
        },
        error: ''
    });
}
const logOut = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: false,
        userLoggedIn: {
          userName: '',
          idToken: '',
          localId: ''
        }
    });
}
const startLoading = (state, action) => {
    return updateObject(state, { loadingAuth: true });
  }
  
  const endLoading = (state, action) => {
    return updateObject(state, { loadingAuth: false });
  }
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.START_LOADING_AUTH: return startLoading(state, action);
        case actionTypes.END_LOADING_AUTH: return endLoading(state, action);
        case actionTypes.ERROR_HANDLING: return Error_Handing(state,action);
        default: return state;
    }
}

export default reducer;