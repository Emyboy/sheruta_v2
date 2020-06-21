import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import loadingGif from '../../img/loading.gif';
import { signup } from '../../redux/actions/auth.action';
import { connect } from 'react-redux';

class Signup extends Component {
    state = {
        fullname: null,
        phoneno: null,
        email: null,
        password: null,
        loginBtn: <button type="submit" className="btn btn-md full-width pop-login">Signup</button>,
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.signup(this.state);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.auth.authLoading) {
            this.setState({
                loginBtn: <div style={{ textAlign: 'center' }} className='mt-3'><img src={loadingGif} alt='loading-img' /></div>
            })
        } else {
            this.setState({
                loginBtn: <button type="submit" className="btn btn-md full-width pop-login">Signup</button>
            })
        }
    }

    render() {
        if(this.props.auth.isLoggedIn){ 
            return <Redirect to='/'/>
        }else {
            return (
                <div >
                    <div className="animate__animated animate__fadeIn modal-dialog modal-dialog-centered login-pop-form" role="document">
                        <div className="modal-content" id="sign-up">
                            <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span>
                            <div className="modal-body">
                                <h4 className="modal-header-title">Sign Up</h4>
                                <div className="login-form">
                                    <form onSubmit={(e) => this.handleSubmit(e)}>
                                        <div className="row">

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-with-icon">
                                                        <input name='fullname' onChange={(e) => this.handleInputChange(e)} type="text" className="form-control" placeholder="Full Name" />
                                                        <i className="ti-user"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-with-icon">
                                                        <input name='email' onChange={(e) => this.handleInputChange(e)} type="email" className="form-control" placeholder="Email" />
                                                        <i className="ti-email"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-with-icon">
                                                        <input name='username' onChange={(e) => this.handleInputChange(e)} type="text" className="form-control" placeholder="Username" />
                                                        <i className="ti-user"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-with-icon">
                                                        <input name='password' onChange={(e) => this.handleInputChange(e)} type="password" className="form-control" placeholder="*******" />
                                                        <i className="ti-unlock"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <div className="input-with-icon">
                                                        <input name='phoneno' onChange={(e) => this.handleInputChange(e)} type="number" className="form-control" placeholder="123 546 5847" />
                                                        <i className="lni-phone-handset"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <select className="form-control">
                                                        <option>As a Customer</option>
                                                        <option>As a Agent</option>
                                                        <option>As a Agency</option>
                                                    </select>
                                                    <i className="ti-briefcase"></i>
                                                </div>
                                            </div>
                                        </div> */}

                                        </div>

                                        <div className="form-group">
                                            {this.state.loginBtn}
                                        </div>

                                    </form>
                                </div>
                                {/* <div className="modal-divider"><span>Or login via</span></div> */}
                                {/* <div className="social-login mb-3">
                                <ul>
                                    <li><a href="#" className="btn connect-fb"><i className="ti-facebook"></i>Facebook</a></li>
                                    <li><a href="#" className="btn connect-twitter"><i className="ti-twitter"></i>Twitter</a></li>
                                </ul>
                            </div> */}
                                <div className="text-center">
                                    <p className="mt-5"><i className="ti-user mr-1"></i>Already Have An Account? <Link to="/login" className="link">Go For LogIn</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})
const mapActionToProps = {
    signup
}
export default connect(mapStateToProps, mapActionToProps)(Signup);
