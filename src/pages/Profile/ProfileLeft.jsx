import React, { useState } from 'react'
import { logout } from '../../redux/actions/auth.action';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProfileLeft = (props) => {
    const { val } = props;
    const [logout, setLogout] = useState(false);

    const handleLogout = () => {
        setLogout(true);
        props.Logout();
    }

    if(logout){
        return <Redirect to='/' />
    }else {
        return (
            <div class="col-lg-4 col-md-12">
                <div class="dashboard-navbar bg-white">

                    <div class="d-user-avater">
                        <img src={val.imageurl} class="img-fluid avater" alt="" />
                        <h4>{val.username}</h4>
                        <span>{val.email}</span>
                    </div>

                    <div class="d-navigation">
                        <ul>
                            {/* <li class="active"><a href="dashboard.html"><i class="ti-user"></i>My Profile</a></li>
                        <li><a href="bookmark-list.html"><i class="ti-bookmark"></i>Bookmarked Listings</a></li>
                        <li><a href="my-property.html"><i class="ti-layers"></i>My Properties</a></li>
                        <li><Link to={`/${val.username}/submit`}><i class="ti-pencil-alt"></i>Submit New Property</Link></li>
                        <li><a href="change-password.html"><i class="ti-unlock"></i>Change Password</a></li> */}
                            <li><a onClick={() => handleLogout()} href="#c"><i class="ti-power-off"></i>Log Out</a></li>
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
