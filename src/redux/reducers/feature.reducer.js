import {
    FEATURE_LOADING,
    FEATURE_SUCCESS,
    FEATURE_ERROR,
    FEATURE_MESSAGE
} from '../actions';

const initialState = {
    isLoading: false,
    featureData: null,
    displayMessage: null,
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FEATURE_LOADING:
            return {
                ...state,
                isLoading: true,
                displayMessage: 'Uploading..'
            }
        case FEATURE_MESSAGE:
            return {
                ...state,
                isLoading: true,
                displayMessage: payload
            }
        case FEATURE_SUCCESS:
            return {
                ...state,
                featureData: payload,
                isLoading: false,
                error: null,
                displayMessage: "Upload Done"
            }
        case FEATURE_ERROR:
            return {
                ...state,
                featureData: payload,
                isLoading: false,
                error: null,
                displayMessage: "Upload Done"
            }
        default:
            return state
    }
}
