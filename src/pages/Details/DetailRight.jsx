import React from 'react';

export default () => {
    return (
        <div className="col-lg-4 col-md-12 col-sm-12">
							<div className="page-sidebar">
							
								<div className="agent-widget">
									<div className="agent-title">
										<div className="agent-photo"><img src={`image`} alt=""/></div>
										<div className="agent-details">
											<h4><a href="#c">Shivangi Preet</a></h4>
											<span><i className="lni-phone-handset"></i>(91) 123 456 7895</span>
										</div>
										<div className="clearfix"></div>
									</div>

									<div className="form-group">
										<input type="text" className="form-control" placeholder="Your Email"/>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Your Phone"/>
									</div>
									<div className="form-group">
										<textarea className="form-control">I'm interested in this property.</textarea>
									</div>
									<button className="btn btn-theme full-width">Send Message</button>
								</div>
								
								<div className="sidebar-widgets">
									
									<h4>Mortgage Calculator</h4>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Sale Price"/>
											<i className="ti-money"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Down Payment"/>
											<i className="ti-money"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Loan Term (Years)"/>
											<i className="ti-calendar"></i>
										</div>
									</div>
									
									<div className="form-group">
										<div className="input-with-icon">
											<input type="text" className="form-control" placeholder="Interest Rate"/>
											<i className="fa fa-percent"></i>
										</div>
									</div>
									
									<button className="btn btn-theme full-width">Calculate</button>
									
								</div>
								
								<div className="sidebar-widgets">
									
									<h4>Featured Property</h4>
									
									<div className="sidebar-property-slide slick-initialized slick-slider"><button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous"  style={{display: 'block'}}>Previous</button>
										
										<div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{opacity: 1, width: '1850px', transform: 'translate3d(-370px, 0px, 0px)'}}><div className="single-items slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{width: '370px'}}>
											<div className="property-listing property-1">
									
												<div className="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="-1">
														<img src={'image'} className="img-fluid mx-auto" alt=""/>
													</a>
													<div className="listing-like-top">
														<i className="ti-heart"></i>
													</div>
													<div className="listing-rating">
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star"></i>
													</div>
													<span className="property-type">For Sale</span>
												</div>
												
												<div className="listing-content">
												
													<div className="listing-detail-wrapper">
														<div className="listing-short-detail">
															<h4 className="listing-name"><a href="single-property-2.html" tabindex="-1">Luxury Home in Manhattan</a></h4>
															<span className="listing-location"><i className="ti-location-pin"></i>588 Oakmound Road, Chicago</span>
														</div>
														<div className="list-author">
															<a href="#c" tabindex="-1"><img src={'image'} className="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div className="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>3</li>
															<li><strong>Bath:</strong>2</li>
															<li><strong>Sqft:</strong>2,400</li>
														</ul>
													</div>
												
													<div className="listing-footer-wrapper">
														<div className="listing-price">
															<h4 className="list-pr">$182,880</h4>
														</div>
														<div className="listing-detail-btn">
															<a href="single-property-2.html" className="more-btn" tabindex="-1">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div><div className="single-items slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00" style={{width: '370px'}}>
											<div className="property-listing property-1">
									
												<div className="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="0">
														<img src={'image'} className="img-fluid mx-auto" alt=""/>
													</a>
													<div className="listing-like-top">
														<i className="ti-heart"></i>
													</div>
													<div className="listing-rating">
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star"></i>
													</div>
													<span className="property-type">For Sale</span>
												</div>
												
												<div className="listing-content">
												
													<div className="listing-detail-wrapper">
														<div className="listing-short-detail">
															<h4 className="listing-name"><a href="single-property-2.html" tabindex="0">Resort Valley Ocs</a></h4>
															<span className="listing-location"><i className="ti-location-pin"></i>3848 Swick Hill, New Orleans</span>
														</div>
														<div className="list-author">
															<a href="#c" tabindex="0"><img src={'image'} className="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div className="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>2</li>
															<li><strong>Bath:</strong>1</li>
															<li><strong>Sqft:</strong>3,700</li>
														</ul>
													</div>
												
													<div className="listing-footer-wrapper">
														<div className="listing-price">
															<h4 className="list-pr">$632,580</h4>
														</div>
														<div className="listing-detail-btn">
															<a href="single-property-2.html" className="more-btn" tabindex="0">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div><div className="single-items slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide01" style={{width: '370px'}}>
											<div className="property-listing property-1">
									
												<div className="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="-1">
														<img src={'image'} className="img-fluid mx-auto" alt=""/>
													</a>
													<div className="listing-like-top">
														<i className="ti-heart"></i>
													</div>
													<div className="listing-rating">
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star"></i>
													</div>
													<span className="property-type">For Rent</span>
												</div>
												
												<div className="listing-content">
												
													<div className="listing-detail-wrapper">
														<div className="listing-short-detail">
															<h4 className="listing-name"><a href="single-property-2.html" tabindex="-1">New Clue Apartment</a></h4>
															<span className="listing-location"><i className="ti-location-pin"></i>127, Quice Market, New York</span>
														</div>
														<div className="list-author">
															<a href="#c" tabindex="-1"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div className="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>2</li>
															<li><strong>Bath:</strong>2</li>
															<li><strong>Sqft:</strong>2,900</li>
														</ul>
													</div>
												
													<div className="listing-footer-wrapper">
														<div className="listing-price">
															<h4 className="list-pr">$3,570</h4>
														</div>
														<div className="listing-detail-btn">
															<a href="single-property-2.html" className="more-btn" tabindex="-1">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div><div className="single-items slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide02" style={{width: '370px'}}>
											<div className="property-listing property-1">
									
												<div className="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="-1">
														<img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt=""/>
													</a>
													<div className="listing-like-top">
														<i className="ti-heart"></i>
													</div>
													<div className="listing-rating">
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star"></i>
													</div>
													<span className="property-type">For Sale</span>
												</div>
												
												<div className="listing-content">
												
													<div className="listing-detail-wrapper">
														<div className="listing-short-detail">
															<h4 className="listing-name"><a href="single-property-2.html" tabindex="-1">Luxury Home in Manhattan</a></h4>
															<span className="listing-location"><i className="ti-location-pin"></i>588 Oakmound Road, Chicago</span>
														</div>
														<div className="list-author">
															<a href="#" tabindex="-1"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div className="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>3</li>
															<li><strong>Bath:</strong>2</li>
															<li><strong>Sqft:</strong>2,400</li>
														</ul>
													</div>
												
													<div className="listing-footer-wrapper">
														<div className="listing-price">
															<h4 className="list-pr">$182,880</h4>
														</div>
														<div className="listing-detail-btn">
															<a href="single-property-2.html" className="more-btn" tabindex="-1">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div><div className="single-items slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabindex="-1" style={{width: '370px'}}>
											<div className="property-listing property-1">
									
												<div className="listing-img-wrapper">
													<a href="single-property-2.html" tabindex="-1">
														<img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt=""/>
													</a>
													<div className="listing-like-top">
														<i className="ti-heart"></i>
													</div>
													<div className="listing-rating">
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star filled"></i>
														<i className="ti-star"></i>
													</div>
													<span className="property-type">For Sale</span>
												</div>
												
												<div className="listing-content">
												
													<div className="listing-detail-wrapper">
														<div className="listing-short-detail">
															<h4 className="listing-name"><a href="single-property-2.html" tabindex="-1">Resort Valley Ocs</a></h4>
															<span className="listing-location"><i className="ti-location-pin"></i>3848 Swick Hill, New Orleans</span>
														</div>
														<div className="list-author">
															<a href="#c" tabindex="-1"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt=""/></a>
														</div>
													</div>
												
													<div className="listing-features-info">
														<ul>
															<li><strong>Bed:</strong>2</li>
															<li><strong>Bath:</strong>1</li>
															<li><strong>Sqft:</strong>3,700</li>
														</ul>
													</div>
												
													<div className="listing-footer-wrapper">
														<div className="listing-price">
															<h4 className="list-pr">$632,580</h4>
														</div>
														<div className="listing-detail-btn">
															<a href="single-property-2.html" className="more-btn" tabindex="-1">More Info</a>
														</div>
													</div>
													
												</div>
												
											</div>
										</div></div></div>
										
										
									<button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next"  style={{display: 'block'}}>Next</button></div>
									
								</div>
							
							</div>
						</div>
    )
}
