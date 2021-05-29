import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import { logout } from '../../redux/strapi_actions/strapi_auth.actions'
import ProfileImageModal from './ProfileImageModal';

export const Profile2 = (props) => {
    const { auth } = props;
    const { user } = auth;

    const [state, setState] = useState({
        showImageModal: false
    })

    if (!props.auth.user) {
        return <Redirect to='/' />
    } else
        return (
            <section>
                <ProfileImageModal show={state.showImageModal} handleClose={() => setState({ ...state, showImageModal: !state.showImageModal })} />
                <div className="container-fluid">
                    <div className="row" style={{ justifyContent: 'center' }}>

                        <div className="col-lg-9 col-md-8">
                            <div className="dashboard-navbar bg-white">

                                <div className="d-user-avater">
                                    <img src={user.user.avatar_url} className="img-fluid avater" alt="" />
                                    <h4>{`${user.user.first_name} ${user.user.last_name}`}</h4>
                                    <span>{user.user.email}</span><br />
                                    <span>@{user.user.username}</span>
                                    <button
                                        onClick={() => setState({ ...state, showImageModal: !state.showImageModal })}
                                        className='btn btn-sm btn-success shadow'
                                        style={{ position: 'absolute', top: '104px', borderRadius: '15px' }}
                                    >Change Image</button>
                                </div>

                                <div className="d-navigation">
                                    <ul>
                                        {/* <li className="active"><a href="dashboard.html"><i className="ti-user"></i>My Profile</a></li>
                                    <li><a href="bookmark-list.html"><i className="ti-bookmark"></i>Bookmarked Listings</a></li>
                                    <li><a href="my-property.html"><i className="ti-layers"></i>My Properties</a></li>
                                    <li><a href="submit-property-dashboard.html"><i className="ti-pencil-alt"></i>Submit New Property</a></li>
                                    <li><a href="change-password.html"><i className="ti-unlock"></i>Change Password</a></li> */}
                                        <li><a onClick={props.logout} href="#logout"><i className="ti-power-off"></i>Log Out</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </section>
        )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile2)
