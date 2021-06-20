import { AUTHENTICATE_USER, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAIL, SIGNUP_START, SIGNUP_SUCCESS } from "../actions/actionTypes";

const initialAuthState = {
    user: {},
    error: null,
    isLoggedin: false,
    inProgress: false,
}

export default function auth(state = initialAuthState, action){
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                inProgress: true,
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                user: action.user,
                isLoggedin: true,
                inProgress: false
            }
        case LOGIN_FAIL:
            return{
                ...state,
                inProgress: false,
                error: action.error
            }
        case SIGNUP_START:
            return{
                ...state,
                inProgress: true,
            }
        case SIGNUP_FAIL:
            return{
                ...state,
                inProgress: false,
                error: action.error
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                inProgress: false,
                user: action.user,
                isLoggedin: true
            }
        case AUTHENTICATE_USER:
            return{
                ...state,
                user: action.user,
                isLoggedin: true
            }
        case LOGOUT:
            return{
                ...state,
                isLoggedin: false,
                user: {}
            }
        default:
            return state;
    }
}