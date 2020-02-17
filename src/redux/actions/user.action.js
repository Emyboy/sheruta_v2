import { UPLOAD_ERROR, UPLOAD_LOADING, SEND_REQUEST_ERROR, UPLOAD_SUCCESS, SEND_REQUEST_SUCCESS, TOGGLE_DONE_MODAL, SEARCH_ERROR, SEARCH_SUCCESS, SEARCH_LOADING, SEND_MESSAGE, SEND_MESSAGE_ERROR } from '.';
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
const searchSuccess = data => {
    return {
        type: SEARCH_SUCCESS,
        payload: data
    }
}
const searchError = error => {
    return {
        type: SEARCH_ERROR,
        payload: error
    }
}
const searchLoading = () => {
    return {
        type: SEARCH_LOADING,
        payload: {}
    }
}

const sendMessage = ({data, type}) => {
    if(type === 'success'){
        return {
            type: SEND_MESSAGE,
            payload: data
        }
    }else {
        return {
            type: SEND_MESSAGE_ERROR,
            payload: data
        }
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

export const sharedSignup = data => dispatch => {
    dispatch(uploadLoading());
    return Axios(`${process.env.REACT_APP_BASE_URL}/sharing/signup`, {
        method: 'POST',
        data
    }).then(res => {
        if(res.data.error){
            dispatch(uploadError(res.data.error));
            notification.error({message: 'Request Error!!'})
        }
        console.log('res',res)
    })
    .catch(err => {
        dispatch(uploadError(err));
        console.log('err',err)
    })
}

export const addToFavorite = data => dispatch => {
    return Axios(`${process.env.REACT_APP_BASE_URL}/cube/${data.userId}`, {
        data,
        method: 'POST'
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}

export const search = data => dispatch => {
    console.log('searchin ' ,data);
    dispatch(uploadLoading());
    const { area, bedrooms, sittingrooms, price, type } = data;
    return Axios(`${process.env.REACT_APP_BASE_URL}/search/${area}/${bedrooms}/${sittingrooms}/${type}/${price}`, {
        method: 'POST'
    })
        .then(res => {
            console.log(res);
            res.data.results.length > 0 ?
                dispatch(searchSuccess(res.data.results)) : dispatch(searchError(res.data))
        })
        .catch(err => {
            notification.error({message: "Error Loading Results!"});
            dispatch(searchError(err));
        })

}

export const SendMessage = data => dispatch => {
    return Axios(`${process.env.REACT_APP_BASE_URL}/message`, {
        data,
        method: 'POST'
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}
