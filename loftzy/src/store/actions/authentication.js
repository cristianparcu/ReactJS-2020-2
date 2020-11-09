import * as actionTypes from './actionTypes';
import axios from '../../Instances/axios-authentication';
import axiosDatabase from '../../Instances/axios-realtime';

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
  const saveCreatedUser = (localId)=>{
    return{
        type: actionTypes.SIGNUP,
        payload:{
            createdId:localId
        }
    }
  }
  const handleError = (error) =>{
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
 
  export const createAccount =(authData, onSuccessCallback)=>{
      return dispatch =>{

          axios.post('accounts:signUp?key='+API_KEY, authData)
          .then(response =>{
            const localId = response.data.localId;
            dispatch(saveCreatedUser(localId));
            if(onSuccessCallback){
                onSuccessCallback()
            }
        
          
          })
          .catch(error=>{
            dispatch(handleError(error.response.data.error.message))
   
          })
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
                dispatch(handleError(error.response.data.error.message))

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
