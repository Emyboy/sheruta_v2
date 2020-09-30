import {
    ADD_AGENT,
    AGENT_LOADING,
    AUTH_LOADING,
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    UPDATE_AUTH_PROGRESS
} from '../actions';

const initialState = {
    isLoggedIn: false,
    authLoading: false,
    user: null,
    error: false,
    agentData: null,
    agentLoading: false,
    progress: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                authLoading: false,
                user: null,
                error: false,
            }
        case LOGIN:
            return {
                ...state,
                authLoading: false,
                user: payload,
                error: false,
                isLoggedIn: true
            }
        case LOGIN_ERROR: 
            return {
                ...state,
                isLoggedIn: false,
                authLoading: false,
                user: null,
                error: payload,
            }
        case AUTH_LOADING:
            return {
                ...state,
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
        case UPDATE_AUTH_PROGRESS:
            return {
                ...state,
                progress: payload
            }
        default:
            return state
    }
}
