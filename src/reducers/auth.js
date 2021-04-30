import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes";

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
                isLoggedin: true
            }
        case LOGIN_FAIL:
            return{
                ...state,
                inProgress: false,
                error: action.error
            }
        default:
            return state;
    }
}