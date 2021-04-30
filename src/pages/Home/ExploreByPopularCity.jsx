import React from 'react'
import image from './images1/Newpics.png'

export default function ExploreByPopularCity() {
    return (
        <div>
            <section>
				<div className="container">
					<div className="row align-items-center">
						
						<div className="col-lg-6 col-md-6">
							<img src={image} className="img-fluid" alt="" /> 
						</div>
						
						<div className="col-lg-6 col-md-6">
							<div className="explore-content">
								<h2>What do we do?</h2>
								<p>We are an online housing assistance platform providing Nigerians with easier and safer housing through shared apartments and more, Our mission is to help reduce cost of rent for young Nigeians in the urban sides of the country</p>
								<p> Flatmate search made better. Co-living is here to stay and we are building a community of verified or verifiable working class members. We also provide peer to peer rentals to help secure that apartment with little or no stress required. </p>
								{/* <a href="http://themezhub.com/" className="btn btn-theme-2">Explore By Popular City</a> */}
							</div>
						</div>
						
					</div>
					
				</div>		
			</section>
        </div>
    )
}