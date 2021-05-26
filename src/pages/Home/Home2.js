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



export default function Home2() {
	return (
		<div>
			<div className="image-cover hero-banner" style={{ backgroundImage: `url("https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/project%20prism%2Fcolor%20search%20archive%2Ffdca42285757a45c50328d80460f369b415e66a3")` }} >
				<SearchBox />
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
				<GetStarted />
			</div> */}
			<section className="image-coverpb-0">
				<RequestList />
			</section>
			<section className="image-cover pb-0" style={{ backgroundColor: "#232020" }}>
				<WhatPeopleSay />
			</section>
			{/* <div>
				<PropertyLocation />
			</div> */}
		</div>
	)

}
