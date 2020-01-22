import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../redux/actions/auth.action';

class Navbar extends Component {
    render() {
        return (
            <div className="header header-light nav-left-side">
                <nav className="headnavbar core-nav"><div className="nav-container">
                    <div className="nav-header right">
                        <a href="#c" className="brand"><img src="assets/img/logo.png" alt="" /></a>
                        <button className="toggle-bar core-nav-toggle"><span className="ti-align-justify"></span></button>
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
                                            <Link to={`/${this.props.auth.user.username}`}><i className="ti-user"></i>My Profile</Link>
                                            <a href="my-property.html"><i className="ti-layers"></i>Property List</a>
                                            <a href="bookmark-list.html"><i className="ti-bookmark"></i>Bookmarked Listings</a>
                                            <a className="active" href="change-password.html"><i className="ti-unlock"></i>Change Password</a>
                                            <hr />
                                            <Link to="/" onClick={() => this.props.logout()}><i className="ti-power-off"></i>Log Out</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul> 
                            : 
                            <ul>
                                    <li>
                                        <Link to="/signup" data-toggle="modal" data-target="#signup">Sign Up</Link>
                                    </li>
                                    <li className="login-attri theme-log">
                                        <Link to="/login" data-toggle="modal" data-target="#login">Log In</Link>
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
                                <Link to="/contact">Contact Us</Link>
                            </li>


                            <li className="megamenu" data-width="500" style={{ position: 'relative' }}>
                                <Link to="/about">About</Link>
                                
                            </li>

                        </ul></div>



                </div></nav><div className="dropdown-overlay"></div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    auth: state.auth
})

const mapActionToProps = {
    logout
}

export default connect(mapStateToProps, mapActionToProps)(Navbar);
