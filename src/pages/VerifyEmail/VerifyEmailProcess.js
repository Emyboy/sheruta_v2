import React, { useState } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import Btn from '../../components/Btn'

const VerifyEmailProcess = ({ userData }) => {
    console.log('USER DATA ---', userData)

    const [state, setState] = useState({
        loading: false,
        display: 'verify'
    })

    const verificationRequest = () => {
        setState({
            ...state,
            loading: true
        })
        axios(process.env.REACT_APP_BASE_URL + '/verify/email/request', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + userData.jwt
            },
            data: { token: userData.jwt }
        })
            .then(res => {
                setState({
                    ...state,
                    loading: false,
                    display: 'sent'
                })
                console.log(res)

            })
            .catch(err => {
                setState({
                    ...state,
                    loading: false
                })
                console.log(err)
            })
    }

    return (
        <div className="animate__animated animate__fadeIn modal-dialog container mt-5 mb-5 login-pop-form" role="document">
            <div className="modal-content" id="sign-up-success">
                <div className="modal-body">
                    {
                        state.display === 'verify' ? <>
                            <h4 className="modal-header-title">Please Verify You Eamil</h4>
                            
                            <div className='text-center'>
                                <i className='fa fa-times text-center mb-2' style={{ fontSize: '100px' }}></i>
                            </div>
                            <Btn
                                text='Send Verification Email'
                                className='full-width mt-2'
                                onClick={verificationRequest}
                                loading={state.loading}
                            />
                        </> : null
                    }
                    {
                        state.display === 'sent' ? <>
                            <h4 className="modal-header-title">Email Has Been Sent</h4>
                            <p className="text-center">
                                {userData.user.email}
                            </p>
                            <div className='text-center'>
                                <i className='fa fa-check text-center mb-2' style={{ fontSize: '100px' }}></i>
                            </div>
                        </> : null
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailProcess)
