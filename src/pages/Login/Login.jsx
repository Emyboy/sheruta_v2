import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../redux/actions/auth.action';

class Login extends Component {
    state = {
        username: null,
        password: null
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
    render() {
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
                                        <label>User Name</label>
                                        <div className="input-with-icon">
                                            <input name='username' onChange={(e) => this.handleInputChange(e)} type="text" className="form-control" placeholder="Username" />
                                            <i className="ti-user"></i>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <div className="input-with-icon">
                                            <input name='password' onChange={(e) => this.handleInputChange(e)} type="password" className="form-control" placeholder="*******" />
                                            <i className="ti-unlock"></i>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-md full-width pop-login">Login</button>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-divider"><span>Or login via</span></div>
                            <div className="social-login mb-3">
                                <ul>
                                    <li><a href="#" className="btn connect-fb"><i className="ti-facebook"></i>Facebook</a></li>
                                    <li><a href="#" className="btn connect-twitter"><i className="ti-twitter"></i>Twitter</a></li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <p className="mt-5"><a href="#" className="link">Forgot password?</a></p>
                            </div>
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
