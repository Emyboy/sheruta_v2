import axios from 'axios'
import React, { useState, useEffect } from 'react'
import EachProperty from '../../components/EachProperty/EachProperty'

export default function TrendingPoperties() {
	const [state, setState] = useState({
		properties: []
	});
	const getProperties = () => {
		axios(process.env.REACT_APP_BASE_URL + '/properties/limit/' + "6")
			.then(res => {
				setState({ ...state, properties: res.data })
			})
			.catch(err => {
			})
	}
	useEffect(() => {
		getProperties()
	}, []);
	return (
		<div>
			<section>
				<div className="container">

					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="sec-heading center">
								<h2>Trending Properties.</h2>
								<p>Find new & featured property for you.</p>
							</div>
						</div>
					</div>

					<div className="row">
						{
							state.properties.map((val, i) => {
								return <EachProperty
									key={i}
									data={val}
								/>
							})
						}
					</div>

					{/* <div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="text-center mt-4">
								<a href="#" className="btn btn-theme-2">Browse More Property</a>
							</div>
						</div>
					</div> */}

				</div>
			</section>
		</div>
	)
}
