import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';

import Select from 'react-select';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];


export default function SearchBox() {
	const { Option } = Select;
	const [state, setState] = useState({
		categories: [],
		services: [],
	});
	
	const [data, setData] = useState({
		places: [],
		selectedKeyword: null
	})

	const getAllCategories = () => {
		axios(process.env.REACT_APP_BASE_URL + '/categories')
			.then(res => {
				console.log('CATEGORIES ---', res);
				setState({ ...state, categories: res.data })
			})
			.catch(err => {
				console.log(err)
			})
	}

	const getAllServices = () => {
		axios(process.env.REACT_APP_BASE_URL + '/services')
			.then(res => {
				console.log('CATEGORIES ---', res);
				setState({ ...state, services: res.data })
			})
			.catch(err => {
				console.log(err)
			})
	}

	// useEffect(() => {
	// 	if (state.categories.length === 0) {
	// 		getAllCategories();
	// 	}
	// 	if (state.services.length === 0) {
	// 		getAllServices();
	// 	}
	// }, [state])

	// useEffect(() => {

	// }, [state.places])

	const searchKeyword = (keyword) => {
		if(!keyword){
			setData({
				...data,
				places: []
			})
		}
		axios(process.env.REACT_APP_BASE_URL + '/properties/search/' + keyword)
			.then(res => {
				console.log('RESULT ---', res);
				setData({
					...data,
					places: res.data.rows
				})
			})
			.catch(err => {
				console.log('ERROR ---', err);
			})
	}

	function onChange(value) {
		console.log(`selected ${value}`);
	}

	function onBlur() {
		console.log('blur');
	}

	function onFocus() {
		console.log('focus');
	}

	function onSearch(val) {
		console.log('search:', val);
		searchKeyword(val);
	};

	useEffect(() => {
		console.log(data);
	}, [data])

	return (

		<div className="container shadow rounded pb-5" style={{ backgroundColor: '#010101b3' }}>

			<h1 className="big-header-capt text-white h2 m-4">Find Verified Flatmates Matching Your Lifestle</h1>
			{/* <p className="text-center mb-5 text-white">From as low as $10 per day with limited time offer</p> */}

			<div className="full-search-2 eclip-search italian-search hero-search-radius">
				<div className="hero-search-content">

					<div className="row">

						<div className="col-lg-3 col-md-4 col-sm-12 small-padd">
							<div className="form-group">
								<div className="input-with-icon">
									<select id="ptypes" className="form-control">
										{
											state.categories.map((val, i) => {
												return <option value={`${val.id}`} key={i}>{val.name}</option>
											})
										}
										{/* <option value="">&nbsp;</option>
										<option value="1">Any Type</option>
										<option value="2">Apartment</option>
										<option value="3">Villas</option>
										<option value="4">Commercial</option>
										<option value="5">Offices</option>
										<option value="6">Garage</option> */}
									</select>
									<i className="ti-home"></i>
								</div>
							</div>
						</div>


						<div className="col-lg-4 col-md-3 col-sm-12 small-padd">
							<div className="form-group">
								<div className="input-with-icon">
									{/* <input type="text" className="form-control b-r" placeholder="Neighborhood" /> */}
									<Select
										value={data.selectedKeyword}
										onChange={e => console.log(e)}
										options={data.places.map(val => {
											return { value: val.location, label: val.location }
										})}
										onInputChange={searchKeyword}
									/>
									<i className="ti-location-pin"></i>
								</div>
							</div>

						</div>


						<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
							<div className="form-group">
								<div className="input-with-icon b-l b-r">
									<select id="location" className="form-control">
										{
											state.services.map((val, i) => {
												return <option key={i} value={`${val.id}`}>{val.name}</option>
											})
										}
										{/* <option value="">&nbsp;</option>
										<option value="1">New York City</option>
										<option value="2">Chicago, Illinois</option>
										<option value="3">Las Vegas</option>
										<option value="4">New Orleans</option>
										<option value="5">San Francisco</option>
										<option value="6">Washington</option> */}
									</select>
									<i className="ti-briefcase"></i>
								</div>
							</div>
						</div>

						<div className="col-lg-2 col-md-2 col-sm-12 small-padd">
							<div className="form-group">
								<a href="#" className="btn search-btn">Search</a>
							</div>
						</div>

					</div>

				</div>
			</div>

		</div>

	)
}
