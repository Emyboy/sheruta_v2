/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ImageViews from './ImageViews';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { notification } from 'antd';
import { connect } from 'react-redux';
import RequestButton from '../../components/RequestButton';

let message = '';

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user
});

const mapActionToProps = {

}

export default connect(mapStateToProps, mapActionToProps)((props) => {
    const { val, auth } = props;
    const { user } = auth;
    const [copied, setCopied] = useState(false);
    const [reuqesting, setRequesting] = useState(false);
    const phoneNo = '08138154470';
    
    const handleSubmit = e => {
        const { phoneno, email } = user;
        e.preventDefault();
        message = `Hi there, ${auth.user.username} is intrested in ${val.name} ${val.type.toLowerCase()} apartment, contact he/she on ${auth.user.phoneno} or ${auth.user.email}. Thank You. The url to the apartment is http://sheruta.ng/${val.type.toString()}/${val.id}`;

        auth.isLoggedIn ? props.sendRequest({ message, user_id: user.user_id, type: 'request', phoneno: auth.user.phoneno, name: auth.user.username, email: auth.user.email }) : notification.warning({ message: "Please Login to send a request!" });
    }

    return (
        <div className="col-lg-8 col-md-12 col-sm-12">
            <ImageViews val={val} />
            <RequestButton 
                handleSubmit={handleSubmit}
                loading={props.user.uploadLoading}
            />

            <div className='block-wrap shadow mb-3 p-3'>
            <h4 class="block-title">Contact Us</h4><br />
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/2348138154470"
                  alt="sheruta-whatsapp" className='btn btn-theme'><i className='fa fa-user mr-1'>
                      </i>Chat On Whatsapp
                </a>

                <CopyToClipboard text={phoneNo}
                    onCopy={() => {
                        notification.success({ message: 'Copied To Clipboard'})
                        setCopied(true)
                    }}
                >
                    <a href="tel:" className='btn btn-theme'>{phoneNo}</a>
                </CopyToClipboard>
            </div>

            <div className="block-wrap shadow">

                <div className="block-header">
                    <h4 className="block-title">Property Info</h4>
                </div>

                <div className="block-body">
                    <ul className="dw-proprty-info">
                        <li><strong>Bedrooms</strong>{val.bedrooms}</li>
                        <li><strong>Bathrooms</strong>{val.toilets}</li>
                        <li><strong>Sitting Rooms</strong>{val.sittingrooms}</li>
                        <li><strong>Garage</strong>No</li>
                        <li><strong>Area</strong>... sq ft</li>
                        <li><strong>Type</strong>{val.type}</li>
                        <li><strong>Price</strong>₦{val.price}</li>
                        <li><strong>Location</strong>{val.area}</li>
                    </ul>
                </div>

            </div>

            <div className="block-wrap shadow">

                <div className="block-header">
                    <h4 className="block-title">Description</h4>
                </div>

                <div className="block-body">
                    <p>{val.bio}</p>
                </div>

            </div>

            <div className="block-wrap shadow">

                <div className="block-header">
                    <h4 className="block-title">Ameneties</h4>
                </div>

                <div className="block-body">
                    <ul className="avl-features third">
                        <li>Air Conditioning</li>
                        <li>Swimming Pool</li>
                        <li>Central Heating</li>
                        <li>Laundry Room</li>
                        <li>Gym</li>
                        <li>Alarm</li>
                        <li>Window Covering</li>
                        <li>Internet</li>
                        <li>Pets Allow</li>
                        <li>Free WiFi</li>
                        <li>Car Parking</li>
                        <li>Spa &amp; Massage</li>
                    </ul>
                </div>

            </div>

        </div>
    )
});
