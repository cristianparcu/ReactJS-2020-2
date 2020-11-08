import * as actionTypes from './actionTypes';
import axios from '../../Instances/axios-authentication';
import axiosDatabase from '../../Instances/axios-realtime'
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
  const saveSession = (userName, token, localId,rol) => {
    return {
        type: actionTypes.LOGIN,
        payload: {
            userName: userName,
            idToken: token,
            localId: localId,
            userRol: rol
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
        
                
          axiosDatabase.get('.json')
          .then(response =>{
             const user = response.data.Users[localId]           
             const rol = user.rol;
             const name= user.name;

            
             dispatch(saveSession(name, token, localId,rol));
             
             let userSession = {
                token,
                userEmail,
                localId,
                rol
            };
            
            userSession = JSON.stringify(userSession);
  
            console.log(response);
            
            localStorage.setItem('userSession', userSession);

          }
          )
          .catch(error => {
               console.log(error);   
            })
            
        
               
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
  
            dispatch(saveSession(userSession.userEmail, userSession.token, userSession.localId,userSession.rol));
        }
    }
  }
export const logOut = () => {
    localStorage.clear();
    return {
        type: actionTypes.LOG_OUT
    };
  };
