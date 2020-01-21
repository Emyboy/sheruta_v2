import React from 'react';
import image from '../../img/p-3.jpg'

export default () => {
    return (
        <div class="col-lg-4 col-md-12 col-sm-12">
							<div class="page-sidebar">
							
								<div class="agent-widget">
									<div class="agent-title">
										<div class="agent-photo"><img src={{image}} alt=""/></div>
										<div class="agent-details">
											<h4><a href="#">Shivangi Preet</a></h4>
											<span><i class="lni-phone-handset"></i>(91) 123 456 7895</span>
										</div>
										<div class="clearfix"></div>
									</div>

									<div class="form-group">
										<input type="text" class="form-control" placeholder="Your Email"/>
									</div>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Your Phone"/>
									</div>
									<div class="form-group">
										<textarea class="form-control">I'm interested in this property.</textarea>
									</div>
									<button class="btn btn-theme full-width">Send Message</button>
								</div>
								
								<div class="sidebar-widgets">
									
									<h4>Mortgage Calculator</h4>
									
									<div class="form-group">
										<div class="input-with-icon">
											<input type="text" class="form-control" placeholder="Sale Price"/>
											<i class="ti-money"></i>
										</div>
									</div>
									
									<div class="form-group">
										<div class="input-with-icon">
											<input type="text" class="form-control" placeholder="Down Payment"/>
											<i class="ti-money"></i>
										</div>
									</div>
									
									<div class="form-group">
										<div class="input-with-icon">
											<input type="text" class="form-control" placeholder="Loan Term (Years)"/>
											<i class="ti-calendar"></i>
										</div>
									</div>
									
									<div class="form-group">
										<div class="input-with-icon">
											<input type="text" class="form-control" placeholder="Interest Rate"/>
											<i class="fa fa-percent"></i>
										</div>
									</div>
									
									<button class="btn btn-theme full-width">Calculate</button>
									
								</div>
								
								<div class="sidebar-widgets">
									
									<h4>Featured Property</h4>
									
									<div class="sidebar-property-slide slick-initialized slick-slider"><button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style={{display: 'block'}}>Previous</button>
										
										<div aria-live="polite" class="slick-list draggable"><div class="slick-track" role="listbox" style={{opacity: 1, width: '1850px', transform: 'translate3d(-370px, 0px, 0px)'}}><div class="single-items slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{width: '370px'}}>
											<div class="property-listing property-1">
									
												<div class="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="-1">
														<img src={image} class="img-fluid mx-auto" alt=""/>
													</a>
													<div class="listing-like-top">
														<i class="ti-heart"></i>
													</div>
													<div class="listing-rating">
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star"></i>
													</div>
													<span class="property-type">For Sale</span>
												</div>
												
												<div class="listing-content">
												
													<div class="listing-detail-wrapper">
														<div class="listing-short-detail">
															<h4 class="listing-name"><a href="single-property-2.html" tabindex="-1">Luxury Home in Manhattan</a></h4>
															<span class="listing-location"><i class="ti-location-pin"></i>588 Oakmound Road, Chicago</span>
														</div>
														<div class="list-author">
															<a href="#c" tabindex="-1"><img src={image} class="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div class="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>3</li>
															<li><strong>Bath:</strong>2</li>
															<li><strong>Sqft:</strong>2,400</li>
														</ul>
													</div>
												
													<div class="listing-footer-wrapper">
														<div class="listing-price">
															<h4 class="list-pr">$182,880</h4>
														</div>
														<div class="listing-detail-btn">
															<a href="single-property-2.html" class="more-btn" tabindex="-1">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div><div class="single-items slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00" style={{width: '370px'}}>
											<div class="property-listing property-1">
									
												<div class="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="0">
														<img src={image} class="img-fluid mx-auto" alt=""/>
													</a>
													<div class="listing-like-top">
														<i class="ti-heart"></i>
													</div>
													<div class="listing-rating">
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star"></i>
													</div>
													<span class="property-type">For Sale</span>
												</div>
												
												<div class="listing-content">
												
													<div class="listing-detail-wrapper">
														<div class="listing-short-detail">
															<h4 class="listing-name"><a href="single-property-2.html" tabindex="0">Resort Valley Ocs</a></h4>
															<span class="listing-location"><i class="ti-location-pin"></i>3848 Swick Hill, New Orleans</span>
														</div>
														<div class="list-author">
															<a href="#" tabindex="0"><img src={image} class="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div class="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>2</li>
															<li><strong>Bath:</strong>1</li>
															<li><strong>Sqft:</strong>3,700</li>
														</ul>
													</div>
												
													<div class="listing-footer-wrapper">
														<div class="listing-price">
															<h4 class="list-pr">$632,580</h4>
														</div>
														<div class="listing-detail-btn">
															<a href="single-property-2.html" class="more-btn" tabindex="0">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div><div class="single-items slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide01" style={{width: '370px'}}>
											<div class="property-listing property-1">
									
												<div class="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="-1">
														<img src={image} class="img-fluid mx-auto" alt=""/>
													</a>
													<div class="listing-like-top">
														<i class="ti-heart"></i>
													</div>
													<div class="listing-rating">
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star"></i>
													</div>
													<span class="property-type">For Rent</span>
												</div>
												
												<div class="listing-content">
												
													<div class="listing-detail-wrapper">
														<div class="listing-short-detail">
															<h4 class="listing-name"><a href="single-property-2.html" tabindex="-1">New Clue Apartment</a></h4>
															<span class="listing-location"><i class="ti-location-pin"></i>127, Quice Market, New York</span>
														</div>
														<div class="list-author">
															<a href="#" tabindex="-1"><img src="assets/img/add-user.png" class="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div class="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>2</li>
															<li><strong>Bath:</strong>2</li>
															<li><strong>Sqft:</strong>2,900</li>
														</ul>
													</div>
												
													<div class="listing-footer-wrapper">
														<div class="listing-price">
															<h4 class="list-pr">$3,570</h4>
														</div>
														<div class="listing-detail-btn">
															<a href="single-property-2.html" class="more-btn" tabindex="-1">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div><div class="single-items slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide02" style={{width: '370px'}}>
											<div class="property-listing property-1">
									
												<div class="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="-1">
														<img src="assets/img/p-3.jpg" class="img-fluid mx-auto" alt=""/>
													</a>
													<div class="listing-like-top">
														<i class="ti-heart"></i>
													</div>
													<div class="listing-rating">
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star"></i>
													</div>
													<span class="property-type">For Sale</span>
												</div>
												
												<div class="listing-content">
												
													<div class="listing-detail-wrapper">
														<div class="listing-short-detail">
															<h4 class="listing-name"><a href="single-property-2.html" tabindex="-1">Luxury Home in Manhattan</a></h4>
															<span class="listing-location"><i class="ti-location-pin"></i>588 Oakmound Road, Chicago</span>
														</div>
														<div class="list-author">
															<a href="#" tabindex="-1"><img src="assets/img/add-user.png" class="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div class="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>3</li>
															<li><strong>Bath:</strong>2</li>
															<li><strong>Sqft:</strong>2,400</li>
														</ul>
													</div>
												
													<div class="listing-footer-wrapper">
														<div class="listing-price">
															<h4 class="list-pr">$182,880</h4>
														</div>
														<div class="listing-detail-btn">
															<a href="single-property-2.html" class="more-btn" tabindex="-1">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div><div class="single-items slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabindex="-1" style={{width: '370px'}}>
											<div class="property-listing property-1">
									
												<div class="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="-1">
														<img src="assets/img/p-1.jpg" class="img-fluid mx-auto" alt=""/>
													</a>
													<div class="listing-like-top">
														<i class="ti-heart"></i>
													</div>
													<div class="listing-rating">
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star filled"></i>
														<i class="ti-star"></i>
													</div>
													<span class="property-type">For Sale</span>
												</div>
												
												<div class="listing-content">
												
													<div class="listing-detail-wrapper">
														<div class="listing-short-detail">
															<h4 class="listing-name"><a href="single-property-2.html" tabindex="-1">Resort Valley Ocs</a></h4>
															<span class="listing-location"><i class="ti-location-pin"></i>3848 Swick Hill, New Orleans</span>
														</div>
														<div class="list-author">
															<a href="#" tabindex="-1"><img src="assets/img/add-user.png" class="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div class="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>2</li>
															<li><strong>Bath:</strong>1</li>
															<li><strong>Sqft:</strong>3,700</li>
														</ul>
													</div>
												
													<div class="listing-footer-wrapper">
														<div class="listing-price">
															<h4 class="list-pr">$632,580</h4>
														</div>
														<div class="listing-detail-btn">
															<a href="single-property-2.html" class="more-btn" tabindex="-1">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div></div></div>
										
										
									<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style={{display: 'block'}}>Next</button></div>
									
								</div>
							
							</div>
						</div>
    )
}
