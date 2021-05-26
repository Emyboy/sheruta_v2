import { notification } from "antd";
import axios from "axios";

const user = JSON.parse(localStorage.getItem('state')).auth.user;

export const setAuthState = state => dispatch => {
    dispatch({
        type: 'SET_AUTH_STATE',
        payload: state
    })

}

export const logout = () => dispatch => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch({
        type: 'LOGOUT'
    })
};

export const getUser = () => dispatch => {
    console.log('%cgetting user --', 'color: red; font-size: 30px;')
    axios(process.env.REACT_APP_BASE_URL +"/users/me", {
        headers: {
            Authorization: 'Bearer ' + user.jwt
        },
    })
        .then(res => {
            console.log(res)
            dispatch({
                type: 'GET_USER',
                payload: res.data
            })
        })
        .catch(err => {
            notification.error({ message: 'Error fetching profile' })
            console.log(err)
        })
}

