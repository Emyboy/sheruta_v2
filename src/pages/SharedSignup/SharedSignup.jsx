import React from 'react'
import { connect } from 'react-redux';
import loadingGif from '../../img/loading.gif';
import { Link } from 'react-router-dom';
import { sharedSignup } from '../../redux/actions/user.action';

const date = new Date();

class SharedSignup extends React.Component {
    state = {
        currentaddress: null,
        stateoforigin: null,
        gender: 'male',
        age: null,
        occupation: null,
        userid: this.props.auth.user.id,
        location: null,
        moveInDate: date.toDateString(),
        budget: null,
        // userid: this.props.auth.
        loginBtn: <button type="submit" className="btn btn-md full-width pop-login">Send</button>,
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        const { signup } = this.props;
        e.preventDefault();
        signup(this.state);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.user.uploadLoading) {
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
        return (
            <div >
                <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
                    <div className="modal-content" id="sign-up">
                        <Link to='/'><span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span></Link>
                        <div className="modal-body">
                            <h4 className="modal-header-title">Share</h4>
                            <div className="login-form">
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <div className="row">

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='currentaddress' onChange={(e) => this.handleInputChange(e)} type="text" className="form-control" placeholder="Current Address" />
                                                    <i className="ti-map"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='stateoforigin' onChange={(e) => this.handleInputChange(e)} type="text" className="form-control" placeholder="State Of Origin" />
                                                    <i className="ti-user"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <select onChange={(e) => this.handleInputChange(e)} name="gender" className="form-control" id="exampleFormControlSelect1">
                                                    <option>Gender</option>
                                                    <option>.....</option>
                                                    <option onClick={() => this.setState({ gender: 'male' })}>Male</option>
                                                    <option onClick={() => this.setState({ gender: 'female' })}>Female</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='occupation' onChange={(e) => this.handleInputChange(e)} type="text" className="form-control" placeholder="Occupation" />
                                                    <i className="ti-bag"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='age' onChange={(e) => this.handleInputChange(e)} type="number" className="form-control" placeholder="Age" />
                                                    <i className="lni-user"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='budget' onChange={(e) => this.handleInputChange(e)} type="text" className="form-control" placeholder="Prefered Budget" />
                                                    <i className="lni-user"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='location' onChange={(e) => this.handleInputChange(e)} type="text" className="form-control" placeholder="Prefered Location" />
                                                    <i className="lni-map"></i>
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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    auth: state.auth
});

const mapActionToProps = {
    signup: sharedSignup
}

export default connect(mapStateToProps, mapActionToProps)(SharedSignup);
