import React from 'react'

import SearchBox from './SearchBox'
import WhatPeopleSay from './WhatPeopleSay'
import GetStarted from './GetStarted'
import ExploreByPopularCity from './ExploreByPopularCity'
import HowToUse from './HowToUse'
import PropertyLocation from './PropertyLocation'
import TrendingProperties from './TrendingPoperties'
import img1 from './images1/Searchboxpix.jpg'
import './Stylesheet.css'
import img2 from './images1/Newpics.png'
import RequestList from './RequestList'
import Jumbo2 from '../../components/Jumbo2'


export default function Home2() {
	return (
		<div>
			<div className="image-cover hero-banner" style={{ background: `url("https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/project%20prism%2Fcolor%20search%20archive%2Ffdca42285757a45c50328d80460f369b415e66a3") no-repeat` }} data-overlay="6">
				<div className="container">

					<h1 className="big-header-capt mb-0">Find Verified Flatmates Matching Your Lifestyle</h1>
					<p className="text-center mb-5"></p>

				<SearchBox />
			</div>
			</div>
			<div className="image-" style={{ image: `url(${img2})` }}>
				<ExploreByPopularCity />
			</div>
			<div>
				<TrendingProperties />
			</div>
			<div>
				<HowToUse />
			</div>
			{/* <div>
				<Jumbo2 />
			</div> */}
			{/* <div>
				<GetStarted />
			</div> */}
			<div className="image-coverpb-0">
				<RequestList />
			</div>
			<section className="image-cover pb-0" style={{ backgroundColor: "#232020" }}>
				<WhatPeopleSay />
			</section>
			{/* <div>
				<PropertyLocation />
			</div> */}
		</div>
	)

}
