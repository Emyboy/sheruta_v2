import React from 'react'
import { logout } from '../../redux/actions/auth.action';
import { Link } from 'react-router-dom';

const ProfileLeft = (props) => {
    const { val } = props;
    return (
        <div class="col-lg-4 col-md-12">
            <div class="dashboard-navbar">

                <div class="d-user-avater">
                    <img src={val.imageurl} class="img-fluid avater" alt="" />
                    <h4>{val.username}</h4>
                    <span>{val.email}</span>
                </div>

                <div class="d-navigation">
                    <ul>
                        <li class="active"><a href="dashboard.html"><i class="ti-user"></i>My Profile</a></li>
                        <li><a href="bookmark-list.html"><i class="ti-bookmark"></i>Bookmarked Listings</a></li>
                        <li><a href="my-property.html"><i class="ti-layers"></i>My Properties</a></li>
                        <li><Link to={`/${val.username}/submit`}><i class="ti-pencil-alt"></i>Submit New Property</Link></li>
                        <li><a href="change-password.html"><i class="ti-unlock"></i>Change Password</a></li>
                        <li><Link onClick={() => logout()} to="/"><i class="ti-power-off"></i>Log Out</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ProfileLeft;
