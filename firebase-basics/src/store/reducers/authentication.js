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
    handlingError: null
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
    console.log('logout')
    localStorage.removeItem('userSession')
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

const handleErrorFirebase = (state, action) => {
  return updateObject(state, { handlingError: action.payload.error });
}

const cleanErrors = (state, action) => {
  return updateObject(state, { handlingError: null })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.SIGN_UP: return signUp(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.START_LOADING_AUTH: return startLoading(state, action);
        case actionTypes.END_LOADING_AUTH: return endLoading(state, action);
        case actionTypes.ERROR_FIREBASE: return handleErrorFirebase(state, action);
        case actionTypes.CLEAN_ERRORS: return cleanErrors(state, action);
        default: return state;
    }
}

export default reducer;
