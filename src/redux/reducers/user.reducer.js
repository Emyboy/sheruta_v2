import { UPLOAD_ERROR, UPLOAD_LOADING, UPLOAD_SUCCESS, SEND_REQUEST_ERROR, SEND_REQUEST_SUCCESS } from '../actions';

const initialState = {
    uploadLoading: false,
    upload: null,
    error: null,
    request: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case UPLOAD_LOADING:
            return {
                ...state,
                uploadLoading: true,
                error: null
            }
        case UPLOAD_SUCCESS:
            return {
                ...state,
                uploadLoading: false,
                upload: payload,
                error: null
            }
        case UPLOAD_ERROR:
            return {
                ...state,
                uploadLoading: false,
                upload: null,
                error: payload
            }
        case SEND_REQUEST_SUCCESS:
            return {
                ...state,
                request: payload,
                error: false,
                uploadLoading: false
            }
        case SEND_REQUEST_ERROR:
            return {
                ...state,
                request: payload,
                error: true,
                uploadLoading: false
            }
        default:
            return state
    }
}
