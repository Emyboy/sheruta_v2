import React, { useState, useEffect } from 'react'
import ProfileLeft from './ProfileLeft'
import ProfileRight from './ProfileRight'

import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PageLoader from '../../components/PageLoader';

const Profile = (props) => {
    const authUser = props.auth.user;
    const [state, setState] = useState({
        loading: true,
        userData: null
    })

    useEffect(() => {
        setState({
            ...state,
            loading: false,
            userData: authUser.user
        })
    },[])

    if(!authUser){
        return <Redirect />
    }else {
        if(state.loading){
            return <PageLoader />
        }else {
            return (
                <div>
                    {/* <div class="page-title">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">

                                    <h2 class="ipt-title">Welcome!</h2>
                                    <span class="ipn-subtitle">Welcome To Your Account</span>

                                </div>
                            </div>
                        </div>
                    </div> */}

                    <section>
                        <div className="container">
                            <div className="row">
                                <ProfileLeft val={state.userData} />
                                <ProfileRight val={state.userData} />
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Profile);
