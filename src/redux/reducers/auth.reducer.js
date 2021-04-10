

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
        case "SET_AUTH_STATE":
            return {
                ...state,
                ...payload
            }
            case 'LOGOUT':
                return initialState
        default:
            return state
    }
}
