import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import store from '../../redux/store/store'
import { Spinner } from 'react-activity';

export const Signup = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [state, setState] = useState({
        loading: false,
        errorMessage: null
    })

    const onSubmit = e => {
        console.log(e)
        setState({ ...state, loading: true })
        axios(process.env.REACT_APP_BASE_URL + '/auth/local/register', {
            method: 'POST',
            data: e,
        })
            .then(res => {
                setState({ ...state, loading: false })
                store.dispatch({
                    type: 'SET_AUTH_STATE',
                    payload: {
                        user: res.data
                    }
                })
                console.log(res)
            })
            .catch(err => {
                setState({ ...state, loading: false, errorMessage: err.response.data.message[0].messages[0].message })
                // console.log({...err.response.data.message[0].messages[0].message})
            })
    }

    if (props.auth.user) {
        return <Redirect to='/' />
    } else {
        return (
            <div className='animate__animated animate__fadeIn modal-dialog modal-dialog-centered login-pop-form'>
                <div className="modal-content m-2" id="sign-up">
                    <Link to='/'><span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span></Link>
                    <div className="modal-body">
                        <h4 className="modal-header-title">Sign Up</h4>
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {
                                    state.errorMessage ? <div className='alert alert-danger'>
                                        {state.errorMessage}
                                    </div> : null
                                }
                                <div className="row">

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input required type="text" className="form-control" placeholder="First Name" name="first_name"
                                                    {...register("first_name")} />
                                                <i className="ti-user"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input required type="text" className="form-control" placeholder="Last Name" name="last_name" {...register("last_name")} />
                                                <i className="ti-user"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input required type="text" className="form-control" placeholder="Username" name='username' {...register("username")} />
                                                <i className="ti-user"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input required type="email" className="form-control" placeholder="Email" name='email' {...register("email")} />
                                                <i className="ti-email"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 col">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input required type="text" className="form-control" placeholder="Phone No (whatsapp)" name='password' {...register("phone_number")} />
                                                <i className="ti-unlock"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input required type="password" className="form-control" name='password' placeholder="Password" {...register("password")} />
                                                <i className="ti-unlock"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input required type="password" className="form-control" placeholder="Confirm Password" />
                                                <i className="ti-unlock"></i>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <select className="form-control" {...register("gender")}>
                                                    <option value='male'>Male</option>
                                                    <option value='femaile'>Female</option>
                                                </select>
                                                <i className="ti-face-smile"></i>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-md full-width pop-login">{state.loading ? <Spinner /> : 'Sign Up'}</button>
                                </div>

                            </form>
                        </div>
                        <div className="text-center">
                            <p className="mt-5"><i className="ti-user mr-1"></i>Already Have An Account? <Link to='/login' className="link">Go For LogIn</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
