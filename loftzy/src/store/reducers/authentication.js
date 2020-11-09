import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: '',
        rol: '',
        idToken: '',
        localId: ''
    },
    loadingAuth: false,
    error:'',
    createdUser:''
}
const errorHandling = (state, action) =>{
    return updateObject(state,{
        error: action.payload.message
    })
}
const signUp = (state,action)=>{

    return updateObject(state,{
        createdUser:action.payload.createdId
    })
}
const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
          userName: action.payload.userName,
          rol: action.payload.userRol,
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
          localId: '',
          rol:''
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
        case actionTypes.SIGNUP: return signUp(state,action);
        case actionTypes.ERROR: return errorHandling(state,action);
        default: return state;
    }
}

export default reducer;