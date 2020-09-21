import { ADD_AGENT, AGENT_LOADING } from "../actions"

const initialState = {
    agentData: null,
    agentLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

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


