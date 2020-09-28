import { TOGGLE_LIGHT_BOX, TOGGLE_NAVBAR, DETAIL_LOADING } from "../actions"

const initialState = {
    showLightBox: false,
    showNavbar: false,
    imageViewerIndex: 0,
    detailLoading: false
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
        default:
            return state
    }
}
