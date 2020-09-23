import {
  // SIGNUP,
  // SIGNUP_ERROR,
  LOGIN,
  LOGIN_ERROR,
  AUTH_LOADING,
  LOGOUT,
  TOGGLE_ADD_NUMBER,
  ADD_AGENT, AGENT_LOADING
  // UPDATE_PROFILE_ERROR,
  // UPDATE_PROFILE_SUCCESS,
} from ".";

import { notification } from "antd";

import Axios from "axios";
import { storage } from "../../Firebase";

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
  dispatch({ type: ADD_AGENT, payload: null })
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
      if (res.data.error) {
        switch (res.data.error.constraint) {
          case "users_username_unique":
            notification.error({ message: 'Username Already In Use' })
            break;
          case "users_email_unique":
            notification.error({ message: 'Email Already In Use' })
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
      err.isAxiosError ? notification.error({ message: 'No internet connection' })
        : notification.error({ message: 'Request Error!' })
      dispatch(loginError(err))
    })
}

export const handleGoogleLogin = data => dispatch => {
  Axios(`${process.env.REACT_APP_BASE_URL}/login/google`, {
    method: 'POST',
    data
  })
    .then(res => {
      console.log(res);
      dispatch({ type: LOGIN, payload: res.data.user });
      dispatch({ type: TOGGLE_ADD_NUMBER })
      dispatch({ type: ADD_AGENT, payload: res.data.user.agent });
      notification.success({ message: 'Loged In' });
      localStorage.setItem('token', res.data.token);
    })
    .catch(err => {
      notification.error({ message: 'Login Error Please Try Again ' })
    })
};

export const updateUserAccount = update => dispatch => {
  console.log('Adding Update --', update);
  Axios(`${process.env.REACT_APP_BASE_URL}/users/${update.user_id}`, {
    method: 'PUT',
    data: update
  })
    .then(update => {
      console.log('update ----', update);
    })
    .catch(err => {
      console.log('error ---', err);
    })
}


export const crate_agent_account = data => dispatch => {
  dispatch({ type: AGENT_LOADING, payload: true });
  console.log('uploading data ---', data);

  const uploadTask = storage.child(`agent/${data.user_id}/company_logo`).put(data.company_logo)
  uploadTask.on('state_changed', (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + Number.parseInt(progress) + '% done');
  }, (error) => {
    // Handle unsuccessful uploads
    notification.error({ message: 'Error Uploading Image ' });
  }, () => {
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      Axios(`${process.env.REACT_APP_BASE_URL}/agent`, {
        method: 'POST',
        data: { ...data, company_logo: downloadURL }
      })
        .then(account => {
          console.log(account);
          dispatch({ type: AGENT_LOADING, payload: false });
          dispatch({ type: ADD_AGENT, payload: account.data.data[0] });
        })
        .catch(err => {
          dispatch({ type: AGENT_LOADING, payload: false });
          console.log(err)
        })
    }).catch(err => {
      dispatch({ type: AGENT_LOADING, payload: false });
      console.log('error ---', err);
    });
  });



}

