/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import HorizontalProductCard from '../../components/HorizontalProductCard';
import { connect } from 'react-redux';
import { getRecentApartments } from '../../redux/actions/apartment.actions';
import { getRecentSharedApartments } from '../../redux/actions/shared.actions';
import { sendRequest } from '../../redux/actions/user.action';
import { notification } from 'antd';

import loadingGif from '../../img/loading.gif';
import DoneModal from '../../components/DoneModal';
import Axios from 'axios';
import RequestButton from '../../components/RequestButton';

const mapStateToProps = state => ({
	shared: state.shared,
	apartment: state.apartment,
	auth: state.auth,
	user: state.user,
	page: state.page
})

const mapActionsToProps = {
	getRecentApartments,
	getRecentSharedApartments,
	sendRequest
}

let email = '';
let phoneno = '';
let message = '';
export default connect(mapStateToProps, mapActionsToProps)((props) => {

	const [apartments, setApartments] = useState([]);

	const { val, auth, apartment, shared, user } = props;

	const getApartment = () => {
		Axios(`${process.env.REACT_APP_BASE_URL}/hostels/limit/${4}`)
			.then(res => {
				setApartments(res.data.apartment)
			})
			.catch(err => {

			})
	}

	useEffect(() => {
		getApartment()
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		message = `Hi there, ${auth.user.username} is intrested in ${shared.shared.name} ${val.type.toLowerCase()} apartment, contact he/she on ${auth.user.phoneno} or ${auth.user.email}. Thank You. The url to the apartment is http://sheruta.ng/${val.type.toString()}/${val.id}`;

		auth.isLoggedIn ? phoneno = auth.user.phoneno : phoneno = '';
		auth.isLoggedIn ? email = auth.user.email : email = '';
		const user_id = auth.isLoggedIn ? auth.user.id : '';
		auth.isLoggedIn ? props.sendRequest({ message, user_id, type: 'request', phoneno: auth.user.phoneno, name: auth.user.username, email: auth.user.email }) : notification.warning({ message: "Please Login to send a request!" });
	}



	return (
		<div className="col-lg-4 col-md-12 col-sm-12">
			<DoneModal title={'Your request has been sent'} subTitle={"We well get back to you via Phone Call"} status={"success"} />
			<div className="page-sidebar">

				{/* <div className="agent-widget">
					<div className="agent-title">
						<div className="agent-details">
							<h4>{"Like This ?"}</h4>
							<span>Send Request</span>
						</div>
						<div className="clearfix"></div>
					</div>

					<button className="btn btn-theme full-width" onClick={(e) => handleSubmit(e)}> {user.uploadLoading ? <img src={loadingGif} alt='' /> : 'Send Request'}</button>
				</div> */}

				<RequestButton
					handleSubmit={handleSubmit}
					loading={user.uploadLoading}
				/>

				<div className="sidebar-widgets">

					<h4>Recent Apartments</h4>

					{
						apartments.map((val, i) => {
							return <HorizontalProductCard key={i} val={val} />
						})
					}

				</div>

			</div>
		</div>
	)
});
