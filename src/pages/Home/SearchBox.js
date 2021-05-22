import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';

import Select from 'react-select';
import { Redirect } from 'react-router';
import { notification } from 'antd';

export default function SearchBox() {
	const [state, setState] = useState({
		categories: [],
		services: [],
		showSearchResults: false
	});

	const [data, setData] = useState({
		places: [],
		selectedCategory: null,
		selectedService: null,
		selectedKeyword: null
	})

	const getAllCategories = () => {
		axios(process.env.REACT_APP_BASE_URL + '/categories')
			.then(res => {
				setState({ ...state, categories: res.data })
			})
			.catch(err => {
			})
	}

	const getAllServices = () => {
		axios(process.env.REACT_APP_BASE_URL + '/services')
			.then(res => {
				setState({ ...state, services: res.data })
			})
			.catch(err => {
			})
	}

	useEffect(() => {
		if (state.categories.length === 0) {
			getAllCategories();
		}
		if (state.services.length === 0) {
			getAllServices();
		}
	}, [state])

	const searchAvailableLocatioins = (keyword) => {
		if (!keyword) {
			setData({
				...data,
				places: [],
			})
		}
		axios(process.env.REACT_APP_BASE_URL + '/properties/search/keyword' + keyword)
			.then(res => {
				setData({
					...data,
					places: res.data.rows
				})
			})
			.catch(err => {
			})
	}

	const handleSearch = () => {
		notification.error({ message: 'Feature Coming soon' })
		if (data.selectedKeyword) {
			setState({ ...state, showSearchResults: true })
		} else
			notification.error({ error: 'Please provide a location' })
	}

	const searchURL = () => {
		return `/search/${data.selectedCategory.value}/${data.selectedKeyword}/${data.selectedService.value}`
	}


	useEffect(() => {
	}, [data])

	return (

		<div className="container shadow rounded pb-5" style={{ backgroundColor: '#010101b3' }}>

			<h1 className="big-header-capt text-white m-4" style={{ fontSize: '40px' }}>Find Verified Flatmates Matching Your Lifestle</h1>
			{/* <p className="text-center mb-5 text-white">From as low as $10 per day with limited time offer</p> */}

			<div className="full-search-2 eclip-search italian-search hero-search-radius">
				<div className="hero-search-content">

					<div className="row">

						<div className="col-lg-3 col-md-4 col-sm-12 small-padd">
							<div className="form-group">
								<div className="input-with-icon search-input">
									<Select
										value={data.selectedCategory}
										onChange={e => setData({ ...data, selectedCategory: e })}
										placeholder='Category'
										options={state.categories.map(val => {
											return { value: val.id, label: val.name }
										})}
									/>
									<i className="ti-home"></i>
								</div>
							</div>
						</div>


						<div className="col-lg-4 col-md-3 col-sm-12 small-padd">
							<div className="form-group">
								<div className="input-with-icon search-input">
									{/* <input type="text" className="form-control b-r" placeholder="Neighborhood" /> */}
									{/* <Select
											styles={{ paddingLeft: "39px" }}
											value={data.selectedKeyword}
											onChange={e => setData({ ...data, selectedKeyword: e })}
											placeholder='Search Location'
											options={data.places.map(val => {
												return { value: val.location, label: val.location }
											})}
											onInputChange={searchAvailableLocatioins}
										/> */}
									<input onChange={e => setData({ ...data, selectedKeyword: e.target.value })} type="text" class="form-control b-r" placeholder="Location" name='location' />
									<i className="ti-location-pin"></i>
								</div>
							</div>

						</div>


						<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
							<div className="form-group">
								<div className="input-with-icon search-input">
									<Select
										value={data.selectedService}
										onChange={e => setData({ ...data, selectedService: e })}
										placeholder='Service'
										options={state.services.map(val => {
											return { value: val.id, label: val.name }
										})}
									/>
									<i className="ti-briefcase"></i>
								</div>
							</div>
						</div>

						<div className="col-lg-2 col-md-2 col-sm-12 small-padd">
							<div className="form-group" onClick={handleSearch}>
								<a href="#search" className="btn search-btn">Search</a>
							</div>
						</div>

					</div>

				</div>
			</div>

		</div>

	)
}
