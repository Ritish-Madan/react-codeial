import { APIUrls } from "../helpers/urls";
import { AUTHENTICATE_USER, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_START, SIGNUP_SUCCESS } from "./actionTypes";
import {getFormBody} from '../helpers/utils';

export function startLogin(){
    return{
        type: LOGIN_START
    };
}

export function loginFailed(errorMessage){
    return{
        type: LOGIN_FAIL,
        error: errorMessage,
    };
}

export function loginSuccess(user){
    return{
        type: LOGIN_SUCCESS,
        user
    };
}

export function signup_success(user){
    return{
        type: SIGNUP_SUCCESS,
        user
    }
}

export function signup_failed(errorMessage){
    return{
        type: SIGNUP_FAIL,
        error: errorMessage,
    };
}

export function signup_start(){
    return{
        type: SIGNUP_START
    };
}

export function login(email, password){
    return (dispatch) =>{
        dispatch(startLogin())
        const url = APIUrls.login();
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: getFormBody({email, password})
        })
        .then((response) =>response.json())
        .then((data) =>{
            console.log('data', data); 
            if(data.success){
                // Dispatch action to save user
                localStorage.setItem('token', data.data.token);
                dispatch(loginSuccess(data.data.user));
                return;
            }

        dispatch(loginFailed(data.message));
        })
    }
}

export function signup(email, password, name, confirm_password){
    return(dispatch) =>{
        dispatch(signup_start());
        const url = APIUrls.signup();
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: getFormBody({email, password, name,confirm_password})
        })
        .then((response) =>response.json())
        .then((data) =>{
            console.log('data', data); 
            if(data.success){
                // Dispatch action to save user
                localStorage.setItem('token', data.data.token)
                dispatch(signup_success(data.data.user));
                return;
            }

        dispatch(signup_failed(data.message));
        })
    }
}

export function authenticate(user){
    return{
        type: AUTHENTICATE_USER,
        user
    }
}

export function logout(){
    return{
        type: LOGOUT
    }
}