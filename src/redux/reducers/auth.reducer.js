import {
    AUTH_LOADING,
    LOGIN,
    LOGIN_ERROR,
    LOGOUT
} from '../actions';

const initialState = {
    isLoggedIn: false,
    authLoading: false,
    user: null,
    error: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGOUT:
            return {
                isLoggedIn: false,
                authLoading: false,
                user: null,
                error: false,
            }
        case LOGIN:
            return {
                authLoading: false,
                user: payload,
                error: false,
                isLoggedIn: true
            }
        case LOGIN_ERROR: 
            return {
                isLoggedIn: false,
                authLoading: false,
                user: null,
                error: true,
            }
        case AUTH_LOADING:
            return {
                isLoggedIn: false,
                authLoading: true,
                error: false
            }
        default:
            return state
    }
}
