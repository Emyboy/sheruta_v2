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

const authLoading = () => {
  return {
    type: AUTH_LOADING
  }
}

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

const logoutUser = () => {
  return {
    type: LOGOUT
  }
}

export const logout = () => dispatch => {
  console.log('logedout....')
  dispatch(logoutUser());
  localStorage.clear();
  sessionStorage.clear();
}

export const signup = data => dispatch => {
  dispatch(authLoading());
  return Axios(`${process.env.REACT_APP_BASE_URL}/signup`, {
    method: 'POST',
    data
  })
    .then(res => { 
      console.log(res)
      if (res.data.status === 200) {
        dispatch(loginSuccess(res.data.user[0]));
        notification.success({ message: res.data.message });
        localStorage.setItem('token', res.data.token);
      } else {
        notification.error({ message: res.data.message })
        dispatch(loginError(res.data))
      }
      if(res.data.error){
        switch (res.data.error.constraint) {
          case "users_username_unique":
            notification.error({message: 'Username Already In Use'})
            break;
          case "users_email_unique":
            notification.error({message: 'Email Already In Use'})
            break;
          default:
            break;
        }
      }
    })
    .catch(err => {
      console.log(err);
    })
}

export const login = data => dispatch => {
  dispatch(authLoading())
  return Axios(`${process.env.REACT_APP_BASE_URL}/login`, {
    method: 'POST',
    data
  })
    .then(res => {
      console.log(res);
      if (res.data.status === 200) {
        dispatch(loginSuccess(res.data.user[0]));
        notification.success({ message: res.data.message });
        localStorage.setItem('token', res.data.token);
      } else {
        notification.error({ message: res.data.message })
        dispatch(loginError(res.data))
      }
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      err.isAxiosError ? notification.error({message: 'No internet connection'})
        : notification.error({message: 'Request Error!'})
      dispatch(loginError(err))
    })
}
