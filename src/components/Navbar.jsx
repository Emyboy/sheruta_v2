import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import siteIcon from '../img/site-icon.png';
import { Nav, Navbar, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { logout, handleGoogleLogin } from '../redux/actions/auth.action';
import { toggleNavbar } from '../redux/actions/view.actions';
import { firebaseAuth, googleProvider } from '../Firebase';
import { PhoneNumberModal } from './PhoneNumberModal';

const desktopSize = 993;

class Navbar_ extends Component {

    handleGooglePopup() {
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
            }).catch((error) => {
                var errorCode = error.code;
                var email = error.email;
                var credential = error.credential;
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    render() {
        console.log('navbar props ---', this.props);
        const { auth } = this.props.auth;
        // return (
        //     <div className="header header-light nav-left-side">
        //         <nav className={!this.props.view.showNavbar ? "headnavbar core-nav" : "headnavbar core-nav open-responsive open-dropdown"}><div className="nav-container">
        //             <div className="nav-header right">
        //                 <Link to="/" className="brand mt-1"><img style={{ width: '70%' }} src={siteIcon} alt="" /></Link>
        //                 <button onClick={() => this.props.toggleNavbar(!this.props.view.showNavbar)} className="toggle-bar core-nav-toggle"><span className="ti-align-justify"></span></button>
        //             </div>
        //             <div className="wrap-core-nav-list right"><ul className="attributes">

        //                 <ul className="attributes">
        //                     {this.props.auth.isLoggedIn ? <li className="login-attri">
        //                         <div className="btn-group account-drop">
        //                             <button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                                 <img src={this.props.auth.user.imageurl} className="avater-img" alt="" /><span>{this.props.auth.user.username}</span>
        //                             </button>
        //                             <div className="dropdown-menu pull-right animated flipInX">
        //                                 <Link to={`/user/${this.props.auth.user.username}`}><i className="ti-user"></i>My Profile</Link>
        //                                 {
        //                                     this.props.auth.agentData ? <Link to={`/dashboard`}><i className="ti-blackboard"></i>Dashboard</Link>
        //                                         : null
        //                                 }
        //                                 <hr />
        //                                 <Link to="/" onClick={() => this.props.logout()}><i className="ti-power-off"></i>Log Out</Link>
        //                             </div>
        //                         </div>
        //                     </li> : <li className="login-attri theme-log">
        //                             <Link to="#c" data-toggle="modal" data-target="#login" onClick={this.handleGooglePopup.bind(this)}>Login / Signup</Link>
        //                         </li>
        //                     }
        //                 </ul>

        //             </ul><ul className="menu core-nav-list">

        //                     <li className="dropdown">
        //                         <Link to='/' className='active'>Home</Link>
        //                     </li>

        //                     <li className="dropdown">
        //                         <Link to="/blog">Blog</Link>
        //                     </li>
        //                     <li className="dropdown">
        //                         <Link to="/agents">Agents</Link>
        //                     </li>
        //                     <li className="dropdown">
        //                         <Link to="/contact">Contact Us</Link>
        //                     </li>


        //                     <li className="megamenu" data-width="500" style={{ position: 'relative' }}>
        //                         <Link to="/about">About</Link>
        //                     </li>

        //                     {
        //                         window.innerWidth < desktopSize && !this.props.auth.isLoggedIn ?
        //                             (
        //                                 <Fragment>
        //                                     <li className="dropdown">
        //                                         <span to="/login" onClick={this.handleGooglePopup.bind(this)}>Login / Signup</span>
        //                                     </li>
        //                                 </Fragment>
        //                             )
        //                             :
        //                             <Fragment>
        //                                 {
        //                                     window.innerWidth < desktopSize && this.props.auth.isLogedIn ?
        //                                         <li className="dropdown">
        //                                             <Link to={`/user/${this.props.auth.user.username}`}>{this.props.auth.user.username}</Link>
        //                                         </li> : null
        //                                 }
        //                             </Fragment>
        //                     }

        //                 </ul>
        //             </div>



        //         </div>
        //         </nav>
        //         <div className="dropdown-overlay"></div>
        //     </div>




        // )
        return (
            <Navbar bg="white" className='shadow-sm' expand="lg">
                <Link className='navbar-brand' to='/'><img width='120px' src={siteIcon} alt="" /></Link>
                {/* <Link to="/" className="brand mt-1"></Link> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className='h6 m-3'>Home</Link>
                        <Link to="/blog" className='h6 m-3'>Blog</Link>
                        <Link to="/contact" className='h6 m-3'>Contact Us</Link>
                        <Link to="/about" className='h6 m-3'>About</Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button> */}
                        <ul className="attributes">
                        {this.props.auth.isLoggedIn ? <li className="login-attri">
                            <div className="btn-group account-drop">
                                <button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={this.props.auth.user.imageurl} className="avater-img" alt="" /><span>{this.props.auth.user.username}</span>
                                </button>
                                <div className="dropdown-menu pull-right animated flipInX">
                                    <Link to={`/user/${this.props.auth.user.username}`}><i className="ti-user"></i>My Profile</Link>
                                    {
                                        this.props.auth.agentData ? <Link to={`/dashboard`}><i className="ti-blackboard"></i>Dashboard</Link>
                                            : null
                                    }
                                    <hr />
                                    <Link to="/" onClick={() => this.props.logout()}><i className="ti-power-off"></i>Log Out</Link>
                                </div>
                            </div>
                        </li> : <li className="login-attri theme-log">
                                <Link to="#c" data-toggle="modal" data-target="#login" onClick={this.handleGooglePopup.bind(this)}>Login / Signup</Link>
                            </li>
                        }

                        </ul>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const Navbar2 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="brand mb-4"><img style={{ width: '70%' }} src={siteIcon} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse left" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#c">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#c">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#c" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#c">Action</a>
                            <a className="dropdown-item" href="#c">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#c">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#c" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
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

export default connect(mapStateToProps, mapActionToProps)(Navbar_);
