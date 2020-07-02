import { TOGGLE_LIGHT_BOX, TOGGLE_NAVBAR } from '.'
import Axios from 'axios';

export const toggleLightBox = (lightBoxState, index) => {
    console.log('showing');
    return {
        type: TOGGLE_LIGHT_BOX,
        payload: { lightBoxState: !lightBoxState, index}
    }
}

export const toggleNavbar = boolen => {
    return {
        type: TOGGLE_NAVBAR,
        payload: boolen
    }
}

// const requestSuccess = payload => {
//     return {
//         type: REQUEST_SUCCESS,
//         payload
//     }
// }

// const requestError = error => {
//     return {
//         type: REQUEST_ERROR,
//         payload: error
//     }
// }

export const getAllAreas = () => dispatch => {
    alert('working')
    return Axios(`${process.env.REACT_APP_BASE_URL}/views/area`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}
