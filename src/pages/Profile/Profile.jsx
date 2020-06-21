import React from 'react'
import ProfileLeft from './ProfileLeft'
import ProfileRight from './ProfileRight'

import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Profile = (props) => {
    if(!props.auth.isLoggedIn){
        return <Redirect to='/' />
    }else {
        return (
            <div>
                <div class="page-title">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">

                                <h2 class="ipt-title">Welcome!</h2>
                                <span class="ipn-subtitle">Welcome To Your Account</span>

                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            <ProfileLeft val={props.auth.user} />
                            <ProfileRight val={props.auth.user} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Profile);
