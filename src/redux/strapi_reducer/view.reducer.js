
const initialState = {
    services: [],
    categories: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'GET_ALL_SERVICES':
            return { ...state, services: payload }

        case 'GET_ALL_CATEGORIES':
            return { ...state, categories: payload }

        default:
            return state
    }
}
