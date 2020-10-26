import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: ''
    }
}

const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName
        }
    });
}

const signUp = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName
        }
    });
}

const logOut = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: false,
        userLoggedIn: {
            userName: ''
        }
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.SIGN_UP: return signUp(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        default: return state;
    }
}

export default reducer;
