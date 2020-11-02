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

const saveSession = (userName, token, localId) => {
  return {
      type: actionTypes.LOGIN,
      payload: {
          userName: userName,
          idToken: token,
          localId: localId
      }
  };
};

const saveSignUp = (userName, token, localId) => {
  return {
      type: actionTypes.SIGN_UP,
      payload: {
          userName: userName,
          idToken: token,
          localId: localId
      }
  };
};

const setError = (error) =>{
    switch (error){
        case "INVALID_EMAIL":
        return {
            type:actionTypes.ERROR,
            payload:{
                message : "Your email address appears to be malformed."
            }
        };
      case "INVALID_PASSWORD":
        return {
            type:actionTypes.ERROR,
            payload:{
                message : "Your password is wrong."
            }
        };

      case "USER_NOT_FOUND":
        return {
            type:actionTypes.ERROR,
            payload:{
                message : "User with this email doesn't exist."
            }
        };
      case "USER_DISABLED":
       return  {
           type:actionTypes.ERROR,
        payload:{
            message : "User with this email has been disabled."
        }
    };
      case "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.":
        return {
            type:actionTypes.ERROR,
            payload:{
                message : "Too many requests. Try again later."
            }
        };
        case "MISSING_PASSWORD":
        return {
            type:actionTypes.ERROR,
            payload:{
                message : "Type a password please"
            }
        };
        case "EMAIL_NOT_FOUND":
            return {
                type:actionTypes.ERROR,
                payload:{
                    message : "this email doesnt exist donut"
                }
            };
      case "OPERATION_NOT_ALLOWED":
        return {
            type:actionTypes.ERROR,
            payload:{
                message : "Signing in with Email and Password is not enabled."
            }
        };
      default:
       return  {
        type:actionTypes.ERROR,
        payload:{
            message : "Hmmmm somethings wrong..."
        }
    };
    }
}

export const logIn = (authData, onSuccessCallback) => {
  return dispatch => {
      dispatch(startAuthLoading())
      axios.post('/accounts:signInWithPassword?key='+API_KEY, authData)
          .then(response => {
              const userEmail = authData.email;
              const token = response.data.idToken;
              const localId = response.data.localId;
              let userSession = {
                  token,
                  userEmail,
                  localId
              };

              userSession = JSON.stringify(userSession);

              console.log(response);

              localStorage.setItem('userSession', userSession);

              dispatch(saveSession(userEmail, token, localId));
              dispatch(endAuthLoading());

              if (onSuccessCallback) {
                  onSuccessCallback();
              }
          })
          .catch(error => {
              console.log(error.response.data.error.message);
              dispatch(setError(error.response.data.error.message))
              dispatch(endAuthLoading());
          })
  }
};

export const signUp = (authData, onSuccessCallback) => {
  return dispatch => {
      dispatch(startAuthLoading());
      axios.post('/accounts:signUp?key='+API_KEY, authData)
          .then(response => {
            const userEmail = authData.email;
            const token = response.data.idToken;
            const localId = response.data.localId;
            let userSession = {
                token,
                userEmail,
                localId
            };

            userSession = JSON.stringify(userSession);

            console.log(response);

            localStorage.setItem('userSession', userSession);

            dispatch(saveSignUp(userEmail, token, localId));
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

export const persistAuthentication = () => {
  return dispatch => {
      let userSession = localStorage.getItem('userSession');

      if(!userSession) {
          dispatch(logOut());
      } else {
          userSession = JSON.parse(userSession);

          dispatch(saveSession(userSession.userEmail, userSession.token, userSession.localId));
      }
  }
}

export const logOut = () => {
  return {
      type: actionTypes.LOG_OUT
  };
};
