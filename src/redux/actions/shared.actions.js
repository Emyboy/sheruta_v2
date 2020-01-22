import { GET_SHARED_ERROR, GET_SHARED_SUCCESS } from '.'
import Axios from 'axios'


const getApartmentSuccess = payload => {
    return {
        type: GET_SHARED_SUCCESS,
        payload
    }
}

const getApartmentError = error => {
    return {
        type: GET_SHARED_ERROR,
        payload: error
    }
}

export const getRecentApartments = data => dispatch => {
    return Axios(`${process.env.REACT_APP_BASE_URL}/shared`)
        .then(res => {
            switch (res.data.message) {
                case 'success':
                    dispatch(getApartmentSuccess(res.data.shared));
                    break;
                case 'faild':
                    dispatch(getApartmentError(res.data));
                    break;
                default:
                    break;
            }
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            getApartmentError(err);
        })
}

/**
 * @description - This method get shared apartment by id
 * @param {id} id 
 */
export const getSharedById = id => dispatch => {
    return Axios(`${process.env.REACT_APP_BASE_URL}/shared/${id}`)
        .then(res => {
            switch (res.data.message) {
                case 'success':
                    dispatch(getApartmentSuccess(res.data.shared[0]));
                    break;
                case 'faild':
                    dispatch(getApartmentError(res.data));
                    break;
                default:
                    break;
            }
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}
