import { UPLOAD_ERROR, UPLOAD_LOADING, SEND_REQUEST_ERROR, UPLOAD_SUCCESS, SEND_REQUEST_SUCCESS, TOGGLE_DONE_MODAL } from '.';
import Axios from 'axios';
import { notification } from 'antd';

export const toggleDoneModal = (isOpen) => {
    return {
        type: TOGGLE_DONE_MODAL,
        payload: isOpen
    }
}

const uploadLoading = () => {
    return {
        type: UPLOAD_LOADING,
    }
}

const uploadSuccess = data => {
    return {
        type: UPLOAD_SUCCESS,
        payload: data
    }
}

const uploadError = error => {
    return {
        type: UPLOAD_ERROR,
        payload: error
    }
}

const sendRequestSuccess = payload => {
    return {
        type: SEND_REQUEST_SUCCESS,
        payload
    }
}

const sendRequestError = error => {
    return {
        type: SEND_REQUEST_ERROR,
        payload: error
    }
}

export const uploadApartment = data => dispatch => {
    dispatch(uploadLoading());
    return Axios(`${process.env.REACT_APP_BASE_URL}/hostels`, {
        method: 'POST',
        data
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
}
export const sendRequest = data => dispatch => {
    console.log('sending request', data);
    dispatch(uploadLoading());
    return Axios(`${process.env.REACT_APP_BASE_URL}/message`, {
        method: 'POST',
        data
    })
        .then(res => {
            if(res.data.status === 200){
                notification.success({message: 'Request Sent..'})
                dispatch(sendRequestSuccess(res.data));
                dispatch(toggleDoneModal(true));
            }else {
                notification.error({message: 'Request Not Sent..'})
                dispatch(sendRequestError(res.data))
            }
        })
        .catch(err => {
            notification.error({message: 'Request Error!'})
            dispatch(sendRequestError(err));
        })
}
