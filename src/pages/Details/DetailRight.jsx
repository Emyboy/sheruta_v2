import React, { useEffect } from 'react';
import HorizontalProductCard from '../../components/HorizontalProductCard';
import { connect } from 'react-redux';
import { getRecentApartments } from '../../redux/actions/apartment.actions';
import { getRecentSharedApartments } from '../../redux/actions/shared.actions';
import { sendRequest } from '../../redux/actions/user.action';
import { notification } from 'antd';

import loadingGif from '../../img/loading.gif';
import DoneModal from '../../components/DoneModal';

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
	const { getRecentSharedApartments, getRecentApartments } = props;

	useEffect(() => {
		val.type === "Apartment" ? getRecentSharedApartments(3) : getRecentApartments(3);
	},[]);

	const { val, auth, apartment, shared, user } = props;

	const handleSubmit = e => {
		e.preventDefault();
		auth.isLoggedIn ? message = `Hi there, ${auth.user.username} is intrested in ${apartment.apartments.name} apartment, contact he/she on ${auth.user.phoneno} or ${auth.user.email}. Thank You` : message = '';
		auth.isLoggedIn ? phoneno = auth.user.phoneno : phoneno = '';
		auth.isLoggedIn ? email = auth.user.email : email = '';
		const user_id = auth.isLoggedIn ? auth.user.id : '';
		auth.isLoggedIn ? props.sendRequest({user_id, message, type: 'request'}) : notification.warning({message: "Please Login to send a request!"});
	}

	return (
		<div className="col-lg-4 col-md-12 col-sm-12">
			<DoneModal title={'Your request has been sent'} subTitle={"We well get back to you via Phone Call"} status={"success"} />
			<div className="page-sidebar">

				<div className="agent-widget">
					<div className="agent-title">
						{/* <div className="agent-photo"><img src={`image`} alt="" /></div> */}
						<div className="agent-details">
							<h4>{"Like This ?"}</h4>
							<span>Send Request</span>
						</div>
						<div className="clearfix"></div>
					</div>

					{/* <Fragment>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Your Email" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Your Phone" />
						</div>
						<div className="form-group">
							<textarea className="form-control">I'm interested in this property.</textarea>
						</div>
					</Fragment> */}
					
					<button className="btn btn-theme full-width" onClick={(e) => handleSubmit(e)}> {user.uploadLoading ? <img src={loadingGif} alt='' /> :  'Send Request'}</button>
				</div>

				<div className="sidebar-widgets">

					<h4>Mortgage Calculator</h4>

					<HorizontalProductCard val={val} />
					<HorizontalProductCard val={val} />
					<HorizontalProductCard val={val} />

				</div>

			</div>
		</div>
	)
});
