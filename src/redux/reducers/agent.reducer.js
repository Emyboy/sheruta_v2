import {
    AGENT_LOADING, SET_AGENT_LIST,
    SET_AGENT_PROPERTIES
} from "../actions"

const initialState = {
    agentList: [],
    loading: true,
    agentProperties: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AGENT_LIST:
            return {
                ...state,
                agentList: payload
            }
        case AGENT_LOADING:
            return {
                ...state,
                loading: payload
            }
        case SET_AGENT_PROPERTIES:
            return {
                ...state,
                agentProperties: payload
            }
        default:
            return state
    }
}


