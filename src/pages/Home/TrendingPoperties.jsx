import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import EachProperty from '../../components/EachProperty/EachProperty'

export default function TrendingPoperties() {
	const [state, setState] = useState({
		properties: []
	});
	const getProperties = () => {
		axios(process.env.REACT_APP_BASE_URL + '/properties/recent/' + "6")
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
								<h3>Trending Properties.</h3>
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

					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="text-center mt-4">
								<Link to='/properties' className="btn btn-theme-2">View All Properties</Link>
							</div>
						</div>
					</div>

				</div>
			</section>
		</div>
	)
}
