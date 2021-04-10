import React, { useState } from 'react'
import { logout } from '../../redux/actions/auth.action';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../redux/store/store';

const ProfileLeft = (props) => {
    const { val } = props;
    const [logout, setLogout] = useState(false);

    const handleLogout = () => {
        store.dispatch({
            type: 'LOGOUT'
        })
    }


    if(logout){
        return <Redirect to='/' />
    }else {
        return (
            <div className="col-lg-4 col-md-12">
                <div className="dashboard-navbar bg-white">

                    <div className="d-user-avater">
                        <img src={val.avatar_url} className="img-fluid avater" alt="" />
                        <h4>{val.username}</h4>
                        <span>{val.email}</span>
                    </div>

                    <div className="d-navigation">
                        <ul>
                            {/* <li className="active"><a href="dashboard.html"><i className="ti-user"></i>My Profile</a></li>
                        <li><a href="bookmark-list.html"><i className="ti-bookmark"></i>Bookmarked Listings</a></li>
                        <li><a href="my-property.html"><i className="ti-layers"></i>My Properties</a></li>
                        <li><Link to={`/${val.username}/submit`}><i className="ti-pencil-alt"></i>Submit New Property</Link></li>
                        <li><a href="change-password.html"><i className="ti-unlock"></i>Change Password</a></li> */}
                            <li><a onClick={() => handleLogout()} href="#c"><i className="ti-power-off"></i>Log Out</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    Logout: logout
}

export default connect(null, mapDispatchToProps)(ProfileLeft);
