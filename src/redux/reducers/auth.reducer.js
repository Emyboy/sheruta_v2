import {
    ADD_AGENT,
    AGENT_LOADING,
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
    agentData: null,
    agentLoading: false
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
                error: payload,
            }
        case AUTH_LOADING:
            return {
                isLoggedIn: false,
                authLoading: true,
                error: payload
            }
        case ADD_AGENT:
            return {
                ...state,
                agentData: payload
            }
        case AGENT_LOADING:
            return {
                ...state,
                agentLoading: payload
            }
        default:
            return state
    }
}
