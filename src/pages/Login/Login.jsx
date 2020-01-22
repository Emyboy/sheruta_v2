import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadingGif from '../../img/loading.gif';

import { login } from '../../redux/actions/auth.action';
import { Redirect } from 'react-router';


class Login extends Component {
    state = {
        email: null,
        password: null,
        loginBtn: <button type="submit" className="btn btn-md full-width pop-login">Login</button>,
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.login(this.state);
    }
    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    componentWillReceiveProps(newProps){
        if(newProps.auth.authLoading){
            this.setState({
                loginBtn: <div style={{ textAlign: 'center' }} className='mt-3'><img src={loadingGif} alt='loading-img' /></div>
            })
        }else {
            this.setState({
                loginBtn: <button type="submit" className="btn btn-md full-width pop-login">Login</button>
            })
        }
    }
    render() {
        if(this.props.auth.isLoggedIn){
            return <Redirect to='/' />
        }else 
        return (
            <div >
                <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                    <div className="modal-content" id="registermodal">
                        <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span>
                        <div className="modal-body">
                            <h4 className="modal-header-title">Log In</h4>
                            <div className="login-form">
                                <form onSubmit={(e) => this.handleSubmit(e)}>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <div className="input-with-icon">
                                            <input autoFocus required name='email' onChange={(e) => this.handleInputChange(e)} type="email" className="form-control" placeholder="Email" />
                                            <i className="ti-user"></i>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <div className="input-with-icon">
                                            <input required name='password' onChange={(e) => this.handleInputChange(e)} type="password" className="form-control" placeholder="*******" />
                                            <i className="ti-unlock"></i>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        {
                                            this.state.loginBtn
                                        }
                                    </div>

                                </form>
                            </div>
                            {/* <div className="modal-divider"><span>Or login via</span></div> */}
                            {/* <div className="social-login mb-3">
                                <ul>
                                    <li><a href="#" className="btn connect-fb"><i className="ti-facebook"></i>Facebook</a></li>
                                    <li><a href="#" className="btn connect-twitter"><i className="ti-twitter"></i>Twitter</a></li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <p className="mt-5"><a href="#" className="link">Forgot password?</a></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapActionToProps = {
    login
}

export default connect(mapStateToProps, mapActionToProps)(Login);
