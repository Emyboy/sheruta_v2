import { AGENT_LOADING, SET_AGENT_LIST } from "../actions"

const initialState = {
    agentList: [],
    loading: true
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
    default:
        return state
    }
}


