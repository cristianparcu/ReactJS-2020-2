import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-authentication';

const API_KEY = 'AIzaSyDYkIUTN0J0neg-zWIE1xCrlH34_Emt6VU'

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

const saveSession = (userName) => {
  return {
      type: actionTypes.LOGIN,
      payload: {
          userName: userName
      }
  };
};

const saveSignUp = (userName) => {
  return {
      type: actionTypes.SIGN_UP,
      payload: {
          userName: userName
      }
  };
};

export const logIn = (authData, onSuccessCallback) => {
  return dispatch => {
      dispatch(startAuthLoading());
      axios.post('/accounts:signInWithPassword?key='+API_KEY, authData)
          .then(response => {
              console.log(response);

              dispatch(saveSession(authData.email));
              dispatch(endAuthLoading());

              if (onSuccessCallback) {
                  onSuccessCallback();
              }
          })
          .catch(error => {
              console.log(error);

              dispatch(endAuthLoading());
          })
  }
};

export const signUp = (authData, onSuccessCallback) => {
  return dispatch => {
      dispatch(startAuthLoading());
      axios.post('/accounts:signUp?key='+API_KEY, authData)
          .then(response => {
              console.log(response);

              dispatch(saveSignUp(authData.email));
              dispatch(endAuthLoading());

              if (onSuccessCallback) {
                  onSuccessCallback();
              }
          })
          .catch(error => {
              console.log(error);

              dispatch(endAuthLoading());
          })
  }
};

export const logOut = () => {
  return {
      type: actionTypes.LOG_OUT
  };
};
