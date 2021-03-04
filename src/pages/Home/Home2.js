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



export default function Home2() {
	return (
		<div>			
			<div className="image-cover hero-banner" style={{ background: `url(${img1}) no-repeat` }} data-overlay="3.5">
			<SearchBox/>
			</div>
			<div className="image-" style={{ image: `url(${img2})` }}>
			<ExploreByPopularCity />
			</div>
			<div>
			<TrendingProperties/>
			</div>
		    <div>
			<HowToUse />
			</div>
			<div>
			<GetStarted />
			</div>
			<section className="image-cover pb-0" style={{ backgroundColor: "#232020" }}>
            <WhatPeopleSay/>
			</section>
			<div>
			<PropertyLocation/>
			</div>
		</div>
	) 

}
