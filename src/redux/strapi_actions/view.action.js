import { notification } from "antd"
import axios from "axios"


export const getAllServices = () => dispatch => {
    axios(process.env.REACT_APP_BASE_URL + '/services')
        .then(res => {
            dispatch({
                type: 'GET_ALL_SERVICES',
                payload: res.data
            })
        })
        .catch(err => {
            notification.error({ message: 'Error fetching services' })
        })
}

export const getAllCategories = () => dispatch => {
    axios(process.env.REACT_APP_BASE_URL + '/categories')
        .then(res => {
            dispatch({
                type: 'GET_ALL_CATEGORIES',
                payload: res.data
            })
        })
        .catch(err => {
            notification.error({ message: 'Error fetching categories' })
        })
}

