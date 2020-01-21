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
                        <li className="log-icon log-seprate"><a href="#c" data-toggle="modal" data-target="#login">Log In</a></li>
                        <li className="log-icon"><a href="#c" data-toggle="modal" data-target="#signup">Sign Up</a></li>
                        <li className="submit-attri theme-log"><Link to="/submit">Submit Property</Link></li>
                    </ul><ul className="menu core-nav-list">

                            <li className="dropdown">
                                <Link to='/' className='active'>Home</Link>
                            </li>

                            <li className="dropdown">
                                <a href="#c">Listings</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown">
                                        <a href="#c">List Layouts</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="list-layout-with-sidebar.html">With Sadebar</a></li>
                                            <li><a href="list-layout-with-map.html">With Map</a></li>
                                            <li><a href="list-layout-full.html">Full Width</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#c">Grid Layouts</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="grid-layout-with-sidebar.html">With Sidebar</a></li>
                                            <li><a href="classical-layout-with-sidebar.html">Classical With Sidebar</a></li>
                                            <li><a href="grid-layout-with-map.html">With Map</a></li>
                                            <li><a href="grid.html">Full Width</a></li>
                                            <li><a href="classical-property.html">Classical Full Width</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#c">With Map Layouts</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="list-layout-with-map.html">List With Map</a></li>
                                            <li><a href="grid-layout-with-map.html">Grid With Map</a></li>
                                            <li><a href="classical-layout-with-map.html">Classical With Map</a></li>
                                            <li><a href="half-map.html">Half Map Search</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#c">Features</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown">
                                        <a href="#c">Single Property</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="single-property-1.html">Single Property 1</a></li>
                                            <li><a href="single-property-2.html">Single Property 2</a></li>
                                            <li><a href="single-property-3.html">Single Property 3</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#c">Agencies &amp; Agents</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="agents.html">Agents List</a></li>
                                            <li><a href="agent-page.html">Agent Page</a></li>
                                            <li><a href="agencies.html">Agencies List</a></li>
                                            <li><a href="agency-page.html">Agency Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#c">My Account</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="my-profile.html">My Profile</a></li>
                                            <li><a href="my-property.html">Property List</a></li>
                                            <li><a href="bookmark-list.html">Bookmarked Listings</a></li>
                                            <li><a href="change-password.html">Change Password</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="compare-property.html">Compare Property</a>
                                    </li>
                                    <li>
                                        <a href="/submit">Submit Property</a>
                                    </li>
                                </ul>
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
