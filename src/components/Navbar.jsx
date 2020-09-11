import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import siteIcon from '../img/site-icon.png';

import { logout, handleGoogleLogin } from '../redux/actions/auth.action';
import { toggleNavbar } from '../redux/actions/view.actions';
import { firebaseAuth, googleProvider } from '../Firebase';
import { PhoneNumberModal } from './PhoneNumberModal';

const desktopSize = 993;

class Navbar extends Component {

    handleGooglePopup(){
        console.log('working.')
        firebaseAuth.signInWithPopup(googleProvider)
            .then((result) => {
                var user = result.user;
                console.log(user);
                this.props.handleGoogleLogin({
                    username: user.displayName,
                    fullname: user.displayName,
                    imageurl: user.photoURL,
                    phoneno: 0,
                    password: user.uid,
                    email: user.email
                })
            }).catch((error)  =>{
                var errorCode = error.code;
                var email = error.email;
                var credential = error.credential;
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    render() {
        console.log(this.props);
        return (
            <div className="header header-light nav-left-side">
                {/* <PhoneNumberModal /> */}
                <nav className={!this.props.view.showNavbar ? "headnavbar core-nav" : "headnavbar core-nav open-responsive open-dropdown"}><div className="nav-container">
                    <div className="nav-header right">
                        <Link to="/" className="brand mt-1"><img style={{ width: '70%' }} src={siteIcon} alt="" /></Link>
                        <button onClick={() => this.props.toggleNavbar(!this.props.view.showNavbar)} className="toggle-bar core-nav-toggle"><span className="ti-align-justify"></span></button>
                    </div>
                    <div className="wrap-core-nav-list right"><ul className="attributes">
                        {
                            this.props.auth.isLoggedIn ? <ul className="attributes">
                                <li className="login-attri">
                                    <div className="btn-group account-drop">
                                        <button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={this.props.auth.user.imageurl} className="avater-img" alt="" /><span>{this.props.auth.user.username}</span>
                                        </button>
                                        <div className="dropdown-menu pull-right animated flipInX">
                                            <Link to={`/user/${this.props.auth.user.username}`}><i className="ti-user"></i>My Profile</Link>
                                            {/* <a href="my-property.html"><i className="ti-layers"></i>Property List</a>
                                            <a href="bookmark-list.html"><i className="ti-bookmark"></i>Bookmarked Listings</a>
                                            <a className="active" href="change-password.html"><i className="ti-unlock"></i>Change Password</a> */}
                                            <hr />
                                            <Link to="/" onClick={() => this.props.logout()}><i className="ti-power-off"></i>Log Out</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                                :
                                <ul>
                                    {/* <li>
                                        <Link to="/signup" data-toggle="modal" data-target="#signup">Sign Up</Link>
                                    </li> */}
                                    <li className="login-attri theme-log">
                                        <Link to="#c" data-toggle="modal" data-target="#login" onClick={this.handleGooglePopup.bind(this)}>Login / Signup</Link>
                                    </li>
                                </ul>
                        }

                    </ul><ul className="menu core-nav-list">

                            <li className="dropdown">
                                <Link to='/' className='active'>Home</Link>
                            </li>

                            <li className="dropdown">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li className="dropdown">
                                <Link to="/submit">Submit Apartment</Link>
                            </li>
                            <li className="dropdown">
                                <Link to="/contact">Contact Us</Link>
                            </li>


                            <li className="megamenu" data-width="500" style={{ position: 'relative' }}>
                                <Link to="/about">About</Link>
                            </li>

                            {
                                window.innerWidth < desktopSize && !this.props.auth.isLoggedIn ?
                                    (
                                        <Fragment>
                                            <li className="dropdown">
                                                <span to="/login" onClick={this.handleGooglePopup.bind(this)}>Login / Signup</span>
                                            </li>
                                            {/* <li className="dropdown">
                                                <Link to="/signup">Signup</Link>
                                            </li> */}
                                        </Fragment>
                                    )
                                    :
                                    <Fragment>
                                        {
                                            window.innerWidth < desktopSize && this.props.auth.isLogedIn ?
                                                <li className="dropdown">
                                                    <Link to={`/user/${this.props.auth.user.username}`}>{this.props.auth.user.username}</Link>
                                                </li> : null
                                        }
                                    </Fragment>
                            }

                        </ul>
                    </div>



                </div>
                </nav>
                <div className="dropdown-overlay"></div>
            </div>




        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    view: state.view
})

const mapActionToProps = {
    logout,
    toggleNavbar,
    handleGoogleLogin
}

export default connect(mapStateToProps, mapActionToProps)(Navbar);
