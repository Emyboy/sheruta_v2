import { notification } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usePaystackPayment, PaystackButton } from 'react-paystack';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const formatedPrice = new Intl.NumberFormat('en-NG');

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps
)((props) => {
    localStorage.setItem('after_login', '/pricing')
    const [state, setState] = useState({
        loading: true,
        plans: []
    })

    const config = {
        reference: (new Date()).getTime(),
        publicKey: 'pk_test_7130b4dfd9558bafe8f83043a8d50455af44f25b',
    };

    const initializePayment = usePaystackPayment(config);
    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const getAllPaymentPlans = () => {
        axios(process.env.REACT_APP_BASE_URL + '/payment-plans')
            .then(res => {
                console.log(res);
                setState({ ...state, loading: false, plans: res.data })
            })
            .catch(err => {
                notification.error({ message: 'Error getting payment plans' })
            })
    }

    useEffect(() => {
        getAllPaymentPlans();
    }, [])

    return (
        <div className='container mt-4'>
            <div className="row mt-4">
                <div className="col text-center">
                    <div className="sec-heading center">
                        <h2>See our packages</h2>
                        <p>We offer best and smart packages for you.</p>
                    </div>
                </div>
            </div>

            <div className="row mb-5 justify-content-center">

                {
                    state.plans.map((val, i) => {
                        return <div className="col-lg-4 col-md-4" key={i}>
                            <div className="pricing-wrap">

                                <div className="pricing-header">
                                    <i className="lni-layers"></i>
                                    <h4 className="pr-title">{val.name}</h4>
                                    <span className="pr-subtitle">{val.sub_title}</span>
                                </div>
                                <div className="pricing-value">
                                    <h4 className="pr-value">{formatedPrice.format(val.price)}</h4>
                                </div>
                                <div className="pricing-body">
                                    <ul>
                                        <li>5+ Listings</li>
                                        <li>Contact With Agent</li>
                                        <li>3 Month Validity</li>
                                        <li>7x24 Fully Support</li>
                                        <li>50GB Space</li>
                                    </ul>
                                </div>
                                <div className="pricing-bottom">
                                    {
                                        !props.auth.user ?
                                            <Link to="/login" className="btn-pricing text-white">Login To Pay</Link> :
                                            <PaystackButton className='btn bg-theme rounded' {...{
                                                ...config,
                                                text: 'Pay Now',
                                                amount: val.price + "00",
                                                email: props.auth.user.user.email,
                                                onSuccess: (reference) => handlePaystackSuccessAction(reference),
                                                onClose: handlePaystackCloseAction,
                                            }} />
                                    }
                                </div>

                            </div>
                        </div>
                    })
                }

                {/* <div className="col-lg-4 col-md-4">
                    <div className="pricing-wrap recommended">

                        <div className="pricing-header">
                            <i className="lni-diamond"></i>
                            <h4 className="pr-title">Platinum Package</h4>
                            <span className="pr-subtitle">Start With Platinum Package</span>
                        </div>
                        <div className="pricing-value">
                            <h4 className="pr-value">149</h4>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>5+ Listings</li>
                                <li>Contact With Agent</li>
                                <li>3 Month Validity</li>
                                <li>7x24 Fully Support</li>
                                <li>50GB Space</li>
                            </ul>
                        </div>
                        <div className="pricing-bottom">
                            <a href="#c" className="btn-pricing text-white">Choose Plan</a>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-md-4">
                    <div className="pricing-wrap">

                        <div className="pricing-header">
                            <i className="lni-invention"></i>
                            <h4 className="pr-title">Standard Package</h4>
                            <span className="pr-subtitle">Start With Standard Package</span>
                        </div>
                        <div className="pricing-value">
                            <h4 className="pr-value">199</h4>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>5+ Listings</li>
                                <li>Contact With Agent</li>
                                <li>3 Month Validity</li>
                                <li>7x24 Fully Support</li>
                                <li>50GB Space</li>
                            </ul>
                        </div>
                        <div className="pricing-bottom">
                            <a href="#c" className="btn-pricing text-white">Choose Plan</a>
                        </div>

                    </div>
                </div> */}

            </div>
        </div>
    )
});
