import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-authentication';

const API_KEY = 'AIzaSyBOwVX7Zqchg1pnCZrwIJ7jPJnSL3CXmQw';

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
                console.log(error);
                
                dispatch(Error_Handing(error.response.data.error.message))
                console.log(error.response.data.error.message);
                dispatch(endAuthLoading());
            })
    }
  };    
  
export const logOut = () => {
    return {
        type: actionTypes.LOG_OUT
    };
  };
