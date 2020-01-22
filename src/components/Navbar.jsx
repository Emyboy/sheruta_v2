import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div className="header header-light nav-left-side">
                <nav className="headnavbar core-nav"><div className="nav-container">
                    <div className="nav-header right">
                        <a href="#c" className="brand"><img src="assets/img/logo.png" alt="" /></a>
                        <button className="toggle-bar core-nav-toggle"><span className="ti-align-justify"></span></button>
                    </div>
                    <div className="wrap-core-nav-list right"><ul className="attributes">
                        <li><Link to="/signup" data-toggle="modal" data-target="#signup">Sign Up</Link></li>
                        <li class="login-attri theme-log"><Link to="/login" data-toggle="modal" data-target="#login">Log In</Link></li>
                        {/* <li className="submit-attri theme-log"><Link to="/submit">Submit Property</Link></li> */}
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
                                <a href="#c">Pages</a>
                                <div className="megamenu-content" style={{ width: '500px' }}>
                                    <div className="mg-menu">
                                        <ul>
                                            <li>
                                                <a href="blog.html">
                                                    <div className="mg-menu-items">
                                                        <i className="ti-layout-grid2"></i>
                                                        <h5>Blog Page<span>Checkout Our Articles</span></h5>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="blog-detail.html">
                                                    <div className="mg-menu-items">
                                                        <i className="ti-layout"></i>
                                                        <h5>Blog Detail<span>Detail Blog Page Design</span></h5>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="pricing.html">
                                                    <div className="mg-menu-items">
                                                        <i className="ti-credit-card"></i>
                                                        <h5>Pricing Page<span>Our Latest Offers &amp; Package</span></h5>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="contact.html">
                                                    <div className="mg-menu-items">
                                                        <i className="ti-location-pin"></i>
                                                        <h5>Contact Us<span>Need Help? Get In Touch</span></h5>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="component.html">
                                                    <div className="mg-menu-items">
                                                        <i className="ti-ruler-pencil"></i>
                                                        <h5>Component<span>List of All Components</span></h5>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="404.html">
                                                    <div className="mg-menu-items">
                                                        <i className="ti-face-sad"></i>
                                                        <h5>Error Page<span>Error Page Design</span></h5>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                        </ul></div>



                </div></nav><div className="dropdown-overlay"></div>
            </div>
        )
    }
}
