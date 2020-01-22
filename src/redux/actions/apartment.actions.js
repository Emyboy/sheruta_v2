import { GET_APARTMENT_ERROR, GET_APARTMENT_SUCCESS } from '.'
import Axios from 'axios'


const getApartmentSuccess = payload => {
    return {
        type: GET_APARTMENT_SUCCESS,
        payload
    }
}

const getApartmentError = error => {
    return {
        type: GET_APARTMENT_ERROR,
        payload: error
    }
}

export const getRecentApartments = data => dispatch => {
    return Axios(`${process.env.REACT_APP_BASE_URL}/hostels/limit/6`)
        .then(res => {
            switch (res.data.message) {
                case 'success':
                    dispatch(getApartmentSuccess(res.data.apartment));
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

export const getApartmentById = id => dispatch => {
    return Axios(`${process.env.REACT_APP_BASE_URL}/hostels/${id}`)
        .then(res => {
            switch (res.data.message) {
                case 'success':
                    dispatch(getApartmentSuccess(res.data.hostel[0]));
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
