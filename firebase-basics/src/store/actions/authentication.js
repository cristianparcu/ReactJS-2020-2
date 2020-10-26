import * as actionTypes from './actionTypes';

const startAuthLoading = () => {
  return {
      type: actionTypes.START_LOADING_AUTH
  }
}

const endAuthLoading = () => {
  return {
      type: actionTypes.END_LOADING_AUTH
  }
}

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
