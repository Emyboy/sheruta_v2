import React, { useState } from 'react';
import { connect } from 'react-redux';
import loadingGif from '../../img/loading.gif';
import { useForm } from 'react-hook-form'
import { login } from '../../redux/actions/auth.action';
import { Redirect } from 'react-router';
import { setAuthState } from '../../redux/strapi_actions/strapi_auth.actions'
import Btn from '../../components/Btn'
import axios from 'axios';
import { notification } from 'antd';

const mapStateToProps = state => ({
    auth: state.auth
});

const mapActionToProps = {
    setAuthState
}

const Login = props => {

    const [state, setState] = useState({
        loading: false,
        errorMessage: null
    })
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        setState({ ...state, loading: true })
        axios(process.env.REACT_APP_BASE_URL + '/auth/local', {
            method: 'POST',
            data
        })
            .then(res => {
                setState({ ...state, loading: false })
                notification.success({ message: 'Welcome Back' })
                localStorage.setItem('token', res.data.jwt);
                props.setAuthState({
                    user: res.data
                })
                // console.log(res)
            })
            .catch(err => {
                setState({
                    ...state,
                    errorMessage: err.response.data.data[0].messages[0].message,
                    loading: false
                })
                setTimeout(() => {
                    setState({ ...state, errorMessage: null })
                }, 3000);
                // console.log(err.response.data.data[0].messages[0].message)
            })
        // console.log(data);
    }

    if (props.auth.user) {
        return <Redirect to='/' />
    } else
        return (
            <div >
                <div className="animate__animated animate__fadeIn modal-dialog modal-dialog-centered login-pop-form" role="document">
                    <div className="modal-content" id="registermodal">
                        <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span>
                        <div className="modal-body">
                            <h4 className="modal-header-title">Log In</h4>
                            <div className="login-form">
                                {state.errorMessage ? <div className='alert alert-danger text-center'>
                                    <b className='m-0 p-0 h5'>{state.errorMessage}</b>
                                </div> : null}
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <div className="input-with-icon">
                                            <input disabled={state.loading} autoFocus name='identifier' type="email" className="form-control" placeholder="Email" {...register("identifier")} />
                                            <i className="ti-user"></i>
                                        </div>
                                        {/* {errors.identifier && <p className='text-danger'>{errors.identifier.message}</p>} */}
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <div className="input-with-icon">
                                            <input disabled={state.loading} name='password' type="password" className="form-control" placeholder="*******" {...register("password")}
                                            />
                                            <i className="ti-unlock"></i>
                                        </div>
                                        {/* {errors.password && <p className='text-danger'>{errors.password.message}</p>} */}
                                    </div>

                                    <div className="form-group">
                                        <Btn text='Login' loading={state.loading} className='full-width mt-2' type='submit' />

                                    </div>

                                </form>
                            </div>
        
                        </div>
                    </div>
                </div>
            </div>
        )
}



export default connect(mapStateToProps, mapActionToProps)(Login);


