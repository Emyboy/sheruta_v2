import { TOGGLE_LIGHT_BOX } from "../actions"

const initialState = {
    showLightBox: false,
    imageViewerIndex: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_LIGHT_BOX:
            return {
                ...state,
                showLightBox: payload.lightBoxState,
                imageViewerIndex: payload.index
            }
        default:
            return state
    }
}
