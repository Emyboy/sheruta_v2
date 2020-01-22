import {
  SIGNUP,
  SIGNUP_ERROR,
  LOGIN,
  LOGIN_ERROR,
  AUTH_LOADING,
  LOGOUT,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
} from ".";

import { notification } from "antd";

import Axios from "axios";


const loginSuccess = payload => {
  return {
    type: LOGIN,
    payload
  }
}

const loginError = error => {
  return {
    type: LOGIN_ERROR,
    payload: error
  }
}

export const login = data => dispatch => {
  return Axios(`${process.env.REACT_APP_BASE_URL}/login`, {
    method: 'POST',
    data
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
}
