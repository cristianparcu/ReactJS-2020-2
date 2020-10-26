import * as actionTypes from './actionTypes';

export const logIn = (userName) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userName: userName
        }
    };
};

export const signUp = (userName) => {
    return {
        type: actionTypes.SIGN_UP,
        payload: {
            userName: userName
        }
    };
};

export const logOut = () => {
    return {
        type: actionTypes.LOG_OUT
    };
};
