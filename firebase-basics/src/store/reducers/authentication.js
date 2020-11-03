import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: '',
        idToken: '',
        localId: ''
    },
    loadingAuth: false,
    errors: false
}

const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
          userName: action.payload.userName,
          idToken: action.payload.idToken,
          localId: action.payload.localId
        }
    });
}

const setErrors = (state, action) => {
  return updateObject (state, {errors: true});
}

const signUp = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
          userName: action.payload.userName,
          idToken: action.payload.idToken,
          localId: action.payload.localId
        }
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
        case actionTypes.SIGN_UP: return signUp(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.START_LOADING_AUTH: return startLoading(state, action);
        case actionTypes.END_LOADING_AUTH: return endLoading(state, action);
        case actionTypes.ERRORS: return setErrors(state,action);
        default: return state;
    }
}

export default reducer;
