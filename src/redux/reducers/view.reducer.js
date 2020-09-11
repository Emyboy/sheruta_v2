import { 
    TOGGLE_LIGHT_BOX, 
    TOGGLE_NAVBAR, 
    DETAIL_LOADING,
    TOGGLE_ADD_NUMBER
} from "../actions"

const initialState = {
    showLightBox: false,
    showNavbar: false,
    imageViewerIndex: 0,
    detailLoading: false,
    showAddNumber: true
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_LIGHT_BOX:
            return {
                ...state,
                showLightBox: payload.lightBoxState,
                imageViewerIndex: payload.index
            }
        case TOGGLE_NAVBAR: 
            return {
                ...state,
                showNavbar: payload
            }
        case DETAIL_LOADING:
            return {
                ...state,
                detailLoading: !state.detailLoading
            }
        case TOGGLE_ADD_NUMBER:
            return {
                ...state,
                showAddNumber: !state.showAddNumber
            }
        default:
            return state
    }
}
